[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/deleteAgendaCategory](../README.md) / deleteAgendaCategory

# Variable: deleteAgendaCategory

\> `const` **deleteAgendaCategory**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"deleteAgendaCategory"`\]

This is a resolver function for the GraphQL mutation 'deleteAgendaCategory'.

This resolver deletes an agenda category if the user has the necessary permissions.

## Param

The parent object, not used in this resolver.

## Param

The input arguments for the mutation.

## Returns

A promise that resolves to the ID of the deleted agenda category.

## Throws

`NotFoundError` If the user or agenda category is not found.

## Throws

`UnauthorizedError` If the user does not have the required permissions.

## Throws

`InternalServerError` For other potential issues during agenda category deletion.

## Defined in

[src/resolvers/Mutation/deleteAgendaCategory.ts:29](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Mutation/deleteAgendaCategory.ts#L29)
