[talawa-api](../README.md) / [Exports](../modules.md) / utilities/graphQLConnection/getCommonGraphQLConnectionFilter

# Module: utilities/graphQLConnection/getCommonGraphQLConnectionFilter

## Table of contents

### Functions

- [getCommonGraphQLConnectionFilter](utilities_graphQLConnection_getCommonGraphQLConnectionFilter.md#getcommongraphqlconnectionfilter)

## Functions

### getCommonGraphQLConnectionFilter

▸ **getCommonGraphQLConnectionFilter**(`«destructured»`): `CommonGraphQLConnectionFilter`

This function is used to get an object containing common mongoose filtering logic.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `cursor` | ``null`` \| `string` |
| › `direction` | [`GraphQLConnectionTraversalDirection`](utilities_graphQLConnection.md#graphqlconnectiontraversaldirection) |

#### Returns

`CommonGraphQLConnectionFilter`

**`Remarks`**

Here are a few assumptions this function makes which are common to most of the
graphQL connections.

The entity that has the latest creation datetime must appear at the top of the connection. This
means the default filtering logic would be to filter in descending order by the time of creation of
an entity, and if two or more entities have the same time of creation filtering in descending order
by the primary key of the entity. MongoDB object ids are lexographically sortable all on their own
because they contain information about both the creation time and primary key for the document.

Therefore, this function only returns filtering logic for filtering by the object id of a mongoDB
document.

**`Example`**

```ts
const filter = getCommonGraphQLConnectionFilter(\{
 cursor: "65da3f8df35eb5bfd52c5368",
 direction: "BACKWARD"
\});
const objectList = await User.find(filter).limit(10);
```

#### Defined in

[src/utilities/graphQLConnection/getCommonGraphQLConnectionFilter.ts:44](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/utilities/graphQLConnection/getCommonGraphQLConnectionFilter.ts#L44)
