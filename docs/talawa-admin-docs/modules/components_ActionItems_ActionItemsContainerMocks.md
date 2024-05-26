[talawa-admin](../README.md) / [Modules](../modules.md) / components/ActionItems/ActionItemsContainerMocks

# Module: components/ActionItems/ActionItemsContainerMocks

## Table of contents

### Variables

- [MOCKS](components_ActionItems_ActionItemsContainerMocks.md#mocks)
- [MOCKS\_ERROR\_MUTATIONS](components_ActionItems_ActionItemsContainerMocks.md#mocks_error_mutations)

## Variables

### MOCKS

• `Const` **MOCKS**: (\{ `request`: \{ `query`: `DocumentNode` = UPDATE\_ACTION\_ITEM\_MUTATION; `variables`: \{ `actionItemId`: `string` = 'actionItem1'; `assigneeId`: `string` = 'user2'; `completionDate`: `string` = '2024-02-21'; `dueDate`: `string` = '2024-02-14'; `isCompleted`: `boolean` = false; `postCompletionNotes`: `string` = 'Post Completion Notes'; `preCompletionNotes`: `string` = 'pre completion notes edited' \}  \} ; `result`: \{ `data`: \{ `removeActionItem?`: `undefined` ; `updateActionItem`: \{ `_id`: `string` = 'actionItem1' \}  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = DELETE\_ACTION\_ITEM\_MUTATION; `variables`: \{ `actionItemId`: `string` = 'actionItem1'; `assigneeId?`: `undefined` = 'user2'; `completionDate?`: `undefined` = '2024-02-21'; `dueDate?`: `undefined` = '2024-02-14'; `isCompleted?`: `undefined` = false; `postCompletionNotes?`: `undefined` = 'Post Completion Notes'; `preCompletionNotes?`: `undefined` = 'pre completion notes edited' \}  \} ; `result`: \{ `data`: \{ `removeActionItem`: \{ `_id`: `string` = 'actionItem1' \} ; `updateActionItem?`: `undefined`  \}  \}  \})[]

#### Defined in

[src/components/ActionItems/ActionItemsContainerMocks.ts:6](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/components/ActionItems/ActionItemsContainerMocks.ts#L6)

___

### MOCKS\_ERROR\_MUTATIONS

• `Const` **MOCKS\_ERROR\_MUTATIONS**: (\{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = UPDATE\_ACTION\_ITEM\_MUTATION; `variables`: \{ `actionItemId`: `string` = 'actionItem1'; `assigneeId`: `string` = 'user2'; `completionDate`: `string` = '2024-02-21'; `dueDate`: `string` = '2024-02-14'; `isCompleted`: `boolean` = false; `postCompletionNotes`: `string` = ''; `preCompletionNotes`: `string` = 'pre completion notes edited' \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = DELETE\_ACTION\_ITEM\_MUTATION; `variables`: \{ `actionItemId`: `string` = 'actionItem1'; `assigneeId?`: `undefined` = 'user2'; `completionDate?`: `undefined` = '2024-02-21'; `dueDate?`: `undefined` = '2024-02-14'; `isCompleted?`: `undefined` = false; `postCompletionNotes?`: `undefined` = 'Post Completion Notes'; `preCompletionNotes?`: `undefined` = 'pre completion notes edited' \}  \}  \})[]

#### Defined in

[src/components/ActionItems/ActionItemsContainerMocks.ts:87](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/components/ActionItems/ActionItemsContainerMocks.ts#L87)
