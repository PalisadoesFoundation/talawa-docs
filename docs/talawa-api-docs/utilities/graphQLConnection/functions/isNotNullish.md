[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/graphQLConnection](../README.md) / isNotNullish

# Function: isNotNullish()

\> **isNotNullish**\<`T0`\>(`value`): `value is T0`

This function is used to check nullish state of a value passed to it. Nullish means the
value being either `null` or `undefined`. If the value is found to be nullish, the function
returns the boolean `false`, else it returns the boolean `true`.

## Type Parameters

• **T0**

## Parameters

### value

`undefined` | `null` | `T0`

## Returns

`value is T0`

## Example

```ts
Here's an example:-
function print(str: string | null) \{
  if(isNotNullish(str)) \{
    console.log(`the string is $\{str\}`)
  \} else \{
    console.log(`the string is null`)
  \}
\}
```

## Defined in

[src/utilities/graphQLConnection/index.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/utilities/graphQLConnection/index.ts#L15)
