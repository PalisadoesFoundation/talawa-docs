[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / FundraisingCampaignPledge

# Type Alias: FundraisingCampaignPledge

\> **FundraisingCampaignPledge**: `object`

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"FundraisingCampaignPledge"`

### \_id

\> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### amount

\> **amount**: [`Scalars`](Scalars.md)\[`"Float"`\]\[`"output"`\]

### campaigns

\> **campaigns**: [`Maybe`](Maybe.md)\<[`FundraisingCampaign`](FundraisingCampaign.md)\>[]

### currency

\> **currency**: [`Currency`](Currency.md)

### endDate?

\> `optional` **endDate**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Date"`\]\[`"output"`\]\>

### startDate?

\> `optional` **startDate**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Date"`\]\[`"output"`\]\>

### users

\> **users**: [`Maybe`](Maybe.md)\<[`User`](User.md)\>[]

## Defined in

[src/types/generatedGraphQLTypes.ts:970](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/types/generatedGraphQLTypes.ts#L970)
