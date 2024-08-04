[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createEvent](../README.md) / createEvent

# Variable: createEvent

> `const` **createEvent**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createEvent"`\]

Creates a new event and associates it with an organization.

This resolver handles both recurring and non-recurring events, performing the following steps:

1. Validates the existence of the user, their app user profile, and the associated organization.
2. Checks if the user is authorized to create an event in the organization.
3. Validates the provided event details, including title, description, location, and date range.
4. Creates the event using the appropriate method based on whether it's recurring or not.
5. Uses a database transaction to ensure data consistency.

## Param

The parent object, not used in this resolver.

## Param

The input arguments for the mutation, including:
  - `data`: An object containing:
    - `organizationId`: The ID of the organization to associate with the event.
    - `title`: The title of the event (max 256 characters).
    - `description`: A description of the event (max 500 characters).
    - `location`: The location of the event (max 50 characters).
    - `startDate`: The start date of the event.
    - `endDate`: The end date of the event.
    - `recurring`: A boolean indicating if the event is recurring.

## Param

The context object containing user information (context.userId).

## Remarks

This function uses a transaction to ensure that either all operations succeed or none do, maintaining data integrity.

## Defined in

[src/resolvers/Mutation/createEvent.ts:56](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/resolvers/Mutation/createEvent.ts#L56)
