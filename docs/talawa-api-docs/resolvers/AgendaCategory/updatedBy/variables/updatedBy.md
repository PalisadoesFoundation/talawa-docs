[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/AgendaCategory/updatedBy](../README.md) / updatedBy

# Variable: updatedBy

\> `const` **updatedBy**: [`AgendaCategoryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/AgendaCategoryResolvers.md)\[`"updatedBy"`\]

Resolver function for the `updatedBy` field of an `AgendaCategory`.

This function retrieves the user who last updated a specific agenda category.

## Param

The parent object representing the agenda category. It contains information about the agenda category, including the ID of the user who last updated it.

## See

 - User - The User model used to interact with the users collection in the database.
 - AgendaCategoryResolvers - The type definition for the resolvers of the AgendaCategory fields.

```typescript
return User.findOne(\{ _id: parent.updatedBy \}).lean();
```

## Defined in

[src/resolvers/AgendaCategory/updatedBy.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/67d017fd9312183a6b2bae1b160bc814f56ab5c2/src/resolvers/AgendaCategory/updatedBy.ts#L19)
