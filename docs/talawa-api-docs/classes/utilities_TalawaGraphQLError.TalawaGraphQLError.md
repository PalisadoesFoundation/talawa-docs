[talawa-api](../README.md) / [Exports](../modules.md) / [utilities/TalawaGraphQLError](../modules/utilities_TalawaGraphQLError.md) / TalawaGraphQLError

# Class: TalawaGraphQLError

[utilities/TalawaGraphQLError](../modules/utilities_TalawaGraphQLError.md).TalawaGraphQLError

A custom class extended from the GraphQLError class to standardize the errors returned from talawa-api's
graphQL resolvers. This standardization prevents the talawa-api contributers from returning undocumented,
arbitrary errors to the client applications in the graphQL query responses. This standardization also helps
the client developers to know beforehand what kind of errors they can expect from talawa-api's graphQL
responses, helping them design better UI experiences for user feedback.

If necessary, the localization of the error messages(i18n) can be done within the graphQL resolvers where the
TalawaGraphQLError class is used.

This is the definition of a graphQL resolver for resolving the user record of the best friend of a user:-

**`Example`**

```ts
export const bestFriend = async (parent) =\> \{
 const user = await dbClient.query.user.findFirst(\{
     where(fields, operators) \{
         return operators.eq(fields.id, parent.bestFriendId);
     \}
 \});

 if (user === undefined) \{
     throw new TalawaGraphQLError("Best friend not found", \{
         code: "RESOURCE_NOT_FOUND"
     \})
 \}

 return user;
\}
```

## Hierarchy

- `GraphQLError`

  ↳ **`TalawaGraphQLError`**

## Table of contents

### Constructors

- [constructor](utilities_TalawaGraphQLError.TalawaGraphQLError.md#constructor)

### Properties

- [extensions](utilities_TalawaGraphQLError.TalawaGraphQLError.md#extensions)
- [locations](utilities_TalawaGraphQLError.TalawaGraphQLError.md#locations)
- [message](utilities_TalawaGraphQLError.TalawaGraphQLError.md#message)
- [name](utilities_TalawaGraphQLError.TalawaGraphQLError.md#name)
- [nodes](utilities_TalawaGraphQLError.TalawaGraphQLError.md#nodes)
- [originalError](utilities_TalawaGraphQLError.TalawaGraphQLError.md#originalerror)
- [path](utilities_TalawaGraphQLError.TalawaGraphQLError.md#path)
- [positions](utilities_TalawaGraphQLError.TalawaGraphQLError.md#positions)
- [source](utilities_TalawaGraphQLError.TalawaGraphQLError.md#source)
- [stack](utilities_TalawaGraphQLError.TalawaGraphQLError.md#stack)
- [prepareStackTrace](utilities_TalawaGraphQLError.TalawaGraphQLError.md#preparestacktrace)
- [stackTraceLimit](utilities_TalawaGraphQLError.TalawaGraphQLError.md#stacktracelimit)

### Accessors

- [[toStringTag]](utilities_TalawaGraphQLError.TalawaGraphQLError.md#[tostringtag])

### Methods

- [toJSON](utilities_TalawaGraphQLError.TalawaGraphQLError.md#tojson)
- [toString](utilities_TalawaGraphQLError.TalawaGraphQLError.md#tostring)
- [captureStackTrace](utilities_TalawaGraphQLError.TalawaGraphQLError.md#capturestacktrace)

## Constructors

### constructor

• **new TalawaGraphQLError**(`message`, `options`): [`TalawaGraphQLError`](utilities_TalawaGraphQLError.TalawaGraphQLError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `options` | `GraphQLErrorOptions` & \{ `extensions`: `TalawaGraphQLErrorExtensions`  \} |

#### Returns

[`TalawaGraphQLError`](utilities_TalawaGraphQLError.TalawaGraphQLError.md)

#### Overrides

GraphQLError.constructor

#### Defined in

[src/utilities/TalawaGraphQLError.ts:189](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/utilities/TalawaGraphQLError.ts#L189)

## Properties

### extensions

• `Readonly` **extensions**: `GraphQLErrorExtensions`

Extension fields to add to the formatted error.

#### Inherited from

GraphQLError.extensions

#### Defined in

node_modules/graphql/error/GraphQLError.d.ts:77

___

### locations

• `Readonly` **locations**: `undefined` \| readonly `SourceLocation`[]

An array of `\{ line, column \}` locations within the source GraphQL document
which correspond to this error.

Errors during validation often contain multiple locations, for example to
point out two things with the same name. Errors during execution include a
single location, the field which produced the error.

Enumerable, and appears in the result of JSON.stringify().

#### Inherited from

GraphQLError.locations

#### Defined in

node_modules/graphql/error/GraphQLError.d.ts:46

___

### message

• **message**: `string`

#### Inherited from

GraphQLError.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077

___

### name

• **name**: `string`

#### Inherited from

GraphQLError.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

___

### nodes

• `Readonly` **nodes**: `undefined` \| readonly `ASTNode`[]

An array of GraphQL AST Nodes corresponding to this error.

#### Inherited from

GraphQLError.nodes

#### Defined in

node_modules/graphql/error/GraphQLError.d.ts:57

___

### originalError

• `Readonly` **originalError**: `undefined` \| `Error`

The original error thrown from a field resolver during execution.

#### Inherited from

GraphQLError.originalError

#### Defined in

node_modules/graphql/error/GraphQLError.d.ts:73

___

### path

• `Readonly` **path**: `undefined` \| readonly (`string` \| `number`)[]

An array describing the JSON-path into the execution response which
corresponds to this error. Only included for errors during execution.

Enumerable, and appears in the result of JSON.stringify().

#### Inherited from

GraphQLError.path

#### Defined in

node_modules/graphql/error/GraphQLError.d.ts:53

___

### positions

• `Readonly` **positions**: `undefined` \| readonly `number`[]

An array of character offsets within the source GraphQL document
which correspond to this error.

#### Inherited from

GraphQLError.positions

#### Defined in

node_modules/graphql/error/GraphQLError.d.ts:69

___

### source

• `Readonly` **source**: `undefined` \| `Source`

The source GraphQL document for the first location of this error.

Note that if this Error represents more than one node, the source may not
represent nodes after the first node.

#### Inherited from

GraphQLError.source

#### Defined in

node_modules/graphql/error/GraphQLError.d.ts:64

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

GraphQLError.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1078

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) =\> `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

GraphQLError.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

GraphQLError.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:30

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Inherited from

GraphQLError.[toStringTag]

#### Defined in

node_modules/graphql/error/GraphQLError.d.ts:95

## Methods

### toJSON

▸ **toJSON**(): `GraphQLFormattedError`

#### Returns

`GraphQLFormattedError`

#### Inherited from

GraphQLError.toJSON

#### Defined in

node_modules/graphql/error/GraphQLError.d.ts:97

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

GraphQLError.toString

#### Defined in

node_modules/graphql/error/GraphQLError.d.ts:96

___

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

GraphQLError.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:21
