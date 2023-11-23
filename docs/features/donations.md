---
id: donations-and-fees
title: Donations & Fees
---

:::caution

This section is a work in progress.

:::

### Code: DON-005

_Authored by **Xavier Bryson**. Last updated on **4/04/21**_

This feature aims to _**manage privileged access**_ by _**use of fees associated with certain features/terms of use**_.

### Overview

### Problem

1. **Some organization&#39;s require a means of generating revenue to fund their operations :**
   Since the target audience of the application would be those similar to non-profits if not non-profits themselves, a crucial part of their revenue would be from their members/participants. Therefore, a means to manage member contributions would need to be established and should be easy to configure.

### Goals

1. **Allow for a secure method of receiving donations online** :
   Through the use of a payment gateway for ease of management and integrations, we can allow members to offer secure payments on fees to access exclusive events/features.
2. **Differentiate the various fees associated with features/terms of use** :
   Currently, there are three main categories for fees within the application, namely: Donations and Membership Fees.
   - Donations: These are fees that can be contributed at any time by members/participants of an organization.
   - Membership Fees: Similar to donations, membership fees can be contributed at any time or can be associated with a certain event. These fees can also be one-time or recurring.
   - Plugin Fees: These are payments made to grant access to certain features of the application.

### Out of Scope

N/A

### People and Roles

1. **Xavier Bryson (Feature Lead)**: clarify feature changes and assumptions.

### Context

### Use Cases

N/A

### Proposal/Solution

1. For ease of managing transactions, external Billing Systems would need to be employed. Two recommendations are as follows:

   ○ Stripe

   ○ Paypal

2. For ease of incorporation into the various endpoints a node/express middleware could be used to pre-validate requests.

### User Experience

N/A

### Important Details To Capture

Payments would be made online via credit/debit cards or contributions.

### Future Work

N/A

### Tasks and Timeline

N/A
