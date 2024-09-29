[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [libraries/requestContext](../README.md) / middleware

# Function: middleware()

\> **middleware**(): (`req`, `res`, `next`) =\> `void`

Middleware to bind the request and response to the request context namespace.

## Returns

`Function`

### Parameters

• **req**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

• **res**: `Response`\<`any`, `Record`\<`string`, `any`\>\>

• **next**: `NextFunction`

### Returns

`void`

## Defined in

[src/libraries/requestContext.ts:42](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/libraries/requestContext.ts#L42)
