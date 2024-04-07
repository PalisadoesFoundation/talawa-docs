[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/UserTag/childTags

# Module: resolvers/UserTag/childTags

## Table of contents

### Variables

- [childTags](resolvers_UserTag_childTags.md#childtags)

### Functions

- [parseCursor](resolvers_UserTag_childTags.md#parsecursor)

## Variables

### childTags

• `Const` **childTags**: [`UserTagResolvers`](types_generatedGraphQLTypes.md#usertagresolvers)[``"childTags"``]

#### Defined in

[src/resolvers/UserTag/childTags.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/53234da/src/resolvers/UserTag/childTags.ts#L17)

## Functions

### parseCursor

▸ **parseCursor**(`«destructured»`): [`ParseGraphQLConnectionCursorResult`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorresult)\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ParseGraphQLConnectionCursorArguments`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorarguments) & \{ `parentTagId`: `string` \| `ObjectId`  \} |

#### Returns

[`ParseGraphQLConnectionCursorResult`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorresult)\<`string`\>

#### Defined in

[src/resolvers/UserTag/childTags.ts:88](https://github.com/PalisadoesFoundation/talawa-api/blob/53234da/src/resolvers/UserTag/childTags.ts#L88)
