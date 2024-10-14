[**talawa-admin**](../../../../README.md) • **Docs**

***

[talawa-admin](../../../../modules.md) / [components/ProfileDropdown/ProfileDropdown](../README.md) / default

# Function: default()

\> **default**(): `Element`

Renders a profile dropdown menu for the user.

This component displays the user's profile picture or an avatar, their name (truncated if necessary),
and their role (SuperAdmin, Admin, or User). It provides options to view the profile or log out.

- If a user image is available, it displays that; otherwise, it shows an avatar.
- The displayed name is truncated if it exceeds a specified length.
- The logout function revokes the refresh token and clears local storage before redirecting to the home page.

## Returns

`Element`

JSX.Element - The profile dropdown menu.

## Defined in

[src/components/ProfileDropdown/ProfileDropdown.tsx:23](https://github.com/PalisadoesFoundation/talawa-admin/blob/84f5af8b3720f5b290ac28bcfd7071c13e1f93aa/src/components/ProfileDropdown/ProfileDropdown.tsx#L23)
