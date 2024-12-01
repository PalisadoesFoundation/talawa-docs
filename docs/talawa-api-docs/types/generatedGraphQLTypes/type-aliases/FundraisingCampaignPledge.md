[**talawa-api**](../../../README.md)

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

[src/types/generatedGraphQLTypes.ts:1065](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/types/generatedGraphQLTypes.ts#L1065)
