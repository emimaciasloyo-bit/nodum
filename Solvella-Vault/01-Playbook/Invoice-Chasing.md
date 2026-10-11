---
title: Invoice Chasing
date: 2026-10-11
tags: [solvella, playbook, invoices]
---
# Invoice Chasing

**Promise:** reminders on days 1, 7 and 14 after the due date, in the owner's tone, with a payment link every time; unpaid customers flagged; a Monday "who owes what" summary.

## Build
1. **Trigger:** Schedule, weekdays 8:00 in the client's time zone.
2. **Fetch overdue invoices.**
   - QuickBooks: `select * from Invoice where Balance > '0' and DueDate < '{{today}}'`
   - Xero: Status AUTHORISED, AmountDue > 0, DueDate before today
   - Stripe: `status=open`, filtered by `due_date`
3. **Normalise** in a Code node to: `invoice_id, number, customer, email, amount_due, currency, due_date, days_overdue, payment_link`.
4. **Payment link:**
   - QuickBooks: `InvoiceLink` (needs QuickBooks Payments on, `include=invoiceLink` and a recent `minorversion`)
   - Xero: `GET /Invoices/{id}/OnlineInvoice`
   - Stripe: `hosted_invoice_url`

   **No link means no send.** The owner gets a "can't chase, no online payment link" flag instead.
5. **Pick the stage with catch-up logic.** Don't match exactly on day 1, 7 or 14, because weekends and outages would skip a stage. Send the highest stage whose threshold has passed and that isn't in `chase_log` yet, at most one per invoice per day.
6. **Skip rules:**
   - the do-not-chase list, and invoices under the minimum amount
   - anything tagged disputed or on a payment plan
   - a partial payment in the last 7 days (send to review)
   - the customer wrote about this invoice number in the last 14 days (send to review)
7. **Draft** with the [invoice prompt](Prompt-Library.md). Stages 2 and 3 reply in the stage-1 thread.
8. **Outbox:** re-check the balance right before sending, because customers often pay between the draft and the approval.
9. **After stage 3:** at day 21, stop emailing and flag the owner: "Call them. Here's the history." Never escalate on our own.
10. **Monday 7am summary:** overdue totals by age (1–7, 8–14, 15–30, 30+ days), the customer list, what was sent, and who needs a call.
11. **Replies:** inbox triage (or a simple watcher on the chase thread) pauses that invoice's chase and alerts the owner.

## Edge cases
- Paid by cheque or bank transfer but not yet recorded. Every reminder says "If you've already paid, thank you, please ignore this".
- Credit notes or deposits applied. Use `amount_due` or Balance, never the invoice total.
- Several overdue invoices for one customer go in **one combined email**.
- No customer email, a bounced email, or a billing contact different from the main contact.
- Multiple currencies; invoices dated in the future or voided.
- "1 day overdue" is in the **client's** time zone, not the server's.
- VIPs the owner wants handled gently, or only by the owner.

## Test
QuickBooks sandbox, Xero Demo Company, Stripe test mode. Create invoices backdated 1, 7, 14, 21 and 40 days, plus a partial payment, a credit note, two invoices for one customer, and one with no email. With `TEST_MODE` on, confirm:
- the right stage, and one email per customer
- the link included and amounts exact
- no duplicates on a second run the same day
- catch-up works after skipping 3 days

Related: [Review Mode & Autopilot](Review-Mode-and-Autopilot.md) · [Build Order](Build-Order.md) · [Demo Setup](../02-Demo/Demo-Setup.md)
