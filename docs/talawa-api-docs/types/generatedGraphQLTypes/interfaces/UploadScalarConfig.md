[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / UploadScalarConfig

# Interface: UploadScalarConfig

## Extends

- `GraphQLScalarTypeConfig`\<[`ResolversTypes`](../type-aliases/ResolversTypes.md)\[`"Upload"`\], `any`\>

## Properties

### astNode?

\> `optional` **astNode**: `Maybe`\<`ScalarTypeDefinitionNode`\>

#### Inherited from

`GraphQLScalarTypeConfig.astNode`

#### Defined in

node\_modules/graphql/type/definition.d.ts:369

***

### description?

\> `optional` **description**: `Maybe`\<`string`\>

#### Inherited from

`GraphQLScalarTypeConfig.description`

#### Defined in

node\_modules/graphql/type/definition.d.ts:360

***

### extensionASTNodes?

\> `optional` **extensionASTNodes**: `Maybe`\<readonly `ScalarTypeExtensionNode`[]\>

#### Inherited from

`GraphQLScalarTypeConfig.extensionASTNodes`

#### Defined in

node\_modules/graphql/type/definition.d.ts:370

***

### extensions?

\> `optional` **extensions**: `Maybe`\<`Readonly`\<`GraphQLScalarTypeExtensions`\>\>

#### Inherited from

`GraphQLScalarTypeConfig.extensions`

#### Defined in

node\_modules/graphql/type/definition.d.ts:368

***

### name

\> **name**: `"Upload"`

#### Overrides

`GraphQLScalarTypeConfig.name`

#### Defined in

[src/types/generatedGraphQLTypes.ts:4648](https://github.com/PalisadoesFoundation/talawa-api/blob/1f38da5423898626c6ebfa24896a9c3d008195c6/src/types/generatedGraphQLTypes.ts#L4648)

***

### parseLiteral?

\> `optional` **parseLiteral**: `GraphQLScalarLiteralParser`\<`any`\>

Parses an externally provided literal value to use as an input.

#### Inherited from

`GraphQLScalarTypeConfig.parseLiteral`

#### Defined in

node\_modules/graphql/type/definition.d.ts:367

***

### parseValue?

\> `optional` **parseValue**: `GraphQLScalarValueParser`\<`any`\>

Parses an externally provided value to use as an input.

#### Inherited from

`GraphQLScalarTypeConfig.parseValue`

#### Defined in

node\_modules/graphql/type/definition.d.ts:365

***

### serialize?

\> `optional` **serialize**: `GraphQLScalarSerializer`\<`any`\>

Serializes an internal value to include in a response.

#### Inherited from

`GraphQLScalarTypeConfig.serialize`

#### Defined in

node\_modules/graphql/type/definition.d.ts:363

***

### specifiedByURL?

\> `optional` **specifiedByURL**: `Maybe`\<`string`\>

#### Inherited from

`GraphQLScalarTypeConfig.specifiedByURL`

#### Defined in

node\_modules/graphql/type/definition.d.ts:361
