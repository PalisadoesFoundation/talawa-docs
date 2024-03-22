[talawa-api](../README.md) / [Exports](../modules.md) / models/AgendaCategory

# Module: models/AgendaCategory

## Table of contents

### Interfaces

- [InterfaceAgendaCategory](../interfaces/models_AgendaCategory.InterfaceAgendaCategory.md)

### Variables

- [AgendaCategoryModel](models_AgendaCategory.md#agendacategorymodel)
- [AgendaCategorySchema](models_AgendaCategory.md#agendacategoryschema)

## Variables

### AgendaCategoryModel

• `Const` **AgendaCategoryModel**: `Model`\<[`InterfaceAgendaCategory`](../interfaces/models_AgendaCategory.InterfaceAgendaCategory.md), \{\}, \{\}\>

#### Defined in

[src/models/AgendaCategory.ts:65](https://github.com/adi790uu/talawa-api/blob/5146430/src/models/AgendaCategory.ts#L65)

___

### AgendaCategorySchema

• `Const` **AgendaCategorySchema**: `Schema`\<`Document`\<`any`, `any`, `any`\>, `Model`\<`Document`\<`any`, `any`, `any`\>, `any`, `any`\>, `undefined`, \{\}\>

This is the Mongoose schema for an agenda category (test-change).

**`Param`**

Name of the agenda category.

**`Param`**

Optional description of the agenda category.

**`Param`**

Reference to the organization associated with the agenda category.

**`Param`**

Reference to the user who created the agenda category.

**`Param`**

Reference to the user who last updated the agenda category.

**`Param`**

Date when the agenda category was created.

**`Param`**

Date when the agenda category was last updated.

#### Defined in

[src/models/AgendaCategory.ts:27](https://github.com/adi790uu/talawa-api/blob/5146430/src/models/AgendaCategory.ts#L27)
