[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [utilities/TalawaGraphQLError](../README.md) / TalawaGraphQLError

# Class: TalawaGraphQLError

A custom class extended from the GraphQLError class to standardize the errors returned from talawa-api's
graphQL resolvers. This standardization prevents the talawa-api contributers from returning undocumented,
arbitrary errors to the client applications in the graphQL query responses. This standardization also helps
the client developers to know beforehand what kind of errors they can expect from talawa-api's graphQL
responses, helping them design better UI experiences for user feedback.

If necessary, the localization of the error messages(i18n) can be done within the graphQL resolvers where the
TalawaGraphQLError class is used.

This is the definition of a graphQL resolver for resolving the user record of the best friend of a user:-

## Example

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

## Extends

- `GraphQLError`

## Constructors

### new TalawaGraphQLError()

\> **new TalawaGraphQLError**(`message`, `options`): [`TalawaGraphQLError`](TalawaGraphQLError.md)

#### Parameters

• **message**: `string`

• **options**: `GraphQLErrorOptions` & `object`

#### Returns

[`TalawaGraphQLError`](TalawaGraphQLError.md)

#### Overrides

`GraphQLError.constructor`

#### Defined in

[src/utilities/TalawaGraphQLError.ts:189](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/utilities/TalawaGraphQLError.ts#L189)

## Properties

### extensions

\> `readonly` **extensions**: `GraphQLErrorExtensions`

Extension fields to add to the formatted error.

#### Inherited from

`GraphQLError.extensions`

#### Defined in

node\_modules/graphql/error/GraphQLError.d.ts:77

***

### locations

\> `readonly` **locations**: `undefined` \| readonly `SourceLocation`[]

An array of `\{ line, column \}` locations within the source GraphQL document
which correspond to this error.

Errors during validation often contain multiple locations, for example to
point out two things with the same name. Errors during execution include a
single location, the field which produced the error.

Enumerable, and appears in the result of JSON.stringify().

#### Inherited from

`GraphQLError.locations`

#### Defined in

node\_modules/graphql/error/GraphQLError.d.ts:46

***

### message

\> **message**: `string`

#### Inherited from

`GraphQLError.message`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

\> **name**: `string`

#### Inherited from

`GraphQLError.name`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### nodes

\> `readonly` **nodes**: `undefined` \| readonly `ASTNode`[]

An array of GraphQL AST Nodes corresponding to this error.

#### Inherited from

`GraphQLError.nodes`

#### Defined in

node\_modules/graphql/error/GraphQLError.d.ts:57

***

### originalError

\> `readonly` **originalError**: `undefined` \| `Error`

The original error thrown from a field resolver during execution.

#### Inherited from

`GraphQLError.originalError`

#### Defined in

node\_modules/graphql/error/GraphQLError.d.ts:73

***

### path

\> `readonly` **path**: `undefined` \| readonly (`string` \| `number`)[]

An array describing the JSON-path into the execution response which
corresponds to this error. Only included for errors during execution.

Enumerable, and appears in the result of JSON.stringify().

#### Inherited from

`GraphQLError.path`

#### Defined in

node\_modules/graphql/error/GraphQLError.d.ts:53

***

### positions

\> `readonly` **positions**: `undefined` \| readonly `number`[]

An array of character offsets within the source GraphQL document
which correspond to this error.

#### Inherited from

`GraphQLError.positions`

#### Defined in

node\_modules/graphql/error/GraphQLError.d.ts:69

***

### source

\> `readonly` **source**: `undefined` \| `Source`

The source GraphQL document for the first location of this error.

Note that if this Error represents more than one node, the source may not
represent nodes after the first node.

#### Inherited from

`GraphQLError.source`

#### Defined in

node\_modules/graphql/error/GraphQLError.d.ts:64

***

### stack?

\> `optional` **stack**: `string`

#### Inherited from

`GraphQLError.stack`

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

`GraphQLError.prepareStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:143

***

### stackTraceLimit

\> `static` **stackTraceLimit**: `number`

#### Inherited from

`GraphQLError.stackTraceLimit`

#### Defined in

node\_modules/@types/node/globals.d.ts:145

## Accessors

### \[toStringTag\]

\> `get` **\[toStringTag\]**(): `string`

#### Returns

`string`

#### Inherited from

`GraphQLError.[toStringTag]`

#### Defined in

node\_modules/graphql/error/GraphQLError.d.ts:95

## Methods

### toJSON()

\> **toJSON**(): `GraphQLFormattedError`

#### Returns

`GraphQLFormattedError`

#### Inherited from

`GraphQLError.toJSON`

#### Defined in

node\_modules/graphql/error/GraphQLError.d.ts:97

***

### toString()

\> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

`GraphQLError.toString`

#### Defined in

node\_modules/graphql/error/GraphQLError.d.ts:96

***

### captureStackTrace()

\> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`GraphQLError.captureStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:136
