[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/createMessageChat

# Module: resolvers/Mutation/createMessageChat

## Table of contents

### Variables

- [createMessageChat](resolvers_Mutation_createMessageChat.md#createmessagechat)

## Variables

### createMessageChat

• `Const` **createMessageChat**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"createMessageChat"``]

This function enables to create a chat.

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the receiver user exists
2. If the sender and receiver users have same language code.
3. If the sender and receiver users have appProfile.

#### Defined in

[src/resolvers/Mutation/createMessageChat.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/resolvers/Mutation/createMessageChat.ts#L24)
