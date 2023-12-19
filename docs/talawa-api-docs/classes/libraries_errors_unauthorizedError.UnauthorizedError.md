[talawa-api](../README.md) / [Exports](../modules.md) / [libraries/errors/unauthorizedError](../modules/libraries_errors_unauthorizedError.md) / UnauthorizedError

# Class: UnauthorizedError

[libraries/errors/unauthorizedError](../modules/libraries_errors_unauthorizedError.md).UnauthorizedError

This class detects unauthorized errors and sends those errors to the superclass ApplicationError.

## Hierarchy

- [`ApplicationError`](libraries_errors_applicationError.ApplicationError.md)

  ↳ **`UnauthorizedError`**

## Table of contents

### Constructors

- [constructor](libraries_errors_unauthorizedError.UnauthorizedError.md#constructor)

### Properties

- [errors](libraries_errors_unauthorizedError.UnauthorizedError.md#errors)
- [httpCode](libraries_errors_unauthorizedError.UnauthorizedError.md#httpcode)
- [message](libraries_errors_unauthorizedError.UnauthorizedError.md#message)
- [name](libraries_errors_unauthorizedError.UnauthorizedError.md#name)
- [stack](libraries_errors_unauthorizedError.UnauthorizedError.md#stack)
- [prepareStackTrace](libraries_errors_unauthorizedError.UnauthorizedError.md#preparestacktrace)
- [stackTraceLimit](libraries_errors_unauthorizedError.UnauthorizedError.md#stacktracelimit)

### Methods

- [captureStackTrace](libraries_errors_unauthorizedError.UnauthorizedError.md#capturestacktrace)

## Constructors

### constructor

• **new UnauthorizedError**(`message?`, `code?`, `param?`, `metadata?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `"UnauthorizedError"` |
| `code` | ``null`` \| `string` | `null` |
| `param` | ``null`` \| `string` | `null` |
| `metadata` | `Record`\<`any`, `any`\> | `\{}` |

#### Overrides

[ApplicationError](libraries_errors_applicationError.ApplicationError.md).[constructor](libraries_errors_applicationError.ApplicationError.md#constructor)

#### Defined in

src/libraries/errors/unauthorizedError.ts:6

## Properties

### errors

• **errors**: [`Interface_Error`](../interfaces/libraries_errors_applicationError.Interface_Error.md)[]

#### Inherited from

[ApplicationError](libraries_errors_applicationError.ApplicationError.md).[errors](libraries_errors_applicationError.ApplicationError.md#errors)

#### Defined in

src/libraries/errors/applicationError.ts:11

___

### httpCode

• **httpCode**: `number`

#### Inherited from

[ApplicationError](libraries_errors_applicationError.ApplicationError.md).[httpCode](libraries_errors_applicationError.ApplicationError.md#httpcode)

#### Defined in

src/libraries/errors/applicationError.ts:12

___

### message

• **message**: `string`

#### Inherited from

[ApplicationError](libraries_errors_applicationError.ApplicationError.md).[message](libraries_errors_applicationError.ApplicationError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

[ApplicationError](libraries_errors_applicationError.ApplicationError.md).[name](libraries_errors_applicationError.ApplicationError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[ApplicationError](libraries_errors_applicationError.ApplicationError.md).[stack](libraries_errors_applicationError.ApplicationError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[ApplicationError](libraries_errors_applicationError.ApplicationError.md).[prepareStackTrace](libraries_errors_applicationError.ApplicationError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[ApplicationError](libraries_errors_applicationError.ApplicationError.md).[stackTraceLimit](libraries_errors_applicationError.ApplicationError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[ApplicationError](libraries_errors_applicationError.ApplicationError.md).[captureStackTrace](libraries_errors_applicationError.ApplicationError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4
