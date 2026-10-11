---
title: Build Order — What to Build First
date: 2026-10-11
tags: [solvella, playbook, template, roadmap]
---
# What to Build First

## Step 1: "Solvella Core" (about 1 week)
Reusable sub-workflows that every client and every automation calls with `client_id`:
- **Claude call:** the HTTP node, the parser, and usage logging.
- **Outbox:** pause check, guardrails, review/autopilot, approval email, confirm page, edit form, sending through the client's mailbox, logging, the TEST_MODE rewrite, rate limits.
- **Config loader:** reads `task_config`.
- **Friday summary**, **Error handler** and **Golden-set test runner**.

Commit every workflow JSON export to a private GitHub repo.

## Step 2: Invoice chasing first (2–3 days)
- **The clearest result for the client:** "you got $4,200 paid faster" sells renewals and referrals.
- **Low risk:** read-only accounting access, few messages, structured data, and it runs on a schedule rather than in real time.
- **Demo-ready without a client:** Stripe test mode plus your own Gmail gives a live demo for sales calls and the waitlist (see [Demo Setup](../02-Demo/Demo-Setup.md)).
- **It tests the whole Core:** Claude call, Outbox, approvals, logs and summary.

## Then
Inbox triage (it also feeds leads and bookings) → lead follow-up (start 10DLC early) → scheduling. By client 3, onboarding should be "copy, connect, configure, test": **about 4–6 hours of build per client** instead of days.

Related: [Invoice Chasing](Invoice-Chasing.md) · [Review Mode & Autopilot](Review-Mode-and-Autopilot.md) · [Open Decisions & To-Do](../00-Business/Open-Decisions-and-To-Do.md)
