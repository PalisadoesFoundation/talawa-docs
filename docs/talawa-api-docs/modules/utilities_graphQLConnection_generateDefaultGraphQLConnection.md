[talawa-api](../README.md) / [Exports](../modules.md) / utilities/graphQLConnection/generateDefaultGraphQLConnection

# Module: utilities/graphQLConnection/generateDefaultGraphQLConnection

## Table of contents

### Type Aliases

- [DefaultGraphQLConnection](utilities_graphQLConnection_generateDefaultGraphQLConnection.md#defaultgraphqlconnection)
- [DefaultGraphQLConnectionEdge](utilities_graphQLConnection_generateDefaultGraphQLConnection.md#defaultgraphqlconnectionedge)

### Functions

- [generateDefaultGraphQLConnection](utilities_graphQLConnection_generateDefaultGraphQLConnection.md#generatedefaultgraphqlconnection)

## Type Aliases

### DefaultGraphQLConnection

Ƭ **DefaultGraphQLConnection**\<`T0`\>: `Object`

This is typescript type of a base graphQL connection object. This connection object can be
extended to create a custom connnection object as long as the new connection object adheres
to the default type of this base connection object.

#### Type parameters

| Name |
| :------ |
| `T0` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `edges` | [`DefaultGraphQLConnectionEdge`](utilities_graphQLConnection_generateDefaultGraphQLConnection.md#defaultgraphqlconnectionedge)\<`T0`\>[] |
| `pageInfo` | [`ConnectionPageInfo`](types_generatedGraphQLTypes.md#connectionpageinfo) |
| `totalCount` | `number` |

#### Defined in

[src/utilities/graphQLConnection/generateDefaultGraphQLConnection.ts:18](https://github.com/adi790uu/talawa-api/blob/5146430/src/utilities/graphQLConnection/generateDefaultGraphQLConnection.ts#L18)

___

### DefaultGraphQLConnectionEdge

Ƭ **DefaultGraphQLConnectionEdge**\<`T0`\>: `Object`

This is typescript type of a base graphQL connection edge object. This connection edge object
can be extended to create a custom connection edge object as long as the new connection edge
object adheres to the default type of this base connection edge object.

#### Type parameters

| Name |
| :------ |
| `T0` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor` | `string` |
| `node` | `T0` |

#### Defined in

[src/utilities/graphQLConnection/generateDefaultGraphQLConnection.ts:8](https://github.com/adi790uu/talawa-api/blob/5146430/src/utilities/graphQLConnection/generateDefaultGraphQLConnection.ts#L8)

## Functions

### generateDefaultGraphQLConnection

▸ **generateDefaultGraphQLConnection**\<`T0`\>(): [`DefaultGraphQLConnection`](utilities_graphQLConnection_generateDefaultGraphQLConnection.md#defaultgraphqlconnection)\<`T0`\>

This is a factory function to create a base graphql connection object with default fields
that correspond to a connection with no data and no traversal properties in any direction.

#### Type parameters

| Name |
| :------ |
| `T0` |

#### Returns

[`DefaultGraphQLConnection`](utilities_graphQLConnection_generateDefaultGraphQLConnection.md#defaultgraphqlconnection)\<`T0`\>

**`Example`**

```ts
const connection = generateDefaultGraphQLConnection();
```

#### Defined in

[src/utilities/graphQLConnection/generateDefaultGraphQLConnection.ts:30](https://github.com/adi790uu/talawa-api/blob/5146430/src/utilities/graphQLConnection/generateDefaultGraphQLConnection.ts#L30)
