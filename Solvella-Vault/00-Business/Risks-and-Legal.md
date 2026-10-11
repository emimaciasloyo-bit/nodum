---
title: Risks & Legal Basics
date: 2026-10-11
tags: [solvella, legal, risk]
---
# Risks & Legal Basics (US)

> [!WARNING]
> Orientation, not legal advice. Spend $300–600 once on a small-business attorney to review the services agreement and SMS wording. **Form an LLC before taking client money.**

## Contract with each client
- **Scope:** what each automation does and doesn't do. The client owns their data, and Solvella acts as their **service provider**, using the data only to deliver the service.
- The client approves content in review mode and is responsible for the facts and policies they give us. AI drafts can be wrong.
- Our security measures; the **subprocessors** (server host, Anthropic, Twilio, Resend, Cal.com); retention (email bodies purged after 30 days); breach notice within 72 hours.
- Liability capped at fees paid in the last 12 months, no guarantee of results, termination terms, and deletion within 30 days.

## Sending on someone's behalf
- Always send **from the client's own mailbox, in their name**. Invoice reminders, enquiry replies and appointment reminders are transactional or relationship messages under CAN-SPAM, but they must never be misleading. **Never add anyone to a marketing list.**
- **Debt collection:** the FDCPA covers third-party collectors, not a business chasing its own invoices. That's another reason reminders come from the client, never from "Solvella". Some states (e.g. California's Rosenthal Act) cover businesses too. So: no threats, no false statements, contact only the customer, reasonable hours, and stop when asked.
- **Texts (TCPA + carrier rules) are the biggest legal risk:** damages run $500–1,500 *per message*. Register 10DLC, text only people who contacted the business or agreed to texts, identify the business, honour STOP, send nothing between 8pm and 8am, and send no promotions. Form wording: *"By submitting, you agree to receive texts about your request. Msg & data rates may apply. Reply STOP to opt out."*
- **Bot disclosure:** a few states (Utah, California in sales contexts) have rules. Policy: if anyone asks whether they're talking to a bot, the answer is honest, so a "who is this?" reply goes to the owner. Owners can add an optional footer: "Sent with help from our assistant."

## Data handling
- Never touch card numbers. Use payment *links* only, which keeps us out of PCI scope.
- **Health data (clinics):** HIPAA needs Business Associate Agreements with everyone who touches the data (us, the host, Anthropic, Twilio). Until then, leave clinical clinics out or limit them to scheduling with no health details. Take the same care with anything involving minors.
- State privacy laws (CCPA etc.) mostly apply above thresholds our clients won't reach; our service-provider terms cover us either way.
- Anthropic's commercial API terms don't use inputs for training by default. List Anthropic as a subprocessor.
- Security basics: 2FA everywhere, a password manager, the encryption key backed up, the n8n editor not public, a firewall, automatic updates, least-scope credentials.

## AI mistakes
- **Prevent:** review mode first, categories that never go to autopilot, facts only from data, code checks on amounts and links, a re-check before sending, rate limits, a kill switch, and golden-set tests after every change.
- **When one slips through:** pause the task → tell the owner the same day → draft a correction for them to approve → find the cause, add it to the golden set, fix it → log a short note.
- **Insurance:** tech E&O plus cyber, often around $500–1,500 a year. Get a quote before client 3.

## Name
Run a **USPTO trademark search** and check domain availability for "Solvella" before printing or paying for anything.

Related: [Connecting Client Accounts](../01-Playbook/Connecting-Client-Accounts.md) · [Review Mode & Autopilot](../01-Playbook/Review-Mode-and-Autopilot.md) · [Pricing](Pricing.md)
