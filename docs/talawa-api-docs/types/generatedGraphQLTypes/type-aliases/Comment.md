[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / Comment

# Type Alias: Comment

\> **Comment**: `object`

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"Comment"`

### \_id

\> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### createdAt

\> **createdAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### creator?

\> `optional` **creator**: [`Maybe`](Maybe.md)\<[`User`](User.md)\>

### likeCount?

\> `optional` **likeCount**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Int"`\]\[`"output"`\]\>

### likedBy?

\> `optional` **likedBy**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`User`](User.md)\>[]\>

### post

\> **post**: [`Post`](Post.md)

### text

\> **text**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

### updatedAt

\> **updatedAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

## Defined in

[src/types/generatedGraphQLTypes.ts:299](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/types/generatedGraphQLTypes.ts#L299)
