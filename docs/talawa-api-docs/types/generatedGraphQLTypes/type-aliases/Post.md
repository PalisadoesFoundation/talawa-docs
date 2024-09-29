[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / Post

# Type Alias: Post

\> **Post**: `object`

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"Post"`

### \_id?

\> `optional` **\_id**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]\>

### commentCount?

\> `optional` **commentCount**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Int"`\]\[`"output"`\]\>

### comments?

\> `optional` **comments**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`Comment`](Comment.md)\>[]\>

### createdAt

\> **createdAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### creator?

\> `optional` **creator**: [`Maybe`](Maybe.md)\<[`User`](User.md)\>

### imageUrl?

\> `optional` **imageUrl**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"URL"`\]\[`"output"`\]\>

### likeCount?

\> `optional` **likeCount**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Int"`\]\[`"output"`\]\>

### likedBy?

\> `optional` **likedBy**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`User`](User.md)\>[]\>

### organization

\> **organization**: [`Organization`](Organization.md)

### pinned?

\> `optional` **pinned**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]\>

### text

\> **text**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

### title?

\> `optional` **title**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

### updatedAt

\> **updatedAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### videoUrl?

\> `optional` **videoUrl**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"URL"`\]\[`"output"`\]\>

## Defined in

[src/types/generatedGraphQLTypes.ts:2176](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/types/generatedGraphQLTypes.ts#L2176)
