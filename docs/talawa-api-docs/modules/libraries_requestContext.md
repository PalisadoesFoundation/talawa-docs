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

• `Const` **requestContextNamespace**: `Namespace`

#### Defined in

src/libraries/requestContext.ts:8

## Functions

### getRequestContextValue

▸ **getRequestContextValue**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

#### Defined in

src/libraries/requestContext.ts:18

___

### init

▸ **init**\<`T`\>(`options?`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Interface_InitOptions`\<`T`\> |

#### Returns

`Promise`\<`T`\>

#### Defined in

src/libraries/requestContext.ts:44

___

### middleware

▸ **middleware**(): (`req`: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>, `res`: `Response`\<`any`, `Record`\<`string`, `any`\>\>, `next`: `NextFunction`) => `void`

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

src/libraries/requestContext.ts:27

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

src/libraries/requestContext.ts:22

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

src/libraries/requestContext.ts:14

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

src/libraries/requestContext.ts:60

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

src/libraries/requestContext.ts:68
