[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeUserFromGroupChat](../README.md) / removeUserFromGroupChat

# Variable: removeUserFromGroupChat

\> `const` **removeUserFromGroupChat**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeUserFromGroupChat"`\]

This function enables to remove a user from group chat.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the group chat exists.
2. If the organization exists
3. If the user is the admin of the organization.
4. If the user to be removed is a member of the organization.

## Defined in

[src/resolvers/Mutation/removeUserFromGroupChat.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/resolvers/Mutation/removeUserFromGroupChat.ts#L25)
