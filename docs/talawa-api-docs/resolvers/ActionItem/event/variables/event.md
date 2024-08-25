[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/ActionItem/event](../README.md) / event

# Variable: event

\> `const` **event**: [`ActionItemResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/ActionItemResolvers.md)\[`"event"`\]

Resolver function for the `event` field of an `ActionItem`.

This function retrieves the event associated with a specific action item.

## Param

The parent object representing the action item. It contains information about the action item, including the ID of the associated event.

## Examples

Here's how you might use this resolver in your GraphQL schema:

```graphql
type ActionItem \{
  event: Event
  # other fields...
\}
```

```ts
If the action item with an ID of `123` is associated with an event with an ID of `789`, this resolver will find the event with the ID `789` in the database and return its information.
```

## See

 - Event - The Event model used to interact with the events collection in the database.
 - ActionItemResolvers - The type definition for the resolvers of the ActionItem fields.

## Defined in

[src/resolvers/ActionItem/event.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/a87b45a1c490c996c3a8a52e117ecbaa4742ef49/src/resolvers/ActionItem/event.ts#L28)
