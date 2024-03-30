[talawa-api](../README.md) / [Exports](../modules.md) / [models/Fund](../modules/models_Fund.md) / InterfaceFund

# Interface: InterfaceFund

[models/Fund](../modules/models_Fund.md).InterfaceFund

This is an interface representing a document for fund in the database(MongoDB).

## Table of contents

### Properties

- [\_id](models_Fund.InterfaceFund.md#_id)
- [campaigns](models_Fund.InterfaceFund.md#campaigns)
- [createdAt](models_Fund.InterfaceFund.md#createdat)
- [creatorId](models_Fund.InterfaceFund.md#creatorid)
- [isArchived](models_Fund.InterfaceFund.md#isarchived)
- [isDefault](models_Fund.InterfaceFund.md#isdefault)
- [name](models_Fund.InterfaceFund.md#name)
- [organizationId](models_Fund.InterfaceFund.md#organizationid)
- [refrenceNumber](models_Fund.InterfaceFund.md#refrencenumber)
- [taxDeductible](models_Fund.InterfaceFund.md#taxdeductible)
- [updatedAt](models_Fund.InterfaceFund.md#updatedat)

## Properties

### \_id

• **\_id**: `ObjectId`

#### Defined in

[src/models/Fund.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/models/Fund.ts#L10)

___

### campaigns

• **campaigns**: `PopulatedDoc`\<[`InterfaceFundraisingCampaign`](models_FundraisingCampaign.InterfaceFundraisingCampaign.md) & `Document`\>[]

#### Defined in

[src/models/Fund.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/models/Fund.ts#L18)

___

### createdAt

• **createdAt**: `Date`

#### Defined in

[src/models/Fund.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/models/Fund.ts#L19)

___

### creatorId

• **creatorId**: `PopulatedDoc`\<[`InterfaceUser`](models_User.InterfaceUser.md) & `Document`\>

#### Defined in

[src/models/Fund.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/models/Fund.ts#L17)

___

### isArchived

• **isArchived**: `boolean`

#### Defined in

[src/models/Fund.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/models/Fund.ts#L16)

___

### isDefault

• **isDefault**: `boolean`

#### Defined in

[src/models/Fund.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/models/Fund.ts#L15)

___

### name

• **name**: `string`

#### Defined in

[src/models/Fund.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/models/Fund.ts#L12)

___

### organizationId

• **organizationId**: `ObjectId`

#### Defined in

[src/models/Fund.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/models/Fund.ts#L11)

___

### refrenceNumber

• **refrenceNumber**: `string`

#### Defined in

[src/models/Fund.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/models/Fund.ts#L13)

___

### taxDeductible

• **taxDeductible**: `boolean`

#### Defined in

[src/models/Fund.ts:14](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/models/Fund.ts#L14)

___

### updatedAt

• **updatedAt**: `Date`

#### Defined in

[src/models/Fund.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/models/Fund.ts#L20)
