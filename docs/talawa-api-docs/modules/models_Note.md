[talawa-api](../README.md) / [Exports](../modules.md) / models/Note

# Module: models/Note

## Table of contents

### Interfaces

- [InterfaceNote](../interfaces/models_Note.InterfaceNote.md)

### Variables

- [NoteModel](models_Note.md#notemodel)
- [NoteSchema](models_Note.md#noteschema)

## Variables

### NoteModel

• `Const` **NoteModel**: `Model`\<[`InterfaceNote`](../interfaces/models_Note.InterfaceNote.md), \{\}, \{\}, \{\}, `Document`\<`unknown`, \{\}, [`InterfaceNote`](../interfaces/models_Note.InterfaceNote.md)\> & [`InterfaceNote`](../interfaces/models_Note.InterfaceNote.md) & `Required`\<\{ `_id`: `ObjectId`  \}\>, `any`\>

#### Defined in

[src/models/Note.ts:48](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Note.ts#L48)

___

### NoteSchema

• `Const` **NoteSchema**: `Schema`\<`any`, `Model`\<`any`, `any`, `any`, `any`, `any`, `any`\>, \{\}, \{\}, \{\}, \{\}, `DefaultSchemaOptions`, \{ `agendaItemId`: `ObjectId` ; `content`: `string` ; `createdAt`: `Date` ; `createdBy`: `ObjectId` ; `updatedAt`: `Date` ; `updatedBy`: `undefined` \| ``null`` \| `ObjectId`  \}, `Document`\<`unknown`, \{\}, `FlatRecord`\<\{ `agendaItemId`: `ObjectId` ; `content`: `string` ; `createdAt`: `Date` ; `createdBy`: `ObjectId` ; `updatedAt`: `Date` ; `updatedBy`: `undefined` \| ``null`` \| `ObjectId`  \}\>\> & `FlatRecord`\<\{ `agendaItemId`: `ObjectId` ; `content`: `string` ; `createdAt`: `Date` ; `createdBy`: `ObjectId` ; `updatedAt`: `Date` ; `updatedBy`: `undefined` \| ``null`` \| `ObjectId`  \}\> & \{ `_id`: `ObjectId`  \}\>

#### Defined in

[src/models/Note.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/Note.ts#L15)
