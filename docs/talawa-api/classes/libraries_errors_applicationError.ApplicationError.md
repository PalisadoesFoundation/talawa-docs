[talawa-api](../README.md) / [Exports](../modules.md) / [libraries/errors/applicationError](../modules/libraries_errors_applicationError.md) / ApplicationError

# Class: ApplicationError

[libraries/errors/applicationError](../modules/libraries_errors_applicationError.md).ApplicationError

This class is responsible for finding the application errors. It adds those errors to superclass called Error.

## Hierarchy

- `Error`

  ↳ **`ApplicationError`**

  ↳↳ [`ConflictError`](libraries_errors_conflictError.ConflictError.md)

  ↳↳ [`InputValidationError`](libraries_errors_inputValidationError.InputValidationError.md)

  ↳↳ [`InternalServerError`](libraries_errors_internalServerError.InternalServerError.md)

  ↳↳ [`InvalidFileTypeError`](libraries_errors_invalidFileTypeError.InvalidFileTypeError.md)

  ↳↳ [`NotFoundError`](libraries_errors_notFoundError.NotFoundError.md)

  ↳↳ [`UnauthenticatedError`](libraries_errors_unauthenticatedError.UnauthenticatedError.md)

  ↳↳ [`UnauthorizedError`](libraries_errors_unauthorizedError.UnauthorizedError.md)

  ↳↳ [`ValidationError`](libraries_errors_validationError.ValidationError.md)

## Table of contents

### Constructors

- [constructor](libraries_errors_applicationError.ApplicationError.md#constructor)

### Properties

- [errors](libraries_errors_applicationError.ApplicationError.md#errors)
- [httpCode](libraries_errors_applicationError.ApplicationError.md#httpcode)
- [message](libraries_errors_applicationError.ApplicationError.md#message)
- [name](libraries_errors_applicationError.ApplicationError.md#name)
- [stack](libraries_errors_applicationError.ApplicationError.md#stack)
- [prepareStackTrace](libraries_errors_applicationError.ApplicationError.md#preparestacktrace)
- [stackTraceLimit](libraries_errors_applicationError.ApplicationError.md#stacktracelimit)

### Methods

- [captureStackTrace](libraries_errors_applicationError.ApplicationError.md#capturestacktrace)

## Constructors

### constructor

• **new ApplicationError**(`errors`, `httpCode?`, `message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `errors` | [`Interface_Error`](../interfaces/libraries_errors_applicationError.Interface_Error.md)[] | `undefined` |
| `httpCode` | `number` | `422` |
| `message` | `string` | `"Error"` |

#### Overrides

Error.constructor

#### Defined in

src/libraries/errors/applicationError.ts:14

## Properties

### errors

• **errors**: [`Interface_Error`](../interfaces/libraries_errors_applicationError.Interface_Error.md)[]

#### Defined in

src/libraries/errors/applicationError.ts:11

___

### httpCode

• **httpCode**: `number`

#### Defined in

src/libraries/errors/applicationError.ts:12

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

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

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
