[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Fund/creator](../README.md) / creator

# Variable: creator

\> `const` **creator**: [`FundResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/FundResolvers.md)\[`"creator"`\]

Resolver function for the `creator` field of a `Fund`.

This function retrieves the user who created a specific fund.

## Param

The parent object representing the fund. It contains information about the fund, including the ID of the user who created it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who created the fund.

## See

 - User - The User model used to interact with the users collection in the database.
 - FundResolvers - The type definition for the resolvers of the Fund fields.

## Defined in

[src/resolvers/Fund/creator.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Fund/creator.ts#L17)
