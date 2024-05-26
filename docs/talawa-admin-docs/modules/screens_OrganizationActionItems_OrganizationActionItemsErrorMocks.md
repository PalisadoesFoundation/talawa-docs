[talawa-admin](../README.md) / [Modules](../modules.md) / screens/OrganizationActionItems/OrganizationActionItemsErrorMocks

# Module: screens/OrganizationActionItems/OrganizationActionItemsErrorMocks

## Table of contents

### Variables

- [MOCKS\_ERROR\_ACTION\_ITEM\_CATEGORY\_LIST\_QUERY](screens_OrganizationActionItems_OrganizationActionItemsErrorMocks.md#mocks_error_action_item_category_list_query)
- [MOCKS\_ERROR\_ACTION\_ITEM\_LIST\_QUERY](screens_OrganizationActionItems_OrganizationActionItemsErrorMocks.md#mocks_error_action_item_list_query)
- [MOCKS\_ERROR\_MEMBERS\_LIST\_QUERY](screens_OrganizationActionItems_OrganizationActionItemsErrorMocks.md#mocks_error_members_list_query)
- [MOCKS\_ERROR\_MUTATIONS](screens_OrganizationActionItems_OrganizationActionItemsErrorMocks.md#mocks_error_mutations)

## Variables

### MOCKS\_ERROR\_ACTION\_ITEM\_CATEGORY\_LIST\_QUERY

• `Const` **MOCKS\_ERROR\_ACTION\_ITEM\_CATEGORY\_LIST\_QUERY**: \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = ACTION\_ITEM\_CATEGORY\_LIST; `variables`: \{ `organizationId`: `string` = '123' \}  \}  \}[]

#### Defined in

[src/screens/OrganizationActionItems/OrganizationActionItemsErrorMocks.ts:9](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationActionItems/OrganizationActionItemsErrorMocks.ts#L9)

___

### MOCKS\_ERROR\_ACTION\_ITEM\_LIST\_QUERY

• `Const` **MOCKS\_ERROR\_ACTION\_ITEM\_LIST\_QUERY**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = ACTION\_ITEM\_CATEGORY\_LIST; `variables`: \{ `id?`: `undefined` = '123'; `organizationId`: `string` = '123' \}  \} ; `result`: \{ `data`: \{ `actionItemCategoriesByOrganization`: \{ `_id`: `string` = 'actionItemCategory1'; `isDisabled`: `boolean` = false; `name`: `string` = 'ActionItemCategory 1' \}[] ; `organizations?`: `undefined`  \}  \}  \} \| \{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = MEMBERS\_LIST; `variables`: \{ `id`: `string` = '123'; `organizationId?`: `undefined` = '123' \}  \} ; `result`: \{ `data`: \{ `actionItemCategoriesByOrganization?`: `undefined` ; `organizations`: \{ `_id`: `string` = '123'; `members`: \{ `_id`: `string` = 'user1'; `createdAt`: `string` = '2024-02-14'; `email`: `string` = 'harve@example.com'; `firstName`: `string` = 'Harve'; `image`: `string` = ''; `lastName`: `string` = 'Lance'; `organizationsBlockedBy`: `never`[] = [] \}[]  \}[]  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = ACTION\_ITEM\_LIST; `variables`: \{ `id`: `string` = '123'; `organizationId?`: `undefined` = '123' \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/OrganizationActionItems/OrganizationActionItemsErrorMocks.ts:46](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationActionItems/OrganizationActionItemsErrorMocks.ts#L46)

___

### MOCKS\_ERROR\_MEMBERS\_LIST\_QUERY

• `Const` **MOCKS\_ERROR\_MEMBERS\_LIST\_QUERY**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = ACTION\_ITEM\_CATEGORY\_LIST; `variables`: \{ `id?`: `undefined` = '123'; `organizationId`: `string` = '123' \}  \} ; `result`: \{ `data`: \{ `actionItemCategoriesByOrganization`: \{ `_id`: `string` = 'actionItemCategory1'; `isDisabled`: `boolean` = false; `name`: `string` = 'ActionItemCategory 1' \}[]  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = MEMBERS\_LIST; `variables`: \{ `id`: `string` = '123'; `organizationId?`: `undefined` = '123' \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/OrganizationActionItems/OrganizationActionItemsErrorMocks.ts:19](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationActionItems/OrganizationActionItemsErrorMocks.ts#L19)

___

### MOCKS\_ERROR\_MUTATIONS

• `Const` **MOCKS\_ERROR\_MUTATIONS**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = ACTION\_ITEM\_CATEGORY\_LIST; `variables`: \{ `actionItemCategoryId?`: `undefined` = 'actionItemCategory1'; `assigneeId?`: `undefined` = 'user2'; `dueDate?`: `undefined` = '2024-02-14'; `eventId?`: `undefined` = 'event1'; `id?`: `undefined` = '123'; `isActive?`: `undefined` = false; `isCompleted?`: `undefined` = false; `orderBy?`: `undefined` = 'createdAt\_DESC'; `organizationId`: `string` = '123'; `preCompletionNotes?`: `undefined` = 'pre completion notes edited' \}  \} ; `result`: \{ `data`: \{ `actionItemCategoriesByOrganization`: \{ `_id`: `string` = 'actionItemCategory1'; `isDisabled`: `boolean` = false; `name`: `string` = 'ActionItemCategory 1' \}[] ; `actionItemsByOrganization?`: `undefined` ; `organizations?`: `undefined`  \}  \}  \} \| \{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = MEMBERS\_LIST; `variables`: \{ `actionItemCategoryId?`: `undefined` = 'actionItemCategory1'; `assigneeId?`: `undefined` = 'user2'; `dueDate?`: `undefined` = '2024-02-14'; `eventId?`: `undefined` = 'event1'; `id`: `string` = '123'; `isActive?`: `undefined` = false; `isCompleted?`: `undefined` = false; `orderBy?`: `undefined` = 'createdAt\_DESC'; `organizationId?`: `undefined` = '123'; `preCompletionNotes?`: `undefined` = 'pre completion notes edited' \}  \} ; `result`: \{ `data`: \{ `actionItemCategoriesByOrganization?`: `undefined` ; `actionItemsByOrganization?`: `undefined` ; `organizations`: \{ `_id`: `string` = '123'; `members`: \{ `_id`: `string` = 'user1'; `createdAt`: `string` = '2024-02-14'; `email`: `string` = 'harve@example.com'; `firstName`: `string` = 'Harve'; `image`: `string` = ''; `lastName`: `string` = 'Lance'; `organizationsBlockedBy`: `never`[] = [] \}[]  \}[]  \}  \}  \} \| \{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = ACTION\_ITEM\_LIST; `variables`: \{ `actionItemCategoryId`: `string` = ''; `assigneeId?`: `undefined` = 'user2'; `dueDate?`: `undefined` = '2024-02-14'; `eventId?`: `undefined` = 'event1'; `id?`: `undefined` = '123'; `isActive`: `boolean` = false; `isCompleted`: `boolean` = false; `orderBy`: `string` = 'createdAt\_DESC'; `organizationId`: `string` = '123'; `preCompletionNotes?`: `undefined` = 'pre completion notes edited' \}  \} ; `result`: \{ `data`: \{ `actionItemCategoriesByOrganization?`: `undefined` ; `actionItemsByOrganization`: \{ `_id`: `string` = 'actionItem1'; `actionItemCategory`: \{ `_id`: `string` = 'actionItemCategory1'; `name`: `string` = 'ActionItemCategory 1' \} ; `assignee`: \{ `_id`: `string` = 'user1'; `firstName`: `string` = 'Harve'; `lastName`: `string` = 'Lance' \} ; `assigner`: \{ `_id`: `string` = 'user0'; `firstName`: `string` = 'Wilt'; `lastName`: `string` = 'Shepherd' \} ; `assignmentDate`: `string` = '2024-02-14'; `completionDate`: `string` = '2024-02-21'; `creator`: \{ `_id`: `string` = 'user0'; `firstName`: `string` = 'Wilt'; `lastName`: `string` = 'Shepherd' \} ; `dueDate`: `string` = '2024-02-21'; `event`: \{ `_id`: `string` = 'event1'; `title`: `string` = 'event 1' \} ; `isCompleted`: `boolean` = false; `postCompletionNotes`: `string` = 'Post Completion Notes'; `preCompletionNotes`: `string` = 'Pre Completion Notes' \}[] ; `organizations?`: `undefined`  \}  \}  \} \| \{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = ACTION\_ITEM\_LIST; `variables`: \{ `actionItemCategoryId?`: `undefined` = 'actionItemCategory1'; `assigneeId?`: `undefined` = 'user2'; `dueDate?`: `undefined` = '2024-02-14'; `eventId`: `string` = 'event1'; `id?`: `undefined` = '123'; `isActive?`: `undefined` = false; `isCompleted?`: `undefined` = false; `orderBy`: `string` = 'createdAt\_DESC'; `organizationId`: `string` = '123'; `preCompletionNotes?`: `undefined` = 'pre completion notes edited' \}  \} ; `result`: \{ `data`: \{ `actionItemCategoriesByOrganization?`: `undefined` ; `actionItemsByOrganization`: \{ `_id`: `string` = 'actionItem1'; `actionItemCategory`: \{ `_id`: `string` = 'actionItemCategory1'; `name`: `string` = 'ActionItemCategory 1' \} ; `assignee`: \{ `_id`: `string` = 'user1'; `firstName`: `string` = 'Harve'; `lastName`: `string` = 'Lance' \} ; `assigner`: \{ `_id`: `string` = 'user0'; `firstName`: `string` = 'Wilt'; `lastName`: `string` = 'Shepherd' \} ; `assignmentDate`: `string` = '2024-02-14'; `completionDate`: `string` = '2024-02-21'; `creator`: \{ `_id`: `string` = 'user0'; `firstName`: `string` = 'Wilt'; `lastName`: `string` = 'Shepherd' \} ; `dueDate`: `string` = '2024-02-21'; `event`: \{ `_id`: `string` = 'event1'; `title`: `string` = 'event 1' \} ; `isCompleted`: `boolean` = false; `postCompletionNotes`: `string` = 'Post Completion Notes'; `preCompletionNotes`: `string` = 'Pre Completion Notes' \}[] ; `organizations?`: `undefined`  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = CREATE\_ACTION\_ITEM\_MUTATION; `variables`: \{ `actionItemCategoryId`: `string` = 'actionItemCategory1'; `assigneeId`: `string` = 'user1'; `dueDate`: `string` = '2024-02-14'; `eventId?`: `undefined` = 'event1'; `id?`: `undefined` = '123'; `isActive?`: `undefined` = false; `isCompleted?`: `undefined` = false; `orderBy?`: `undefined` = 'createdAt\_DESC'; `organizationId?`: `undefined` = '123'; `preCompletionNotes`: `string` = 'pre completion notes' \}  \} ; `result?`: `undefined`  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = CREATE\_ACTION\_ITEM\_MUTATION; `variables`: \{ `actionItemCategoryId`: `string` = 'actionItemCategory1'; `assigneeId`: `string` = 'user1'; `dueDate`: `string` = '2024-02-14'; `eventId`: `string` = 'event1'; `id?`: `undefined` = '123'; `isActive?`: `undefined` = false; `isCompleted?`: `undefined` = false; `orderBy?`: `undefined` = 'createdAt\_DESC'; `organizationId?`: `undefined` = '123'; `preCompletionNotes`: `string` = 'pre completion notes' \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/OrganizationActionItems/OrganizationActionItemsErrorMocks.ts:99](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationActionItems/OrganizationActionItemsErrorMocks.ts#L99)
