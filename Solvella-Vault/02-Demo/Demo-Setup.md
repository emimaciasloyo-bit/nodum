---
title: Demo Setup
date: 2026-10-11
tags: [solvella, demo, setup]
---
# Demo Setup (Mac)

The working demo of the first automation ([invoice chasing](../01-Playbook/Invoice-Chasing.md), using Stripe test mode), run on your Mac for sales calls and the waitlist.

## The `.env` settings file
- Opened in **TextEdit**. Each line is `NAME=value`.
- **Five lines were still empty** after the `=`. Two of them are `STRIPE…` (fill this in first) and `ANTHROPIC_API_KEY=`. *Add the other three names here:* …
- To fill one in: click right after the `=` and paste, **no spaces, no quotes**.

### Rules
- Leave lines starting with `#` alone. They're notes.
- Leave lines that already have values (generated passwords, `TEST_MODE=true`, etc.) unchanged.
- Save with **Cmd+S**. If TextEdit offers another format or extension, keep it as **plain text named `.env`**.
- Fill in the Stripe line now and the others as you get each key.
- To reopen the file later, use the Terminal command from the setup chat. *(Paste it here so it's saved.)*

> [!WARNING]
> **Never paste real key values into this vault, a chat, an email or a git commit.** The vault only records *which* keys exist and where they go. If a key is exposed, rotate it ([API Keys & Secrets](API-Keys-and-Secrets.md)).

## Keep `TEST_MODE=true`
While `TEST_MODE` is on, every email is rerouted to you, so a demo can never reach a real customer. See [Testing Before Go-Live](../01-Playbook/Testing.md).

Related: [API Keys & Secrets](API-Keys-and-Secrets.md) · [Build Order](../01-Playbook/Build-Order.md)
