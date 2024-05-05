[talawa-api](../README.md) / [Exports](../modules.md) / [models/SampleData](../modules/models_SampleData.md) / InterfaceSampleData

# Interface: InterfaceSampleData

[models/SampleData](../modules/models_SampleData.md).InterfaceSampleData

## Hierarchy

- `Document`

  ↳ **`InterfaceSampleData`**

## Table of contents

### Properties

- [$locals](models_SampleData.InterfaceSampleData.md#$locals)
- [$op](models_SampleData.InterfaceSampleData.md#$op)
- [$where](models_SampleData.InterfaceSampleData.md#$where)
- [\_\_v](models_SampleData.InterfaceSampleData.md#__v)
- [\_id](models_SampleData.InterfaceSampleData.md#_id)
- [baseModelName](models_SampleData.InterfaceSampleData.md#basemodelname)
- [collection](models_SampleData.InterfaceSampleData.md#collection)
- [collectionName](models_SampleData.InterfaceSampleData.md#collectionname)
- [db](models_SampleData.InterfaceSampleData.md#db)
- [documentId](models_SampleData.InterfaceSampleData.md#documentid)
- [errors](models_SampleData.InterfaceSampleData.md#errors)
- [id](models_SampleData.InterfaceSampleData.md#id)
- [isNew](models_SampleData.InterfaceSampleData.md#isnew)
- [schema](models_SampleData.InterfaceSampleData.md#schema)

### Methods

- [$assertPopulated](models_SampleData.InterfaceSampleData.md#$assertpopulated)
- [$clone](models_SampleData.InterfaceSampleData.md#$clone)
- [$getAllSubdocs](models_SampleData.InterfaceSampleData.md#$getallsubdocs)
- [$getPopulatedDocs](models_SampleData.InterfaceSampleData.md#$getpopulateddocs)
- [$ignore](models_SampleData.InterfaceSampleData.md#$ignore)
- [$inc](models_SampleData.InterfaceSampleData.md#$inc)
- [$isDefault](models_SampleData.InterfaceSampleData.md#$isdefault)
- [$isDeleted](models_SampleData.InterfaceSampleData.md#$isdeleted)
- [$isEmpty](models_SampleData.InterfaceSampleData.md#$isempty)
- [$isValid](models_SampleData.InterfaceSampleData.md#$isvalid)
- [$markValid](models_SampleData.InterfaceSampleData.md#$markvalid)
- [$model](models_SampleData.InterfaceSampleData.md#$model)
- [$parent](models_SampleData.InterfaceSampleData.md#$parent)
- [$session](models_SampleData.InterfaceSampleData.md#$session)
- [$set](models_SampleData.InterfaceSampleData.md#$set)
- [deleteOne](models_SampleData.InterfaceSampleData.md#deleteone)
- [depopulate](models_SampleData.InterfaceSampleData.md#depopulate)
- [directModifiedPaths](models_SampleData.InterfaceSampleData.md#directmodifiedpaths)
- [equals](models_SampleData.InterfaceSampleData.md#equals)
- [get](models_SampleData.InterfaceSampleData.md#get)
- [getChanges](models_SampleData.InterfaceSampleData.md#getchanges)
- [increment](models_SampleData.InterfaceSampleData.md#increment)
- [init](models_SampleData.InterfaceSampleData.md#init)
- [invalidate](models_SampleData.InterfaceSampleData.md#invalidate)
- [isDirectModified](models_SampleData.InterfaceSampleData.md#isdirectmodified)
- [isDirectSelected](models_SampleData.InterfaceSampleData.md#isdirectselected)
- [isInit](models_SampleData.InterfaceSampleData.md#isinit)
- [isModified](models_SampleData.InterfaceSampleData.md#ismodified)
- [isSelected](models_SampleData.InterfaceSampleData.md#isselected)
- [markModified](models_SampleData.InterfaceSampleData.md#markmodified)
- [model](models_SampleData.InterfaceSampleData.md#model)
- [modifiedPaths](models_SampleData.InterfaceSampleData.md#modifiedpaths)
- [overwrite](models_SampleData.InterfaceSampleData.md#overwrite)
- [populate](models_SampleData.InterfaceSampleData.md#populate)
- [populated](models_SampleData.InterfaceSampleData.md#populated)
- [replaceOne](models_SampleData.InterfaceSampleData.md#replaceone)
- [save](models_SampleData.InterfaceSampleData.md#save)
- [set](models_SampleData.InterfaceSampleData.md#set)
- [toJSON](models_SampleData.InterfaceSampleData.md#tojson)
- [toObject](models_SampleData.InterfaceSampleData.md#toobject)
- [unmarkModified](models_SampleData.InterfaceSampleData.md#unmarkmodified)
- [updateOne](models_SampleData.InterfaceSampleData.md#updateone)
- [validate](models_SampleData.InterfaceSampleData.md#validate)
- [validateSync](models_SampleData.InterfaceSampleData.md#validatesync)

## Properties

### $locals

• **$locals**: `Record`\<`string`, `unknown`\>

Empty object that you can use for storing properties on the document. This
is handy for passing data to middleware without conflicting with Mongoose
internals.

#### Inherited from

Document.$locals

#### Defined in

node_modules/mongoose/types/document.d.ts:71

___

### $op

• **$op**: ``null`` \| ``"validate"`` \| ``"save"`` \| ``"remove"``

A string containing the current operation that Mongoose is executing
on this document. Can be `null`, `'save'`, `'validate'`, or `'remove'`.

#### Inherited from

Document.$op

#### Defined in

node_modules/mongoose/types/document.d.ts:84

___

### $where

• **$where**: `Record`\<`string`, `unknown`\>

Set this property to add additional query filters when Mongoose saves this document and `isNew` is false.

#### Inherited from

Document.$where

#### Defined in

node_modules/mongoose/types/document.d.ts:99

___

### \_\_v

• `Optional` **\_\_v**: `any`

This documents __v.

#### Inherited from

Document.\_\_v

#### Defined in

node_modules/mongoose/types/document.d.ts:26

___

### \_id

• `Optional` **\_id**: `any`

This documents _id.

#### Inherited from

Document.\_id

#### Defined in

node_modules/mongoose/types/document.d.ts:23

___

### baseModelName

• `Optional` **baseModelName**: `string`

If this is a discriminator model, `baseModelName` is the name of the base model.

#### Inherited from

Document.baseModelName

#### Defined in

node_modules/mongoose/types/document.d.ts:102

___

### collection

• **collection**: `Collection`\<`Document`\>

Collection the model uses.

#### Inherited from

Document.collection

#### Defined in

node_modules/mongoose/types/document.d.ts:105

___

### collectionName

• **collectionName**: ``"User"`` \| ``"Organization"`` \| ``"Post"`` \| ``"Event"`` \| ``"AppUserProfile"`` \| ``"Plugin"``

#### Defined in

[src/models/SampleData.ts:7](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/models/SampleData.ts#L7)

___

### db

• **db**: `Connection`

Connection the model uses.

#### Inherited from

Document.db

#### Defined in

node_modules/mongoose/types/document.d.ts:108

___

### documentId

• **documentId**: `string`

#### Defined in

[src/models/SampleData.ts:6](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/models/SampleData.ts#L6)

___

### errors

• `Optional` **errors**: `ValidationError`

Returns the current validation errors.

#### Inherited from

Document.errors

#### Defined in

node_modules/mongoose/types/document.d.ts:142

___

### id

• `Optional` **id**: `any`

The string version of this documents _id.

#### Inherited from

Document.id

#### Defined in

node_modules/mongoose/types/document.d.ts:155

___

### isNew

• **isNew**: `boolean`

Boolean flag specifying if the document is new.

#### Inherited from

Document.isNew

#### Defined in

node_modules/mongoose/types/document.d.ts:191

___

### schema

• **schema**: `Schema`\<`any`, `Model`\<`any`, `any`, `any`, `any`, `any`, `any`\>, \{\}, \{\}, \{\}, \{\}, `DefaultSchemaOptions`, \{\}, `Document`\<`unknown`, \{\}, `FlatRecord`\<\{\}\>\> & `FlatRecord`\<\{\}\> & `Required`\<\{ `_id`: `unknown`  \}\>\>

The document's schema.

#### Inherited from

Document.schema

#### Defined in

node_modules/mongoose/types/document.d.ts:235

## Methods

### $assertPopulated

▸ **$assertPopulated**\<`Paths`\>(`path`, `values?`): `Omit`\<[`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md), keyof `Paths`\> & `Paths`

Assert that a given path or paths is populated. Throws an error if not populated.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Paths` | \{\} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `string`[] |
| `values?` | `Partial`\<`Paths`\> |

#### Returns

`Omit`\<[`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md), keyof `Paths`\> & `Paths`

#### Inherited from

Document.$assertPopulated

#### Defined in

node_modules/mongoose/types/document.d.ts:29

___

### $clone

▸ **$clone**(): `this`

Returns a deep clone of this document

#### Returns

`this`

#### Inherited from

Document.$clone

#### Defined in

node_modules/mongoose/types/document.d.ts:32

___

### $getAllSubdocs

▸ **$getAllSubdocs**(): `Document`\<`any`, `any`, `any`\>[]

#### Returns

`Document`\<`any`, `any`, `any`\>[]

#### Inherited from

Document.$getAllSubdocs

#### Defined in

node_modules/mongoose/types/document.d.ts:35

___

### $getPopulatedDocs

▸ **$getPopulatedDocs**(): `Document`\<`any`, `any`, `any`\>[]

Returns an array of all populated documents associated with the query

#### Returns

`Document`\<`any`, `any`, `any`\>[]

#### Inherited from

Document.$getPopulatedDocs

#### Defined in

node_modules/mongoose/types/document.d.ts:47

___

### $ignore

▸ **$ignore**(`path`): `void`

Don't run validation on this path or persist changes to this path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Inherited from

Document.$ignore

#### Defined in

node_modules/mongoose/types/document.d.ts:38

___

### $inc

▸ **$inc**(`path`, `val?`): `this`

Increments the numeric value at `path` by the given `val`.
When you call `save()` on this document, Mongoose will send a
`$inc` as opposed to a `$set`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `string`[] |
| `val?` | `number` |

#### Returns

`this`

#### Inherited from

Document.$inc

#### Defined in

node_modules/mongoose/types/document.d.ts:54

___

### $isDefault

▸ **$isDefault**(`path`): `boolean`

Checks if a path is set to its default.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Inherited from

Document.$isDefault

#### Defined in

node_modules/mongoose/types/document.d.ts:41

___

### $isDeleted

▸ **$isDeleted**(`val?`): `boolean`

Getter/setter, determines whether the document was removed or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

Document.$isDeleted

#### Defined in

node_modules/mongoose/types/document.d.ts:44

___

### $isEmpty

▸ **$isEmpty**(`path`): `boolean`

Returns true if the given path is nullish or only contains empty objects.
Useful for determining whether this subdoc will get stripped out by the
[minimize option](/docs/guide.html#minimize).

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Inherited from

Document.$isEmpty

#### Defined in

node_modules/mongoose/types/document.d.ts:61

___

### $isValid

▸ **$isValid**(`path`): `boolean`

Checks if a path is invalid

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Inherited from

Document.$isValid

#### Defined in

node_modules/mongoose/types/document.d.ts:64

___

### $markValid

▸ **$markValid**(`path`): `void`

Marks a path as valid, removing existing validation errors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Inherited from

Document.$markValid

#### Defined in

node_modules/mongoose/types/document.d.ts:74

___

### $model

▸ **$model**\<`ModelType`\>(`name`): `ModelType`

Returns the model with the given name on this document's associated connection.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ModelType` | `Model`\<`unknown`, \{\}, \{\}, \{\}, `Document`\<`unknown`, \{\}, `unknown`\> & \{ `_id`: `ObjectId`  \}, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`ModelType`

#### Inherited from

Document.$model

#### Defined in

node_modules/mongoose/types/document.d.ts:77

▸ **$model**\<`ModelType`\>(): `ModelType`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ModelType` | `Model`\<`any`, \{\}, \{\}, \{\}, `any`, `any`\> |

#### Returns

`ModelType`

#### Inherited from

Document.$model

#### Defined in

node_modules/mongoose/types/document.d.ts:78

___

### $parent

▸ **$parent**(): `undefined` \| `Document`\<`any`, `any`, `any`\>

If this document is a subdocument or populated document, returns the
document's parent. Returns undefined otherwise.

#### Returns

`undefined` \| `Document`\<`any`, `any`, `any`\>

#### Inherited from

Document.$parent

#### Defined in

node_modules/mongoose/types/document.d.ts:219

___

### $session

▸ **$session**(`session?`): ``null`` \| `ClientSession`

Getter/setter around the session associated with this document. Used to
automatically set `session` if you `save()` a doc that you got from a
query with an associated session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | ``null`` \| `ClientSession` |

#### Returns

``null`` \| `ClientSession`

#### Inherited from

Document.$session

#### Defined in

node_modules/mongoose/types/document.d.ts:91

___

### $set

▸ **$set**(`path`, `val`, `type`, `options?`): `this`

Alias for `set()`, used internally to avoid conflicts

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `Record`\<`string`, `any`\> |
| `val` | `any` |
| `type` | `any` |
| `options?` | `DocumentSetOptions` |

#### Returns

`this`

#### Inherited from

Document.$set

#### Defined in

node_modules/mongoose/types/document.d.ts:94

▸ **$set**(`path`, `val`, `options?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `Record`\<`string`, `any`\> |
| `val` | `any` |
| `options?` | `DocumentSetOptions` |

#### Returns

`this`

#### Inherited from

Document.$set

#### Defined in

node_modules/mongoose/types/document.d.ts:95

▸ **$set**(`value`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `Record`\<`string`, `any`\> |

#### Returns

`this`

#### Inherited from

Document.$set

#### Defined in

node_modules/mongoose/types/document.d.ts:96

___

### deleteOne

▸ **deleteOne**(`options?`): `any`

Removes this document from the db.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `QueryOptions`\<`unknown`\> |

#### Returns

`any`

#### Inherited from

Document.deleteOne

#### Defined in

node_modules/mongoose/types/document.d.ts:111

___

### depopulate

▸ **depopulate**(`path?`): `this`

Takes a populated field and returns it to its unpopulated state. If called with
no arguments, then all populated fields are returned to their unpopulated state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | `string` \| `string`[] |

#### Returns

`this`

#### Inherited from

Document.depopulate

#### Defined in

node_modules/mongoose/types/document.d.ts:123

___

### directModifiedPaths

▸ **directModifiedPaths**(): `string`[]

Returns the list of paths that have been directly modified. A direct
modified path is a path that you explicitly set, whether via `doc.foo = 'bar'`,
`Object.assign(doc, \{ foo: 'bar' \})`, or `doc.set('foo', 'bar')`.

#### Returns

`string`[]

#### Inherited from

Document.directModifiedPaths

#### Defined in

node_modules/mongoose/types/document.d.ts:130

___

### equals

▸ **equals**(`doc`): `boolean`

Returns true if this document is equal to another document.

Documents are considered equal when they have matching `_id`s, unless neither
document has an `_id`, in which case this function falls back to using
`deepEqual()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Document`\<`any`, `any`, `any`\> |

#### Returns

`boolean`

#### Inherited from

Document.equals

#### Defined in

node_modules/mongoose/types/document.d.ts:139

___

### get

▸ **get**\<`T`\>(`path`, `type?`, `options?`): `any`

Returns the value of a path.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `T` |
| `type?` | `any` |
| `options?` | `any` |

#### Returns

`any`

#### Inherited from

Document.get

#### Defined in

node_modules/mongoose/types/document.d.ts:145

▸ **get**(`path`, `type?`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `type?` | `any` |
| `options?` | `any` |

#### Returns

`any`

#### Inherited from

Document.get

#### Defined in

node_modules/mongoose/types/document.d.ts:146

___

### getChanges

▸ **getChanges**(): `UpdateQuery`\<[`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md)\>

Returns the changes that happened to the document
in the format that will be sent to MongoDB.

#### Returns

`UpdateQuery`\<[`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md)\>

#### Inherited from

Document.getChanges

#### Defined in

node_modules/mongoose/types/document.d.ts:152

___

### increment

▸ **increment**(): `this`

Signal that we desire an increment of this documents version.

#### Returns

`this`

#### Inherited from

Document.increment

#### Defined in

node_modules/mongoose/types/document.d.ts:158

___

### init

▸ **init**(`obj`, `opts?`): `this`

Initializes the document without setters or marking anything modified.
Called internally after a document is returned from mongodb. Normally,
you do **not** need to call this function on your own.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `AnyObject` |
| `opts?` | `AnyObject` |

#### Returns

`this`

#### Inherited from

Document.init

#### Defined in

node_modules/mongoose/types/document.d.ts:165

___

### invalidate

▸ **invalidate**\<`T`\>(`path`, `errorMsg`, `value?`, `kind?`): ``null`` \| `NativeError`

Marks a path as invalid, causing validation to fail.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `T` |
| `errorMsg` | `string` \| `NativeError` |
| `value?` | `any` |
| `kind?` | `string` |

#### Returns

``null`` \| `NativeError`

#### Inherited from

Document.invalidate

#### Defined in

node_modules/mongoose/types/document.d.ts:168

▸ **invalidate**(`path`, `errorMsg`, `value?`, `kind?`): ``null`` \| `NativeError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `errorMsg` | `string` \| `NativeError` |
| `value?` | `any` |
| `kind?` | `string` |

#### Returns

``null`` \| `NativeError`

#### Inherited from

Document.invalidate

#### Defined in

node_modules/mongoose/types/document.d.ts:169

___

### isDirectModified

▸ **isDirectModified**\<`T`\>(`path`): `boolean`

Returns true if `path` was directly set and modified, else false.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `T` \| `T`[] |

#### Returns

`boolean`

#### Inherited from

Document.isDirectModified

#### Defined in

node_modules/mongoose/types/document.d.ts:172

▸ **isDirectModified**(`path`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `string`[] |

#### Returns

`boolean`

#### Inherited from

Document.isDirectModified

#### Defined in

node_modules/mongoose/types/document.d.ts:173

___

### isDirectSelected

▸ **isDirectSelected**\<`T`\>(`path`): `boolean`

Checks if `path` was explicitly selected. If no projection, always returns true.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `T` |

#### Returns

`boolean`

#### Inherited from

Document.isDirectSelected

#### Defined in

node_modules/mongoose/types/document.d.ts:176

▸ **isDirectSelected**(`path`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Inherited from

Document.isDirectSelected

#### Defined in

node_modules/mongoose/types/document.d.ts:177

___

### isInit

▸ **isInit**\<`T`\>(`path`): `boolean`

Checks if `path` is in the `init` state, that is, it was set by `Document#init()` and not modified since.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `T` |

#### Returns

`boolean`

#### Inherited from

Document.isInit

#### Defined in

node_modules/mongoose/types/document.d.ts:180

▸ **isInit**(`path`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Inherited from

Document.isInit

#### Defined in

node_modules/mongoose/types/document.d.ts:181

___

### isModified

▸ **isModified**\<`T`\>(`path?`, `options?`): `boolean`

Returns true if any of the given paths are modified, else false. If no arguments, returns `true` if any path
in this document is modified.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | `T` \| `T`[] |
| `options?` | ``null`` \| \{ `ignoreAtomics?`: `boolean`  \} |

#### Returns

`boolean`

#### Inherited from

Document.isModified

#### Defined in

node_modules/mongoose/types/document.d.ts:187

▸ **isModified**(`path?`, `options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | `string` \| `string`[] |
| `options?` | ``null`` \| \{ `ignoreAtomics?`: `boolean`  \} |

#### Returns

`boolean`

#### Inherited from

Document.isModified

#### Defined in

node_modules/mongoose/types/document.d.ts:188

___

### isSelected

▸ **isSelected**\<`T`\>(`path`): `boolean`

Checks if `path` was selected in the source query which initialized this document.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `T` |

#### Returns

`boolean`

#### Inherited from

Document.isSelected

#### Defined in

node_modules/mongoose/types/document.d.ts:194

▸ **isSelected**(`path`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Inherited from

Document.isSelected

#### Defined in

node_modules/mongoose/types/document.d.ts:195

___

### markModified

▸ **markModified**\<`T`\>(`path`, `scope?`): `void`

Marks the path as having pending changes to write to the db.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `T` |
| `scope?` | `any` |

#### Returns

`void`

#### Inherited from

Document.markModified

#### Defined in

node_modules/mongoose/types/document.d.ts:198

▸ **markModified**(`path`, `scope?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `scope?` | `any` |

#### Returns

`void`

#### Inherited from

Document.markModified

#### Defined in

node_modules/mongoose/types/document.d.ts:199

___

### model

▸ **model**\<`ModelType`\>(`name`): `ModelType`

Returns the model with the given name on this document's associated connection.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ModelType` | `Model`\<`unknown`, \{\}, \{\}, \{\}, `Document`\<`unknown`, \{\}, `unknown`\> & \{ `_id`: `ObjectId`  \}, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`ModelType`

#### Inherited from

Document.model

#### Defined in

node_modules/mongoose/types/document.d.ts:202

▸ **model**\<`ModelType`\>(): `ModelType`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ModelType` | `Model`\<`any`, \{\}, \{\}, \{\}, `any`, `any`\> |

#### Returns

`ModelType`

#### Inherited from

Document.model

#### Defined in

node_modules/mongoose/types/document.d.ts:203

___

### modifiedPaths

▸ **modifiedPaths**(`options?`): `string`[]

Returns the list of paths that have been modified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.includeChildren?` | `boolean` |

#### Returns

`string`[]

#### Inherited from

Document.modifiedPaths

#### Defined in

node_modules/mongoose/types/document.d.ts:206

___

### overwrite

▸ **overwrite**(`obj`): `this`

Overwrite all values in this document with the values of `obj`, except
for immutable properties. Behaves similarly to `set()`, except for it
unsets all properties that aren't in `obj`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `AnyObject` |

#### Returns

`this`

#### Inherited from

Document.overwrite

#### Defined in

node_modules/mongoose/types/document.d.ts:213

___

### populate

▸ **populate**\<`Paths`\>(`path`): `Promise`\<`MergeType`\<[`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md), `Paths`\>\>

Populates document references.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Paths` | \{\} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `PopulateOptions` \| (`string` \| `PopulateOptions`)[] |

#### Returns

`Promise`\<`MergeType`\<[`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md), `Paths`\>\>

#### Inherited from

Document.populate

#### Defined in

node_modules/mongoose/types/document.d.ts:222

▸ **populate**\<`Paths`\>(`path`, `select?`, `model?`, `match?`, `options?`): `Promise`\<`MergeType`\<[`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md), `Paths`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Paths` | \{\} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `select?` | `string` \| `AnyObject` |
| `model?` | `Model`\<`any`, \{\}, \{\}, \{\}, `any`, `any`\> |
| `match?` | `AnyObject` |
| `options?` | `PopulateOptions` |

#### Returns

`Promise`\<`MergeType`\<[`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md), `Paths`\>\>

#### Inherited from

Document.populate

#### Defined in

node_modules/mongoose/types/document.d.ts:223

___

### populated

▸ **populated**(`path`): `any`

Gets _id(s) used during population of the given `path`. If the path was not populated, returns `undefined`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`any`

#### Inherited from

Document.populated

#### Defined in

node_modules/mongoose/types/document.d.ts:226

___

### replaceOne

▸ **replaceOne**(`replacement?`, `options?`): `Query`\<`any`, [`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md), \{\}, [`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md), ``"find"``\>

Sends a replaceOne command with this document `_id` as the query selector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `replacement?` | `AnyObject` |
| `options?` | ``null`` \| `QueryOptions`\<`unknown`\> |

#### Returns

`Query`\<`any`, [`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md), \{\}, [`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md), ``"find"``\>

#### Inherited from

Document.replaceOne

#### Defined in

node_modules/mongoose/types/document.d.ts:229

___

### save

▸ **save**(`options?`): `Promise`\<[`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md)\>

Saves this document by inserting a new document into the database if [document.isNew](/docs/api/document.html#document_Document-isNew) is `true`, or sends an [updateOne](/docs/api/document.html#document_Document-updateOne) operation with just the modified paths if `isNew` is `false`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `SaveOptions` |

#### Returns

`Promise`\<[`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md)\>

#### Inherited from

Document.save

#### Defined in

node_modules/mongoose/types/document.d.ts:232

___

### set

▸ **set**\<`T`\>(`path`, `val`, `type`, `options?`): `this`

Sets the value of a path, or many paths.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `T` |
| `val` | `any` |
| `type` | `any` |
| `options?` | `DocumentSetOptions` |

#### Returns

`this`

#### Inherited from

Document.set

#### Defined in

node_modules/mongoose/types/document.d.ts:238

▸ **set**(`path`, `val`, `type`, `options?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `Record`\<`string`, `any`\> |
| `val` | `any` |
| `type` | `any` |
| `options?` | `DocumentSetOptions` |

#### Returns

`this`

#### Inherited from

Document.set

#### Defined in

node_modules/mongoose/types/document.d.ts:239

▸ **set**(`path`, `val`, `options?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `Record`\<`string`, `any`\> |
| `val` | `any` |
| `options?` | `DocumentSetOptions` |

#### Returns

`this`

#### Inherited from

Document.set

#### Defined in

node_modules/mongoose/types/document.d.ts:240

▸ **set**(`value`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `Record`\<`string`, `any`\> |

#### Returns

`this`

#### Inherited from

Document.set

#### Defined in

node_modules/mongoose/types/document.d.ts:241

___

### toJSON

▸ **toJSON**\<`T`\>(`options?`): `FlattenMaps`\<`T`\>

The return value of this method is used in calls to JSON.stringify(doc).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ToObjectOptions`\<`Document`\<`unknown`, \{\}, `unknown`\> & \{ `_id`: `ObjectId`  \}\> & \{ `flattenMaps?`: ``true``  \} |

#### Returns

`FlattenMaps`\<`T`\>

#### Inherited from

Document.toJSON

#### Defined in

node_modules/mongoose/types/document.d.ts:244

▸ **toJSON**\<`T`\>(`options`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`Document`\<`unknown`, \{\}, `unknown`\> & \{ `_id`: `ObjectId`  \}\> & \{ `flattenMaps`: ``false``  \} |

#### Returns

`T`

#### Inherited from

Document.toJSON

#### Defined in

node_modules/mongoose/types/document.d.ts:245

___

### toObject

▸ **toObject**\<`T`\>(`options?`): `Require_id`\<`T`\>

Converts this document into a plain-old JavaScript object ([POJO](https://masteringjs.io/tutorials/fundamentals/pojo)).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ToObjectOptions`\<`Document`\<`unknown`, \{\}, `unknown`\> & \{ `_id`: `ObjectId`  \}\> |

#### Returns

`Require_id`\<`T`\>

#### Inherited from

Document.toObject

#### Defined in

node_modules/mongoose/types/document.d.ts:248

___

### unmarkModified

▸ **unmarkModified**\<`T`\>(`path`): `void`

Clears the modified state on the specified path.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `T` |

#### Returns

`void`

#### Inherited from

Document.unmarkModified

#### Defined in

node_modules/mongoose/types/document.d.ts:251

▸ **unmarkModified**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Inherited from

Document.unmarkModified

#### Defined in

node_modules/mongoose/types/document.d.ts:252

___

### updateOne

▸ **updateOne**(`update?`, `options?`): `Query`\<`any`, [`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md), \{\}, [`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md), ``"find"``\>

Sends an updateOne command with this document `_id` as the query selector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `update?` | `UpdateWithAggregationPipeline` \| `UpdateQuery`\<[`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md)\> |
| `options?` | ``null`` \| `QueryOptions`\<`unknown`\> |

#### Returns

`Query`\<`any`, [`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md), \{\}, [`InterfaceSampleData`](models_SampleData.InterfaceSampleData.md), ``"find"``\>

#### Inherited from

Document.updateOne

#### Defined in

node_modules/mongoose/types/document.d.ts:255

___

### validate

▸ **validate**\<`T`\>(`pathsToValidate?`, `options?`): `Promise`\<`void`\>

Executes registered validation rules for this document.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathsToValidate?` | `T` \| `T`[] |
| `options?` | `AnyObject` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

Document.validate

#### Defined in

node_modules/mongoose/types/document.d.ts:258

▸ **validate**(`pathsToValidate?`, `options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathsToValidate?` | `PathsToValidate` |
| `options?` | `AnyObject` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

Document.validate

#### Defined in

node_modules/mongoose/types/document.d.ts:259

▸ **validate**(`options`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.pathsToSkip?` | `pathsToSkip` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

Document.validate

#### Defined in

node_modules/mongoose/types/document.d.ts:260

___

### validateSync

▸ **validateSync**(`options`): ``null`` \| `ValidationError`

Executes registered validation rules (skipping asynchronous validators) for this document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.pathsToSkip?` | `pathsToSkip` |

#### Returns

``null`` \| `ValidationError`

#### Inherited from

Document.validateSync

#### Defined in

node_modules/mongoose/types/document.d.ts:263

▸ **validateSync**\<`T`\>(`pathsToValidate?`, `options?`): ``null`` \| `ValidationError`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathsToValidate?` | `T` \| `T`[] |
| `options?` | `AnyObject` |

#### Returns

``null`` \| `ValidationError`

#### Inherited from

Document.validateSync

#### Defined in

node_modules/mongoose/types/document.d.ts:264

▸ **validateSync**(`pathsToValidate?`, `options?`): ``null`` \| `ValidationError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathsToValidate?` | `PathsToValidate` |
| `options?` | `AnyObject` |

#### Returns

``null`` \| `ValidationError`

#### Inherited from

Document.validateSync

#### Defined in

node_modules/mongoose/types/document.d.ts:265
