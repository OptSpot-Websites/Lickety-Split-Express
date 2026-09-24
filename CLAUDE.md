# Lickety Split Express Car Wash — licketysplitexpress.com

Client site for Lickety Split Express Car Wash (Fernley, NV). Operated by OptSpot.

## What this repo is

**Not a plain static site.** Read this before editing anything.

- `index.html` is the shell of a **compiled React app** (Vite + Tailwind). The
  page body is just `<div id="root"></div>`. All homepage and sub-page content
  — nav, footer, text, prices, hours, forms — lives inside one minified file:
  `assets/index-DgjeyCok.js` (~500 KB).
- **The React source code is not in this repo.** It was built on Replit and
  only the build output was committed.
- Two pages are plain, hand-written HTML with inline styles and are easy to
  edit: `free_google.html` and `thankyouads.html`.

This is the same shape as Mr. Shine. Treat it with the same care.

## Deploy chain

```
edit here -> git push origin main -> Cloudflare Pages -> https://licketysplitexpress.com
```

- `main` is the production branch. **A push goes live.**
- Cloudflare runs **no build step**. It serves the files as-is.
- Push a non-`main` branch to get a Cloudflare preview URL for review.

## Structure

```
index.html            React app shell: <head> SEO tags, GTM, schema, UserWay, droplet effect
assets/index-*.js     compiled React bundle — ALL main-site content
assets/index-*.css    compiled Tailwind CSS
assets/*.png|jpg      images used by the bundle (hashed filenames)
free_google.html      Google Ads free-wash landing page (noindex) — plain HTML
thankyouads.html      ads conversion thank-you page (noindex) — plain HTML
_redirects            Cloudflare redirects — hides CLAUDE.md and replit.md from the public site
attached_assets/      reference screenshots from Replit — not used by the site
server.js package.json package-lock.json serve.json .replit replit.md
                      Replit leftovers — Cloudflare does not use them
```

### Pages

| URL | Where the content lives |
|---|---|
| `/` | React bundle |
| `/membership` `/location` `/careers` `/contact` `/faq` `/fundraising` `/free-wash` `/privacy-policy` `/thank-you` | React bundle (client-side routes) |
| `/free_google` | `free_google.html` |
| `/thankyouads` | `thankyouads.html` |

## The things that catch people out

1. **Do not add a `404.html`.** The React routes (`/membership`, `/contact`,
   etc.) are not real files. They work because Cloudflare Pages serves
   `index.html` for unknown paths when no `404.html` exists. Adding one breaks
   every sub-page.
2. **Editing main-site content means editing minified JS.** Small, exact text
   swaps (a phone number, a sentence) can be done with a careful
   find-and-replace in `assets/index-DgjeyCok.js`. Anything structural — new
   sections, new pages, nav changes — really needs the original source or a
   rebuild. Flag it rather than hand-hacking the bundle.
3. **Do not rename files in `assets/`.** The bundle and `index.html` reference
   them by exact hashed filename.
4. **Repeated details live in several places.** The phone number, for example,
   is in the bundle, both promo pages, and the schema data in `index.html`.
   Grep every file before changing one:

   ```bash
   grep -l "7752934051" *.html assets/*.js
   ```

## How to make a change

1. **SEO tags, schema, analytics, head scripts** — `<head>` of `index.html`.
2. **Free-wash ad page or thank-you page** — `free_google.html` /
   `thankyouads.html`. Plain HTML, edit directly.
3. **Main-site text** — careful exact-string replace in the bundle. Confirm
   the string appears exactly once (or change every copy on purpose).
4. **Anything bigger on the main site** — stop and ask. Needs source.

## Verify before pushing

`main` is production. Check in a browser first:

```bash
python3 -m http.server 8765    # then open http://localhost:8765/
```

Note: `python3 -m http.server` does not do the SPA fallback, so sub-routes like
`/membership` 404 locally when loaded directly. Open `/` and click through the
nav instead. After a bundle edit, open the browser console and confirm there
are no JavaScript errors — one broken character blanks the whole site.

Check phone width (~400px) too — these sites get heavy mobile traffic.

To roll back: `git revert <sha>` and push.

## Brand colors

Counted from the HTML and CSS in this repo. The many grays in the compiled CSS
are Tailwind defaults and are left out.

| Hex | Uses | Role |
|---|---|---|
| `#E53935` | 13 | Primary red |
| `#C62828` | 1 | Darker red (hover) |
| `#1A1A2E` `#16213E` `#0F3460` | 2 each | Dark navy gradient on promo pages |

Fonts: Bangers (headings) and Poppins (body), from Google Fonts.

Do not introduce new brand colors without asking the account manager.

## Integrations

| Service | ID |
|---|---|
| Google Tag Manager | `GTM-M8G6S3X3` (all pages) |
| UserWay accessibility widget | account `snUKljSjNP` |
| Membership portal | `licketysplitexpress.mywashaccount.com` |

Facebook domain verification is in the `<head>` of `index.html`.

**Paperform** — 5 embedded forms:

| Form | ID | Where |
|---|---|---|
| Free wash (Google Ads) | `mauzofgq` | `free_google.html` |
| Free wash / main embed | `2fzajbtv` | bundle |
| Contact | `bdxqx43a` | bundle |
| Careers | `2lkvag7f` | bundle |
| Fundraising | `wbe2phvl` | bundle |

## House rules

- **Do not add `404.html`** (see above).
- **Do not rename or move HTML files or routes** without a redirect. These
  URLs are indexed and run in paid ads.
- **Do not change pricing, hours, addresses, or offers** without confirming
  with the account manager. This is customer-facing client copy.
- **Keep internal notes off the public site.** Cloudflare serves every file in
  this repo. `_redirects` sends `/CLAUDE.md` and `/replit.md` to the homepage.
  Add a line there for any new notes file. Never add a `/* /index.html 200`
  catch-all — Cloudflare already handles the React routes.
- There is no `sitemap.xml` or `robots.txt`. Consider adding them — keep them
  in sync with the page list above.

## Related

Other OptSpot car wash sites follow plain static HTML (Magic, Otter, Cares,
Palm Beach, Rinse N Roll, Mighty Shine), a `build.py` generator (Slyde's,
Brite-WorX), or Next.js (Spark, Master, Diamond Express). This site and Mr.
Shine are the two compiled React bundles with no source.
