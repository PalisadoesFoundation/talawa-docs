[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / AppUserProfile

# Type Alias: AppUserProfile

> **AppUserProfile**: `object`

## Type declaration

### \_\_typename?

> `optional` **\_\_typename**: `"AppUserProfile"`

### \_id

> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### adminFor?

> `optional` **adminFor**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`Organization`](Organization.md)\>[]\>

### appLanguageCode

> **appLanguageCode**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

### createdEvents?

> `optional` **createdEvents**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`Event`](Event.md)\>[]\>

### createdOrganizations?

> `optional` **createdOrganizations**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`Organization`](Organization.md)\>[]\>

### eventAdmin?

> `optional` **eventAdmin**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`Event`](Event.md)\>[]\>

### isSuperAdmin

> **isSuperAdmin**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

### pluginCreationAllowed

> **pluginCreationAllowed**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

### userId

> **userId**: [`User`](User.md)

## Defined in

[src/types/generatedGraphQLTypes.ts:220](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/types/generatedGraphQLTypes.ts#L220)
