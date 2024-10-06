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

[src/resolvers/Query/eventsByOrganization.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/resolvers/Query/eventsByOrganization.ts#L10)
