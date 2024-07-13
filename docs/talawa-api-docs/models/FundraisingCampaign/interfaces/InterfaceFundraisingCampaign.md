[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [models/FundraisingCampaign](../README.md) / InterfaceFundraisingCampaign

# Interface: InterfaceFundraisingCampaign

This is the structure of a file

## Param

parent fund to which campaign belongs

## Param

Name of the campaign

## Param

Start date of the campaign

## Param

End date of the campaign

## Param

Goal of the campaign

## Param

Currency of the campaign

## Param

Timestamp of creation

## Param

Timestamp of updation

## Properties

### \_id

\> **\_id**: `ObjectId`

#### Defined in

[src/models/FundraisingCampaign.ts:186](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/models/FundraisingCampaign.ts#L186)

***

### createdAt

\> **createdAt**: `Date`

#### Defined in

[src/models/FundraisingCampaign.ts:194](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/models/FundraisingCampaign.ts#L194)

***

### currency

\> **currency**: [`CurrencyType`](../enumerations/CurrencyType.md)

#### Defined in

[src/models/FundraisingCampaign.ts:192](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/models/FundraisingCampaign.ts#L192)

***

### endDate

\> **endDate**: `Date`

#### Defined in

[src/models/FundraisingCampaign.ts:190](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/models/FundraisingCampaign.ts#L190)

***

### fundId

\> **fundId**: `PopulatedDoc`\<[`InterfaceFund`](../../Fund/interfaces/InterfaceFund.md) & `Document`\>

#### Defined in

[src/models/FundraisingCampaign.ts:187](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/models/FundraisingCampaign.ts#L187)

***

### fundingGoal

\> **fundingGoal**: `number`

#### Defined in

[src/models/FundraisingCampaign.ts:191](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/models/FundraisingCampaign.ts#L191)

***

### name

\> **name**: `string`

#### Defined in

[src/models/FundraisingCampaign.ts:188](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/models/FundraisingCampaign.ts#L188)

***

### pledges

\> **pledges**: `PopulatedDoc`\<[`InterfaceFundraisingCampaignPledges`](../../FundraisingCampaignPledge/interfaces/InterfaceFundraisingCampaignPledges.md) & `Document`\>[]

#### Defined in

[src/models/FundraisingCampaign.ts:193](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/models/FundraisingCampaign.ts#L193)

***

### startDate

\> **startDate**: `Date`

#### Defined in

[src/models/FundraisingCampaign.ts:189](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/models/FundraisingCampaign.ts#L189)

***

### updatedAt

\> **updatedAt**: `Date`

#### Defined in

[src/models/FundraisingCampaign.ts:195](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/models/FundraisingCampaign.ts#L195)
