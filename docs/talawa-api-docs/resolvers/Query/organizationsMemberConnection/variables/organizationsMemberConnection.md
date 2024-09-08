[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/organizationsMemberConnection](../README.md) / organizationsMemberConnection

# Variable: organizationsMemberConnection

\> `const` **organizationsMemberConnection**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"organizationsMemberConnection"`\]

This query will retrieve from the database a list of members
in the organisation under the specified limit for the specified page in the pagination.

## Param

## Param

An object holds the data required to execute the query.
`args.first` specifies the number of members to retrieve, and `args.after` specifies
the unique identification for each item in the returned list.

## Remarks

Connection in graphQL means pagination,
learn more about Connection [here](https://relay.dev/graphql/connections.htm).

## Defined in

[src/resolvers/Query/organizationsMemberConnection.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Query/organizationsMemberConnection.ts#L19)
