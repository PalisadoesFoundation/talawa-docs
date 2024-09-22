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

[src/types/generatedGraphQLTypes.ts:229](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/types/generatedGraphQLTypes.ts#L229)
