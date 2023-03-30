---
id: members
title: Members
---

This section aims to give an outline of the features that make up the core of how members operate within Talawa and by extension the organisation. We will cover features such as:

1. Member Registration
2. Member Roles
3. Validating users for the organization
4. Access Banning 
5. Access Recovering

## Registration

:::caution

This section is a work in progress.

:::

### Code: MEM-004

_Authored by_ _ **Xavier Bryson** _ _. Last updated on_ _ **14/03/21** _

This feature aims to _ **enable member access** _ by _ **allowing members to register for an organization with the use of a unique identifier.** _

## Overview
This feature requires the creation and implementation of a unique identifier for each member of the organization. This identifier will allow for accurate tracking of each member's activity within the app and enable personalized user experiences. It is imperative to ensure that the identification process is secure and that user privacy is maintained. By having a unique identifier for each user, it will be easier to analyze user behavior, provide better customer support, and identify and address any issues that may arise.

### Problem

1. **We need a unique way of tracking users :**

Members within the organization need a unique identifier for their devices/accounts.

### Goals

N/A

### Out of Scope

1. **SMS OTP** : to avoid costs within the application, this feature will be omitted as a paid third-party service is required .
2. **Email Registration:** A common issue faced by users is that access to their emails is non-existent as they do not own one, or it is done so on a need to basis.

### People and Roles

1. **Xavier Bryson (Feature Lead)**: provide clarity on feature changes and assumptions.

## Context

### Use Cases

1. **New users want to:**
  1. **Register for an account within a given organisation** : where an organisation is public or once access has been granted to them by the organization admin

## Proposal/Solution

TBD

### User Experience

TBD

### Important Details To Capture

N/A

### Future Work

N/A

## Tasks and Timeline

N/A

---

## Roles

:::caution

This section is a work in progress.

:::


### Code: MEM-002

_Authored by_ _ **Gareth Thomas** _ _. Last updated on_ _ **Mar 14,2021** _

This feature aims to _ **introduce application roles** _ by _ **defining how they work and how they affect the users experience with Talawa** _.

## Overview
Assigning roles to team members is a crucial feature that enables a personalized experience for each user within an application. Through the allocation of a defined set of roles, access to specific features can be granted based on the assigned role, ensuring that only relevant features are available. This feature enhances application security and efficiency by limiting access to pertinent features and preventing unauthorized personnel from accessing sensitive data. It also improves team management by allowing administrators to easily assign or modify roles to ensure appropriate access levels for everyone. In summary, assigning roles is critical in enhancing the security, efficiency, and user experience within an application.

### Problem

1. **Members need to be assigned roles :** in order to provide a tailored experience for each user so that application features are not arbitrarily available to all users of the application

### Goals

1. **Allow for the distribution of roles :** with a defined set of roles, allow for available roles to be assigned to members that grant them access to specific features.

### Out of Scope

1. **Role management:** This is not an immediate priority for the application as we consider a limited number of roles.

### People and Roles

1. **Gareth Thomas (Feature Lead)**: sign off on feature changes and assumptions.

## Context

### Use Cases

1. **All users want to:**
    * Easily identify the role assigned to them
2. **Admins want to** :
    * Assign available roles to users.
    * Grant elevated access to organisation features to support its management and moderation.
    * Demote a member from an elevated position, restricting elevated access.

## Proposal/Solution

#### Predefined Roles

1. **Administrator** - Allow access to features to **ALL** features of the application
2. **Coordinator** - Allow elevated access to specific administrative features as defined per feature throughout the application.
3. **Member** - Allow general usage and access to the application.

#### Admin Portal

The admin portal must provide an interface for the organisations administrator to assign each of the roles defined above to the user.

### User Experience

1. From the home of the admin portal, this administrator must be able to easily find the option to open the interface to manage the users roles
2. At this point the admin must have the ability to find a user and assign them a predefined role.

### Important Details To Capture

N/A

### Future Work

1. Consider allowing the creation of roles in the future by an administrator.
2. Consider allowing selective curation of permissions for the created roles to extend and personalize their Talawa experience.

## Tasks and Timeline

N/A

---

## Pre-Approvals

:::caution

This section is a work in progress.

:::

### Code: MEM-003

_Authored by_ _ **Xavier Bryson** _ _. Last updated on_ _ **14/03/21** _

This feature aims to _ **provide more security within the signup process** _ by _ **incorporating a method for validating new users registering for an organization within the app** _.

## Overview
The incorporation of a user validation method during the signup process for an organization is a vital feature that enhances the security of the application. This feature provides a secure mechanism for approving new members registering for an organization within the app.

By enabling the administrator to oversee the registration and approval process, this feature allows for a streamlined and intuitive experience for both the administrator and the users. The process should be user-friendly and easy to navigate, ensuring that the members can register with ease while providing the admin with the necessary tools to review and approve new members.

This feature is crucial in ensuring the security of the application by providing a method of user validation and approval. The ability to monitor and approve new members allows the admin to ensure that only authorized individuals gain access to the organization within the app, minimizing the risk of unauthorized access and potential security breaches.

Overall, the incorporation of this feature provides enhanced security to the application, while also providing a seamless and intuitive experience for both the admin and the members.

### Problem

1. **Anyone is able to sign up for an organization within the application:**

We need a method for administrators to pre-approve users. Additionally, we need to assume that users may not have access to email and that text message service integration will not be immediately available.

### Goals

1. **Allow for a secure method of approving new members to an organization within the app** :
 Enable the admin to oversee the registration and/or approval of members to an organization. The process should be seamless and intuitive to both users (Admin &amp; Members) of the application.

### Out of Scope

N/A

### People and Roles

1. **Xavier Bryson (Feature Lead)**: Make decision on final solution.


## Context

### Use Cases

TBD.

## Proposal/Solution

1. A pre-approved list of phone numbers.

2. QR code approvals by admins or their lieutenants through the app

3. One time password/token given to the user generated by admins

 Note: Ideally the QR code should contain all the organizations API login information so that it doesn&#39;t need to be re-keyed.

### User Experience

**NB:** Only one of the solutions outlined below should be implemented

#### Solution 1:
  1. Admins will have access to a list of registered numbers from the admin dashboard.
  2. Admins will be able to select a number from the list and approve/deny access.
  3. Members will receive an email/ in app notification once granted access.

#### Solution 2:
  1. Admins will have access to a screen containing a unique QR code.
  2. Admins will have the ability to regenerate the QR code (to be discussed)
  3. Member&#39;s will have access to a QR code scanner upon opening the app.

#### Solution 3:
  1. Admins will have access to a list of registered numbers.
  2. Admins will be able to select a number from the list and generate a unique token/password for a member.
  3. Admins will have access to a share button for sending the token/password to a member&#39;s email/whatsapp/phone number.
  4. Member&#39;s will be required to enter the info from the previous step after registering for an organization.
    
    <center> OR </center>
    
    Member&#39;s will be required to enter the provided token while registering for an organization.

### Important Details To Capture

N/A

### Future Work

N/A

## Tasks and Timeline

N/A

---

## Access Banning

:::caution

This section is a work in progress.

:::

### Code: MEM-005

_Authored by_ _ **Xavier Bryson** _ _. Last updated on_ _ **14/03/21** _

This feature aims to _ **limit unwanted access** _ by _ **allowing admins to ban accounts, numbers or phone ids from accessing the application** _.

## Overview
Given the sensitivity of an organization's information, it is crucial to have measures in place that restrict unauthorized access. In case of a member's malicious intentions or loss of access to their account, a mechanism is necessary to prevent access from that particular device or account. This feature aims to achieve this objective by enabling admins to ban accounts, phone numbers, or device IDs from accessing the application. It is essential to note that banned accounts should only be restricted from accessing the organization from which they are banned to maintain a secure and seamless user experience.

### Problem

1. **Access to an organization&#39;s information is sensitive :**
 As such if a member&#39;s intentions is deemed as malicious or of no benefit to the organization, or if a member loses access to his/her device/account, there needs to be a method for limiting access for that device/account.

### Goals

N/A

### Out of Scope

N/A

### People and Roles

1. **Xavier Bryson (Feature Lead)**: clarify feature changes and assumptions.

## Context

### Use Cases

N/A

## Proposal/Solution

N/A

### User Experience

See [Pre-Approvals UX Section](#_1jkn6vnliixl) (Solution 1)

### Important Details To Capture

Banned accounts should only be prevented from accessing the organization from which it is banned.

### Future Work

N/A

## Tasks and Timeline

N/A

---

## Access Recovery

:::caution

This section is a work in progress.

:::

### Code: MEM-006

_Authored by_ _ **Xavier Bryson** _ _. Last updated on_ _ **14/03/21** _

This feature aims to _ **prevent account loss** _ by _ **allowing members to recover their access via email** _.

## Overview
To provide a more secure and seamless experience for our users, we aim to implement a feature that allows for account recovery. In the event that a user loses their login credentials, they should have an independent and secure way of regaining access to their account.

This feature will also capture information on account recovery in logs, which can be accessed by the admin through the admin portal. This will enable the admin to keep track of account recovery attempts and ensure that the process runs smoothly.

Overall, the account recovery feature will provide an additional layer of security and convenience for our users, while also facilitating efficient management of the recovery process for our admin team.

### Problem

1. **Users may lose access to their device/account:**

The losing of access to one&#39;s account prevents them from being productive and informed within an organization.

### Goals

1. **Allow members a secure way of recovering their account** :

User&#39;s should have an independent way of recovering access to their account should they lose their credentials.

### Out of Scope

1. **SMS Integration** : we will only support email notifications at this time however with funding this can be revisited in the future.

### People and Roles

1. **Xavier Bryson (Feature Lead)**: clarify functionality and assumptions.

## Context

N/A

## Proposal/Solution

N/A

### User Experience

TBD

### Important Details To Capture

Information on account recovery should be captured in logs and displayed within the admin portal.

### Future Work

N/A

## Tasks and Timeline

N/A