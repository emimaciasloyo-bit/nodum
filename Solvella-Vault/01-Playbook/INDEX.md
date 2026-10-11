---
title: Delivery Playbook
date: 2026-10-11
tags: [solvella, playbook, moc]
---
# Delivery Playbook

From the Solvella Delivery Playbook (October 2026): https://claude.ai/artifact/Wsff2dC7DUcPX5DUWdBzJ3. A low-code stack (n8n plus small JS snippets) for US clients, with fixed tooling under $50/month and approvals by email buttons.

**The plan in one line:** one self-hosted n8n server; Claude only **classifies** and **drafts**; code and rules handle dates, amounts, recipients and stopping.

| Automation | Trigger | Connects to | Claude's job | Risk | First build |
|---|---|---|---|---|---|
| Invoice chasing | daily 8am | QuickBooks / Xero / Stripe, mailbox | draft reminder in owner's tone | Low | 2–3 days |
| Inbox triage | new email (1-min poll) | Gmail / Outlook | classify, flag sensitive, draft FAQ answers | Medium | 3–4 days |
| Lead follow-up | form webhook, email, missed call | mailbox, Twilio, Cal.com | extract what's known, ask for the rest | Medium | 3–4 days |
| Scheduling | booking events, replies, daily reminders | Cal.com or their tool, Twilio | read reply intent | Medium | 4–5 days |

## Notes
- [Stack & Costs](Stack-and-Costs.md): why n8n, server setup, Claude models and cost per client.
- [Connecting Client Accounts](Connecting-Client-Accounts.md): OAuth routes, scopes, the Access Register.
- [Review Mode & Autopilot](Review-Mode-and-Autopilot.md): the shared Outbox engine, approvals, guardrails, the Friday summary.
- [Invoice Chasing](Invoice-Chasing.md): build, edge cases, test.
- [Lead Follow-Up](Lead-Follow-Up.md): build, edge cases, test.
- [Inbox Triage](Inbox-Triage.md): build, edge cases, test.
- [Scheduling](Scheduling.md): the four flows, edge cases, test.
- [Prompt Library](Prompt-Library.md): every prompt and the n8n call to Claude.
- [Testing Before Go-Live](Testing.md): TEST_MODE, golden sets, shadow mode, go-live checklist.
- [Client Onboarding](Client-Onboarding.md): intake form, discovery questions, access, weeks 2 and 3.
- [Build Order](Build-Order.md): what to build first so clients 1–3 are fast.

Up: [Home](../README.md)
