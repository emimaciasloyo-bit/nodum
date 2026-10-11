---
title: Lead Follow-Up
date: 2026-10-11
tags: [solvella, playbook, leads]
---
# Lead Follow-Up

**Promise:** reply to new enquiries within about 5 minutes, ask budget, timing and address, book a call, and follow up twice if they go quiet.

> [!WARNING]
> **Review mode conflicts with the 5-minute promise.** In week 2 the owner approves a short **acknowledgement template** per channel once (e.g. "Thanks Sam, got your message about the water heater. Two quick questions so we can quote…"). That goes out instantly; the personalised follow-ups go through review until autopilot. Explain this on the discovery call.

## Lead sources
- **Website forms:** a webhook from the form tool (Jotform, Typeform, Gravity Forms, Webflow, Squarespace) into `/webhook/lead/{client}`. Fallback: parse the form's notification email in inbox triage.
- **Email enquiries:** inbox triage tags them `lead` and hands them over.
- **Missed calls:** the owner sets *conditional call forwarding* (no answer/busy) to a Twilio number. Twilio plays a greeting, records a voicemail and calls our webhook with the caller's number, which triggers a text-back. For VoIP (RingCentral, Quo/OpenPhone, Dialpad), use its missed-call webhook. Google Voice has no API.

## Build
1. Normalise to `{source, name, email, phone, message, received_at}`. **Dedupe:** the same phone or email within 30 days updates the existing lead.
2. Run the [lead prompt](Prompt-Library.md). It returns the service, budget, timing and address if stated, what's missing, spam or pitch, urgency, language, and a reply.
3. **Urgent** (burst pipe, no heat, lockout): text the owner immediately. Spam or a vendor pitch: label only, no reply.
4. Send the instant acknowledgement plus the missing questions and the **booking link**. Cal.com does the time-picking, so the AI never guesses at the calendar.
5. Cal.com's `BOOKING_CREATED` webhook marks the lead booked and cancels follow-ups.
6. **Follow-ups:** a daily check finds leads with no reply and no booking. Send at +1 day and +3 days, then mark "went quiet" and include them in the owner's summary. Any reply, booking, STOP or owner "lost" stops the sequence.
7. Notify the owner of every new lead with one line plus a link to the thread.

## Edge cases
- An existing customer mistaken for a lead. Check the accounting or Shopify customer list first.
- Outside the service area: a polite decline (owner-approved template) or route to the owner.
- Spanish or other languages: reply in their language only if the owner can serve them.
- Phone-only leads: text, never email. Fake or bouncing email: fall back to phone.
- No follow-up texts before 8am or after 8pm in the recipient's local time.
- STOP, UNSUBSCRIBE or "wrong number" opts them out for good (Twilio also handles STOP at the carrier level).
- Price questions: only quote ranges the owner approved in the FAQ.

## Test
- Post 15 fake form submissions with curl or Postman: complete, missing all info, urgent, spam, Spanish, existing customer, duplicate, out of area.
- Call the Twilio number from your own phone and let it ring out.
- Book through Cal.com and confirm the follow-ups stop.
- In `TEST_MODE`, set the follow-up waits to minutes.

Related: [Inbox Triage](Inbox-Triage.md) · [Scheduling](Scheduling.md) · [Risks & Legal Basics](../00-Business/Risks-and-Legal.md)
