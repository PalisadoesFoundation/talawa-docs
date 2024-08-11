[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createMessageChat](../README.md) / createMessageChat

# Variable: createMessageChat

> `const` **createMessageChat**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createMessageChat"`\]

Creates a new chat message between users.

This function performs the following actions:
1. Verifies the existence of the current user.
2. Retrieves and caches the current user's details and application profile if not already cached.
3. Checks the existence of the receiver user and retrieves their application profile.
4. Ensures that both the current user and the receiver have valid application profiles.
5. Compares the language codes of the sender and receiver to determine if there is a language barrier.
6. Creates a new chat message with the specified content and language barrier status.
7. Publishes the created message chat to a pub/sub channel for real-time updates.

## Param

The parent object for the mutation. This parameter is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `data.receiver`: The ID of the user receiving the message.
  - `data.message`: The content of the message being sent.

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user sending the message.
  - `pubsub`: The pub/sub instance for publishing real-time updates.

## Defined in

[src/resolvers/Mutation/createMessageChat.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/fe65d855b3d1e3e4af621340e7e8bfa0325634c1/src/resolvers/Mutation/createMessageChat.ts#L37)
