# REDLOAD

A mobile-friendly video downloader for public direct video-file URLs that you own or have permission to download.

## Features in this first version

- Responsive black-and-red interface
- URL validation and direct-video extension checks
- Server-side URL validation and basic SSRF protections
- Real metadata checks where the host supplies them
- Streams a direct video file to the browser instead of saving a permanent copy on the server
- 100 MB maximum file size
- Rate limiting and request timeouts
- Clear errors for unsupported social-platform links
- Light/dark theme toggle
- No accounts or database required

## Current limits

YouTube, TikTok, Instagram, and Facebook integrations are **not implemented**. The site does not bypass logins, access controls, DRM, or platform restrictions. Use official save/download options for those services where available.

Only direct links ending in `.mp4`, `.webm`, `.mov`, `.m4v`, or `.ogv` are accepted. Some hosts block server requests or require browser sessions. File sizes over 100 MB are rejected. Hosting providers may have their own timeout and bandwidth limits.

## Run locally

Install Node.js 18 or newer, then run:

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Deploy on Render from GitHub (phone-friendly)

1. Create a public GitHub repository named `redload`.
2. Upload every file and folder from this project, preserving the structure.
3. Sign in at https://render.com and choose **New + → Web Service**.
4. Connect your GitHub account and select `redload`.
5. If Render does not detect `render.yaml`, use:
   - Runtime: Node
   - Build command: `npm install`
   - Start command: `npm start`
   - Health check path: `/health` (if available)
6. Choose the free plan if offered, then create the service.
7. Wait for the deploy to finish and open the Render URL.

Render's free service may sleep after inactivity and has usage, bandwidth, and runtime limits. A free plan is not unlimited production hosting.

## Security notes

The backend allows only HTTP/HTTPS on standard web ports, rejects obvious private/local addresses, checks DNS results, limits request size and rate, and follows redirects only after revalidating the target. This is a beginner-friendly baseline, not a guarantee against every network edge case. Do not use this as a public unrestricted URL proxy without further security review.

## Privacy

REDLOAD does not ask for an account or intentionally store submitted URLs or media files in a database. The server contacts the URL submitted to analyze or stream it. Hosting providers may retain request logs. Avoid entering private or secret URLs.

## Project structure

```text
redload/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── routes/
│   ├── analyze.js
│   └── download.js
├── services/
│   └── video-service.js
├── server.js
├── package.json
├── render.yaml
├── .env.example
└── .gitignore
```
