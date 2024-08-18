[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/ActionItem/creator](../README.md) / creator

# Variable: creator

> `const` **creator**: [`ActionItemResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/ActionItemResolvers.md)\[`"creator"`\]

Resolver function for the `creator` field of an `ActionItem`.

This function fetches the user who is the creator of a given action item.
It uses the `creatorId` field from the parent `ActionItem` object to find the corresponding user in the database.
The user details are then returned in a plain JavaScript object format.

## Param

The parent `ActionItem` object. This contains the `creatorId` field, which is used to find the user.

## Example

```typescript
const actionItem = {
  creatorId: "60d0fe4f5311236168a109cb"
};
const user = await creator(actionItem);
console.log(user);
// Output might be: { _id: "60d0fe4f5311236168a109cb", name: "Jane Doe", email: "jane.doe@example.com" }
```

## Defined in

[src/resolvers/ActionItem/creator.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/3bacbf38707ebd3e3e5f1bc5b4cc7aa3b2adc169/src/resolvers/ActionItem/creator.ts#L24)
