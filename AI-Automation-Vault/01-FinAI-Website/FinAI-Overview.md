---
title: FinAI Overview
date: 2026-10-11
tags: [finai, website]
aliases: [FinAI]
---
# FinAI Overview

**FinAI — Personal Finance** is an installable web app (PWA) that combines learning, portfolio tracking, budgeting and market data with an AI assistant powered by Claude.

- **Source:** uploaded to this repo as `finai-final 4/` (commit `bf1ec9c`, 2026-03-16), later deleted in `79dedfa`. Restore it with `git checkout bf1ec9c -- "finai-final 4"`.
- **Stack:** one `index.html` (~3,800 lines, HTML+CSS+JS, no framework), a Vercel serverless function `api/chat.js`, a service worker `sw.js`, and `manifest.json`.
- **Look:** dark theme (`#0d0c0a`) with gold accents.
- **AI:** Claude (`claude-sonnet-4-20250514` in the code) through a server-side proxy.
- **Market data:** Finnhub (the user pastes their own free API key during onboarding).
- **Positioning:** educational — legal pages include Terms, Privacy, Risk Disclosure and "Not Financial Advice".

## Who it's for
Individual investors, with a **Beginner Mode** that explains everything "like talking to a 14-year-old".

Related: [Features](Features.md) · [Architecture](Architecture.md) · [Overall Goal](../00-Goal/Overall-Goal.md)
