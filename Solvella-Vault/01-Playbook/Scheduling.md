---
title: Scheduling
date: 2026-10-11
tags: [solvella, playbook, scheduling]
---
# Scheduling

**Promise:** bookings from email, text and the website; reminders the day before; rescheduling by reply; cancellations filled from a waitlist.

> [!TIP]
> **The booking tool is the source of truth.** If they use Square Appointments, Acuity, Vagaro, Fresha or Jane, connect to it if it has an API or webhooks, and don't replace it. If they have nothing, set up Cal.com in their name. The AI never writes to a calendar directly.

## Four flows
1. **Booking requests by email or text:** triage spots `booking`. Claude pulls out the service and preferred times, the availability API returns 2–3 real open slots, and the reply offers those plus the booking link. The customer confirms through the link.
2. **Day-before reminders:** daily at 10am, list tomorrow's bookings and send "Reply C to confirm or R to reschedule". Log message IDs so replies can be matched.
3. **Reschedule by reply:** the [intent prompt](Prompt-Library.md) classifies the reply.
   - confirm → mark confirmed
   - reschedule → send that booking's reschedule link or 3 new slots
   - cancel → cancel via the API and start flow 4
   - unclear or question → send to the owner
4. **Fill cancellations:** when a slot more than X hours away opens, match the `waitlist` table by service and time preference and text the top 3: "First to reply YES gets Thursday 2pm." The first YES books through the API using a **database row lock**; the others get "Sorry, it's been taken."

## Edge cases
- Time zones and daylight saving: store times in UTC and show them in the client's zone.
- The owner adding bookings by hand outside the tool. Ask them to stop, or sync their calendar as busy.
- Ambiguous replies ("yes" to two questions, "can we do later?") count as unclear and go to the owner.
- Minimum notice, buffers, and service lengths that differ per staff member.
- Texts only between 8am and 8pm local; Florida and Oklahoma are stricter.
- Waitlist entries older than 30 days: ask whether they still want a slot first.

## Test
Use a Cal.com test event with your own phone and email as the customer. Book, get the reminder (shorten the "tomorrow" window in `TEST_MODE`), then reply R, C, "cancel", and something vague. Add 3 waitlisters and have 2 reply YES at the same moment: **exactly one** should get the slot.

Related: [Lead Follow-Up](Lead-Follow-Up.md) · [Inbox Triage](Inbox-Triage.md)
