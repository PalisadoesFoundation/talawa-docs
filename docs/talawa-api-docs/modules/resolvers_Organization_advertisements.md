[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Organization/advertisements

# Module: resolvers/Organization/advertisements

## Table of contents

### Variables

- [advertisements](resolvers_Organization_advertisements.md#advertisements)

### Functions

- [parseCursor](resolvers_Organization_advertisements.md#parsecursor)

## Variables

### advertisements

• `Const` **advertisements**: [`OrganizationResolvers`](types_generatedGraphQLTypes.md#organizationresolvers)[``"advertisements"``]

Resolver function to fetch and return advertisements created in an organization from the database.

**`Param`**

An object that is the return value of the resolver for this field's parent.

**`Param`**

Arguments passed to the resolver.

#### Defined in

[src/resolvers/Organization/advertisements.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/resolvers/Organization/advertisements.ts#L24)

## Functions

### parseCursor

▸ **parseCursor**(`«destructured»`): [`ParseGraphQLConnectionCursorResult`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorresult)\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ParseGraphQLConnectionCursorArguments`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorarguments) & \{ `organizationId`: `string` \| `ObjectId`  \} |

#### Returns

[`ParseGraphQLConnectionCursorResult`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorresult)\<`string`\>

#### Defined in

[src/resolvers/Organization/advertisements.ts:103](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/resolvers/Organization/advertisements.ts#L103)
