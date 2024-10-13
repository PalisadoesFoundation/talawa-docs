[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/eventsByOrganization](../README.md) / eventsByOrganization

# Variable: eventsByOrganization

\> `const` **eventsByOrganization**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"eventsByOrganization"`\]

This query will fetch all the events for an organization from the database.

## Param

## Param

An object that contains `orderBy` to sort the object as specified and `id` of the Organization.

## Returns

An `events` object that holds all the events for the Organization.

## Defined in

[src/resolvers/Query/eventsByOrganization.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Query/eventsByOrganization.ts#L10)
