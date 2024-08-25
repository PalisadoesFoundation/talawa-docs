[**talawa-api**](../../../../../README.md) • **Docs**

***

[talawa-api](../../../../../modules.md) / [resolvers/Query/helperFunctions/getWhere](../README.md) / getWhere

# Function: getWhere()

\> **getWhere**\<`T`\>(`where`): `FilterQuery`\<`T`\>

This function returns FilterQuery object which can be used to find out documents matching specific args as mentioned in `where`.
When modifying this function, check if the arg to be added isn't present before, and place `where` argument
type if not present before in the intersection type.

## Type Parameters

• **T** = `unknown`

used to return an object of a generic type `FilterQuery\<T\>`

## Parameters

• **where**: `undefined` \| [`InputMaybe`](../../../../../types/generatedGraphQLTypes/type-aliases/InputMaybe.md)\<`Partial`\<[`EventWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/EventWhereInput.md) & [`EventVolunteerGroupWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/EventVolunteerGroupWhereInput.md) & [`OrganizationWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/OrganizationWhereInput.md) & [`PostWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/PostWhereInput.md) & [`UserWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/UserWhereInput.md) & [`DonationWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/DonationWhereInput.md) & [`ActionItemWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/ActionItemWhereInput.md) & [`CampaignWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/CampaignWhereInput.md) & [`FundWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/FundWhereInput.md) & [`PledgeWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/PledgeWhereInput.md) & [`VenueWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/VenueWhereInput.md)\>\>

an object that contains properties that can be used to filter out documents.

## Returns

`FilterQuery`\<`T`\>

a FilterQuery object to filter out documents

## Remarks

You can learn about Generics [here](https://www.typescriptlang.org/docs/handbook/2/generics.html).

## Example

```
const inputArgs = getWhere\<InterfaceEvent\>(args.where);
```

## Defined in

[src/resolvers/Query/helperFunctions/getWhere.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/a87b45a1c490c996c3a8a52e117ecbaa4742ef49/src/resolvers/Query/helperFunctions/getWhere.ts#L30)
