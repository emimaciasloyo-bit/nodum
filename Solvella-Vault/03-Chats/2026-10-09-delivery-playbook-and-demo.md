---
title: 2026-10-09 — Delivery playbook & demo setup
date: 2026-10-09
tags: [solvella, chats, playbook, demo]
---
# 2026-10-09 — Delivery playbook & demo setup

> [!NOTE]
> Reconstructed from the compact handoff pasted on 2026-10-11. The date is the day the playbook artifact was last updated; the demo part may have happened a little later.

**Goal of the chat:** learn how to actually deliver what the landing page promises, compactly and practically.

## Starting point
- [Landing page](../00-Business/Landing-Page.md) and [waitlist](../00-Business/Waitlist.md) were already done.
- The page promises four automations plus review mode/autopilot, a 3-week setup and data safety ([The Promises We Make](../00-Business/Promises-We-Make.md)).

## What was asked for
- For each automation: the recommended stack and cost per client, safe account connection and scopes, how review vs. autopilot works technically, the step-by-step build, prompts, edge cases and testing.
- Plus: an onboarding checklist, what to build first as a template, pricing from real costs, and risks and legal basics.
- Working style: ask questions that change the plan first, then save the playbook as a document, then offer to build the first automation as a demo.

## Decisions
- **Low-code: self-hosted n8n + small JS snippets**, not Zapier or Make (flat cost, JSON templates, data on our server).
- **US clients**; fixed tooling budget **under $50/month**.
- **Approvals by email buttons**, through a shared Outbox.
- Claude only classifies and drafts; Opus 5.5 by default, Haiku 5.5 optional for classification.
- **Build order:** Solvella Core → invoice chasing → inbox triage → leads → scheduling.
- Suggested pricing: Starter $500 + $199/mo, Growth $900 + $399/mo, Full desk $1,200 + $549/mo, plus the founding offer.

## Output
- **Solvella Delivery Playbook** (private artifact): https://claude.ai/artifact/Wsff2dC7DUcPX5DUWdBzJ3. Its content is in this vault under [Delivery Playbook](../01-Playbook/INDEX.md).

## Demo setup (same chat)
- Started the invoice-chasing demo on the Mac; the `.env` was opened in TextEdit with five empty lines ([Demo Setup](../02-Demo/Demo-Setup.md)).
- Q: *How long should the Anthropic API key last?* A: 90 days if asked, name it `solvella-demo-mac`, cap spend at ~$10/month, one key per purpose, rotate every 6–12 months ([API Keys & Secrets](../02-Demo/API-Keys-and-Secrets.md)).

## Action items
- [ ] Fill in the Stripe line in `.env`, then the other empty lines as keys arrive.
- [ ] Create the Anthropic key (90 days, $10 cap) and paste it in.
- [ ] Run the demo in TEST_MODE.

Related: [Build Order](../01-Playbook/Build-Order.md) · [Open Decisions & To-Do](../00-Business/Open-Decisions-and-To-Do.md)
