---
title: Claude API Patterns
date: 2026-10-11
tags: [ai-automation, claude, api]
---
# Claude API Patterns

## Basic call (what FinAI does)
`POST https://api.anthropic.com/v1/messages` with headers `x-api-key`, `anthropic-version: 2023-06-01`, and a body of `model`, `max_tokens`, `system`, `messages`.

## Patterns we use
- **Server-side proxy** — the browser never sees the key ([Architecture](../01-FinAI-Website/Architecture.md)).
- **Per-feature system prompts** — e.g. FinAI's standard prompt (signal tags `[BUY] [SELL] [HOLD] [WATCH]`, concise, "not financial advice") vs. Beginner Mode (simple English, analogies, explain jargon in parentheses).
- **Inject today's date** into the system prompt so answers are time-aware.
- **Rolling context** — send only the last 12 chat messages to control cost.
- **Small `max_tokens`** (700–900) for snappy answers.

## Worth adding
- **Prompt caching** for long, repeated system prompts — cheaper and faster.
- **Tool use** so Claude can fetch live prices instead of guessing.
- **Structured output** (JSON) for screener results and rebalance plans, so the UI can render tables reliably.
- **Streaming** for the chat so text appears as it's written.
- Keep the model ID in one server-side constant and update it as new models ship.

Related: [AI Automation Fundamentals](AI-Automation-Fundamentals.md) · [Features](../01-FinAI-Website/Features.md)
