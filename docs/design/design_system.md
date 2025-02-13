---
id: ux-design-system
title: Design System
sidebar_position: 3
---

This page provides details about the design files we use or have used to create the Talawa software product line.

## Talawa Mobile

The original mobile app design system can be found here

- ![DesignSystem](/img/design_system.png)

### Talawa Mobile - Figma Designs

We have had many Figma designs over the years. Here are some of them.

#### Current

The most current Figma Design as of December 2023

1. [Talawa Mobile Design - Current](https://www.figma.com/file/AVpVQ7Cm7jNNeMtNWi6hc4/End-of-GSoC-2023?type=design&node-id=0%3A1&mode=design&t=hMb1a77x2Y7OEcKG-1)

#### Legacy

These files are of historical value to the repository

1. [Talawa Mobile Design - Summer 2023](https://www.figma.com/file/oWg3Y5InWmjVQV4KSvj8t7/GSoC-Designs?type=design&node-id=0-1&mode=design&t=zYS6ExtQ1hjUPOZo-0)
1. [Talawa Mobile Design - Original](https://www.figma.com/file/GdvI0NPxsIAwQwZ7txfuTF/Talwa-case-study?type=design&node-id=0-1&mode=design)

## Talawa Admin

We follow a single Figma file for the designing of the Talawa admin and user portal. You can refer to the link below to suggest new designs and help maintain consistency in the look and feel for Talawa:

### Talawa Admin - Figma Designs

You can find our most current Figma designs here

1. [Link to Figma for Talawa Designs](<https://www.figma.com/file/WksD4uIa5sQJMIk3pR4l0c/Talawa-Design-System-(Official)?type=design&node-id=307%3A212&mode=dev>)

## CSS Methodology

To ensure consistency across the application and reduce duplication, common styles
(such as button styles) have been moved to the global CSS file. Instead of using
component-specific classes (e.g., `.greenregbtnOrganizationFundCampaign`, `.greenregbtnPledge`), a single reusable
class (e.g., .addButton) is now applied.

### Benefits:

- Reduces redundant CSS code.
- Improves maintainability by centralizing common styles.
- Ensures consistent styling across components.

### Components:

This structre of styling can be followed accross all the components/screens for consistent design.

#### Search Bar:

- (example: src/screens/OrganizationPeople.OrganizationPeopl.tsx)
- ![searchBarDesign](/img/markdown/ui-ux/searchBarDesign.png)

#### Modal:

- ![Modal](/img/markdown/ui-ux/modal.png)

#### Tabs:

- (example: src/screens/Volunteer.VolunteerManagement.tsx)
- ![Tabs](/img/markdown/ui-ux/tabs.png)

#### Table:

- (example: src/screens/OrganizationActionItems/OrganizationActionItems.tsx)
- ![Table](/img/markdown/ui-ux/table.png)

## Other

Feel free to contribute your suggestions!
