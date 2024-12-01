[**talawa-api**](../../../../../README.md)

***

[talawa-api](../../../../../modules.md) / [REST/services/file/uploadFile](../README.md) / InterfaceUploadedFileResponse

# Interface: InterfaceUploadedFileResponse

## Extends

- `Partial`\<[`InterfaceFile`](../../../../../models/File/interfaces/InterfaceFile.md)\>

## Properties

### \_id?

\> `optional` **\_id**: `ObjectId`

#### Inherited from

`Partial._id`

#### Defined in

[src/models/File.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/models/File.ts#L8)

***

### archived?

\> `optional` **archived**: `boolean`

#### Inherited from

`Partial.archived`

#### Defined in

[src/models/File.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/models/File.ts#L20)

***

### archivedAt?

\> `optional` **archivedAt**: `Date`

#### Inherited from

`Partial.archivedAt`

#### Defined in

[src/models/File.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/models/File.ts#L26)

***

### backupStatus?

\> `optional` **backupStatus**: `string`

#### Inherited from

`Partial.backupStatus`

#### Defined in

[src/models/File.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/models/File.ts#L22)

***

### createdAt?

\> `optional` **createdAt**: `Date`

#### Inherited from

`Partial.createdAt`

#### Defined in

[src/models/File.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/models/File.ts#L24)

***

### encryption?

\> `optional` **encryption**: `boolean`

#### Inherited from

`Partial.encryption`

#### Defined in

[src/models/File.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/models/File.ts#L19)

***

### fileName?

\> `optional` **fileName**: `string`

#### Inherited from

`Partial.fileName`

#### Defined in

[src/models/File.ts:9](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/models/File.ts#L9)

***

### hash?

\> `optional` **hash**: `object`

#### algorithm

\> **algorithm**: `string`

#### value

\> **value**: `string`

#### Inherited from

`Partial.hash`

#### Defined in

[src/models/File.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/models/File.ts#L12)

***

### metadata?

\> `optional` **metadata**: `Record`\<`string`, `any`\>

#### Inherited from

`Partial.metadata`

#### Defined in

[src/models/File.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/models/File.ts#L18)

***

### mimeType?

\> `optional` **mimeType**: `string`

#### Inherited from

`Partial.mimeType`

#### Defined in

[src/models/File.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/models/File.ts#L10)

***

### objectKey

\> **objectKey**: `string`

#### Defined in

[src/REST/services/file/uploadFile.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/REST/services/file/uploadFile.ts#L18)

***

### referenceCount?

\> `optional` **referenceCount**: `number`

#### Inherited from

`Partial.referenceCount`

#### Defined in

[src/models/File.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/models/File.ts#L17)

***

### size?

\> `optional` **size**: `number`

#### Inherited from

`Partial.size`

#### Defined in

[src/models/File.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/models/File.ts#L11)

***

### status?

\> `optional` **status**: `"ACTIVE"` \| `"BLOCKED"` \| `"DELETED"`

#### Inherited from

`Partial.status`

#### Defined in

[src/models/File.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/models/File.ts#L23)

***

### updatedAt?

\> `optional` **updatedAt**: `Date`

#### Inherited from

`Partial.updatedAt`

#### Defined in

[src/models/File.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/models/File.ts#L25)

***

### uri?

\> `optional` **uri**: `string`

#### Inherited from

`Partial.uri`

#### Defined in

[src/models/File.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/models/File.ts#L16)

***

### visibility?

\> `optional` **visibility**: `"PRIVATE"` \| `"PUBLIC"`

#### Inherited from

`Partial.visibility`

#### Defined in

[src/models/File.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/models/File.ts#L21)
