[talawa-api](../README.md) / [Exports](../modules.md) / [models/AppUserProfile](../modules/models_AppUserProfile.md) / InterfaceAppUserProfile

# Interface: InterfaceAppUserProfile

[models/AppUserProfile](../modules/models_AppUserProfile.md).InterfaceAppUserProfile

## Table of contents

### Properties

- [\_id](models_AppUserProfile.InterfaceAppUserProfile.md#_id)
- [adminFor](models_AppUserProfile.InterfaceAppUserProfile.md#adminfor)
- [appLanguageCode](models_AppUserProfile.InterfaceAppUserProfile.md#applanguagecode)
- [createdEvents](models_AppUserProfile.InterfaceAppUserProfile.md#createdevents)
- [createdOrganizations](models_AppUserProfile.InterfaceAppUserProfile.md#createdorganizations)
- [eventAdmin](models_AppUserProfile.InterfaceAppUserProfile.md#eventadmin)
- [isSuperAdmin](models_AppUserProfile.InterfaceAppUserProfile.md#issuperadmin)
- [pluginCreationAllowed](models_AppUserProfile.InterfaceAppUserProfile.md#plugincreationallowed)
- [token](models_AppUserProfile.InterfaceAppUserProfile.md#token)
- [tokenVersion](models_AppUserProfile.InterfaceAppUserProfile.md#tokenversion)
- [userId](models_AppUserProfile.InterfaceAppUserProfile.md#userid)

## Properties

### \_id

• **\_id**: `ObjectId`

#### Defined in

[src/models/AppUserProfile.ts:9](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/AppUserProfile.ts#L9)

___

### adminFor

• **adminFor**: `PopulatedDoc`\<[`InterfaceOrganization`](models_Organization.InterfaceOrganization.md) & `Document`\>[]

#### Defined in

[src/models/AppUserProfile.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/AppUserProfile.ts#L11)

___

### appLanguageCode

• **appLanguageCode**: `string`

#### Defined in

[src/models/AppUserProfile.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/AppUserProfile.ts#L12)

___

### createdEvents

• **createdEvents**: `PopulatedDoc`\<[`InterfaceEvent`](models_Event.InterfaceEvent.md) & `Document`\>[]

#### Defined in

[src/models/AppUserProfile.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/AppUserProfile.ts#L13)

___

### createdOrganizations

• **createdOrganizations**: `PopulatedDoc`\<[`InterfaceOrganization`](models_Organization.InterfaceOrganization.md) & `Document`\>[]

#### Defined in

[src/models/AppUserProfile.ts:14](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/AppUserProfile.ts#L14)

___

### eventAdmin

• **eventAdmin**: `PopulatedDoc`\<[`InterfaceEvent`](models_Event.InterfaceEvent.md) & `Document`\>[]

#### Defined in

[src/models/AppUserProfile.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/AppUserProfile.ts#L15)

___

### isSuperAdmin

• **isSuperAdmin**: `boolean`

#### Defined in

[src/models/AppUserProfile.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/AppUserProfile.ts#L19)

___

### pluginCreationAllowed

• **pluginCreationAllowed**: `boolean`

#### Defined in

[src/models/AppUserProfile.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/AppUserProfile.ts#L16)

___

### token

• **token**: `undefined` \| `string`

#### Defined in

[src/models/AppUserProfile.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/AppUserProfile.ts#L17)

___

### tokenVersion

• **tokenVersion**: `number`

#### Defined in

[src/models/AppUserProfile.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/AppUserProfile.ts#L18)

___

### userId

• **userId**: `PopulatedDoc`\<[`InterfaceUser`](models_User.InterfaceUser.md) & `Document`\>

#### Defined in

[src/models/AppUserProfile.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/AppUserProfile.ts#L10)
