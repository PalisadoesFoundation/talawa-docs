[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [libraries/dbLogger](../README.md) / InterfaceLoggableDocument

# Interface: InterfaceLoggableDocument

Interface for a document that includes logging information.

## Extends

- `Document`

## Properties

### $locals

\> **$locals**: `Record`\<`string`, `unknown`\>

Empty object that you can use for storing properties on the document. This
is handy for passing data to middleware without conflicting with Mongoose
internals.

#### Inherited from

`Document.$locals`

#### Defined in

node\_modules/mongoose/types/document.d.ts:71

***

### $op

\> **$op**: `null` \| `"validate"` \| `"save"` \| `"remove"`

A string containing the current operation that Mongoose is executing
on this document. Can be `null`, `'save'`, `'validate'`, or `'remove'`.

#### Inherited from

`Document.$op`

#### Defined in

node\_modules/mongoose/types/document.d.ts:84

***

### $where

\> **$where**: `Record`\<`string`, `unknown`\>

Set this property to add additional query filters when Mongoose saves this document and `isNew` is false.

#### Inherited from

`Document.$where`

#### Defined in

node\_modules/mongoose/types/document.d.ts:99

***

### \_\_v?

\> `optional` **\_\_v**: `any`

This documents __v.

#### Inherited from

`Document.__v`

#### Defined in

node\_modules/mongoose/types/document.d.ts:26

***

### \_id?

\> `optional` **\_id**: `any`

This documents _id.

#### Inherited from

`Document._id`

#### Defined in

node\_modules/mongoose/types/document.d.ts:23

***

### baseModelName?

\> `optional` **baseModelName**: `string`

If this is a discriminator model, `baseModelName` is the name of the base model.

#### Inherited from

`Document.baseModelName`

#### Defined in

node\_modules/mongoose/types/document.d.ts:102

***

### collection

\> **collection**: `Collection`\<`Document`\>

Collection the model uses.

#### Inherited from

`Document.collection`

#### Defined in

node\_modules/mongoose/types/document.d.ts:105

***

### db

\> **db**: `Connection`

Connection the model uses.

#### Inherited from

`Document.db`

#### Defined in

node\_modules/mongoose/types/document.d.ts:108

***

### errors?

\> `optional` **errors**: `ValidationError`

Returns the current validation errors.

#### Inherited from

`Document.errors`

#### Defined in

node\_modules/mongoose/types/document.d.ts:142

***

### id?

\> `optional` **id**: `any`

The string version of this documents _id.

#### Inherited from

`Document.id`

#### Defined in

node\_modules/mongoose/types/document.d.ts:155

***

### isNew

\> **isNew**: `boolean`

Boolean flag specifying if the document is new.

#### Inherited from

`Document.isNew`

#### Defined in

node\_modules/mongoose/types/document.d.ts:191

***

### logInfo

\> **logInfo**: [`TransactionLogInfo`](../type-aliases/TransactionLogInfo.md)

Information about the transaction log

#### Defined in

[src/libraries/dbLogger.ts:47](https://github.com/PalisadoesFoundation/talawa-api/blob/1f38da5423898626c6ebfa24896a9c3d008195c6/src/libraries/dbLogger.ts#L47)

***

### schema

\> **schema**: `Schema`\<`any`, `Model`\<`any`, `any`, `any`, `any`, `any`, `any`\>, `object`, `object`, `object`, `object`, `DefaultSchemaOptions`, `object`, `Document`\<`unknown`, `object`, `FlatRecord`\<`object`\>\> & `FlatRecord`\<`object`\> & `Required`\<`object`\>\>

The document's schema.

#### Inherited from

`Document.schema`

#### Defined in

node\_modules/mongoose/types/document.d.ts:235

## Methods

### $assertPopulated()

\> **$assertPopulated**\<`Paths`\>(`path`, `values`?): `Omit`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), keyof `Paths`\> & `Paths`

Assert that a given path or paths is populated. Throws an error if not populated.

#### Type Parameters

• **Paths** = `object`

#### Parameters

• **path**: `string` \| `string`[]

• **values?**: `Partial`\<`Paths`\>

#### Returns

`Omit`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), keyof `Paths`\> & `Paths`

#### Inherited from

`Document.$assertPopulated`

#### Defined in

node\_modules/mongoose/types/document.d.ts:29

***

### $clone()

\> **$clone**(): `this`

Returns a deep clone of this document

#### Returns

`this`

#### Inherited from

`Document.$clone`

#### Defined in

node\_modules/mongoose/types/document.d.ts:32

***

### $getAllSubdocs()

\> **$getAllSubdocs**(): `Document`\<`any`, `any`, `any`\>[]

#### Returns

`Document`\<`any`, `any`, `any`\>[]

#### Inherited from

`Document.$getAllSubdocs`

#### Defined in

node\_modules/mongoose/types/document.d.ts:35

***

### $getPopulatedDocs()

\> **$getPopulatedDocs**(): `Document`\<`any`, `any`, `any`\>[]

Returns an array of all populated documents associated with the query

#### Returns

`Document`\<`any`, `any`, `any`\>[]

#### Inherited from

`Document.$getPopulatedDocs`

#### Defined in

node\_modules/mongoose/types/document.d.ts:47

***

### $ignore()

\> **$ignore**(`path`): `void`

Don't run validation on this path or persist changes to this path.

#### Parameters

• **path**: `string`

#### Returns

`void`

#### Inherited from

`Document.$ignore`

#### Defined in

node\_modules/mongoose/types/document.d.ts:38

***

### $inc()

\> **$inc**(`path`, `val`?): `this`

Increments the numeric value at `path` by the given `val`.
When you call `save()` on this document, Mongoose will send a
`$inc` as opposed to a `$set`.

#### Parameters

• **path**: `string` \| `string`[]

• **val?**: `number`

#### Returns

`this`

#### Inherited from

`Document.$inc`

#### Defined in

node\_modules/mongoose/types/document.d.ts:54

***

### $isDefault()

\> **$isDefault**(`path`): `boolean`

Checks if a path is set to its default.

#### Parameters

• **path**: `string`

#### Returns

`boolean`

#### Inherited from

`Document.$isDefault`

#### Defined in

node\_modules/mongoose/types/document.d.ts:41

***

### $isDeleted()

\> **$isDeleted**(`val`?): `boolean`

Getter/setter, determines whether the document was removed or not.

#### Parameters

• **val?**: `boolean`

#### Returns

`boolean`

#### Inherited from

`Document.$isDeleted`

#### Defined in

node\_modules/mongoose/types/document.d.ts:44

***

### $isEmpty()

\> **$isEmpty**(`path`): `boolean`

Returns true if the given path is nullish or only contains empty objects.
Useful for determining whether this subdoc will get stripped out by the
[minimize option](/docs/guide.html#minimize).

#### Parameters

• **path**: `string`

#### Returns

`boolean`

#### Inherited from

`Document.$isEmpty`

#### Defined in

node\_modules/mongoose/types/document.d.ts:61

***

### $isValid()

\> **$isValid**(`path`): `boolean`

Checks if a path is invalid

#### Parameters

• **path**: `string`

#### Returns

`boolean`

#### Inherited from

`Document.$isValid`

#### Defined in

node\_modules/mongoose/types/document.d.ts:64

***

### $markValid()

\> **$markValid**(`path`): `void`

Marks a path as valid, removing existing validation errors.

#### Parameters

• **path**: `string`

#### Returns

`void`

#### Inherited from

`Document.$markValid`

#### Defined in

node\_modules/mongoose/types/document.d.ts:74

***

### $model()

#### $model(name)

\> **$model**\<`ModelType`\>(`name`): `ModelType`

Returns the model with the given name on this document's associated connection.

##### Type Parameters

• **ModelType** = `Model`\<`unknown`, `object`, `object`, `object`, `Document`\<`unknown`, `object`, `unknown`\> & `object`, `any`\>

##### Parameters

• **name**: `string`

##### Returns

`ModelType`

##### Inherited from

`Document.$model`

##### Defined in

node\_modules/mongoose/types/document.d.ts:77

#### $model()

\> **$model**\<`ModelType`\>(): `ModelType`

##### Type Parameters

• **ModelType** = `Model`\<`any`, `object`, `object`, `object`, `any`, `any`\>

##### Returns

`ModelType`

##### Inherited from

`Document.$model`

##### Defined in

node\_modules/mongoose/types/document.d.ts:78

***

### $parent()

\> **$parent**(): `undefined` \| `Document`\<`any`, `any`, `any`\>

If this document is a subdocument or populated document, returns the
document's parent. Returns undefined otherwise.

#### Returns

`undefined` \| `Document`\<`any`, `any`, `any`\>

#### Inherited from

`Document.$parent`

#### Defined in

node\_modules/mongoose/types/document.d.ts:219

***

### $session()

\> **$session**(`session`?): `null` \| `ClientSession`

Getter/setter around the session associated with this document. Used to
automatically set `session` if you `save()` a doc that you got from a
query with an associated session.

#### Parameters

• **session?**: `null` \| `ClientSession`

#### Returns

`null` \| `ClientSession`

#### Inherited from

`Document.$session`

#### Defined in

node\_modules/mongoose/types/document.d.ts:91

***

### $set()

#### $set(path, val, type, options)

\> **$set**(`path`, `val`, `type`, `options`?): `this`

Alias for `set()`, used internally to avoid conflicts

##### Parameters

• **path**: `string` \| `Record`\<`string`, `any`\>

• **val**: `any`

• **type**: `any`

• **options?**: `DocumentSetOptions`

##### Returns

`this`

##### Inherited from

`Document.$set`

##### Defined in

node\_modules/mongoose/types/document.d.ts:94

#### $set(path, val, options)

\> **$set**(`path`, `val`, `options`?): `this`

##### Parameters

• **path**: `string` \| `Record`\<`string`, `any`\>

• **val**: `any`

• **options?**: `DocumentSetOptions`

##### Returns

`this`

##### Inherited from

`Document.$set`

##### Defined in

node\_modules/mongoose/types/document.d.ts:95

#### $set(value)

\> **$set**(`value`): `this`

##### Parameters

• **value**: `string` \| `Record`\<`string`, `any`\>

##### Returns

`this`

##### Inherited from

`Document.$set`

##### Defined in

node\_modules/mongoose/types/document.d.ts:96

***

### deleteOne()

\> **deleteOne**(`options`?): `any`

Removes this document from the db.

#### Parameters

• **options?**: `QueryOptions`\<`unknown`\>

#### Returns

`any`

#### Inherited from

`Document.deleteOne`

#### Defined in

node\_modules/mongoose/types/document.d.ts:111

***

### depopulate()

\> **depopulate**(`path`?): `this`

Takes a populated field and returns it to its unpopulated state. If called with
no arguments, then all populated fields are returned to their unpopulated state.

#### Parameters

• **path?**: `string` \| `string`[]

#### Returns

`this`

#### Inherited from

`Document.depopulate`

#### Defined in

node\_modules/mongoose/types/document.d.ts:123

***

### directModifiedPaths()

\> **directModifiedPaths**(): `string`[]

Returns the list of paths that have been directly modified. A direct
modified path is a path that you explicitly set, whether via `doc.foo = 'bar'`,
`Object.assign(doc, \{ foo: 'bar' \})`, or `doc.set('foo', 'bar')`.

#### Returns

`string`[]

#### Inherited from

`Document.directModifiedPaths`

#### Defined in

node\_modules/mongoose/types/document.d.ts:130

***

### equals()

\> **equals**(`doc`): `boolean`

Returns true if this document is equal to another document.

Documents are considered equal when they have matching `_id`s, unless neither
document has an `_id`, in which case this function falls back to using
`deepEqual()`.

#### Parameters

• **doc**: `Document`\<`any`, `any`, `any`\>

#### Returns

`boolean`

#### Inherited from

`Document.equals`

#### Defined in

node\_modules/mongoose/types/document.d.ts:139

***

### get()

#### get(path, type, options)

\> **get**\<`T`\>(`path`, `type`?, `options`?): `any`

Returns the value of a path.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **path**: `T`

• **type?**: `any`

• **options?**: `any`

##### Returns

`any`

##### Inherited from

`Document.get`

##### Defined in

node\_modules/mongoose/types/document.d.ts:145

#### get(path, type, options)

\> **get**(`path`, `type`?, `options`?): `any`

##### Parameters

• **path**: `string`

• **type?**: `any`

• **options?**: `any`

##### Returns

`any`

##### Inherited from

`Document.get`

##### Defined in

node\_modules/mongoose/types/document.d.ts:146

***

### getChanges()

\> **getChanges**(): `UpdateQuery`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md)\>

Returns the changes that happened to the document
in the format that will be sent to MongoDB.

#### Returns

`UpdateQuery`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md)\>

#### Inherited from

`Document.getChanges`

#### Defined in

node\_modules/mongoose/types/document.d.ts:152

***

### increment()

\> **increment**(): `this`

Signal that we desire an increment of this documents version.

#### Returns

`this`

#### Inherited from

`Document.increment`

#### Defined in

node\_modules/mongoose/types/document.d.ts:158

***

### init()

\> **init**(`obj`, `opts`?): `this`

Initializes the document without setters or marking anything modified.
Called internally after a document is returned from mongodb. Normally,
you do **not** need to call this function on your own.

#### Parameters

• **obj**: `AnyObject`

• **opts?**: `AnyObject`

#### Returns

`this`

#### Inherited from

`Document.init`

#### Defined in

node\_modules/mongoose/types/document.d.ts:165

***

### invalidate()

#### invalidate(path, errorMsg, value, kind)

\> **invalidate**\<`T`\>(`path`, `errorMsg`, `value`?, `kind`?): `null` \| `NativeError`

Marks a path as invalid, causing validation to fail.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **path**: `T`

• **errorMsg**: `string` \| `NativeError`

• **value?**: `any`

• **kind?**: `string`

##### Returns

`null` \| `NativeError`

##### Inherited from

`Document.invalidate`

##### Defined in

node\_modules/mongoose/types/document.d.ts:168

#### invalidate(path, errorMsg, value, kind)

\> **invalidate**(`path`, `errorMsg`, `value`?, `kind`?): `null` \| `NativeError`

##### Parameters

• **path**: `string`

• **errorMsg**: `string` \| `NativeError`

• **value?**: `any`

• **kind?**: `string`

##### Returns

`null` \| `NativeError`

##### Inherited from

`Document.invalidate`

##### Defined in

node\_modules/mongoose/types/document.d.ts:169

***

### isDirectModified()

#### isDirectModified(path)

\> **isDirectModified**\<`T`\>(`path`): `boolean`

Returns true if `path` was directly set and modified, else false.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **path**: `T` \| `T`[]

##### Returns

`boolean`

##### Inherited from

`Document.isDirectModified`

##### Defined in

node\_modules/mongoose/types/document.d.ts:172

#### isDirectModified(path)

\> **isDirectModified**(`path`): `boolean`

##### Parameters

• **path**: `string` \| `string`[]

##### Returns

`boolean`

##### Inherited from

`Document.isDirectModified`

##### Defined in

node\_modules/mongoose/types/document.d.ts:173

***

### isDirectSelected()

#### isDirectSelected(path)

\> **isDirectSelected**\<`T`\>(`path`): `boolean`

Checks if `path` was explicitly selected. If no projection, always returns true.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **path**: `T`

##### Returns

`boolean`

##### Inherited from

`Document.isDirectSelected`

##### Defined in

node\_modules/mongoose/types/document.d.ts:176

#### isDirectSelected(path)

\> **isDirectSelected**(`path`): `boolean`

##### Parameters

• **path**: `string`

##### Returns

`boolean`

##### Inherited from

`Document.isDirectSelected`

##### Defined in

node\_modules/mongoose/types/document.d.ts:177

***

### isInit()

#### isInit(path)

\> **isInit**\<`T`\>(`path`): `boolean`

Checks if `path` is in the `init` state, that is, it was set by `Document#init()` and not modified since.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **path**: `T`

##### Returns

`boolean`

##### Inherited from

`Document.isInit`

##### Defined in

node\_modules/mongoose/types/document.d.ts:180

#### isInit(path)

\> **isInit**(`path`): `boolean`

##### Parameters

• **path**: `string`

##### Returns

`boolean`

##### Inherited from

`Document.isInit`

##### Defined in

node\_modules/mongoose/types/document.d.ts:181

***

### isModified()

#### isModified(path, options)

\> **isModified**\<`T`\>(`path`?, `options`?): `boolean`

Returns true if any of the given paths are modified, else false. If no arguments, returns `true` if any path
in this document is modified.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **path?**: `T` \| `T`[]

• **options?**: `null` \| `object`

##### Returns

`boolean`

##### Inherited from

`Document.isModified`

##### Defined in

node\_modules/mongoose/types/document.d.ts:187

#### isModified(path, options)

\> **isModified**(`path`?, `options`?): `boolean`

##### Parameters

• **path?**: `string` \| `string`[]

• **options?**: `null` \| `object`

##### Returns

`boolean`

##### Inherited from

`Document.isModified`

##### Defined in

node\_modules/mongoose/types/document.d.ts:188

***

### isSelected()

#### isSelected(path)

\> **isSelected**\<`T`\>(`path`): `boolean`

Checks if `path` was selected in the source query which initialized this document.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **path**: `T`

##### Returns

`boolean`

##### Inherited from

`Document.isSelected`

##### Defined in

node\_modules/mongoose/types/document.d.ts:194

#### isSelected(path)

\> **isSelected**(`path`): `boolean`

##### Parameters

• **path**: `string`

##### Returns

`boolean`

##### Inherited from

`Document.isSelected`

##### Defined in

node\_modules/mongoose/types/document.d.ts:195

***

### markModified()

#### markModified(path, scope)

\> **markModified**\<`T`\>(`path`, `scope`?): `void`

Marks the path as having pending changes to write to the db.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **path**: `T`

• **scope?**: `any`

##### Returns

`void`

##### Inherited from

`Document.markModified`

##### Defined in

node\_modules/mongoose/types/document.d.ts:198

#### markModified(path, scope)

\> **markModified**(`path`, `scope`?): `void`

##### Parameters

• **path**: `string`

• **scope?**: `any`

##### Returns

`void`

##### Inherited from

`Document.markModified`

##### Defined in

node\_modules/mongoose/types/document.d.ts:199

***

### model()

#### model(name)

\> **model**\<`ModelType`\>(`name`): `ModelType`

Returns the model with the given name on this document's associated connection.

##### Type Parameters

• **ModelType** = `Model`\<`unknown`, `object`, `object`, `object`, `Document`\<`unknown`, `object`, `unknown`\> & `object`, `any`\>

##### Parameters

• **name**: `string`

##### Returns

`ModelType`

##### Inherited from

`Document.model`

##### Defined in

node\_modules/mongoose/types/document.d.ts:202

#### model()

\> **model**\<`ModelType`\>(): `ModelType`

##### Type Parameters

• **ModelType** = `Model`\<`any`, `object`, `object`, `object`, `any`, `any`\>

##### Returns

`ModelType`

##### Inherited from

`Document.model`

##### Defined in

node\_modules/mongoose/types/document.d.ts:203

***

### modifiedPaths()

\> **modifiedPaths**(`options`?): `string`[]

Returns the list of paths that have been modified.

#### Parameters

• **options?**

• **options.includeChildren?**: `boolean`

#### Returns

`string`[]

#### Inherited from

`Document.modifiedPaths`

#### Defined in

node\_modules/mongoose/types/document.d.ts:206

***

### overwrite()

\> **overwrite**(`obj`): `this`

Overwrite all values in this document with the values of `obj`, except
for immutable properties. Behaves similarly to `set()`, except for it
unsets all properties that aren't in `obj`.

#### Parameters

• **obj**: `AnyObject`

#### Returns

`this`

#### Inherited from

`Document.overwrite`

#### Defined in

node\_modules/mongoose/types/document.d.ts:213

***

### populate()

#### populate(path)

\> **populate**\<`Paths`\>(`path`): `Promise`\<`MergeType`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), `Paths`\>\>

Populates document references.

##### Type Parameters

• **Paths** = `object`

##### Parameters

• **path**: `string` \| `PopulateOptions` \| (`string` \| `PopulateOptions`)[]

##### Returns

`Promise`\<`MergeType`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), `Paths`\>\>

##### Inherited from

`Document.populate`

##### Defined in

node\_modules/mongoose/types/document.d.ts:222

#### populate(path, select, model, match, options)

\> **populate**\<`Paths`\>(`path`, `select`?, `model`?, `match`?, `options`?): `Promise`\<`MergeType`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), `Paths`\>\>

##### Type Parameters

• **Paths** = `object`

##### Parameters

• **path**: `string`

• **select?**: `string` \| `AnyObject`

• **model?**: `Model`\<`any`, `object`, `object`, `object`, `any`, `any`\>

• **match?**: `AnyObject`

• **options?**: `PopulateOptions`

##### Returns

`Promise`\<`MergeType`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), `Paths`\>\>

##### Inherited from

`Document.populate`

##### Defined in

node\_modules/mongoose/types/document.d.ts:223

***

### populated()

\> **populated**(`path`): `any`

Gets _id(s) used during population of the given `path`. If the path was not populated, returns `undefined`.

#### Parameters

• **path**: `string`

#### Returns

`any`

#### Inherited from

`Document.populated`

#### Defined in

node\_modules/mongoose/types/document.d.ts:226

***

### replaceOne()

\> **replaceOne**(`replacement`?, `options`?): `Query`\<`any`, [`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), `object`, [`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), `"find"`\>

Sends a replaceOne command with this document `_id` as the query selector.

#### Parameters

• **replacement?**: `AnyObject`

• **options?**: `null` \| `QueryOptions`\<`unknown`\>

#### Returns

`Query`\<`any`, [`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), `object`, [`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), `"find"`\>

#### Inherited from

`Document.replaceOne`

#### Defined in

node\_modules/mongoose/types/document.d.ts:229

***

### save()

\> **save**(`options`?): `Promise`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md)\>

Saves this document by inserting a new document into the database if [document.isNew](/docs/api/document.html#document_Document-isNew) is `true`, or sends an [updateOne](/docs/api/document.html#document_Document-updateOne) operation with just the modified paths if `isNew` is `false`.

#### Parameters

• **options?**: `SaveOptions`

#### Returns

`Promise`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md)\>

#### Inherited from

`Document.save`

#### Defined in

node\_modules/mongoose/types/document.d.ts:232

***

### set()

#### set(path, val, type, options)

\> **set**\<`T`\>(`path`, `val`, `type`, `options`?): `this`

Sets the value of a path, or many paths.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **path**: `T`

• **val**: `any`

• **type**: `any`

• **options?**: `DocumentSetOptions`

##### Returns

`this`

##### Inherited from

`Document.set`

##### Defined in

node\_modules/mongoose/types/document.d.ts:238

#### set(path, val, type, options)

\> **set**(`path`, `val`, `type`, `options`?): `this`

##### Parameters

• **path**: `string` \| `Record`\<`string`, `any`\>

• **val**: `any`

• **type**: `any`

• **options?**: `DocumentSetOptions`

##### Returns

`this`

##### Inherited from

`Document.set`

##### Defined in

node\_modules/mongoose/types/document.d.ts:239

#### set(path, val, options)

\> **set**(`path`, `val`, `options`?): `this`

##### Parameters

• **path**: `string` \| `Record`\<`string`, `any`\>

• **val**: `any`

• **options?**: `DocumentSetOptions`

##### Returns

`this`

##### Inherited from

`Document.set`

##### Defined in

node\_modules/mongoose/types/document.d.ts:240

#### set(value)

\> **set**(`value`): `this`

##### Parameters

• **value**: `string` \| `Record`\<`string`, `any`\>

##### Returns

`this`

##### Inherited from

`Document.set`

##### Defined in

node\_modules/mongoose/types/document.d.ts:241

***

### toJSON()

#### toJSON(options)

\> **toJSON**\<`T`\>(`options`?): `FlattenMaps`\<`T`\>

The return value of this method is used in calls to JSON.stringify(doc).

##### Type Parameters

• **T** = `any`

##### Parameters

• **options?**: `ToObjectOptions`\<`Document`\<`unknown`, `object`, `unknown`\> & `object`\> & `object`

##### Returns

`FlattenMaps`\<`T`\>

##### Inherited from

`Document.toJSON`

##### Defined in

node\_modules/mongoose/types/document.d.ts:244

#### toJSON(options)

\> **toJSON**\<`T`\>(`options`): `T`

##### Type Parameters

• **T** = `any`

##### Parameters

• **options**: `ToObjectOptions`\<`Document`\<`unknown`, `object`, `unknown`\> & `object`\> & `object`

##### Returns

`T`

##### Inherited from

`Document.toJSON`

##### Defined in

node\_modules/mongoose/types/document.d.ts:245

***

### toObject()

\> **toObject**\<`T`\>(`options`?): `Require_id`\<`T`\>

Converts this document into a plain-old JavaScript object ([POJO](https://masteringjs.io/tutorials/fundamentals/pojo)).

#### Type Parameters

• **T** = `any`

#### Parameters

• **options?**: `ToObjectOptions`\<`Document`\<`unknown`, `object`, `unknown`\> & `object`\>

#### Returns

`Require_id`\<`T`\>

#### Inherited from

`Document.toObject`

#### Defined in

node\_modules/mongoose/types/document.d.ts:248

***

### unmarkModified()

#### unmarkModified(path)

\> **unmarkModified**\<`T`\>(`path`): `void`

Clears the modified state on the specified path.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **path**: `T`

##### Returns

`void`

##### Inherited from

`Document.unmarkModified`

##### Defined in

node\_modules/mongoose/types/document.d.ts:251

#### unmarkModified(path)

\> **unmarkModified**(`path`): `void`

##### Parameters

• **path**: `string`

##### Returns

`void`

##### Inherited from

`Document.unmarkModified`

##### Defined in

node\_modules/mongoose/types/document.d.ts:252

***

### updateOne()

\> **updateOne**(`update`?, `options`?): `Query`\<`any`, [`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), `object`, [`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), `"find"`\>

Sends an updateOne command with this document `_id` as the query selector.

#### Parameters

• **update?**: `UpdateWithAggregationPipeline` \| `UpdateQuery`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md)\>

• **options?**: `null` \| `QueryOptions`\<`unknown`\>

#### Returns

`Query`\<`any`, [`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), `object`, [`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), `"find"`\>

#### Inherited from

`Document.updateOne`

#### Defined in

node\_modules/mongoose/types/document.d.ts:255

***

### validate()

#### validate(pathsToValidate, options)

\> **validate**\<`T`\>(`pathsToValidate`?, `options`?): `Promise`\<`void`\>

Executes registered validation rules for this document.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **pathsToValidate?**: `T` \| `T`[]

• **options?**: `AnyObject`

##### Returns

`Promise`\<`void`\>

##### Inherited from

`Document.validate`

##### Defined in

node\_modules/mongoose/types/document.d.ts:258

#### validate(pathsToValidate, options)

\> **validate**(`pathsToValidate`?, `options`?): `Promise`\<`void`\>

##### Parameters

• **pathsToValidate?**: `PathsToValidate`

• **options?**: `AnyObject`

##### Returns

`Promise`\<`void`\>

##### Inherited from

`Document.validate`

##### Defined in

node\_modules/mongoose/types/document.d.ts:259

#### validate(options)

\> **validate**(`options`): `Promise`\<`void`\>

##### Parameters

• **options**

• **options.pathsToSkip?**: `pathsToSkip`

##### Returns

`Promise`\<`void`\>

##### Inherited from

`Document.validate`

##### Defined in

node\_modules/mongoose/types/document.d.ts:260

***

### validateSync()

#### validateSync(options)

\> **validateSync**(`options`): `null` \| `ValidationError`

Executes registered validation rules (skipping asynchronous validators) for this document.

##### Parameters

• **options**

• **options.pathsToSkip?**: `pathsToSkip`

##### Returns

`null` \| `ValidationError`

##### Inherited from

`Document.validateSync`

##### Defined in

node\_modules/mongoose/types/document.d.ts:263

#### validateSync(pathsToValidate, options)

\> **validateSync**\<`T`\>(`pathsToValidate`?, `options`?): `null` \| `ValidationError`

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **pathsToValidate?**: `T` \| `T`[]

• **options?**: `AnyObject`

##### Returns

`null` \| `ValidationError`

##### Inherited from

`Document.validateSync`

##### Defined in

node\_modules/mongoose/types/document.d.ts:264

#### validateSync(pathsToValidate, options)

\> **validateSync**(`pathsToValidate`?, `options`?): `null` \| `ValidationError`

##### Parameters

• **pathsToValidate?**: `PathsToValidate`

• **options?**: `AnyObject`

##### Returns

`null` \| `ValidationError`

##### Inherited from

`Document.validateSync`

##### Defined in

node\_modules/mongoose/types/document.d.ts:265
