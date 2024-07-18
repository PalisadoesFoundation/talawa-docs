[**talawa-api**](../../../../../README.md) • **Docs**

***

[talawa-api](../../../../../modules.md) / [resolvers/Query/helperFunctions/getWhere](../README.md) / getWhere

# Function: getWhere()

\> **getWhere**\<`T`\>(`where`): `FilterQuery`\<`T`\>

## Type Parameters

• **T** = `unknown`

used to return an object of a generic type `FilterQuery\<T\>`

## Parameters

• **where**: `undefined` \| [`InputMaybe`](../../../../../types/generatedGraphQLTypes/type-aliases/InputMaybe.md)\<`Partial`\<[`EventWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/EventWhereInput.md) & [`OrganizationWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/OrganizationWhereInput.md) & [`PostWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/PostWhereInput.md) & [`UserWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/UserWhereInput.md) & [`DonationWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/DonationWhereInput.md) & [`ActionItemWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/ActionItemWhereInput.md) & [`CampaignWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/CampaignWhereInput.md) & [`FundWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/FundWhereInput.md) & [`VenueWhereInput`](../../../../../types/generatedGraphQLTypes/type-aliases/VenueWhereInput.md)\>\>

an object that contains properties that can be used to filter out documents.

## Returns

`FilterQuery`\<`T`\>

a FilterQuery object to filter out documents

## Defined in

[src/resolvers/Query/helperFunctions/getWhere.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/resolvers/Query/helperFunctions/getWhere.ts#L28)
