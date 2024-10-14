[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [setup/updateIgnoreFile](../README.md) / updateIgnoreFile

# Function: updateIgnoreFile()

\> **updateIgnoreFile**(`filePath`, `directoryToIgnore`): `void`

Updates the specified ignore file by adding an ignore pattern for a given directory.

This function ensures that the directory to be ignored is relative to the project root.
It reads the current content of the ignore file, removes any existing entries for the MinIO data directory,
and appends a new entry if it does not already exist.

## Parameters

• **filePath**: `string`

The path to the ignore file to be updated.

• **directoryToIgnore**: `string`

The directory path that should be ignored, relative to the project root.

## Returns

`void`

void

## Remarks

If the directory is outside the project root, the function will return early without making changes.
No logging is performed for cases where the ignore pattern already exists in the file, as this is expected behavior.

## Defined in

[src/setup/updateIgnoreFile.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/setup/updateIgnoreFile.ts#L20)
