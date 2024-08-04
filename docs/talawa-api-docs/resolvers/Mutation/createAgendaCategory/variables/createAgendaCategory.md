[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createAgendaCategory](../README.md) / createAgendaCategory

# Variable: createAgendaCategory

> `const` **createAgendaCategory**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createAgendaCategory"`\]

Creates a new agenda category and associates it with a specified organization.

This resolver function performs the following steps:

1. Retrieves the current user based on the userId from the context.
2. Fetches the associated app user profile for the current user.
3. Retrieves the organization specified in the input, either from the cache or from the database.
4. Validates the existence of the organization.
5. Checks if the current user is authorized to perform this operation.
6. Creates a new agenda category and associates it with the specified organization.
7. Updates the organization document with the new agenda category.

## Param

The parent object for the mutation (not used in this function).

## Param

The arguments provided with the request, including:
  - `input`: An object containing:
    - `organizationId`: The ID of the organization to which the new agenda category will be added.
    - `name`: The name of the new agenda category.
    - `description`: A description of the new agenda category.

## Param

The context of the entire application, including user information (context.userId).

## Remarks

The function performs caching and retrieval operations to ensure the latest data is used,
and it updates the organization document to include the new agenda category.

## Defined in

[src/resolvers/Mutation/createAgendaCategory.ts:49](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/resolvers/Mutation/createAgendaCategory.ts#L49)
