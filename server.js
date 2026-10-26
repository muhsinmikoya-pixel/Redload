const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");
const analyzeRoute = require("./routes/analyze");
const downloadRoute = require("./routes/download");

const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      mediaSrc: ["'self'", "https:", "blob:"],
      objectSrc: ["'none'"],
      frameAncestors: ["'none'"]
    }
  }
}));
app.use(express.json({ limit: "12kb" }));
app.use(rateLimit({
  windowMs: 60 * 1000,
  limit: 30,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Too many requests. Wait a minute and try again." }
}));

app.use(express.static(path.join(__dirname, "public"), {
  extensions: ["html"],
  maxAge: process.env.NODE_ENV === "production" ? "1h" : 0
}));
app.use("/api/analyze", analyzeRoute);
app.use("/api/download", downloadRoute);

app.get("/health", (_req, res) => res.json({ status: "ok", service: "REDLOAD" }));

app.use((err, _req, res, _next) => {
  console.error("Request error:", err.message);
  if (!res.headersSent) res.status(500).json({ error: "Something went wrong. Please try again." });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`REDLOAD listening on port ${PORT}`);
});
