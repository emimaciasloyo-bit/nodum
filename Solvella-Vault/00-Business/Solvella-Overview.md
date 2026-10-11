---
title: Solvella Overview
date: 2026-10-11
tags: [solvella, business]
aliases: [Solvella]
---
# Solvella Overview

## The idea
A **done-for-you AI automation service** for small businesses. Owners aren't technical: we set up and run AI that answers their emails, chases unpaid invoices, replies to new leads and books appointments. They approve the work, and it gets done.

**Tagline on the site:** "Your back office, running itself."

## Who it's for
Businesses with 1–20 people whose owners do the work themselves and spend their evenings on admin:
- Garages and trades: quotes, bookings, payment reminders
- Clinics and studios: appointments, reminders, intake forms (see the HIPAA warning in [Risks & Legal](Risks-and-Legal.md))
- Online shops: order questions, returns, reviews
- Home services: leads, estimates, follow-ups
- Also florists, bakeries, salons, cafés, cleaners and photographers

Market: **US clients** (the playbook's legal section assumes US law).

## How we deliver
One self-hosted **n8n** server we own, with Claude for classifying and drafting and a shared "Outbox" that handles review mode and autopilot. Details in the [Delivery Playbook](../01-Playbook/INDEX.md).

## Status (2026-10-11)
- [x] Landing page built (private Claude artifact). See [Landing Page](Landing-Page.md).
- [x] Waitlist live on Tally. See [Waitlist](Waitlist.md).
- [x] Delivery playbook written (2026-10-09).
- [ ] Demo of the first automation being set up on the Mac. See [Demo Setup](../02-Demo/Demo-Setup.md).
- [ ] Name: **trademark and domain not cleared yet**.
- [ ] Pricing not final (founding pricing promised to the waitlist).

Related: [The Promises We Make](Promises-We-Make.md) · [Open Decisions & To-Do](Open-Decisions-and-To-Do.md)
