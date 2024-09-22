[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [services/OrganizationCache/deleteOrganizationFromCache](../README.md) / deleteOrganizationFromCache

# Function: deleteOrganizationFromCache()

\> **deleteOrganizationFromCache**(`organization`): `Promise`\<`void`\>

Deletes the specified organization from Redis cache.

## Parameters

• **organization**: [`InterfaceOrganization`](../../../../models/Organization/interfaces/InterfaceOrganization.md)

The InterfaceOrganization object representing the organization to delete.

## Returns

`Promise`\<`void`\>

A promise resolving to void.

## Defined in

[src/services/OrganizationCache/deleteOrganizationFromCache.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/services/OrganizationCache/deleteOrganizationFromCache.ts#L10)
