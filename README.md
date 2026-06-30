# Chameleon Help Desk MVP

Unofficial MECCHA CHAMELEON help-site MVP focused on community-reported issues, update notes, and safe troubleshooting.

This project does not claim personal testing unless an article explicitly includes a test record.

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:4321/
```

## Build

```bash
npm run build
```

The static site is generated in `dist/`.

## Environment

Set the public site URL before deployment:

```bash
SITE_URL=https://www.yxdnr.xyz
```

This controls canonical URLs and sitemap generation.

## Content

Articles live in:

```text
src/content/articles/
```

Research tables live in:

```text
data/
```

## Evidence Rules

- `Community Reported`: multiple or credible public player reports.
- `Unconfirmed`: weak evidence, single report, or missing reproduction details.
- `Official Fix`: official patch notes, official announcement, or official support source.
- `Verified`: only use after personal testing with a recorded environment.

## Cloudflare Pages

Recommended settings:

```text
Build command: npm run build
Build output directory: dist
Environment variable: SITE_URL=https://www.yxdnr.xyz
```
