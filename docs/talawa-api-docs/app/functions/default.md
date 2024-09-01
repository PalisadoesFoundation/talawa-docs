[**talawa-api**](../../README.md) • **Docs**

***

[talawa-api](../../modules.md) / [app](../README.md) / default

# Function: default()

## default(req, res)

\> **default**(`req`, `res`): `any`

Express instance itself is a request handler, which could be invoked without
third argument.

### Parameters

• **req**: `IncomingMessage` \| `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

• **res**: `ServerResponse`\<`IncomingMessage`\> \| `Response`\<`any`, `Record`\<`string`, `any`\>, `number`\>

### Returns

`any`

### Defined in

[src/app.ts:14](https://github.com/PalisadoesFoundation/talawa-api/blob/67d017fd9312183a6b2bae1b160bc814f56ab5c2/src/app.ts#L14)

## default(req, res, next)

\> **default**(`req`, `res`, `next`): `void`

### Parameters

• **req**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

• **res**: `Response`\<`any`, `Record`\<`string`, `any`\>, `number`\>

• **next**: `NextFunction`

### Returns

`void`

### Defined in

[src/app.ts:14](https://github.com/PalisadoesFoundation/talawa-api/blob/67d017fd9312183a6b2bae1b160bc814f56ab5c2/src/app.ts#L14)
