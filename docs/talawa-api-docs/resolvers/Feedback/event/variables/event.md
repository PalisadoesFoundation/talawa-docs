[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Feedback/event](../README.md) / event

# Variable: event

\> `const` **event**: [`FeedbackResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/FeedbackResolvers.md)\[`"event"`\]

Resolver function for the `event` field of a `Feedback`.

This function retrieves the event associated with a specific feedback.

## Param

The parent object representing the feedback. It contains information about the feedback, including the ID of the event associated with it.

## Returns

A promise that resolves to the event document found in the database. This document represents the event associated with the feedback.

## See

 - Event - The Event model used to interact with the events collection in the database.
 - FeedbackResolvers - The type definition for the resolvers of the Feedback fields.

## Defined in

[src/resolvers/Feedback/event.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/resolvers/Feedback/event.ts#L16)
