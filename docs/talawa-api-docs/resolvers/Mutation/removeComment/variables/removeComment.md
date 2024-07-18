[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeComment](../README.md) / removeComment

# Variable: removeComment

\> `const` **removeComment**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeComment"`\]

This function enables to remove a comment.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists
2. If the comment exists.
3. If the user is the creator of the organization.
4. If the user has appUserProfile

## Defined in

[src/resolvers/Mutation/removeComment.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/resolvers/Mutation/removeComment.ts#L36)
