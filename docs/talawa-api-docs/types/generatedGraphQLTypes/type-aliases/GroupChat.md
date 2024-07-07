[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / GroupChat

# Type Alias: GroupChat

\> **GroupChat**: `object`

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"GroupChat"`

### \_id

\> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### createdAt

\> **createdAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### creator?

\> `optional` **creator**: [`Maybe`](Maybe.md)\<[`User`](User.md)\>

### messages?

\> `optional` **messages**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`GroupChatMessage`](GroupChatMessage.md)\>[]\>

### organization

\> **organization**: [`Organization`](Organization.md)

### updatedAt

\> **updatedAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### users

\> **users**: [`User`](User.md)[]

## Defined in

[src/types/generatedGraphQLTypes.ts:997](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/types/generatedGraphQLTypes.ts#L997)
