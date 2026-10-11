---
title: Stack & Costs
date: 2026-10-11
tags: [solvella, playbook, stack, costs]
---
# Stack & Costs

## Why n8n (not Zapier or Make)
- **Cost doesn't grow with volume.** Zapier and Make bill per task or operation; four automations across ten clients would mean plans costing hundreds a month. Self-hosted n8n is a flat ~$6 server.
- **Built in:** webhooks, waits, sub-workflows, a Code node for JS, Postgres, and an error-handler workflow.
- **Templates are files.** Workflows export as JSON, so client 2 is a copy plus new credentials.
- **Customer data stays on our server**, which is easier to explain to owners.

> [!WARNING]
> **Check the n8n licence before client 1.** The Sustainable Use License allows building workflows for clients but not reselling or white-labelling n8n itself. Clients never log in to our n8n. Word the contract as a "managed automation service", not "software access".

## Server setup (one afternoon)
1. Hetzner CX22 (2 vCPU, 4 GB, ~$6/mo) or a $6 DigitalOcean droplet, Ubuntu 24.04. Enough for 10–20 small clients.
2. Docker + n8n's official Docker Compose with **Postgres** (not SQLite) + Caddy or Traefik for HTTPS on `n8n.yourdomain.com`.
3. Set `N8N_ENCRYPTION_KEY` and **save a copy in the password manager** (lose it and every credential is gone). Also set `GENERIC_TIMEZONE` and `WEBHOOK_URL`.
4. Turn on n8n 2FA. Put the editor behind Cloudflare Access (free) and leave only `/webhook/*` public.
5. Nightly backups: a Postgres dump plus a workflow export to Backblaze B2 (under $1/mo).
6. An **Error workflow** that emails or Telegrams us on any failure, plus a free UptimeRobot check.

## Other pieces
| Need | Use | Why |
|---|---|---|
| AI drafting/classifying | Claude API via n8n HTTP Request node | structured JSON output, full control |
| Sending to customers | the client's own Gmail / Outlook API | lands in their Sent folder, best deliverability, comes from them |
| Approval emails | Resend (free tier) from `approvals@yourdomain` | keeps system mail out of the client's mailbox |
| Texts / missed calls | Twilio, one subaccount per client | webhooks, cheap numbers, 10DLC |
| Booking | Cal.com (free) or their existing tool | never build a booking engine |
| Our data | Postgres on the same server | tables `clients`, `task_config`, `approvals`, `send_log`, `chase_log`, `leads`, `waitlist` |
| Secrets from clients | 1Password / Bitwarden one-time links | never by email or text |

## Claude models
| Model | ID | Input / 1M | Output / 1M | Use for |
|---|---|---|---|---|
| Opus 5.5 | `claude-opus-5-5` | $4.00 | $20.00 | default for drafting and judgement |
| Sonnet 5.5 | `claude-sonnet-5-5` | $2.00 | $10.00 | mid-price option |
| Haiku 5.5 | `claude-haiku-5-5` | $0.10 | $0.50 | high-volume email classification |

Run at `effort: "low"`. Cache the fixed part of each prompt (instructions, voice guide, FAQ); cached reads cost about 5% of normal input.

## Monthly cost per client
Assumes ~600 inbound emails, 40 invoice reminders, 30 leads and 80 bookings a month. Log `usage` from every response and check the real numbers after month one.

| Item | Per client / month |
|---|---|
| Server share + backups | ~$1 |
| Claude, Opus 5.5 for everything | ~$10–15 |
| …or Haiku classifying + Opus drafting | ~$5–8 |
| Twilio number + ~500 SMS segments | ~$6–10 (only clients using texts) |
| 10DLC campaign fee | ~$2–10 (+ one-time ~$20–60) |
| Cal.com, Resend | $0 |
| **Hard cost total** | **~$10–35** + 1–2 h of our time |

Related: [Pricing](../00-Business/Pricing.md) · [Review Mode & Autopilot](Review-Mode-and-Autopilot.md) · [Prompt Library](Prompt-Library.md)
