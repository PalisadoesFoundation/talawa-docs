---
title: Remove Event Project
id: resolvers_Mutation_removeEventProject
---
[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/removeEventProject

# Module: resolvers/Mutation/removeEventProject

## Table of contents

### Functions

- [removeEventProject](resolvers_Mutation_removeEventProject.md#removeeventproject)

## Functions

### removeEventProject

▸ **removeEventProject**(`_parent`, `args`, `context`): `Promise`<[`Interface_EventProject`](../interfaces/models_EventProject.Interface_EventProject.md)\>

This function enables to remove an event project.

**`Remarks`**

The following checks are done:
1. If the user exists
2. If the event project exists
3. If the user is the creator of the event project.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_parent` | `any` | parent of current request |
| `args` | `any` | payload provided with the request |
| `context` | `any` | context of entire application |

#### Returns

`Promise`<[`Interface_EventProject`](../interfaces/models_EventProject.Interface_EventProject.md)\>

Deleted event project.

#### Defined in

src/resolvers/Mutation/removeEventProject.ts:19
