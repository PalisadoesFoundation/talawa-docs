---
title: Middleware isAuth
id: middleware_isAuth
---
[talawa-api](../README.md) / [Exports](../modules.md) / middleware/isAuth

# Module: middleware/isAuth

## Table of contents

### Interfaces

- [Interface\_AuthData](../interfaces/middleware_isAuth.Interface_AuthData.md)

### Functions

- [isAuth](middleware_isAuth.md#isauth)

## Functions

### isAuth

▸ **isAuth**(`request`): [`Interface_AuthData`](../interfaces/middleware_isAuth.Interface_AuthData.md)

This function determines whether the user is authorised and whether the access token has expired.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |

#### Returns

[`Interface_AuthData`](../interfaces/middleware_isAuth.Interface_AuthData.md)

Returns `authData` object with `isAuth`, `expired` and `userId` properties.

#### Defined in

src/middleware/isAuth.ts:17
