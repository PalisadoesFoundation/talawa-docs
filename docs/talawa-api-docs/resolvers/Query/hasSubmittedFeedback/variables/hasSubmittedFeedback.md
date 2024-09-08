[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/hasSubmittedFeedback](../README.md) / hasSubmittedFeedback

# Variable: hasSubmittedFeedback

\> `const` **hasSubmittedFeedback**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"hasSubmittedFeedback"`\]

Checks whether a user has submitted feedback for a specific event.

This function verifies if the given user and event exist in the database. It then checks if the user is registered and checked in for the event. Finally, it determines whether the user has submitted feedback for that event based on the check-in record.

## Param

This parameter represents the parent resolver in the GraphQL schema and is not used in this function.

## Param

The arguments provided to the GraphQL query. Should include:
  - `userId` (string): The ID of the user to check.
  - `eventId` (string): The ID of the event to check.

## Defined in

[src/resolvers/Query/hasSubmittedFeedback.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Query/hasSubmittedFeedback.ts#L22)
