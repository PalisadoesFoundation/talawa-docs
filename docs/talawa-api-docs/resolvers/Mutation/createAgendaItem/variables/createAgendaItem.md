[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createAgendaItem](../README.md) / createAgendaItem

# Variable: createAgendaItem

\> `const` **createAgendaItem**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createAgendaItem"`\]

Creates a new agenda item and associates it with an event if specified.

This function performs the following actions:
1. Verifies that the current user exists and is authorized.
2. Checks the existence of the specified organization.
3. If a related event is specified, verifies its existence and checks if the user is an admin of the event.
4. Checks if the user is an admin of the organization or has super admin privileges.
5. Creates the new agenda item and associates it with the event if applicable.

## Param

The parent object for the mutation. This parameter is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `input`: An object containing:
    - `organizationId`: The ID of the organization where the agenda item will be created.
    - `relatedEventId` (optional): The ID of the related event, if applicable.
    - Other agenda item details.

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user making the request.

## Defined in

[src/resolvers/Mutation/createAgendaItem.ts:53](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/resolvers/Mutation/createAgendaItem.ts#L53)
