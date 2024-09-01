[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [services/OrganizationCache/cacheOrganizations](../README.md) / cacheOrganizations

# Function: cacheOrganizations()

\> **cacheOrganizations**(`organizations`): `Promise`\<`void`\>

Stores organizations in Redis cache with a specified time-to-live (TTL).

## Parameters

• **organizations**: [`InterfaceOrganization`](../../../../models/Organization/interfaces/InterfaceOrganization.md)[]

Array of organizations to be cached.

## Returns

`Promise`\<`void`\>

Promise\<void\>

## Defined in

[src/services/OrganizationCache/cacheOrganizations.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/67d017fd9312183a6b2bae1b160bc814f56ab5c2/src/services/OrganizationCache/cacheOrganizations.ts#L10)
