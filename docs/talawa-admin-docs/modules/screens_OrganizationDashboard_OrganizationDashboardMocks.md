[talawa-admin](../README.md) / [Modules](../modules.md) / screens/OrganizationDashboard/OrganizationDashboardMocks

# Module: screens/OrganizationDashboard/OrganizationDashboardMocks

## Table of contents

### Variables

- [EMPTY\_MOCKS](screens_OrganizationDashboard_OrganizationDashboardMocks.md#empty_mocks)
- [ERROR\_MOCKS](screens_OrganizationDashboard_OrganizationDashboardMocks.md#error_mocks)
- [MOCKS](screens_OrganizationDashboard_OrganizationDashboardMocks.md#mocks)

## Variables

### EMPTY\_MOCKS

• `Const` **EMPTY\_MOCKS**: (\{ `request`: \{ `query`: `DocumentNode` = ORGANIZATIONS\_LIST \} ; `result`: \{ `data`: \{ `eventsByOrganizationConnection?`: `undefined` ; `organizations`: \{ `_id`: `number` = 123; `address`: \{ `city`: `string` = 'Delhi'; `countryCode`: `string` = 'IN'; `dependentLocality`: `string` = 'Some Dependent Locality'; `line1`: `string` = '123 Random Street'; `line2`: `string` = 'Apartment 456'; `postalCode`: `string` = '110001'; `sortingCode`: `string` = 'ABC-123'; `state`: `string` = 'Delhi' \} ; `admins`: \{ `_id`: `string` = '123'; `email`: `string` = 'johndoe@gmail.com'; `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' \}[] ; `blockedUsers`: \{ `_id`: `string` = '789'; `email`: `string` = 'stevesmith@gmail.com'; `firstName`: `string` = 'Steve'; `lastName`: `string` = 'Smith' \}[] ; `creator`: \{ `email`: `string` = 'johndoe@gmail.com'; `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' \} ; `description`: `string` = 'This is a Dummy Organization'; `image`: `string` = ''; `members`: \{ `_id`: `string` = '123'; `email`: `string` = 'johndoe@gmail.com'; `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' \}[] ; `membershipRequests`: `never`[] = []; `name`: `string` = 'Dummy Organization'; `userRegistrationRequired`: `boolean` = true; `visibleInSearch`: `boolean` = false \}[]  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_POST\_LIST \} ; `result`: \{ `data`: \{ `eventsByOrganizationConnection?`: `undefined` ; `organizations`: \{ `posts`: \{ `edges`: `never`[] = []; `pageInfo`: \{ `endCursor`: `string` = ''; `hasNextPage`: `boolean` = false; `hasPreviousPage`: `boolean` = false; `startCursor`: `string` = '' \} ; `totalCount`: `number` = 0 \}  \}  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_EVENT\_CONNECTION\_LIST \} ; `result`: \{ `data`: \{ `eventsByOrganizationConnection`: `never`[] = []; `organizations?`: `undefined`  \}  \}  \})[]

#### Defined in

[src/screens/OrganizationDashboard/OrganizationDashboardMocks.ts:219](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationDashboard/OrganizationDashboardMocks.ts#L219)

___

### ERROR\_MOCKS

• `Const` **ERROR\_MOCKS**: \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = ORGANIZATIONS\_LIST \}  \}[]

#### Defined in

[src/screens/OrganizationDashboard/OrganizationDashboardMocks.ts:312](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationDashboard/OrganizationDashboardMocks.ts#L312)

___

### MOCKS

• `Const` **MOCKS**: (\{ `request`: \{ `query`: `DocumentNode` = ORGANIZATIONS\_LIST; `variables?`: `undefined`  \} ; `result`: \{ `data`: \{ `eventsByOrganizationConnection?`: `undefined` ; `organizations`: \{ `_id`: `number` = 123; `address`: \{ `city`: `string` = 'Delhi'; `countryCode`: `string` = 'IN'; `dependentLocality`: `string` = 'Some Dependent Locality'; `line1`: `string` = '123 Random Street'; `line2`: `string` = 'Apartment 456'; `postalCode`: `string` = '110001'; `sortingCode`: `string` = 'ABC-123'; `state`: `string` = 'Delhi' \} ; `admins`: \{ `_id`: `string` = '123'; `email`: `string` = 'johndoe@gmail.com'; `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' \}[] ; `blockedUsers`: \{ `_id`: `string` = '789'; `email`: `string` = 'stevesmith@gmail.com'; `firstName`: `string` = 'Steve'; `lastName`: `string` = 'Smith' \}[] ; `creator`: \{ `email`: `string` = ''; `firstName`: `string` = ''; `lastName`: `string` = '' \} ; `description`: `string` = 'This is a Dummy Organization'; `image`: `string` = ''; `members`: \{ `_id`: `string` = '123'; `email`: `string` = 'johndoe@gmail.com'; `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' \}[] ; `membershipRequests`: \{ `_id`: `string` = '456'; `user`: \{ `email`: `string` = 'janedoe@gmail.com'; `firstName`: `string` = 'Jane'; `lastName`: `string` = 'Doe' \}  \}[] ; `name`: `string` = 'Dummy Organization'; `userRegistrationRequired`: `boolean` = true; `visibleInSearch`: `boolean` = false \}[]  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_POST\_LIST; `variables`: \{ `first`: `number` = 10; `organization_id?`: `undefined` = 'events' \}  \} ; `result`: \{ `data`: \{ `eventsByOrganizationConnection?`: `undefined` ; `organizations`: \{ `posts`: \{ `edges`: \{ `cursor`: `string` = '6411e53835d7ba2344a78e21'; `node`: \{ `_id`: `string` = '6411e53835d7ba2344a78e21'; `commentCount`: `number` = 0; `comments`: `never`[] = []; `createdAt`: `string` = '2023-08-24T09:26:56.524+00:00'; `creator`: \{ `_id`: `string` = '640d98d9eb6a743d75341067'; `email`: `string` = 'adidacreator1@gmail.com'; `firstName`: `string` = 'Aditya'; `lastName`: `string` = 'Shelke' \} ; `imageUrl`: ``null`` = null; `likeCount`: `number` = 0; `likedBy`: `never`[] = []; `pinned`: `boolean` = true; `text`: `string` = 'This is the first post'; `title`: `string` = 'postone'; `videoUrl`: ``null`` = null \}  \}[] ; `pageInfo`: \{ `endCursor`: `string` = '6411e54835d7ba2344a78e31'; `hasNextPage`: `boolean` = false; `hasPreviousPage`: `boolean` = false; `startCursor`: `string` = '6411e53835d7ba2344a78e21' \} ; `totalCount`: `number` = 4 \}  \}[]  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_EVENT\_CONNECTION\_LIST; `variables`: \{ `first?`: `undefined` = 8; `organization_id`: `string` = '123' \}  \} ; `result`: \{ `data`: \{ `eventsByOrganizationConnection`: \{ `_id`: `string` = '1'; `allDay`: `boolean` = false; `description`: `string` = 'Sample Description'; `endDate`: `string` = '2023-10-29T23:59:59.000Z'; `endTime`: `string` = '17:00:00'; `isPublic`: `boolean` = true; `isRegisterable`: `boolean` = true; `location`: `string` = 'Sample Location'; `recurring`: `boolean` = false; `startDate`: `string` = '2025-10-29T00:00:00.000Z'; `startTime`: `string` = '08:00:00'; `title`: `string` = 'Sample Event' \}[] ; `organizations?`: `undefined`  \}  \}  \})[]

#### Defined in

[src/screens/OrganizationDashboard/OrganizationDashboardMocks.ts:7](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationDashboard/OrganizationDashboardMocks.ts#L7)
