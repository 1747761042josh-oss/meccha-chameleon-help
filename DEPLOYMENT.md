# Deployment Checklist

## Before GitHub

- [ ] Choose a site name and domain.
- [ ] Replace `SITE_URL` with the real public URL.
- [ ] Run `npm run build`.
- [ ] Confirm there are no fake `Verified` claims.
- [ ] Confirm every troubleshooting article has at least one source URL.

## GitHub

Use these commands after you choose the repository name:

```bash
git init
git add .
git commit -m "Initial MECCHA CHAMELEON help site MVP"
git branch -M main
git remote add origin https://github.com/YOUR_NAME/YOUR_REPO.git
```

Do not run `git push` until you are ready to publish the repository.

## Cloudflare Pages

1. Open Cloudflare Dashboard.
2. Go to Workers & Pages.
3. Create a Pages project.
4. Connect the GitHub repository.
5. Set build command to `npm run build`.
6. Set build output directory to `dist`.
7. Add environment variable:

```text
SITE_URL=https://your-domain.example
```

8. Deploy.

## After Deployment

- [ ] Open the homepage.
- [ ] Open `/troubleshooting/`.
- [ ] Open `/rss.xml`.
- [ ] Open `/sitemap-index.xml`.
- [ ] Check that canonical URLs use the real domain.
- [ ] Submit the sitemap in Google Search Console.

## First Search Console Submission

Submit:

```text
https://your-domain.example/sitemap-index.xml
```

Optional:

```text
https://your-domain.example/rss.xml
```
