[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createEventVolunteerGroup](../README.md) / createEventVolunteerGroup

# Variable: createEventVolunteerGroup

\> `const` **createEventVolunteerGroup**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createEventVolunteerGroup"`\]

This function enables to create an event volunteer group

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the current user exists
2. If the eventId exists
3. If the current user is admin of event

## Defined in

[src/resolvers/Mutation/createEventVolunteerGroup.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/resolvers/Mutation/createEventVolunteerGroup.ts#L25)
