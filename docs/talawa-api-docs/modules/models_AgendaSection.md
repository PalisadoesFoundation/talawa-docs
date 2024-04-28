[talawa-api](../README.md) / [Exports](../modules.md) / models/AgendaSection

# Module: models/AgendaSection

## Table of contents

### Interfaces

- [InterfaceAgendaSection](../interfaces/models_AgendaSection.InterfaceAgendaSection.md)

### Variables

- [AgendaSectionModel](models_AgendaSection.md#agendasectionmodel)
- [AgendaSectionSchema](models_AgendaSection.md#agendasectionschema)

## Variables

### AgendaSectionModel

• `Const` **AgendaSectionModel**: `Model`\<[`InterfaceAgendaSection`](../interfaces/models_AgendaSection.InterfaceAgendaSection.md), \{\}, \{\}, \{\}, `Document`\<`unknown`, \{\}, [`InterfaceAgendaSection`](../interfaces/models_AgendaSection.InterfaceAgendaSection.md)\> & [`InterfaceAgendaSection`](../interfaces/models_AgendaSection.InterfaceAgendaSection.md) & `Required`\<\{ `_id`: `ObjectId`  \}\>, `any`\>

#### Defined in

[src/models/AgendaSection.ts:68](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/AgendaSection.ts#L68)

___

### AgendaSectionSchema

• `Const` **AgendaSectionSchema**: `Schema`\<`any`, `Model`\<`any`, `any`, `any`, `any`, `any`, `any`\>, \{\}, \{\}, \{\}, \{\}, `DefaultSchemaOptions`, \{ `createdAt`: `Date` ; `createdBy`: `undefined` \| ``null`` \| `ObjectId` ; `description`: `string` ; `items`: `ObjectId`[] ; `relatedEvent`: `undefined` \| ``null`` \| `ObjectId` ; `sequence`: `number` ; `updatedAt`: `Date`  \}, `Document`\<`unknown`, \{\}, `FlatRecord`\<\{ `createdAt`: `Date` ; `createdBy`: `undefined` \| ``null`` \| `ObjectId` ; `description`: `string` ; `items`: `ObjectId`[] ; `relatedEvent`: `undefined` \| ``null`` \| `ObjectId` ; `sequence`: `number` ; `updatedAt`: `Date`  \}\>\> & `FlatRecord`\<\{ `createdAt`: `Date` ; `createdBy`: `undefined` \| ``null`` \| `ObjectId` ; `description`: `string` ; `items`: `ObjectId`[] ; `relatedEvent`: `undefined` \| ``null`` \| `ObjectId` ; `sequence`: `number` ; `updatedAt`: `Date`  \}\> & \{ `_id`: `ObjectId`  \}\>

This is the Mongoose schema for an agenda section.

**`Param`**

Reference to the event associated with the agenda section.

**`Param`**

Description of the agenda section.

**`Param`**

Array of agenda items associated with the agenda section.

**`Param`**

Sequence number of the agenda section.

**`Param`**

Reference to the user who created the agenda section.

**`Param`**

Date when the agenda section was created.

**`Param`**

Date when the agenda section was last updated.

#### Defined in

[src/models/AgendaSection.ts:31](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/models/AgendaSection.ts#L31)
