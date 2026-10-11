---
title: Client Onboarding
date: 2026-10-11
tags: [solvella, playbook, onboarding]
---
# Client Onboarding Checklist

## Before the call: intake form (Tally)
- Business name and type, owner name, team size, website, time zone and hours, service area.
- Their tools: email provider, accounting tool, payment methods, booking tool, phone setup (mobile carrier or VoIP), website form tool.
- Rough monthly volumes: emails, invoices, enquiries, appointments.
- Which tasks they want.

## Week 1: 30-minute discovery call
**Everyone**
- What would you stop doing first, and how many hours a week does it take?
- Is there anything we must never say, promise or offer?
- Do you have VIP customers, or people we should never contact automatically?
- Which email address should approvals go to, and how fast can you usually approve?
- Is it OK to read your last 30 sent emails to learn your writing style?

**Invoices**
- What are your payment terms, and are online payments on (QuickBooks Payments, Stripe)?
- Are there late fees in your terms, or payment plans?
- What's the minimum amount worth chasing, and is there anyone to handle gently?
- Who calls the customer after the 3rd reminder?

**Leads**
- Where do enquiries come from, and what do you need before quoting?
- Is the next step a phone call, site visit or video call, and how long?
- What's your service area, which languages, and what counts as urgent?
- Which price ranges are you happy to share?
- Approve the instant acknowledgement text now.

**Inbox and scheduling**
- What are your 10 most common questions and their answers? (This becomes the FAQ.)
- What are your refund, return and cancellation policies, and what feels "sensitive" to you?
- Who else reads this inbox?
- Services, lengths, buffers, minimum notice. Do you want a waitlist?
- Reminders by email, text, or both?

## Access to collect (done by the owner, on screen-share)
- [ ] Signed services agreement + data terms ([Risks & Legal](../00-Business/Risks-and-Legal.md))
- [ ] Email + calendar OAuth (Workspace internal project / app password / Microsoft consent)
- [ ] QuickBooks or Xero OAuth; Stripe restricted key by one-time link
- [ ] Booking tool access, or a new Cal.com account in their name
- [ ] Form tool: a collaborator login for us (never their own), or they add the webhook
- [ ] 10DLC details (legal name, EIN, address, website, opt-in wording); **submit this week**
- [ ] Carrier forwarding for missed calls (send them the steps for their carrier)
- [ ] SMS consent line on their website form
- [ ] Access Register filled in

## Week 2: build and connect
1. Create the client row and `task_config` rows (every mode = review, TEST_MODE on).
2. Connect credentials using the naming convention and log them in the Access Register.
3. Build the voice guide and send it to the owner for corrections; write the FAQ from the call.
4. Duplicate the template workflows and set `client_id`. Nothing else should need changing.
5. Run the golden sets until they pass, then shadow mode on real data for 2–3 days.
6. A 15-minute call to review 20 drafts with the owner and fix them. Then turn TEST_MODE off for this client.

## Week 3: review mode → handover
The owner approves everything while we check the logs daily and tune the prompts. At the end of the week, decide autopilot task by task using the [autopilot rule](Review-Mode-and-Autopilot.md), get the yes by email, and start the Friday summary.

Related: [Connecting Client Accounts](Connecting-Client-Accounts.md) · [Testing Before Go-Live](Testing.md) · [The Promises We Make](../00-Business/Promises-We-Make.md)
