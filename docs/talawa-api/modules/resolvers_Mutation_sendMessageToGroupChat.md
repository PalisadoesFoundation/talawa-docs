---
title: Send Message to GroupChat
id: resolvers_Mutation_sendMessageToGroupChat
---
[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/sendMessageToGroupChat

# Module: resolvers/Mutation/sendMessageToGroupChat

## Table of contents

### Variables

- [sendMessageToGroupChat](resolvers_Mutation_sendMessageToGroupChat.md#sendmessagetogroupchat)

## Variables

### sendMessageToGroupChat

• `Const` **sendMessageToGroupChat**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"sendMessageToGroupChat"``]

This function enables to send message to group chat.

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the group chat exists.
2. If the user exists
3. If the group chat contains the user.

#### Defined in

src/resolvers/Mutation/sendMessageToGroupChat.ts:20
