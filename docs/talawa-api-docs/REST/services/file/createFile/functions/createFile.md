[**talawa-api**](../../../../../README.md)

***

[talawa-api](../../../../../modules.md) / [REST/services/file/createFile](../README.md) / createFile

# Function: createFile()

\> **createFile**(`uploadResult`, `originalname`, `mimetype`, `size`): `Promise`\<[`InterfaceFile`](../../../../../models/File/interfaces/InterfaceFile.md)\>

Creates or updates a file document in the database based on the upload result.

This function checks if a file with the same hash already exists. If it does, the reference count of the file is incremented.
If not, a new file document is created and saved to the database.

## Parameters

### uploadResult

[`InterfaceUploadResult`](../../../minio/interfaces/InterfaceUploadResult.md)

The result from the file upload containing the hash, object key, and hash algorithm.

### originalname

`string`

The original name of the uploaded file.

### mimetype

`string`

The MIME type of the uploaded file.

### size

`number`

The size of the uploaded file in bytes.

## Returns

`Promise`\<[`InterfaceFile`](../../../../../models/File/interfaces/InterfaceFile.md)\>

A promise that resolves to the created or updated file document.

## Example

```typescript
const file = await createFile(uploadResult, "image.png", "image/png", 2048);
console.log(file);
```

## Defined in

[src/REST/services/file/createFile.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/REST/services/file/createFile.ts#L25)
