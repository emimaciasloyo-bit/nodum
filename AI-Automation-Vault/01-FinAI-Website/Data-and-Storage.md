---
title: FinAI Data & Storage
date: 2026-10-11
tags: [finai, data, privacy]
---
# FinAI Data & Storage

Everything user-specific lives in the browser's `localStorage` — there is no database or user account yet.

| Key | Holds |
|---|---|
| `finai_port` | portfolio holdings |
| `finai_sim`, `finai_cash` | paper-trading simulator |
| `finai_wl`, `finai_pa` | watchlist, price alerts |
| `finai_budget` | transactions and limits |
| `finai_xp`, `finai_streak`, `finai_ch`, `finai_done`, `finai_coursedone`, `finai_mission_done` | gamification and learning progress |
| `finai_risk_profile` | risk quiz result |
| `finai_finnhub_key` | user's Finnhub API key |
| `finai_onboarded`, `finai_last_visit`, `finai_last_recap`, `finai_tog_*`, `finai_sent_*` | settings and state |

## External services
- **Anthropic** (via our proxy) — prompts include portfolio/budget data the user entered.
- **Finnhub** — prices and news, called directly from the browser with the user's key.
- **YouTube** — embedded videos and thumbnails. **Google Fonts** — typography.

> [!NOTE]
> Because data is local, clearing the browser wipes it and nothing syncs between devices. Accounts + a database (e.g. Supabase) would fix that.

Related: [Architecture](Architecture.md) · [Known Issues & Next Steps](Known-Issues-and-Next-Steps.md)
