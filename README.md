# REDLOAD

A beginner-friendly black-and-red video link checker and downloader for **direct video-file URLs** and media you are authorized to save.

## What works in this version

- Responsive black-and-red UI with a light/dark toggle.
- Paste, clear, URL validation, and platform detection.
- Backend analysis of direct public video-file URLs.
- Genuine download streaming for supported direct video URLs.
- Shows the source file's real content type and size when supplied.
- Rate limiting, redirect limits, public-address checks, download size cap, and error messages.
- No account or social-media passwords.

## Important platform limitation

YouTube, TikTok, Instagram, and Facebook links are detected but **not downloaded by this version**. Their downloading rules and technical restrictions differ. Use each platform's official download/export features or a compatible integration that the platform permits. This app does not promise 144p/720p/1080p variants unless those formats are genuinely available. Direct file URLs only provide the original file; this app does not transcode video.

## Requirements

- Node.js 20 or newer.
- Internet access to install packages.
- A terminal/command line. On Android, this can be done using Termux, or you can upload the project to a Node.js hosting provider.

## Run locally

1. Install Node.js 20+.
2. Extract the `redload` folder.
3. Open a terminal inside that folder.
4. Run:

   ```bash
   npm install
   cp .env.example .env
   npm start
   ```

5. Open `http://localhost:3000`.

On Windows, copy `.env.example` to `.env` manually if `cp` is unavailable.

## Android phone notes

Acode is useful for editing files but is not a Node.js server by itself. If you want to run the backend directly on Android, install Termux from its official source, then install Node.js and run the same commands. Alternatively, deploy this project to a Node.js host. Free hosts may sleep, restrict outbound requests, limit bandwidth, or stop large downloads.

## Configuration

- `PORT`: server port, defaults to `3000`.
- `MAX_DOWNLOAD_MB`: maximum streamed file size, defaults to `200`.

Copy `.env.example` to `.env`. Node does not automatically read `.env` files without an additional package or runtime flag. For local use, export the variables in your shell or start Node with a supported `--env-file=.env` option (Node 20.6+).

## Security notes

This project includes basic defenses but has not undergone a professional security audit. Before public deployment, test URL/DNS handling and streaming behavior carefully, use HTTPS, monitor abuse, and consider stricter allowlists. Do not expose the server on a public network without reviewing the security model.

## Project structure

```text
redload/
  public/
    index.html
    style.css
    script.js
  routes/
    analyze.js
    download.js
  services/
    video-service.js
  server.js
  package.json
  .env.example
  README.md
```
