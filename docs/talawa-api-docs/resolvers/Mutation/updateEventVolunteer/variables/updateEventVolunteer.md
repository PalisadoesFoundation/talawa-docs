[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateEventVolunteer](../README.md) / updateEventVolunteer

# Variable: updateEventVolunteer

\> `const` **updateEventVolunteer**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateEventVolunteer"`\]

This function enables to update an Event Volunteer

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. Whether the user exists
2. Whether the EventVolunteer exists
3. Whether the current user is the user of EventVolunteer
4. Whether the EventVolunteer is invited

## Defined in

[src/resolvers/Mutation/updateEventVolunteer.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/resolvers/Mutation/updateEventVolunteer.ts#L24)
