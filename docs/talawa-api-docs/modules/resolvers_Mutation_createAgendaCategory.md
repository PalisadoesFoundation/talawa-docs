[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/createAgendaCategory

# Module: resolvers/Mutation/createAgendaCategory

## Table of contents

### Variables

- [createAgendaCategory](resolvers_Mutation_createAgendaCategory.md#createagendacategory)

## Variables

### createAgendaCategory

• `Const` **createAgendaCategory**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"createAgendaCategory"``]

This is a resolver function for the GraphQL mutation 'createAgendaCategory'.

This resolver creates a new agenda category, associates it with an organization,
and updates the organization with the new agenda category.

**`Throws`**

`NotFoundError` If the user or organization is not found.

**`Throws`**

`UnauthorizedError` If the user does not have the required permissions.

**`Throws`**

`InternalServerError` For other potential issues during agenda category creation.

#### Defined in

[src/resolvers/Mutation/createAgendaCategory.ts:29](https://github.com/PalisadoesFoundation/talawa-api/blob/65069df/src/resolvers/Mutation/createAgendaCategory.ts#L29)
