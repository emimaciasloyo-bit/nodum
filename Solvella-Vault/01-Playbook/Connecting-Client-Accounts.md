---
title: Connecting Client Accounts
date: 2026-10-11
tags: [solvella, playbook, security, oauth]
---
# Connecting Client Accounts Safely

## Rules for every connection
- **The owner clicks "Allow" themselves** on a screen-share. We never ask for, type or store their password.
- **Smallest permission that works**, and only for tasks they bought.
- **Access Register** per client: system, scope, date granted, who granted it, how to revoke. This is how we keep the "disconnect anytime" promise.
- **Credential naming:** `acme-plumbing · gmail`. Never reuse a credential across clients.
- **Disconnect procedure:** the owner revokes in their account (we send a 3-step guide) → we delete the n8n credential → we delete their data within 30 days → we confirm in writing.

## Email and calendar

> [!WARNING]
> **The Google catch.** Gmail read/modify scopes are *restricted*. A public app using them needs Google verification plus a yearly CASA security assessment (hundreds to a few thousand dollars). An app left in "Testing" has tokens that **expire every 7 days**, which silently breaks automations.

- **Google Workspace client (preferred):** the client creates a Google Cloud project in their Workspace org and adds us (IAM Owner). Set the OAuth consent screen to **Internal**, so no verification is needed and tokens don't expire. Scopes: `gmail.modify`, `gmail.send`, `calendar.events`.
- **Free @gmail.com client:** the owner turns on 2-Step Verification and creates an **App Password** named "Solvella". n8n uses an IMAP trigger plus SMTP. Tell them plainly that this grants full mailbox access and can be revoked in one click. With 5+ Gmail clients, consider getting our own app CASA-verified.
- **Microsoft 365 / Outlook:** one **multi-tenant** app in our Entra ID, with publisher verification (free with a Microsoft partner ID). Delegated scopes: `offline_access`, `User.Read`, `Mail.ReadWrite`, `Mail.Send`, `Calendars.ReadWrite`. Admin consent is often needed (usually the owner). Basic-auth IMAP doesn't work; use OAuth.
- **Avoid:** the full `mail.google.com` scope, domain-wide delegation or service accounts, and forwarding all mail to a mailbox we own.

## Money and store systems
| System | How | Scope | Watch out for |
|---|---|---|---|
| QuickBooks Online | our Intuit developer app; owner OAuths in n8n | `com.intuit.quickbooks.accounting` (we only read) | production keys need the app profile filled in; reads are metered (the free tier is far above our volume, but confirm) |
| Xero | our Xero app; owner OAuths | `offline_access` + read-only invoice and contact scopes | tiered developer pricing; the free tier covers only a few orgs, so check before client 6 |
| Stripe | owner creates a **restricted key**, shared via a one-time link | Invoices: Read, Customers: Read | **never accept `sk_live`** |
| Shopify | custom app for their store (via Dev Dashboard) | `read_orders`, `read_customers` | only if triage needs order lookups |
| Twilio | subaccount under *our* account, registered in the *client's* business name | n/a | 10DLC needs legal name, EIN, address, website and sample messages; **start in week 1**, approval takes 1–3 weeks |

Related: [Client Onboarding](Client-Onboarding.md) · [Risks & Legal Basics](../00-Business/Risks-and-Legal.md)
