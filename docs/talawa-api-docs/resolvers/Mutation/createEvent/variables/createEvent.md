[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createEvent](../README.md) / createEvent

# Variable: createEvent

\> `const` **createEvent**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createEvent"`\]

This function enables to create an event.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists
2.If the user has appUserProfile
3. If the organization exists
4. If the user is a part of the organization.
5. If the event is recurring, create the recurring event instances.
6. If the event is non-recurring, create a single event.

## Defined in

[src/resolvers/Mutation/createEvent.ts:44](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/resolvers/Mutation/createEvent.ts#L44)
