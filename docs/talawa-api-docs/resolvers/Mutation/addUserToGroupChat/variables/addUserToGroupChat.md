[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addUserToGroupChat](../README.md) / addUserToGroupChat

# Variable: addUserToGroupChat

\> `const` **addUserToGroupChat**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addUserToGroupChat"`\]

This function adds user to group chat.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the group chat exists
2. If the organization exists
3. If the user trying to add the user is an admin of organization
4. If the user exists
5. If the user is already a member of the chat

## Defined in

[src/resolvers/Mutation/addUserToGroupChat.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/resolvers/Mutation/addUserToGroupChat.ts#L28)
