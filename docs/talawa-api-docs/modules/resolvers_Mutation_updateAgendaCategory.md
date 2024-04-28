[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/updateAgendaCategory

# Module: resolvers/Mutation/updateAgendaCategory

## Table of contents

### Variables

- [updateAgendaCategory](resolvers_Mutation_updateAgendaCategory.md#updateagendacategory)

## Variables

### updateAgendaCategory

• `Const` **updateAgendaCategory**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"updateAgendaCategory"``]

This is a resolver function for the GraphQL mutation 'updateAgendaCategory'.

This resolver updates an existing agenda category based on the provided ID.
It checks if the user has the necessary permissions to update the agenda category.

**`Param`**

The parent object, not used in this resolver.

**`Param`**

The input arguments for the mutation.

**`Param`**

The context object containing user information.

**`Throws`**

`NotFoundError` If the agenda category or user is not found.

**`Throws`**

`UnauthorizedError` If the user does not have the required permissions.

**`Throws`**

`InternalServerError` For other potential issues during agenda category update.

#### Defined in

[src/resolvers/Mutation/updateAgendaCategory.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/resolvers/Mutation/updateAgendaCategory.ts#L36)
