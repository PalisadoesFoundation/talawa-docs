[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [utilities/graphQLConnection](../README.md) / DefaultGraphQLConnectionArguments

# Type Alias: DefaultGraphQLConnectionArguments

\> **DefaultGraphQLConnectionArguments**: `object`

This is typescript type of the standard arguments object received by a graphQL connection
following the relay cursor connection specification, more info here:- [https://relay.dev/graphql/connections.htm](https://relay.dev/graphql/connections.htm)

## Type declaration

### after?

\> `optional` **after**: `string` \| `null`

### before?

\> `optional` **before**: `string` \| `null`

### first?

\> `optional` **first**: `number` \| `null`

### last?

\> `optional` **last**: `number` \| `null`

## Defined in

[src/utilities/graphQLConnection/index.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/utilities/graphQLConnection/index.ts#L33)
