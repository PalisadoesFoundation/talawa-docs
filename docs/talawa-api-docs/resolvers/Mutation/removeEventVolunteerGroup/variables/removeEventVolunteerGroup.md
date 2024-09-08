[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeEventVolunteerGroup](../README.md) / removeEventVolunteerGroup

# Variable: removeEventVolunteerGroup

\> `const` **removeEventVolunteerGroup**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeEventVolunteerGroup"`\]

This function enables to remove an Event Volunteer Group.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the current user exists
2. If the Event volunteer group to be removed exists.
3. If the current user is the admin of the corresponding event

## Defined in

[src/resolvers/Mutation/removeEventVolunteerGroup.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Mutation/removeEventVolunteerGroup.ts#L25)
