[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [libraries/errors/applicationError](../README.md) / ApplicationError

# Class: ApplicationError

This class is responsible for finding the application errors. It adds those errors to superclass called Error.

## Extends

- `Error`

## Extended by

- [`ImageSizeLimitExceeded`](../../ImageSizeLimitExceeded/classes/ImageSizeLimitExceeded.md)
- [`ConflictError`](../../conflictError/classes/ConflictError.md)
- [`InputValidationError`](../../inputValidationError/classes/InputValidationError.md)
- [`InternalServerError`](../../internalServerError/classes/InternalServerError.md)
- [`InvalidFileTypeError`](../../invalidFileTypeError/classes/InvalidFileTypeError.md)
- [`NotFoundError`](../../notFoundError/classes/NotFoundError.md)
- [`UnauthenticatedError`](../../unauthenticatedError/classes/UnauthenticatedError.md)
- [`UnauthorizedError`](../../unauthorizedError/classes/UnauthorizedError.md)
- [`ValidationError`](../../validationError/classes/ValidationError.md)

## Constructors

### new ApplicationError()

\> **new ApplicationError**(`errors`, `httpCode`, `message`): [`ApplicationError`](ApplicationError.md)

#### Parameters

• **errors**: [`InterfaceError`](../interfaces/InterfaceError.md)[]

• **httpCode**: `number` = `422`

• **message**: `string` = `"Error"`

#### Returns

[`ApplicationError`](ApplicationError.md)

#### Overrides

`Error.constructor`

#### Defined in

[src/libraries/errors/applicationError.ts:14](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/libraries/errors/applicationError.ts#L14)

## Properties

### errors

\> **errors**: [`InterfaceError`](../interfaces/InterfaceError.md)[]

#### Defined in

[src/libraries/errors/applicationError.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/libraries/errors/applicationError.ts#L11)

***

### httpCode

\> **httpCode**: `number`

#### Defined in

[src/libraries/errors/applicationError.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/libraries/errors/applicationError.ts#L12)

***

### message

\> **message**: `string`

#### Inherited from

`Error.message`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

\> **name**: `string`

#### Inherited from

`Error.name`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

\> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### prepareStackTrace()?

\> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) =\> `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:28

***

### stackTraceLimit

\> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node\_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace()

\> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:21
