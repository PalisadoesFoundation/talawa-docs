[**talawa-api**](../../../../../README.md)

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

### where

`undefined` | [`InputMaybe`](../../../../../types/generatedGraphQLTypes/type-aliases/InputMaybe.md)\<`Partial`\<[`EventWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/EventWhereInput.md) & [`EventVolunteerGroupWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/EventVolunteerGroupWhereInput.md) & [`OrganizationWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/OrganizationWhereInput.md) & [`PostWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/PostWhereInput.md) & [`UserWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/UserWhereInput.md) & [`DonationWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/DonationWhereInput.md) & [`ActionItemWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/ActionItemWhereInput.md) & [`ActionItemCategoryWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/ActionItemCategoryWhereInput.md) & [`CampaignWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/CampaignWhereInput.md) & [`FundWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/FundWhereInput.md) & [`PledgeWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/PledgeWhereInput.md) & [`VenueWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/VenueWhereInput.md) & [`EventVolunteerWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/EventVolunteerWhereInput.md)\>\>

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

[src/resolvers/Query/helperFunctions/getWhere.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Query/helperFunctions/getWhere.ts#L32)
