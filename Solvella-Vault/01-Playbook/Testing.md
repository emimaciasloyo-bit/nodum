---
title: Testing Before Go-Live
date: 2026-10-11
tags: [solvella, playbook, testing]
---
# Testing Before Go-Live

1. **TEST_MODE switch.** An n8n variable read by the Outbox. When on, *every* recipient is rewritten to `you+clientslug@yourdomain` and texts go to your phone. **Build this before anything else.** It's what stops a test email reaching a real customer.
2. **Sandboxes:** QuickBooks sandbox, Xero Demo Company, Stripe test mode, a test Google Workspace or Gmail mailbox, Twilio with your own phone, and a Cal.com test event.
3. **Golden set per automation:** 20–50 saved inputs covering every edge case, each with the expected result (category, stage, review or not). Re-run after every prompt change through a "Test runner" workflow that writes pass/fail.
4. **Shadow mode on real client data** (end of week 2): read-only, drafts generated, nothing sent. Review 20 with the owner on a 15-minute call, then fix the prompt and FAQ.
5. **Review mode live** (week 3): real sends, every one approved. Check the logs daily.
6. **Go-live checklist:**
   - [ ] Kill switch tested: `paused` stops all sends within a minute.
   - [ ] The error workflow alerts you; you've forced one failure to check.
   - [ ] Rate limits set; a second run on the same day sends nothing new.
   - [ ] Backups running; the disconnect guide is written for this client.
   - [ ] The owner knows how to approve, edit, skip and pause.

Related: [Review Mode & Autopilot](Review-Mode-and-Autopilot.md) · [Client Onboarding](Client-Onboarding.md)
