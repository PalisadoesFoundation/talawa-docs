[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/advertisementsConnection](../README.md) / parseCursor

# Function: parseCursor()

\> **parseCursor**(`__namedParameters`): [`ParseGraphQLConnectionCursorResult`](../../../../utilities/graphQLConnection/parseGraphQLConnectionArguments/type-aliases/ParseGraphQLConnectionCursorResult.md)\<`string`\>

Validates and transforms the cursor passed to the connection resolver.

This function checks if the provided cursor value corresponds to a valid advertisement in the database. If the cursor is valid, it is returned as-is. Otherwise, an error is recorded.

## Parameters

• **\_\_namedParameters**: [`ParseGraphQLConnectionCursorArguments`](../../../../utilities/graphQLConnection/parseGraphQLConnectionArguments/type-aliases/ParseGraphQLConnectionCursorArguments.md)

## Returns

[`ParseGraphQLConnectionCursorResult`](../../../../utilities/graphQLConnection/parseGraphQLConnectionArguments/type-aliases/ParseGraphQLConnectionCursorResult.md)\<`string`\>

An object containing a flag indicating success or failure, the parsed cursor, and any errors encountered during validation.

## Defined in

[src/resolvers/Query/advertisementsConnection.ts:105](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Query/advertisementsConnection.ts#L105)
