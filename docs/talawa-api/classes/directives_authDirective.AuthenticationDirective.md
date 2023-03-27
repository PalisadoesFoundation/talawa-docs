[talawa-api](../README.md) / [Exports](../modules.md) / [directives/authDirective](../modules/directives_authDirective.md) / AuthenticationDirective

# Class: AuthenticationDirective

[directives/authDirective](../modules/directives_authDirective.md).AuthenticationDirective

## Hierarchy

- `SchemaDirectiveVisitor`

  ↳ **`AuthenticationDirective`**

## Table of contents

### Constructors

- [constructor](directives_authDirective.AuthenticationDirective.md#constructor)

### Properties

- [args](directives_authDirective.AuthenticationDirective.md#args)
- [context](directives_authDirective.AuthenticationDirective.md#context)
- [name](directives_authDirective.AuthenticationDirective.md#name)
- [schema](directives_authDirective.AuthenticationDirective.md#schema)
- [visitedType](directives_authDirective.AuthenticationDirective.md#visitedtype)

### Methods

- [visitArgumentDefinition](directives_authDirective.AuthenticationDirective.md#visitargumentdefinition)
- [visitEnum](directives_authDirective.AuthenticationDirective.md#visitenum)
- [visitEnumValue](directives_authDirective.AuthenticationDirective.md#visitenumvalue)
- [visitFieldDefinition](directives_authDirective.AuthenticationDirective.md#visitfielddefinition)
- [visitInputFieldDefinition](directives_authDirective.AuthenticationDirective.md#visitinputfielddefinition)
- [visitInputObject](directives_authDirective.AuthenticationDirective.md#visitinputobject)
- [visitInterface](directives_authDirective.AuthenticationDirective.md#visitinterface)
- [visitObject](directives_authDirective.AuthenticationDirective.md#visitobject)
- [visitScalar](directives_authDirective.AuthenticationDirective.md#visitscalar)
- [visitSchema](directives_authDirective.AuthenticationDirective.md#visitschema)
- [visitUnion](directives_authDirective.AuthenticationDirective.md#visitunion)
- [getDeclaredDirectives](directives_authDirective.AuthenticationDirective.md#getdeclareddirectives)
- [getDirectiveDeclaration](directives_authDirective.AuthenticationDirective.md#getdirectivedeclaration)
- [implementsVisitorMethod](directives_authDirective.AuthenticationDirective.md#implementsvisitormethod)
- [visitSchemaDirectives](directives_authDirective.AuthenticationDirective.md#visitschemadirectives)

## Constructors

### constructor

• `Protected` **new AuthenticationDirective**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Object` |
| `config.args` | `Object` |
| `config.context` | `Object` |
| `config.name` | `string` |
| `config.schema` | `GraphQLSchema` |
| `config.visitedType` | `VisitableSchemaType` |

#### Inherited from

SchemaDirectiveVisitor.constructor

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:51

## Properties

### args

• **args**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

SchemaDirectiveVisitor.args

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:31

___

### context

• **context**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Inherited from

SchemaDirectiveVisitor.context

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:35

___

### name

• **name**: `string`

#### Inherited from

SchemaDirectiveVisitor.name

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:30

___

### schema

• **schema**: `GraphQLSchema`

#### Inherited from

SchemaDirectiveVisitor.schema

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:4

___

### visitedType

• **visitedType**: `VisitableSchemaType`

#### Inherited from

SchemaDirectiveVisitor.visitedType

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:34

## Methods

### visitArgumentDefinition

▸ **visitArgumentDefinition**(`argument`, `details`): ``null`` \| `void` \| `GraphQLArgument`

#### Parameters

| Name | Type |
| :------ | :------ |
| `argument` | `GraphQLArgument` |
| `details` | `Object` |
| `details.field` | `GraphQLField`<`any`, `any`, { `[key: string]`: `any`;  }\> |
| `details.objectType` | `GraphQLObjectType`<`any`, `any`\> \| `GraphQLInterfaceType` |

#### Returns

``null`` \| `void` \| `GraphQLArgument`

#### Inherited from

SchemaDirectiveVisitor.visitArgumentDefinition

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:12

___

### visitEnum

▸ **visitEnum**(`type`): ``null`` \| `void` \| `GraphQLEnumType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `GraphQLEnumType` |

#### Returns

``null`` \| `void` \| `GraphQLEnumType`

#### Inherited from

SchemaDirectiveVisitor.visitEnum

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:18

___

### visitEnumValue

▸ **visitEnumValue**(`value`, `details`): ``null`` \| `void` \| `GraphQLEnumValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GraphQLEnumValue` |
| `details` | `Object` |
| `details.enumType` | `GraphQLEnumType` |

#### Returns

``null`` \| `void` \| `GraphQLEnumValue`

#### Inherited from

SchemaDirectiveVisitor.visitEnumValue

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:19

___

### visitFieldDefinition

▸ **visitFieldDefinition**(`field`, `_details`): ``null`` \| `void` \| `GraphQLField`<`any`, `any`, { `[key: string]`: `any`;  }\>

This function throws an Unauthenticated error if the context is expired or not authenticated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | `GraphQLField`<`any`, `any`, { `[key: string]`: `any`;  }\> | GraphQLField |
| `_details` | `Object` | Object |
| `_details.objectType` | `GraphQLObjectType`<`any`, `any`\> \| `GraphQLInterfaceType` | - |

#### Returns

``null`` \| `void` \| `GraphQLField`<`any`, `any`, { `[key: string]`: `any`;  }\>

resolver function

#### Overrides

SchemaDirectiveVisitor.visitFieldDefinition

#### Defined in

src/directives/authDirective.ts:17

___

### visitInputFieldDefinition

▸ **visitInputFieldDefinition**(`field`, `details`): ``null`` \| `void` \| `GraphQLInputField`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `GraphQLInputField` |
| `details` | `Object` |
| `details.objectType` | `GraphQLInputObjectType` |

#### Returns

``null`` \| `void` \| `GraphQLInputField`

#### Inherited from

SchemaDirectiveVisitor.visitInputFieldDefinition

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:23

___

### visitInputObject

▸ **visitInputObject**(`object`): ``null`` \| `void` \| `GraphQLInputObjectType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `GraphQLInputObjectType` |

#### Returns

``null`` \| `void` \| `GraphQLInputObjectType`

#### Inherited from

SchemaDirectiveVisitor.visitInputObject

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:22

___

### visitInterface

▸ **visitInterface**(`iface`): ``null`` \| `void` \| `GraphQLInterfaceType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iface` | `GraphQLInterfaceType` |

#### Returns

``null`` \| `void` \| `GraphQLInterfaceType`

#### Inherited from

SchemaDirectiveVisitor.visitInterface

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:16

___

### visitObject

▸ **visitObject**(`object`): ``null`` \| `void` \| `GraphQLObjectType`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `GraphQLObjectType`<`any`, `any`\> |

#### Returns

``null`` \| `void` \| `GraphQLObjectType`<`any`, `any`\>

#### Inherited from

SchemaDirectiveVisitor.visitObject

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:8

___

### visitScalar

▸ **visitScalar**(`scalar`): ``null`` \| `void` \| `GraphQLScalarType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `GraphQLScalarType` |

#### Returns

``null`` \| `void` \| `GraphQLScalarType`

#### Inherited from

SchemaDirectiveVisitor.visitScalar

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:7

___

### visitSchema

▸ **visitSchema**(`schema`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `GraphQLSchema` |

#### Returns

`void`

#### Inherited from

SchemaDirectiveVisitor.visitSchema

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:6

___

### visitUnion

▸ **visitUnion**(`union`): ``null`` \| `void` \| `GraphQLUnionType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `union` | `GraphQLUnionType` |

#### Returns

``null`` \| `void` \| `GraphQLUnionType`

#### Inherited from

SchemaDirectiveVisitor.visitUnion

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:17

___

### getDeclaredDirectives

▸ `Static` `Protected` **getDeclaredDirectives**(`schema`, `directiveVisitors`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `GraphQLSchema` |
| `directiveVisitors` | `Object` |

#### Returns

`Object`

#### Inherited from

SchemaDirectiveVisitor.getDeclaredDirectives

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:46

___

### getDirectiveDeclaration

▸ `Static` **getDirectiveDeclaration**(`directiveName`, `schema`): `GraphQLDirective`

#### Parameters

| Name | Type |
| :------ | :------ |
| `directiveName` | `string` |
| `schema` | `GraphQLSchema` |

#### Returns

`GraphQLDirective`

#### Inherited from

SchemaDirectiveVisitor.getDirectiveDeclaration

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:38

___

### implementsVisitorMethod

▸ `Static` **implementsVisitorMethod**(`methodName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |

#### Returns

`boolean`

#### Inherited from

SchemaDirectiveVisitor.implementsVisitorMethod

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:5

___

### visitSchemaDirectives

▸ `Static` **visitSchemaDirectives**(`schema`, `directiveVisitors`, `context?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `GraphQLSchema` |
| `directiveVisitors` | `Object` |
| `context?` | `Object` |

#### Returns

`Object`

#### Inherited from

SchemaDirectiveVisitor.visitSchemaDirectives

#### Defined in

node_modules/graphql-tools/dist/schemaVisitor.d.ts:39
