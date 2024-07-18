[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/blockPluginCreationBySuperadmin](../README.md) / blockPluginCreationBySuperadmin

# Variable: blockPluginCreationBySuperadmin

\> `const` **blockPluginCreationBySuperadmin**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"blockPluginCreationBySuperadmin"`\]

This function enables an admin to create block plugin.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists
2.If the user has appUserProfile
2. If the user is the SUPERADMIN of organization

## Defined in

[src/resolvers/Mutation/blockPluginCreationBySuperadmin.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/resolvers/Mutation/blockPluginCreationBySuperadmin.ts#L25)
