[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / ResolversUnionTypes

# Type Alias: ResolversUnionTypes\<_RefType\>

\> **ResolversUnionTypes**\<`_RefType`\>: `object`

Mapping of union types

## Type Parameters

• **_RefType** *extends* `Record`\<`string`, `unknown`\>

## Type declaration

### ConnectionError

\> **ConnectionError**: [`InvalidCursor`](InvalidCursor.md) \| [`MaximumValueError`](MaximumValueError.md)

### CreateAdminError

\> **CreateAdminError**: [`OrganizationMemberNotFoundError`](OrganizationMemberNotFoundError.md) \| [`OrganizationNotFoundError`](OrganizationNotFoundError.md) \| [`UserNotAuthorizedError`](UserNotAuthorizedError.md) \| [`UserNotFoundError`](UserNotFoundError.md)

### CreateCommentError

\> **CreateCommentError**: [`PostNotFoundError`](PostNotFoundError.md)

### CreateDirectChatError

\> **CreateDirectChatError**: [`OrganizationNotFoundError`](OrganizationNotFoundError.md) \| [`UserNotFoundError`](UserNotFoundError.md)

### CreateMemberError

\> **CreateMemberError**: [`MemberNotFoundError`](MemberNotFoundError.md) \| [`OrganizationNotFoundError`](OrganizationNotFoundError.md) \| [`UserNotAuthorizedAdminError`](UserNotAuthorizedAdminError.md) \| [`UserNotAuthorizedError`](UserNotAuthorizedError.md) \| [`UserNotFoundError`](UserNotFoundError.md)

## Defined in

[src/types/generatedGraphQLTypes.ts:3293](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/types/generatedGraphQLTypes.ts#L3293)
