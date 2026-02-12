# Lickety Split Express Car Wash Website

## Overview

This is a marketing website for Lickety Split Express Car Wash, a car wash business located in Fernley, Nevada. The site serves as the business's online presence, featuring a main landing page, a free car wash promotion page (for Google Ads traffic), and a thank-you confirmation page. The site is a static HTML website served via Express.js, with pre-built frontend assets (likely from a Vite/React build).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Server
- **Express.js (v5)** serves as the web server on port 5000.
- The server handles three types of routes:
  1. **Specific routes** — `/free_google` and `/thankyouads` serve dedicated HTML pages for ad campaigns and post-signup confirmation.
  2. **Static file serving** — All static assets (CSS, JS, images) are served from the project root with `no-cache` headers and clean URL support (`.html` extension auto-resolved).
  3. **Catch-all route** — Any unmatched route falls back to `index.html`, supporting client-side routing (SPA behavior).

### Frontend
- The main site (`index.html`) appears to be a single-page application built with a frontend framework (likely React, based on the bundled JS in `assets/`). The build output uses Vite-style hashed filenames (`index-DgjeyCok.js`, `index-S3LE2U8D.css`).
- **Tailwind CSS** is used for styling (evident from the CSS utility classes in the built CSS file).
- **Google Fonts** — Bangers and Poppins font families are used across pages.
- The promotional pages (`free_google.html`, `thankyouads.html`) are standalone HTML files with inline styles — they don't use the SPA framework.

### Page Structure
| Page | File | Purpose |
|------|------|---------|
| Main site | `index.html` | Primary landing page / SPA shell with full SEO meta tags |
| Free wash promo | `free_google.html` | Google Ads landing page for free car wash offer (noindex) |
| Thank you | `thankyouads.html` | Post-signup confirmation page (noindex) |

### SEO & Analytics
- Full Open Graph and Twitter Card meta tags on the main page for social sharing.
- Geo-targeting meta tags for local SEO (Fernley, NV coordinates).
- **Google Tag Manager** (`GTM-M8G6S3X3`) is integrated on all pages.
- **Facebook domain verification** is configured.
- Promotional pages use `noindex, nofollow` to prevent search engine indexing.

### Configuration
- `serve.json` exists for the `serve` package (alternative static file server) with clean URLs and SPA rewrites, but the primary server is `server.js` using Express.

## External Dependencies

### NPM Packages
- **express (v5.2.1)** — Web server for routing and static file serving
- **serve (v14.2.5)** — Alternative static file server (configured via `serve.json`)

### Third-Party Services
- **Google Tag Manager (GTM-M8G6S3X3)** — Tag management and analytics
- **Facebook Domain Verification** — For Facebook Ads pixel/tracking integration
- **Google Fonts** — Bangers and Poppins typefaces loaded from Google's CDN

### No Database
There is no database or data persistence layer. This is a purely static marketing site with no backend data storage.