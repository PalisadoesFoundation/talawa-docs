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

[src/types/generatedGraphQLTypes.ts:997](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/types/generatedGraphQLTypes.ts#L997)
