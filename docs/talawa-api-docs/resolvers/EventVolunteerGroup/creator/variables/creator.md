[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/EventVolunteerGroup/creator](../README.md) / creator

# Variable: creator

\> `const` **creator**: [`EventVolunteerGroupResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventVolunteerGroupResolvers.md)\[`"creator"`\]

Resolver function for the `creator` field of an `EventVolunteerGroup`.

This function retrieves the user who created a specific event volunteer group.

## Param

The parent object representing the event volunteer group. It contains information about the event volunteer group, including the ID of the user who created it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who created the event volunteer group.

## See

 - User - The User model used to interact with the users collection in the database.
 - EventVolunteerGroupResolvers - The type definition for the resolvers of the EventVolunteerGroup fields.

## Defined in

[src/resolvers/EventVolunteerGroup/creator.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/resolvers/EventVolunteerGroup/creator.ts#L16)
