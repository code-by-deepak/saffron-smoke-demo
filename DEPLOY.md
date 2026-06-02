# Deploying Saffron & Smoke to Vercel

This project is pre-configured for one-click deployment to Vercel.

## What's configured

- `vite.config.ts` — Nitro is forced on with the `vercel` preset, so `vite build` emits a `.vercel/output` directory using the Vercel Build Output API v3.
- `vercel.json` — Tells Vercel to use `vite build` and read the prebuilt `.vercel/output` directory (no framework auto-detection needed).
- SSR entry (`src/server.ts`) is wired through `tanstackStart.server.entry`, so error handling works in the Vercel serverless runtime.

## Deploy

### Option 1 — Git import (recommended)

1. Push this repo to GitHub / GitLab / Bitbucket.
2. In Vercel, **Add New → Project → Import** your repo.
3. Leave all framework / build settings at their defaults (`vercel.json` overrides them).
4. Click **Deploy**.

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel            # preview deploy
vercel --prod     # production deploy
```

## Environment variables

If you add any `VITE_*` or server-side secrets, set them in **Vercel → Project → Settings → Environment Variables** before deploying. Redeploy after changes.

## Node version

Vercel auto-detects Node 20+ from `package.json`'s `engines` field if present. The build works on Node 20 and Node 22.
