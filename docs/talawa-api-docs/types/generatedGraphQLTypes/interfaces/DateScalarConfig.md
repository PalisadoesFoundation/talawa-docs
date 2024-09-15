[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / DateScalarConfig

# Interface: DateScalarConfig

## Extends

- `GraphQLScalarTypeConfig`\<[`ResolversTypes`](../type-aliases/ResolversTypes.md)\[`"Date"`\], `any`\>

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

\> **name**: `"Date"`

#### Overrides

`GraphQLScalarTypeConfig.name`

#### Defined in

[src/types/generatedGraphQLTypes.ts:3974](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/types/generatedGraphQLTypes.ts#L3974)

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
