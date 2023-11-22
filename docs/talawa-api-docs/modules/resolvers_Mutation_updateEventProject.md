[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/updateEventProject

# Module: resolvers/Mutation/updateEventProject

## Table of contents

### Functions

- [updateEventProject](resolvers_Mutation_updateEventProject.md#updateeventproject)

## Functions

### updateEventProject

▸ **updateEventProject**(`_parent`, `args`, `context`): `Promise`\<``null`` \| [`Interface_EventProject`](../interfaces/models_EventProject.Interface_EventProject.md)\>

This function enables to update an event project.

**`Remarks`**

The following checks are done:
1. If the user exists.
2. If the event project exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_parent` | `any` | parent of current request |
| `args` | `any` | payload provided with the request |
| `context` | `any` | context of entire application |

#### Returns

`Promise`\<``null`` \| [`Interface_EventProject`](../interfaces/models_EventProject.Interface_EventProject.md)\>

Updated event project.

#### Defined in

src/resolvers/Mutation/updateEventProject.ts:19
