[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [models/FundraisingCampaignPledge](../README.md) / InterfaceFundraisingCampaignPledges

# Interface: InterfaceFundraisingCampaignPledges

Interface representing a document for a fundraising campaign pledge in the database (MongoDB).

## Properties

### \_id

\> **\_id**: `ObjectId`

#### Defined in

[src/models/FundraisingCampaignPledge.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/models/FundraisingCampaignPledge.ts#L13)

***

### amount

\> **amount**: `number`

#### Defined in

[src/models/FundraisingCampaignPledge.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/models/FundraisingCampaignPledge.ts#L18)

***

### campaign

\> **campaign**: `PopulatedDoc`\<[`InterfaceFundraisingCampaign`](../../FundraisingCampaign/interfaces/InterfaceFundraisingCampaign.md) & `Document`\>

#### Defined in

[src/models/FundraisingCampaignPledge.ts:14](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/models/FundraisingCampaignPledge.ts#L14)

***

### createdAt

\> **createdAt**: `Date`

#### Defined in

[src/models/FundraisingCampaignPledge.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/models/FundraisingCampaignPledge.ts#L20)

***

### currency

\> **currency**: [`CurrencyType`](../../FundraisingCampaign/enumerations/CurrencyType.md)

#### Defined in

[src/models/FundraisingCampaignPledge.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/models/FundraisingCampaignPledge.ts#L19)

***

### endDate

\> **endDate**: `Date`

#### Defined in

[src/models/FundraisingCampaignPledge.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/models/FundraisingCampaignPledge.ts#L17)

***

### startDate

\> **startDate**: `Date`

#### Defined in

[src/models/FundraisingCampaignPledge.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/models/FundraisingCampaignPledge.ts#L16)

***

### updatedAt

\> **updatedAt**: `Date`

#### Defined in

[src/models/FundraisingCampaignPledge.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/models/FundraisingCampaignPledge.ts#L21)

***

### users

\> **users**: `PopulatedDoc`\<[`InterfaceUser`](../../User/interfaces/InterfaceUser.md) & `Document`\>[]

#### Defined in

[src/models/FundraisingCampaignPledge.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/models/FundraisingCampaignPledge.ts#L15)
