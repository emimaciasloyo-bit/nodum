---
title: AI Automation Fundamentals
date: 2026-10-11
tags: [ai-automation, concepts]
---
# AI Automation Fundamentals

## The building blocks
- **Trigger** — what starts it: a schedule (cron), a webhook, a new email/row/form submission.
- **Steps / actions** — fetch data, transform it, call an AI model, write the result somewhere.
- **AI step** — the model does what rules can't: summarize, classify, extract, write, decide.
- **Destination** — email, Notion page, Airtable row, push notification, social post, website.

## Three levels
1. **Workflow automation** — fixed steps (Make, Zapier, n8n). Predictable and cheap.
2. **AI-in-the-loop workflow** — fixed steps with an AI step inside (e.g. "summarize this news then email it").
3. **Agents** — the AI chooses which tools to call and in what order (Claude with tool use / MCP). Flexible, harder to control.

Start at level 1–2; move to agents only when the steps really vary.

## When to automate
- You've done the task by hand at least a few times and it's repetitive.
- Mistakes are cheap or a human reviews the output.
- Time saved × frequency beats the time to build and maintain it.

## Good habits
- Log every run; alert on failures.
- Keep secrets in environment variables, never in prompts or front-end code.
- Put a human approval step before anything public or financial.

Related: [Claude API Patterns](Claude-API-Patterns.md) · [Tools & Connectors](Tools-and-Connectors.md) · [Overall Goal](../00-Goal/Overall-Goal.md)
