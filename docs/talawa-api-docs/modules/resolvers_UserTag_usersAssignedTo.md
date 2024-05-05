[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/UserTag/usersAssignedTo

# Module: resolvers/UserTag/usersAssignedTo

## Table of contents

### Variables

- [usersAssignedTo](resolvers_UserTag_usersAssignedTo.md#usersassignedto)

### Functions

- [parseCursor](resolvers_UserTag_usersAssignedTo.md#parsecursor)

## Variables

### usersAssignedTo

• `Const` **usersAssignedTo**: [`UserTagResolvers`](types_generatedGraphQLTypes.md#usertagresolvers)[``"usersAssignedTo"``]

#### Defined in

[src/resolvers/UserTag/usersAssignedTo.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/resolvers/UserTag/usersAssignedTo.ts#L17)

## Functions

### parseCursor

▸ **parseCursor**(`«destructured»`): [`ParseGraphQLConnectionCursorResult`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorresult)\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ParseGraphQLConnectionCursorArguments`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorarguments) & \{ `tagId`: `string` \| `ObjectId`  \} |

#### Returns

[`ParseGraphQLConnectionCursorResult`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorresult)\<`string`\>

#### Defined in

[src/resolvers/UserTag/usersAssignedTo.ts:93](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/resolvers/UserTag/usersAssignedTo.ts#L93)
