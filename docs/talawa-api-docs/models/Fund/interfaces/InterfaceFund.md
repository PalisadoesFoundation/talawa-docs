[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [models/Fund](../README.md) / InterfaceFund

# Interface: InterfaceFund

This is an interface representing a document for fund in the database(MongoDB).

## Properties

### \_id

\> **\_id**: `ObjectId`

#### Defined in

[src/models/Fund.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/models/Fund.ts#L10)

***

### campaigns

\> **campaigns**: `PopulatedDoc`\<[`InterfaceFundraisingCampaign`](../../FundraisingCampaign/interfaces/InterfaceFundraisingCampaign.md) & `Document`\>[]

#### Defined in

[src/models/Fund.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/models/Fund.ts#L18)

***

### createdAt

\> **createdAt**: `Date`

#### Defined in

[src/models/Fund.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/models/Fund.ts#L19)

***

### creatorId

\> **creatorId**: `PopulatedDoc`\<[`InterfaceUser`](../../User/interfaces/InterfaceUser.md) & `Document`\>

#### Defined in

[src/models/Fund.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/models/Fund.ts#L17)

***

### isArchived

\> **isArchived**: `boolean`

#### Defined in

[src/models/Fund.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/models/Fund.ts#L16)

***

### isDefault

\> **isDefault**: `boolean`

#### Defined in

[src/models/Fund.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/models/Fund.ts#L15)

***

### name

\> **name**: `string`

#### Defined in

[src/models/Fund.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/models/Fund.ts#L12)

***

### organizationId

\> **organizationId**: `ObjectId`

#### Defined in

[src/models/Fund.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/models/Fund.ts#L11)

***

### refrenceNumber

\> **refrenceNumber**: `string`

#### Defined in

[src/models/Fund.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/models/Fund.ts#L13)

***

### taxDeductible

\> **taxDeductible**: `boolean`

#### Defined in

[src/models/Fund.ts:14](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/models/Fund.ts#L14)

***

### updatedAt

\> **updatedAt**: `Date`

#### Defined in

[src/models/Fund.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/models/Fund.ts#L20)
