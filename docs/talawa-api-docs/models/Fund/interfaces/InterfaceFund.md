[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [models/Fund](../README.md) / InterfaceFund

# Interface: InterfaceFund

This is an interface representing a document for a fund in the database (MongoDB).
This interface defines the structure and types of data that a fund document will hold.

## Properties

### \_id

\> **\_id**: `ObjectId`

#### Defined in

[src/models/Fund.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/models/Fund.ts#L11)

***

### campaigns

\> **campaigns**: `PopulatedDoc`\<[`InterfaceFundraisingCampaign`](../../FundraisingCampaign/interfaces/InterfaceFundraisingCampaign.md) & `Document`\>[]

#### Defined in

[src/models/Fund.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/models/Fund.ts#L19)

***

### createdAt

\> **createdAt**: `Date`

#### Defined in

[src/models/Fund.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/models/Fund.ts#L20)

***

### creatorId

\> **creatorId**: `PopulatedDoc`\<[`InterfaceUser`](../../User/interfaces/InterfaceUser.md) & `Document`\>

#### Defined in

[src/models/Fund.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/models/Fund.ts#L18)

***

### isArchived

\> **isArchived**: `boolean`

#### Defined in

[src/models/Fund.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/models/Fund.ts#L17)

***

### isDefault

\> **isDefault**: `boolean`

#### Defined in

[src/models/Fund.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/models/Fund.ts#L16)

***

### name

\> **name**: `string`

#### Defined in

[src/models/Fund.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/models/Fund.ts#L13)

***

### organizationId

\> **organizationId**: `ObjectId`

#### Defined in

[src/models/Fund.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/models/Fund.ts#L12)

***

### refrenceNumber

\> **refrenceNumber**: `string`

#### Defined in

[src/models/Fund.ts:14](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/models/Fund.ts#L14)

***

### taxDeductible

\> **taxDeductible**: `boolean`

#### Defined in

[src/models/Fund.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/models/Fund.ts#L15)

***

### updatedAt

\> **updatedAt**: `Date`

#### Defined in

[src/models/Fund.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/models/Fund.ts#L21)
