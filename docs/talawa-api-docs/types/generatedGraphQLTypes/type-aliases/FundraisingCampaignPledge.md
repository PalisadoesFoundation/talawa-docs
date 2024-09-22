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

### campaign

\> **campaign**: [`FundraisingCampaign`](FundraisingCampaign.md)

### currency

\> **currency**: [`Currency`](Currency.md)

### endDate?

\> `optional` **endDate**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Date"`\]\[`"output"`\]\>

### startDate?

\> `optional` **startDate**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Date"`\]\[`"output"`\]\>

### users

\> **users**: [`Maybe`](Maybe.md)\<[`User`](User.md)\>[]

## Defined in

[src/types/generatedGraphQLTypes.ts:993](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/types/generatedGraphQLTypes.ts#L993)
