---
title: API Keys & Secrets
date: 2026-10-11
tags: [solvella, demo, security, anthropic]
---
# API Keys & Secrets

## Anthropic API key for the demo
- **Expiry:** if the console asks, choose **90 days**. That's long enough for sales calls over the next few months, and short enough that a forgotten key stops working on its own. If it doesn't ask, keys usually don't expire; delete it when the demo is done.
- **Name it clearly:** `solvella-demo-mac`.
- **Set a spending limit:** under Limits (or on a workspace), cap monthly spend at **about $10**. That's what really protects you if a key leaks or a workflow loops. The demo uses cents.
- **One key per purpose.** The production server gets its own key, so you can turn one off without breaking the other.
- The key is shown **only once**, so paste it straight into `.env` on the `ANTHROPIC_API_KEY=` line.

## For production
- Rotate keys every **6–12 months**, or **immediately** if one might have been exposed (pasted into a chat, committed to code, emailed).
- **How to rotate:** create the new key → put it in place → check things work → delete the old one.

## Client secrets
- Stripe: a **restricted key** only (Invoices: Read, Customers: Read), never `sk_live`.
- Collect anything secret through 1Password or Bitwarden one-time links, never by email or text.
- Back up `N8N_ENCRYPTION_KEY` in the password manager.

Related: [Demo Setup](Demo-Setup.md) · [Connecting Client Accounts](../01-Playbook/Connecting-Client-Accounts.md)
