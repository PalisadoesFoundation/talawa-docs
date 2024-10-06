[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/EventVolunteer/creator](../README.md) / creator

# Variable: creator

\> `const` **creator**: [`EventVolunteerResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventVolunteerResolvers.md)\[`"creator"`\]

Resolver function for the `creator` field of an `EventVolunteer`.

This function retrieves the user who created a specific event volunteer.

## Param

The parent object representing the event volunteer. It contains information about the event volunteer, including the ID of the user who created it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who created the event volunteer.

## See

 - User - The User model used to interact with the users collection in the database.
 - EventVolunteerResolvers - The type definition for the resolvers of the EventVolunteer fields.

## Defined in

[src/resolvers/EventVolunteer/creator.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/resolvers/EventVolunteer/creator.ts#L16)
