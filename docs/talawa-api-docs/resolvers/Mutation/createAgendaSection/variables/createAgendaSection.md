[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createAgendaSection](../README.md) / createAgendaSection

# Variable: createAgendaSection

\> `const` **createAgendaSection**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createAgendaSection"`\]

Creates a new agenda section and performs authorization checks.

This resolver performs the following steps:

1. Retrieves the current user based on the userId from the context.
2. Fetches the associated app user profile for the current user.
3. Validates the existence of the related event and checks user permissions.
4. Creates a new agenda section and sets the appropriate metadata.

## Param

The parent object for the mutation (not used in this function).

## Param

The arguments provided with the mutation, including:
  - `input`: An object containing:
    - `relatedEvent`: The ID of the event to which the new agenda section is related.
    - Additional fields for the agenda section.

## Param

The context of the entire application, including user information (context.userId).

## Remarks

This function performs caching and retrieval operations to ensure the latest data is used.
It also verifies that the user has the necessary permissions to create the agenda section in the context of the specified event.

## Defined in

[src/resolvers/Mutation/createAgendaSection.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Mutation/createAgendaSection.ts#L37)
