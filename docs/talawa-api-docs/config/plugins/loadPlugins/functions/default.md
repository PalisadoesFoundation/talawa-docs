[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [config/plugins/loadPlugins](../README.md) / default

# Function: default()

\> **default**(): `Promise`\<`void`\>

Loads plugin data into the MongoDB database if it is not already present.

This function connects to the MongoDB database using the connection URL specified in the environment variables.
It checks if the plugin data already exists in the database. If the data does not exist, it inserts the data from
the provided JSON file (`pluginData.json`). If the data is already present, it logs a message indicating so.

## Returns

`Promise`\<`void`\>

A promise that resolves when the plugins have been loaded or confirms that they are already present.

## Example

```typescript
import loadPlugins from './path/to/loadPlugins';

loadPlugins().then(() =\> \{
  console.log('Plugins loaded successfully.');
\}).catch(error =\> \{
  console.error('Error loading plugins:', error);
\});
```

## See

Parent File:
- `src/index.ts`

## Defined in

[src/config/plugins/loadPlugins.ts:31](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/config/plugins/loadPlugins.ts#L31)
