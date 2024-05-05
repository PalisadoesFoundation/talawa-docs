[talawa-api](../README.md) / [Exports](../modules.md) / libraries/requestContext

# Module: libraries/requestContext

## Table of contents

### Variables

- [requestContextNamespace](libraries_requestContext.md#requestcontextnamespace)

### Functions

- [getRequestContextValue](libraries_requestContext.md#getrequestcontextvalue)
- [init](libraries_requestContext.md#init)
- [middleware](libraries_requestContext.md#middleware)
- [setRequestContext](libraries_requestContext.md#setrequestcontext)
- [setRequestContextValue](libraries_requestContext.md#setrequestcontextvalue)
- [translate](libraries_requestContext.md#translate)
- [translatePlural](libraries_requestContext.md#translateplural)

## Variables

### requestContextNamespace

• `Const` **requestContextNamespace**: `Namespace`\<`Record`\<`string`, `any`\>\>

#### Defined in

[src/libraries/requestContext.ts:6](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/libraries/requestContext.ts#L6)

## Functions

### getRequestContextValue

▸ **getRequestContextValue**\<`T`\>(`key`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`T`

#### Defined in

[src/libraries/requestContext.ts:14](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/libraries/requestContext.ts#L14)

___

### init

▸ **init**\<`T`\>(`options?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `InterfaceInitOptions`\<`T`\> |

#### Returns

`T`

#### Defined in

[src/libraries/requestContext.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/libraries/requestContext.ts#L38)

___

### middleware

▸ **middleware**(): (`req`: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>, `res`: `Response`\<`any`, `Record`\<`string`, `any`\>\>, `next`: `NextFunction`) =\> `void`

#### Returns

`fn`

▸ (`req`, `res`, `next`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `res` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |
| `next` | `NextFunction` |

##### Returns

`void`

#### Defined in

[src/libraries/requestContext.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/libraries/requestContext.ts#L23)

___

### setRequestContext

▸ **setRequestContext**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Defined in

[src/libraries/requestContext.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/libraries/requestContext.ts#L18)

___

### setRequestContextValue

▸ **setRequestContextValue**\<`T`\>(`key`, `value`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`T`

#### Defined in

[src/libraries/requestContext.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/libraries/requestContext.ts#L10)

___

### translate

▸ **translate**(`...args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`any`

#### Defined in

[src/libraries/requestContext.ts:68](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/libraries/requestContext.ts#L68)

___

### translatePlural

▸ **translatePlural**(`...args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`any`

#### Defined in

[src/libraries/requestContext.ts:76](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/libraries/requestContext.ts#L76)
