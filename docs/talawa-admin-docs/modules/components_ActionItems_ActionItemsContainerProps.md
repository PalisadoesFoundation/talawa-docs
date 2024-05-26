[talawa-admin](../README.md) / [Modules](../modules.md) / components/ActionItems/ActionItemsContainerProps

# Module: components/ActionItems/ActionItemsContainerProps

## Table of contents

### Variables

- [props](components_ActionItems_ActionItemsContainerProps.md#props)
- [props2](components_ActionItems_ActionItemsContainerProps.md#props2)

## Variables

### props

• `Const` **props**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actionItemsConnection` | `ActionItemsConnectionType` |
| `actionItemsData` | \{ `_id`: `string` = 'actionItem1'; `actionItemCategory`: \{ `_id`: `string` = 'actionItemCategory1'; `name`: `string` = 'ActionItemCategory 1' \} ; `assignee`: \{ `_id`: `string` = 'user1'; `firstName`: `string` = 'Harve'; `lastName`: `string` = 'Lance' \} ; `assigner`: \{ `_id`: `string` = 'user0'; `firstName`: `string` = 'Wilt'; `lastName`: `string` = 'Shepherd' \} ; `assignmentDate`: `Date` ; `completionDate`: `Date` ; `creator`: \{ `_id`: `string` = 'user0'; `firstName`: `string` = 'Wilt'; `lastName`: `string` = 'Shepherd' \} ; `dueDate`: `Date` ; `event`: \{ `_id`: `string` = 'event1'; `title`: `string` = 'event 1' \} ; `isCompleted`: `boolean` = false; `postCompletionNotes`: `string` = 'Post Completion Notes'; `preCompletionNotes`: `string` = 'Pre Completion Notes' \}[] |
| `actionItemsRefetch` | `Mock`\<`any`, `any`\> |
| `membersData` | \{ `_id`: `string` = 'user1'; `createdAt`: `string` = '2024-02-14'; `email`: `string` = 'harve@example.com'; `firstName`: `string` = 'Harve'; `image`: `string` = ''; `lastName`: `string` = 'Lance'; `organizationsBlockedBy`: `never`[] = [] \}[] |

#### Defined in

[src/components/ActionItems/ActionItemsContainerProps.ts:3](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/components/ActionItems/ActionItemsContainerProps.ts#L3)

___

### props2

• `Const` **props2**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actionItemsConnection` | `ActionItemsConnectionType` |
| `actionItemsData` | `never`[] |
| `actionItemsRefetch` | `Mock`\<`any`, `any`\> |
| `membersData` | `never`[] |

#### Defined in

[src/components/ActionItems/ActionItemsContainerProps.ts:126](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/components/ActionItems/ActionItemsContainerProps.ts#L126)
