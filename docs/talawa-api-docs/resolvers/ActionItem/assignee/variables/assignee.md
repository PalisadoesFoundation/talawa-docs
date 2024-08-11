[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/ActionItem/assignee](../README.md) / assignee

# Variable: assignee

> `const` **assignee**: [`ActionItemResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/ActionItemResolvers.md)\[`"assignee"`\]

Resolver function for the `assignee` field of an `ActionItem`.

This function fetches the user who is assigned to a specific action item.

## Param

The parent object representing the action item. It contains information about the action item, including the ID of the user assigned to it.

## Example

```ts
If the action item with an ID of `123` is assigned to a user with an ID of `456`, this resolver will find the user with the ID `456` in the database and return their information.
```

## See

 - User - The User model used to interact with the users collection in the database.
 - ActionItemResolvers - The type definition for the resolvers of the ActionItem fields.

## Defined in

[src/resolvers/ActionItem/assignee.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/fe65d855b3d1e3e4af621340e7e8bfa0325634c1/src/resolvers/ActionItem/assignee.ts#L18)
