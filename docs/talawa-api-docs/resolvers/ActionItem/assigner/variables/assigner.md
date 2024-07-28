[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/ActionItem/assigner](../README.md) / assigner

# Variable: assigner

\> `const` **assigner**: [`ActionItemResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/ActionItemResolvers.md)\[`"assigner"`\]

Resolver function for the `assigner` field of an `ActionItem`.

This function fetches the user who is the assigner of a given action item.
It uses the `assignerId` field from the parent `ActionItem` object to find the corresponding user in the database.
The user details are then returned in a plain JavaScript object format.

## Param

The parent `ActionItem` object. This contains the `assignerId` field, which is used to find the user.

## Defined in

[src/resolvers/ActionItem/assigner.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/1f38da5423898626c6ebfa24896a9c3d008195c6/src/resolvers/ActionItem/assigner.ts#L15)
