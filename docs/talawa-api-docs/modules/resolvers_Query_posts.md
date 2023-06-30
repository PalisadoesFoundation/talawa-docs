[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Query/posts

# Module: resolvers/Query/posts

## Table of contents

### Variables

- [posts](resolvers_Query_posts.md#posts)

## Variables

### posts

• `Const` **posts**: [`QueryResolvers`](types_generatedGraphQLTypes.md#queryresolvers)[``"posts"``]

The query will fetch all the Posts in specified order from the database.

**`Param`**

**`Param`**

An object that contains `orderBy` field to get the data in specified order.

**`Remarks`**

The query function uses `getSort()` function to sort the data in specified order.

#### Defined in

src/resolvers/Query/posts.ts:11
