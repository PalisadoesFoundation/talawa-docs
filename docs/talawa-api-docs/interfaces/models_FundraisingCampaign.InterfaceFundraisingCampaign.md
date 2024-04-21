[talawa-api](../README.md) / [Exports](../modules.md) / [models/FundraisingCampaign](../modules/models_FundraisingCampaign.md) / InterfaceFundraisingCampaign

# Interface: InterfaceFundraisingCampaign

[models/FundraisingCampaign](../modules/models_FundraisingCampaign.md).InterfaceFundraisingCampaign

This is the structure of a file

**`Param`**

parent fund to which campaign belongs

**`Param`**

Name of the campaign

**`Param`**

Start date of the campaign

**`Param`**

End date of the campaign

**`Param`**

Goal of the campaign

**`Param`**

Currency of the campaign

**`Param`**

Timestamp of creation

**`Param`**

Timestamp of updation

## Table of contents

### Properties

- [\_id](models_FundraisingCampaign.InterfaceFundraisingCampaign.md#_id)
- [createdAt](models_FundraisingCampaign.InterfaceFundraisingCampaign.md#createdat)
- [currency](models_FundraisingCampaign.InterfaceFundraisingCampaign.md#currency)
- [endDate](models_FundraisingCampaign.InterfaceFundraisingCampaign.md#enddate)
- [fundId](models_FundraisingCampaign.InterfaceFundraisingCampaign.md#fundid)
- [fundingGoal](models_FundraisingCampaign.InterfaceFundraisingCampaign.md#fundinggoal)
- [name](models_FundraisingCampaign.InterfaceFundraisingCampaign.md#name)
- [pledges](models_FundraisingCampaign.InterfaceFundraisingCampaign.md#pledges)
- [startDate](models_FundraisingCampaign.InterfaceFundraisingCampaign.md#startdate)
- [updatedAt](models_FundraisingCampaign.InterfaceFundraisingCampaign.md#updatedat)

## Properties

### \_id

• **\_id**: `ObjectId`

#### Defined in

[src/models/FundraisingCampaign.ts:185](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/models/FundraisingCampaign.ts#L185)

___

### createdAt

• **createdAt**: `Date`

#### Defined in

[src/models/FundraisingCampaign.ts:193](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/models/FundraisingCampaign.ts#L193)

___

### currency

• **currency**: [`CurrencyType`](../enums/models_FundraisingCampaign.CurrencyType.md)

#### Defined in

[src/models/FundraisingCampaign.ts:191](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/models/FundraisingCampaign.ts#L191)

___

### endDate

• **endDate**: `Date`

#### Defined in

[src/models/FundraisingCampaign.ts:189](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/models/FundraisingCampaign.ts#L189)

___

### fundId

• **fundId**: `PopulatedDoc`\<[`InterfaceFund`](models_Fund.InterfaceFund.md) & `Document`\>

#### Defined in

[src/models/FundraisingCampaign.ts:186](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/models/FundraisingCampaign.ts#L186)

___

### fundingGoal

• **fundingGoal**: `number`

#### Defined in

[src/models/FundraisingCampaign.ts:190](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/models/FundraisingCampaign.ts#L190)

___

### name

• **name**: `string`

#### Defined in

[src/models/FundraisingCampaign.ts:187](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/models/FundraisingCampaign.ts#L187)

___

### pledges

• **pledges**: `PopulatedDoc`\<[`InterfaceFundraisingCampaignPledges`](models_FundraisingCampaignPledge.InterfaceFundraisingCampaignPledges.md) & `Document`\>[]

#### Defined in

[src/models/FundraisingCampaign.ts:192](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/models/FundraisingCampaign.ts#L192)

___

### startDate

• **startDate**: `Date`

#### Defined in

[src/models/FundraisingCampaign.ts:188](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/models/FundraisingCampaign.ts#L188)

___

### updatedAt

• **updatedAt**: `Date`

#### Defined in

[src/models/FundraisingCampaign.ts:194](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/models/FundraisingCampaign.ts#L194)
