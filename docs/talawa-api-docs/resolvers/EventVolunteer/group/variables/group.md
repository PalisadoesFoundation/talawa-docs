[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/EventVolunteer/group](../README.md) / group

# Variable: group

\> `const` **group**: [`EventVolunteerResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventVolunteerResolvers.md)\[`"group"`\]

Resolver function for the `group` field of an `EventVolunteer`.

This function retrieves the group associated with a specific event volunteer.

## Param

The parent object representing the event volunteer. It contains information about the event volunteer, including the ID of the group associated with it.

## Returns

A promise that resolves to the group document found in the database. This document represents the group associated with the event volunteer.

## See

 - EventVolunteerGroup - The EventVolunteerGroup model used to interact with the event volunteer groups collection in the database.
 - EventVolunteerResolvers - The type definition for the resolvers of the EventVolunteer fields.

## Defined in

[src/resolvers/EventVolunteer/group.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/EventVolunteer/group.ts#L16)
