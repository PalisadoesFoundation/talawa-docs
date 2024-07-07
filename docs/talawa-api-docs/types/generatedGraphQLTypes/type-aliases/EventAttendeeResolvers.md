[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / EventAttendeeResolvers

# Type Alias: EventAttendeeResolvers\<ContextType, ParentType\>

\> **EventAttendeeResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"EventAttendee"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"EventAttendee"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### \_id?

\> `optional` **\_id**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ID"`\], `ParentType`, `ContextType`\>

### checkInId?

\> `optional` **checkInId**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ID"`\]\>, `ParentType`, `ContextType`\>

### checkOutId?

\> `optional` **checkOutId**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ID"`\]\>, `ParentType`, `ContextType`\>

### createdAt?

\> `optional` **createdAt**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"DateTime"`\], `ParentType`, `ContextType`\>

### eventId?

\> `optional` **eventId**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ID"`\], `ParentType`, `ContextType`\>

### isCheckedIn?

\> `optional` **isCheckedIn**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Boolean"`\], `ParentType`, `ContextType`\>

### isCheckedOut?

\> `optional` **isCheckedOut**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Boolean"`\], `ParentType`, `ContextType`\>

### isInvited?

\> `optional` **isInvited**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Boolean"`\], `ParentType`, `ContextType`\>

### isRegistered?

\> `optional` **isRegistered**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Boolean"`\], `ParentType`, `ContextType`\>

### updatedAt?

\> `optional` **updatedAt**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"DateTime"`\], `ParentType`, `ContextType`\>

### userId?

\> `optional` **userId**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ID"`\], `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:3985](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/types/generatedGraphQLTypes.ts#L3985)
