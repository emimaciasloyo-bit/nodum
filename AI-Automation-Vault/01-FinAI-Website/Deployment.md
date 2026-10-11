---
title: FinAI Deployment
date: 2026-10-11
tags: [finai, deployment, vercel]
---
# FinAI Deployment

## Vercel
1. Restore the files: `git checkout bf1ec9c -- "finai-final 4"` (rename the folder without the space, e.g. `finai/`).
2. Import the repo in Vercel and set the **root directory** to that folder.
3. Add the environment variable **`ANTHROPIC_API_KEY`** (Project → Settings → Environment Variables).
4. Deploy. `vercel.json` routes `/api/chat` to the function and everything else to `index.html`.

## After deploying
- Open the site → onboarding asks for a free **Finnhub** key (finnhub.io) for live prices.
- Test AI Chat; if it fails, open the 🐛 debug log in the app.
- Bump the cache name in `sw.js` (`finai-v5` → `v6`) whenever you ship changes so users get the new version.

Related: [Architecture](Architecture.md) · [Known Issues & Next Steps](Known-Issues-and-Next-Steps.md)
