[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / GroupChat

# Type Alias: GroupChat

> **GroupChat**: `object`

## Type declaration

### \_\_typename?

> `optional` **\_\_typename**: `"GroupChat"`

### \_id

> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### createdAt

> **createdAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### creator?

> `optional` **creator**: [`Maybe`](Maybe.md)\<[`User`](User.md)\>

### messages?

> `optional` **messages**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`GroupChatMessage`](GroupChatMessage.md)\>[]\>

### organization

> **organization**: [`Organization`](Organization.md)

### title

> **title**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

### updatedAt

> **updatedAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### users

> **users**: [`User`](User.md)[]

## Defined in

[src/types/generatedGraphQLTypes.ts:1004](https://github.com/PalisadoesFoundation/talawa-api/blob/fe65d855b3d1e3e4af621340e7e8bfa0325634c1/src/types/generatedGraphQLTypes.ts#L1004)
