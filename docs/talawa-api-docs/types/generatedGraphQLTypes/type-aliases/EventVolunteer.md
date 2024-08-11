[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / EventVolunteer

# Type Alias: EventVolunteer

> **EventVolunteer**: `object`

## Type declaration

### \_\_typename?

> `optional` **\_\_typename**: `"EventVolunteer"`

### \_id

> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### createdAt

> **createdAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### creator?

> `optional` **creator**: [`Maybe`](Maybe.md)\<[`User`](User.md)\>

### event?

> `optional` **event**: [`Maybe`](Maybe.md)\<[`Event`](Event.md)\>

### group?

> `optional` **group**: [`Maybe`](Maybe.md)\<[`EventVolunteerGroup`](EventVolunteerGroup.md)\>

### isAssigned?

> `optional` **isAssigned**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]\>

### isInvited?

> `optional` **isInvited**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]\>

### response?

> `optional` **response**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

### updatedAt

> **updatedAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### user

> **user**: [`User`](User.md)

## Defined in

[src/types/generatedGraphQLTypes.ts:801](https://github.com/PalisadoesFoundation/talawa-api/blob/fe65d855b3d1e3e4af621340e7e8bfa0325634c1/src/types/generatedGraphQLTypes.ts#L801)
