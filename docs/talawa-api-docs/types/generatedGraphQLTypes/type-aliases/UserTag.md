[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / UserTag

# Type Alias: UserTag

\> **UserTag**: `object`

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"UserTag"`

### \_id

\> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

A field to get the mongodb object id identifier for this UserTag.

### childTags?

\> `optional` **childTags**: [`Maybe`](Maybe.md)\<[`UserTagsConnection`](UserTagsConnection.md)\>

A connection field to traverse a list of UserTag this UserTag is a
parent to.

### name

\> **name**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

A field to get the name of this UserTag.

### organization?

\> `optional` **organization**: [`Maybe`](Maybe.md)\<[`Organization`](Organization.md)\>

A field to traverse the Organization that created this UserTag.

### parentTag?

\> `optional` **parentTag**: [`Maybe`](Maybe.md)\<[`UserTag`](UserTag.md)\>

A field to traverse the parent UserTag of this UserTag.

### usersAssignedTo?

\> `optional` **usersAssignedTo**: [`Maybe`](Maybe.md)\<[`UsersConnection`](UsersConnection.md)\>

A connection field to traverse a list of User this UserTag is assigned
to.

## Defined in

[src/types/generatedGraphQLTypes.ts:3060](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/types/generatedGraphQLTypes.ts#L3060)
