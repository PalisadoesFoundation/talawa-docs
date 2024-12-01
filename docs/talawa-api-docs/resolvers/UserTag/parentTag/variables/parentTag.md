[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/UserTag/parentTag](../README.md) / parentTag

# Variable: parentTag

\> `const` **parentTag**: [`UserTagResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/UserTagResolvers.md)\[`"parentTag"`\]

Resolver function for the `parentTag` field of a `UserTag`.

This function retrieves the parent tag associated with a specific user tag.

## Param

The parent object representing the user tag. It contains information about the user tag, including the ID of the parent tag associated with it.

## Returns

A promise that resolves to the user tag document found in the database. This document represents the parent tag associated with the user tag.

## See

 - OrganizationTagUser - The OrganizationTagUser model used to interact with the user tags collection in the database.
 - UserTagResolvers - The type definition for the resolvers of the UserTag fields.

## Defined in

[src/resolvers/UserTag/parentTag.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/UserTag/parentTag.ts#L16)
