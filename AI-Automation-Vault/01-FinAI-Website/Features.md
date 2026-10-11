---
title: FinAI Features
date: 2026-10-11
tags: [finai, features]
---
# FinAI Features

Bottom navigation: **Home · Learn · AI Chat · Portfolio · Market · Analyze · Screener · Budget** (plus Global, Rebalance and Therapist screens).

## Home
- Greeting, daily brief, market pulse, investment ideas, daily mission and streak.
- XP / levels gamification (`addXP`, `renderStreak`, `completeMission`).
- Market sentiment voting (bullish / bearish).

## Learn
- Curated YouTube library (Andrei Jikh, Ben Felix, The Plain Bagel, Humphrey Yang…) and a news-video carousel.
- Lessons with quizzes, mini-courses, glossary with search.
- Calculators: compound interest, dollar-cost averaging, retirement, "what if I had invested".
- Risk Profile Quiz → conservative / moderate / aggressive investor.

## AI Chat
- Conversational assistant using the last 12 messages as context.
- Two personalities: **standard** (uses `[BUY] [SELL] [HOLD] [WATCH]` tags) and **Beginner Mode**.
- Voice input (Web Speech API) and "explain this" buttons across the app.

## Portfolio
- Add stocks, crypto, gold/commodities, bonds/ETFs; live prices from Finnhub.
- Paper-trading simulator, watchlist, price alerts, portfolio health check.
- **FOMO tracker** — log tempting trades and let the AI analyze them.
- **Rebalance** — set a target allocation; AI says what to buy/sell. Presets: Conservative 40/10/20/30, Moderate 60/15/10/15, Aggressive 70/25/5/0 (stocks/crypto/gold/bonds).

## Market & Global
- News (Finnhub + AI summaries), earnings calendar, commodities, crypto leaderboard, index data.
- Global market hours (which exchanges are open now) and world indexes.

## Analyze & Screener
- AI analysis of any ticker/fund in several modes.
- AI Stock Finder with filters: Value, Growth, Dividend, Crypto, ETFs, Safe, Tech, Small Cap, or a custom prompt.

## Budget
- Quick-add income/expenses across 14 categories, monthly limits, over-budget warnings.
- 50/30/20 rule targets and "invest what you save" tip.
- **AI Budget Advisor** — finds overspending and how much more could be invested.

## AI Financial Therapist
- Talks you through emotional decisions: panic selling, hot tips, being down 30%.

## Notifications
- Push notifications via the service worker, scheduled reminders, weekly recap.

Related: [FinAI Overview](FinAI-Overview.md) · [Data & Storage](Data-and-Storage.md) · [Claude API Patterns](../02-AI-Automation/Claude-API-Patterns.md)
