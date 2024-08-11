[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/assignUserTag](../README.md) / assignUserTag

# Variable: assignUserTag

> `const` **assignUserTag**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"assignUserTag"`\]

This function enables an admin to assign tag to user or not.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists.
2. If the user has appProfile.
3. If the tag object exists.
4. If the user is an admin for the organization.
5. If the user to be assigned the tag exists.
6. If the user to be assigned the tag belongs to the tag's organization.
7. If the user already has the tag.

## Defined in

[src/resolvers/Mutation/assignUserTag.ts:39](https://github.com/PalisadoesFoundation/talawa-api/blob/fe65d855b3d1e3e4af621340e7e8bfa0325634c1/src/resolvers/Mutation/assignUserTag.ts#L39)
