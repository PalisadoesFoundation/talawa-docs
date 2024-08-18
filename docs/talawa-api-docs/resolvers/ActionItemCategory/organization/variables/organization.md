[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/ActionItemCategory/organization](../README.md) / organization

# Variable: organization

> `const` **organization**: [`ActionItemCategoryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/ActionItemCategoryResolvers.md)\[`"organization"`\]

Resolver function for the `organization` field of an `ActionItemCategory`.

This function fetches the organization associated with a given action item category.
It uses the `organizationId` field from the parent `ActionItemCategory` object to find the corresponding organization in the database.
The organization details are then returned in a plain JavaScript object format.

## Param

The parent `ActionItemCategory` object. This contains the `organizationId` field, which is used to find the organization.

## Example

```typescript
const actionItemCategory = {
  organizationId: "60d0fe4f5311236168a109cc"
};
const organization = await organization(actionItemCategory);
console.log(organization);
// Output might be: { _id: "60d0fe4f5311236168a109cc", name: "Tech Corp", address: "123 Tech Lane" }
```

## Defined in

[src/resolvers/ActionItemCategory/organization.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/3bacbf38707ebd3e3e5f1bc5b4cc7aa3b2adc169/src/resolvers/ActionItemCategory/organization.ts#L24)
