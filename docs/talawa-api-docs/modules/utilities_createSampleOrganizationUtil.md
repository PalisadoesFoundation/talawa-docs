[talawa-api](../README.md) / [Exports](../modules.md) / utilities/createSampleOrganizationUtil

# Module: utilities/createSampleOrganizationUtil

## Table of contents

### Functions

- [createSampleOrganization](utilities_createSampleOrganizationUtil.md#createsampleorganization)
- [generateEventData](utilities_createSampleOrganizationUtil.md#generateeventdata)
- [generatePostData](utilities_createSampleOrganizationUtil.md#generatepostdata)
- [generateRandomPlugins](utilities_createSampleOrganizationUtil.md#generaterandomplugins)
- [generateUserData](utilities_createSampleOrganizationUtil.md#generateuserdata)

## Functions

### createSampleOrganization

▸ **createSampleOrganization**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/utilities/createSampleOrganizationUtil.ts:239](https://github.com/PalisadoesFoundation/talawa-api/blob/65069df/src/utilities/createSampleOrganizationUtil.ts#L239)

___

### generateEventData

▸ **generateEventData**(`users`, `organizationId`): `Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `users` | [`InterfaceUser`](../interfaces/models_User.InterfaceUser.md)[] |
| `organizationId` | `string` |

#### Returns

`Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

#### Defined in

[src/utilities/createSampleOrganizationUtil.ts:95](https://github.com/PalisadoesFoundation/talawa-api/blob/65069df/src/utilities/createSampleOrganizationUtil.ts#L95)

___

### generatePostData

▸ **generatePostData**(`users`, `organizationId`): `Promise`\<[`InterfacePost`](../interfaces/models_Post.InterfacePost.md) & `Document`\<`any`, `any`, [`InterfacePost`](../interfaces/models_Post.InterfacePost.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `users` | [`InterfaceUser`](../interfaces/models_User.InterfaceUser.md)[] |
| `organizationId` | `string` |

#### Returns

`Promise`\<[`InterfacePost`](../interfaces/models_Post.InterfacePost.md) & `Document`\<`any`, `any`, [`InterfacePost`](../interfaces/models_Post.InterfacePost.md)\>\>

#### Defined in

[src/utilities/createSampleOrganizationUtil.ts:152](https://github.com/PalisadoesFoundation/talawa-api/blob/65069df/src/utilities/createSampleOrganizationUtil.ts#L152)

___

### generateRandomPlugins

▸ **generateRandomPlugins**(`numberOfPlugins`, `users`): `Promise`\<`Promise`\<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `numberOfPlugins` | `number` |
| `users` | `string`[] |

#### Returns

`Promise`\<`Promise`\<`any`\>[]\>

#### Defined in

[src/utilities/createSampleOrganizationUtil.ts:209](https://github.com/PalisadoesFoundation/talawa-api/blob/65069df/src/utilities/createSampleOrganizationUtil.ts#L209)

___

### generateUserData

▸ **generateUserData**(`organizationId`, `userType`): `Promise`\<\{ `appUserProfile`: `Document`\<`unknown`, \{\}, [`InterfaceAppUserProfile`](../interfaces/models_AppUserProfile.InterfaceAppUserProfile.md)\> & [`InterfaceAppUserProfile`](../interfaces/models_AppUserProfile.InterfaceAppUserProfile.md) & `Required`\<\{ `_id`: `ObjectId`  \}\> ; `user`: `Document`\<`unknown`, \{\}, [`InterfaceUser`](../interfaces/models_User.InterfaceUser.md)\> & [`InterfaceUser`](../interfaces/models_User.InterfaceUser.md) & `Required`\<\{ `_id`: `ObjectId`  \}\>  \}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `organizationId` | `string` |
| `userType` | `string` |

#### Returns

`Promise`\<\{ `appUserProfile`: `Document`\<`unknown`, \{\}, [`InterfaceAppUserProfile`](../interfaces/models_AppUserProfile.InterfaceAppUserProfile.md)\> & [`InterfaceAppUserProfile`](../interfaces/models_AppUserProfile.InterfaceAppUserProfile.md) & `Required`\<\{ `_id`: `ObjectId`  \}\> ; `user`: `Document`\<`unknown`, \{\}, [`InterfaceUser`](../interfaces/models_User.InterfaceUser.md)\> & [`InterfaceUser`](../interfaces/models_User.InterfaceUser.md) & `Required`\<\{ `_id`: `ObjectId`  \}\>  \}\>

#### Defined in

[src/utilities/createSampleOrganizationUtil.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/65069df/src/utilities/createSampleOrganizationUtil.ts#L17)
