[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createEventVolunteer](../README.md) / createEventVolunteer

# Variable: createEventVolunteer

\> `const` **createEventVolunteer**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createEventVolunteer"`\]

This function enables to create an event volunteer.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the current user exists
2. if the volunteer user exists
3. If the event exists
4. If the group exists
5. If the current user is leader of the group

## Defined in

[src/resolvers/Mutation/createEventVolunteer.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/resolvers/Mutation/createEventVolunteer.ts#L30)
