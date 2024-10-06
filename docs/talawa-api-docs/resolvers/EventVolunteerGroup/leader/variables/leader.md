[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/EventVolunteerGroup/leader](../README.md) / leader

# Variable: leader

\> `const` **leader**: [`EventVolunteerGroupResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventVolunteerGroupResolvers.md)\[`"leader"`\]

Resolver function for the `leader` field of an `EventVolunteerGroup`.

This function retrieves the user who is the leader of a specific event volunteer group.

## Param

The parent object representing the event volunteer group. It contains information about the event volunteer group, including the ID of the user who is the leader.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who is the leader of the event volunteer group.

## See

 - User - The User model used to interact with the users collection in the database.
 - EventVolunteerGroupResolvers - The type definition for the resolvers of the EventVolunteerGroup fields.

## Defined in

[src/resolvers/EventVolunteerGroup/leader.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/resolvers/EventVolunteerGroup/leader.ts#L17)
