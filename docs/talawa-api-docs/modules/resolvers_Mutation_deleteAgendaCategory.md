[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/deleteAgendaCategory

# Module: resolvers/Mutation/deleteAgendaCategory

## Table of contents

### Variables

- [deleteAgendaCategory](resolvers_Mutation_deleteAgendaCategory.md#deleteagendacategory)

## Variables

### deleteAgendaCategory

• `Const` **deleteAgendaCategory**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"deleteAgendaCategory"``]

This is a resolver function for the GraphQL mutation 'deleteAgendaCategory'.

This resolver deletes an agenda category if the user has the necessary permissions.

**`Param`**

The parent object, not used in this resolver.

**`Param`**

The input arguments for the mutation.

**`Throws`**

`NotFoundError` If the user or agenda category is not found.

**`Throws`**

`UnauthorizedError` If the user does not have the required permissions.

**`Throws`**

`InternalServerError` For other potential issues during agenda category deletion.

#### Defined in

[src/resolvers/Mutation/deleteAgendaCategory.ts:29](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/resolvers/Mutation/deleteAgendaCategory.ts#L29)
