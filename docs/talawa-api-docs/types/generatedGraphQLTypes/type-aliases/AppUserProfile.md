[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / AppUserProfile

# Type Alias: AppUserProfile

\> **AppUserProfile**: `object`

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"AppUserProfile"`

### \_id

\> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### adminFor?

\> `optional` **adminFor**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`Organization`](Organization.md)\>[]\>

### appLanguageCode

\> **appLanguageCode**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

### campaigns?

\> `optional` **campaigns**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`FundraisingCampaign`](FundraisingCampaign.md)\>[]\>

### createdEvents?

\> `optional` **createdEvents**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`Event`](Event.md)\>[]\>

### createdOrganizations?

\> `optional` **createdOrganizations**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`Organization`](Organization.md)\>[]\>

### eventAdmin?

\> `optional` **eventAdmin**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`Event`](Event.md)\>[]\>

### isSuperAdmin

\> **isSuperAdmin**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

### pledges?

\> `optional` **pledges**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`FundraisingCampaignPledge`](FundraisingCampaignPledge.md)\>[]\>

### pluginCreationAllowed

\> **pluginCreationAllowed**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

### userId

\> **userId**: [`User`](User.md)

## Defined in

[src/types/generatedGraphQLTypes.ts:229](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/types/generatedGraphQLTypes.ts#L229)
