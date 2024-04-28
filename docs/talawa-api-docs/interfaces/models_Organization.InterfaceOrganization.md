[talawa-api](../README.md) / [Exports](../modules.md) / [models/Organization](../modules/models_Organization.md) / InterfaceOrganization

# Interface: InterfaceOrganization

[models/Organization](../modules/models_Organization.md).InterfaceOrganization

This is an interface that represents a database(MongoDB) document for Organization.

## Table of contents

### Properties

- [\_id](models_Organization.InterfaceOrganization.md#_id)
- [address](models_Organization.InterfaceOrganization.md#address)
- [admins](models_Organization.InterfaceOrganization.md#admins)
- [advertisements](models_Organization.InterfaceOrganization.md#advertisements)
- [apiUrl](models_Organization.InterfaceOrganization.md#apiurl)
- [blockedUsers](models_Organization.InterfaceOrganization.md#blockedusers)
- [createdAt](models_Organization.InterfaceOrganization.md#createdat)
- [creatorId](models_Organization.InterfaceOrganization.md#creatorid)
- [customFields](models_Organization.InterfaceOrganization.md#customfields)
- [description](models_Organization.InterfaceOrganization.md#description)
- [funds](models_Organization.InterfaceOrganization.md#funds)
- [groupChats](models_Organization.InterfaceOrganization.md#groupchats)
- [image](models_Organization.InterfaceOrganization.md#image)
- [members](models_Organization.InterfaceOrganization.md#members)
- [membershipRequests](models_Organization.InterfaceOrganization.md#membershiprequests)
- [name](models_Organization.InterfaceOrganization.md#name)
- [pinnedPosts](models_Organization.InterfaceOrganization.md#pinnedposts)
- [posts](models_Organization.InterfaceOrganization.md#posts)
- [status](models_Organization.InterfaceOrganization.md#status)
- [updatedAt](models_Organization.InterfaceOrganization.md#updatedat)
- [userRegistrationRequired](models_Organization.InterfaceOrganization.md#userregistrationrequired)
- [visibleInSearch](models_Organization.InterfaceOrganization.md#visibleinsearch)

## Properties

### \_id

• **\_id**: `ObjectId`

#### Defined in

[src/models/Organization.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L17)

___

### address

• **address**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `city` | `string` |
| `countryCode` | `string` |
| `dependentLocality` | `string` |
| `line1` | `string` |
| `line2` | `string` |
| `postalCode` | `string` |
| `sortingCode` | `string` |
| `state` | `string` |

#### Defined in

[src/models/Organization.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L22)

___

### admins

• **admins**: `any`[]

#### Defined in

[src/models/Organization.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L36)

___

### advertisements

• **advertisements**: `any`

#### Defined in

[src/models/Organization.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L32)

___

### apiUrl

• **apiUrl**: `undefined` \| `string`

#### Defined in

[src/models/Organization.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L18)

___

### blockedUsers

• **blockedUsers**: `any`[]

#### Defined in

[src/models/Organization.ts:41](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L41)

___

### createdAt

• **createdAt**: `Date`

#### Defined in

[src/models/Organization.ts:43](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L43)

___

### creatorId

• **creatorId**: `any`

#### Defined in

[src/models/Organization.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L33)

___

### customFields

• **customFields**: `any`[]

#### Defined in

[src/models/Organization.ts:42](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L42)

___

### description

• **description**: `string`

#### Defined in

[src/models/Organization.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L21)

___

### funds

• **funds**: `any`[]

#### Defined in

[src/models/Organization.ts:46](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L46)

___

### groupChats

• **groupChats**: `any`[]

#### Defined in

[src/models/Organization.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L37)

___

### image

• **image**: `undefined` \| `string`

#### Defined in

[src/models/Organization.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L19)

___

### members

• **members**: `any`[]

#### Defined in

[src/models/Organization.ts:35](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L35)

___

### membershipRequests

• **membershipRequests**: `any`[]

#### Defined in

[src/models/Organization.ts:40](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L40)

___

### name

• **name**: `string`

#### Defined in

[src/models/Organization.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L20)

___

### pinnedPosts

• **pinnedPosts**: `any`[]

#### Defined in

[src/models/Organization.ts:39](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L39)

___

### posts

• **posts**: `any`[]

#### Defined in

[src/models/Organization.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L38)

___

### status

• **status**: `string`

#### Defined in

[src/models/Organization.ts:34](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L34)

___

### updatedAt

• **updatedAt**: `Date`

#### Defined in

[src/models/Organization.ts:44](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L44)

___

### userRegistrationRequired

• **userRegistrationRequired**: `boolean`

#### Defined in

[src/models/Organization.ts:45](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L45)

___

### visibleInSearch

• **visibleInSearch**: `boolean`

#### Defined in

[src/models/Organization.ts:47](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Organization.ts#L47)
