[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Query/agendaCategory

# Module: resolvers/Query/agendaCategory

## Table of contents

### Variables

- [agendaCategory](resolvers_Query_agendaCategory.md#agendacategory)

## Variables

### agendaCategory

• `Const` **agendaCategory**: [`QueryResolvers`](types_generatedGraphQLTypes.md#queryresolvers)[``"agendaCategory"``]

This is a resolver function for the GraphQL query 'agendaCategory'.

This resolver fetches an agenda category by its ID.

**`Param`**

The parent object, not used in this resolver.

**`Param`**

The input arguments for the query.

**`Throws`**

`NotFoundError` If the agenda category is not found.

**`Throws`**

`InternalServerError` For other potential issues during agenda category fetching.

#### Defined in

[src/resolvers/Query/agendaCategory.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/resolvers/Query/agendaCategory.ts#L19)
