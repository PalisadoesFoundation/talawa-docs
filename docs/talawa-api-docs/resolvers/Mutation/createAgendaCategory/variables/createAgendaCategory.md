[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createAgendaCategory](../README.md) / createAgendaCategory

# Variable: createAgendaCategory

\> `const` **createAgendaCategory**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createAgendaCategory"`\]

This is a resolver function for the GraphQL mutation 'createAgendaCategory'.

This resolver creates a new agenda category, associates it with an organization,
and updates the organization with the new agenda category.

## Throws

`NotFoundError` If the user or organization is not found.

## Throws

`UnauthorizedError` If the user does not have the required permissions.

## Throws

`InternalServerError` For other potential issues during agenda category creation.

## Defined in

[src/resolvers/Mutation/createAgendaCategory.ts:34](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/resolvers/Mutation/createAgendaCategory.ts#L34)
