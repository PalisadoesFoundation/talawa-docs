---
title: Remove Post
id: resolvers_Mutation_removePost
---
[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/removePost

# Module: resolvers/Mutation/removePost

## Table of contents

### Variables

- [removePost](resolvers_Mutation_removePost.md#removepost)

## Variables

### removePost

• `Const` **removePost**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"removePost"``]

This function enables to remove a post.

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the user exists.
2. If the post exists
3. If the user is the creator of the post.
4. If the user to be removed is a member of the organization.

#### Defined in

src/resolvers/Mutation/removePost.ts:21
