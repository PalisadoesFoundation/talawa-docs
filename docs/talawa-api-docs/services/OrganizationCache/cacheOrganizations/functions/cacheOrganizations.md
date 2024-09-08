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

[src/services/OrganizationCache/cacheOrganizations.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/services/OrganizationCache/cacheOrganizations.ts#L10)
