---
title: Create Event Project
id: resolvers_Mutation_createEventProject
---
[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/createEventProject

# Module: resolvers/Mutation/createEventProject

## Table of contents

### Functions

- [createEventProject](resolvers_Mutation_createEventProject.md#createeventproject)

## Functions

### createEventProject

▸ **createEventProject**(`_parent`, `args`, `context`): `Promise`<`LeanDocument`<[`Interface_EventProject`](../interfaces/models_EventProject.Interface_EventProject.md) & `Document`<`any`, `any`, [`Interface_EventProject`](../interfaces/models_EventProject.Interface_EventProject.md)\>\>\>

This function enables to create an event project.

**`Remarks`**

The following checks are done:
1. If the user exists
2. If the event exists
3. If the user is an admin of the event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_parent` | `any` | parent of current request |
| `args` | `any` | payload provided with the request |
| `context` | `any` | context of entire application |

#### Returns

`Promise`<`LeanDocument`<[`Interface_EventProject`](../interfaces/models_EventProject.Interface_EventProject.md) & `Document`<`any`, `any`, [`Interface_EventProject`](../interfaces/models_EventProject.Interface_EventProject.md)\>\>\>

Created event project

#### Defined in

src/resolvers/Mutation/createEventProject.ts:19
