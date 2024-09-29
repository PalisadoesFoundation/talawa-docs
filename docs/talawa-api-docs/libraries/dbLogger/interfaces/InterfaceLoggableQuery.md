[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [libraries/dbLogger](../README.md) / InterfaceLoggableQuery

# Interface: InterfaceLoggableQuery\<T\>

Interface for a query that can include logging information.

## Extends

- `Query`\<`unknown`, `T`\>

## Type Parameters

• **T**

## Properties

### \[toStringTag\]

\> **\[toStringTag\]**: `string`

#### Inherited from

`Query.[toStringTag]`

#### Defined in

node\_modules/mongoose/types/query.d.ts:269

***

### \_mongooseOptions

\> **\_mongooseOptions**: `MongooseQueryOptions`\<`T`, `"timestamps"` \| `MongooseBaseQueryOptionKeys` \| `"lean"`\>

#### Inherited from

`Query._mongooseOptions`

#### Defined in

node\_modules/mongoose/types/query.d.ts:209

***

### catch()

\> **catch**: \<`TResult`\>(`onrejected`?) =\> `Promise`\<`unknown`\>

Executes the query returning a `Promise` which will be
resolved with either the doc(s) or rejected with the error.
Like `.then()`, but only takes a rejection handler.

Attaches a callback for only the rejection of the Promise.

#### Type Parameters

• **TResult** = `never`

#### Parameters

• **onrejected?**: `null` \| (`reason`) =\> `TResult` \| `PromiseLike`\<`TResult`\>

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<`unknown`\>

A Promise for the completion of the callback.

#### Inherited from

`Query.catch`

#### Defined in

node\_modules/mongoose/types/query.d.ts:260

***

### finally()

\> **finally**: (`onfinally`?) =\> `Promise`\<`unknown`\>

Executes the query returning a `Promise` which will be
resolved with `.finally()` chained.

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

• **onfinally?**: `null` \| () =\> `void`

The callback to execute when the Promise is settled (fulfilled or rejected).

#### Returns

`Promise`\<`unknown`\>

A Promise for the completion of the callback.

#### Inherited from

`Query.finally`

#### Defined in

node\_modules/mongoose/types/query.d.ts:266

***

### logInfo?

\> `optional` **logInfo**: [`TransactionLogInfo`](../type-aliases/TransactionLogInfo.md)

Information about the transaction log (optional)

#### Defined in

[src/libraries/dbLogger.ts:55](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/libraries/dbLogger.ts#L55)

***

### model

\> **model**: `Model`\<`any`, `object`, `object`, `object`, `any`, `any`\>

The model this query was created from

#### Inherited from

`Query.model`

#### Defined in

node\_modules/mongoose/types/query.d.ts:567

***

### then()

\> **then**: \<`TResult1`, `TResult2`\>(`onfulfilled`?, `onrejected`?) =\> `Promise`\<`TResult1` \| `TResult2`\>

Executes the query returning a `Promise` which will be
resolved with either the doc(s) or rejected with the error.

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type Parameters

• **TResult1** = `unknown`

• **TResult2** = `never`

#### Parameters

• **onfulfilled?**: `null` \| (`value`) =\> `TResult1` \| `PromiseLike`\<`TResult1`\>

The callback to execute when the Promise is resolved.

• **onrejected?**: `null` \| (`reason`) =\> `TResult2` \| `PromiseLike`\<`TResult2`\>

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

`Query.then`

#### Defined in

node\_modules/mongoose/types/query.d.ts:744

## Methods

### $where()

\> **$where**(`argument`): `Query`\<`T`[], `T`, `object`, `T`, `"find"`, `Record`\<`string`, `never`\>\>

#### Parameters

• **argument**: `string` \| `Function`

#### Returns

`Query`\<`T`[], `T`, `object`, `T`, `"find"`, `Record`\<`string`, `never`\>\>

#### Inherited from

`Query.$where`

#### Defined in

node\_modules/mongoose/types/query.d.ts:221

***

### \[asyncIterator\]()

\> **\[asyncIterator\]**(): `AsyncIterableIterator`\<`unknown`\>

Returns a wrapper around a [mongodb driver cursor](https://mongodb.github.io/node-mongodb-native/4.9/classes/FindCursor.html).
A QueryCursor exposes a Streams3 interface, as well as a `.next()` function.
This is equivalent to calling `.cursor()` with no arguments.

#### Returns

`AsyncIterableIterator`\<`unknown`\>

#### Inherited from

`Query.[asyncIterator]`

#### Defined in

node\_modules/mongoose/types/query.d.ts:216

***

### all()

#### all(path, val)

\> **all**(`path`, `val`): `this`

Specifies an `$all` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

• **path**: `string`

• **val**: `any`[]

##### Returns

`this`

##### Inherited from

`Query.all`

##### Defined in

node\_modules/mongoose/types/query.d.ts:230

#### all(val)

\> **all**(`val`): `this`

##### Parameters

• **val**: `any`[]

##### Returns

`this`

##### Inherited from

`Query.all`

##### Defined in

node\_modules/mongoose/types/query.d.ts:231

***

### allowDiskUse()

\> **allowDiskUse**(`value`): `this`

Sets the allowDiskUse option for the query (ignored for \< 4.4.0)

#### Parameters

• **value**: `boolean`

#### Returns

`this`

#### Inherited from

`Query.allowDiskUse`

#### Defined in

node\_modules/mongoose/types/query.d.ts:234

***

### and()

\> **and**(`array`): `this`

Specifies arguments for an `$and` condition.

#### Parameters

• **array**: `FilterQuery`\<`T`\>[]

#### Returns

`this`

#### Inherited from

`Query.and`

#### Defined in

node\_modules/mongoose/types/query.d.ts:237

***

### batchSize()

\> **batchSize**(`val`): `this`

Specifies the batchSize option.

#### Parameters

• **val**: `number`

#### Returns

`this`

#### Inherited from

`Query.batchSize`

#### Defined in

node\_modules/mongoose/types/query.d.ts:240

***

### box()

#### box(lower, upper)

\> **box**(`lower`, `upper`): `this`

Specifies a `$box` condition

##### Parameters

• **lower**: `number`[]

• **upper**: `number`[]

##### Returns

`this`

##### Inherited from

`Query.box`

##### Defined in

node\_modules/mongoose/types/query.d.ts:243

#### box(val)

\> **box**(`val`): `this`

##### Parameters

• **val**: `any`

##### Returns

`this`

##### Inherited from

`Query.box`

##### Defined in

node\_modules/mongoose/types/query.d.ts:244

***

### cast()

\> **cast**(`model`?, `obj`?): `any`

Casts this query to the schema of `model`.

#### Parameters

• **model?**: `null` \| `Model`\<`any`, `object`, `object`, `object`, `any`, `any`\>

the model to cast to. If not set, defaults to `this.model`

• **obj?**: `any`

If not set, defaults to this query's conditions

#### Returns

`any`

the casted `obj`

#### Inherited from

`Query.cast`

#### Defined in

node\_modules/mongoose/types/query.d.ts:253

***

### circle()

#### circle(path, area)

\> **circle**(`path`, `area`): `this`

Specifies a `$center` or `$centerSphere` condition.

##### Parameters

• **path**: `string`

• **area**: `any`

##### Returns

`this`

##### Inherited from

`Query.circle`

##### Defined in

node\_modules/mongoose/types/query.d.ts:272

#### circle(area)

\> **circle**(`area`): `this`

##### Parameters

• **area**: `any`

##### Returns

`this`

##### Inherited from

`Query.circle`

##### Defined in

node\_modules/mongoose/types/query.d.ts:273

***

### clone()

\> **clone**(): `this`

Make a copy of this query so you can re-execute it.

#### Returns

`this`

#### Inherited from

`Query.clone`

#### Defined in

node\_modules/mongoose/types/query.d.ts:276

***

### collation()

\> **collation**(`value`): `this`

Adds a collation to this op (MongoDB 3.4 and up)

#### Parameters

• **value**: `CollationOptions`

#### Returns

`this`

#### Inherited from

`Query.collation`

#### Defined in

node\_modules/mongoose/types/query.d.ts:279

***

### comment()

\> **comment**(`val`): `this`

Specifies the `comment` option.

#### Parameters

• **val**: `string`

#### Returns

`this`

#### Inherited from

`Query.comment`

#### Defined in

node\_modules/mongoose/types/query.d.ts:282

***

### countDocuments()

\> **countDocuments**(`criteria`?, `options`?): `Query`\<`number`, `T`, `object`, `T`, `"countDocuments"`, `Record`\<`string`, `never`\>\>

Specifies this query as a `countDocuments` query.

#### Parameters

• **criteria?**: `FilterQuery`\<`T`\>

• **options?**: `QueryOptions`\<`T`\>

#### Returns

`Query`\<`number`, `T`, `object`, `T`, `"countDocuments"`, `Record`\<`string`, `never`\>\>

#### Inherited from

`Query.countDocuments`

#### Defined in

node\_modules/mongoose/types/query.d.ts:285

***

### cursor()

\> **cursor**(`options`?): `Cursor`\<`unknown`, `QueryOptions`\<`T`\>\>

Returns a wrapper around a [mongodb driver cursor](https://mongodb.github.io/node-mongodb-native/4.9/classes/FindCursor.html).
A QueryCursor exposes a Streams3 interface, as well as a `.next()` function.

#### Parameters

• **options?**: `QueryOptions`\<`T`\>

#### Returns

`Cursor`\<`unknown`, `QueryOptions`\<`T`\>\>

#### Inherited from

`Query.cursor`

#### Defined in

node\_modules/mongoose/types/query.d.ts:294

***

### deleteMany()

#### deleteMany(filter, options)

\> **deleteMany**(`filter`?, `options`?): `Query`\<`any`, `T`, `object`, `T`, `"deleteMany"`, `Record`\<`string`, `never`\>\>

Declare and/or execute this query as a `deleteMany()` operation. Works like
remove, except it deletes _every_ document that matches `filter` in the
collection, regardless of the value of `single`.

##### Parameters

• **filter?**: `FilterQuery`\<`T`\>

• **options?**: `QueryOptions`\<`T`\>

##### Returns

`Query`\<`any`, `T`, `object`, `T`, `"deleteMany"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.deleteMany`

##### Defined in

node\_modules/mongoose/types/query.d.ts:301

#### deleteMany(filter)

\> **deleteMany**(`filter`): `Query`\<`any`, `T`, `object`, `T`, `"deleteMany"`, `Record`\<`string`, `never`\>\>

##### Parameters

• **filter**: `FilterQuery`\<`T`\>

##### Returns

`Query`\<`any`, `T`, `object`, `T`, `"deleteMany"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.deleteMany`

##### Defined in

node\_modules/mongoose/types/query.d.ts:305

#### deleteMany()

\> **deleteMany**(): `Query`\<`any`, `T`, `object`, `T`, `"deleteMany"`, `Record`\<`string`, `never`\>\>

##### Returns

`Query`\<`any`, `T`, `object`, `T`, `"deleteMany"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.deleteMany`

##### Defined in

node\_modules/mongoose/types/query.d.ts:312

***

### deleteOne()

#### deleteOne(filter, options)

\> **deleteOne**(`filter`?, `options`?): `Query`\<`any`, `T`, `object`, `T`, `"deleteOne"`, `Record`\<`string`, `never`\>\>

Declare and/or execute this query as a `deleteOne()` operation. Works like
remove, except it deletes at most one document regardless of the `single`
option.

##### Parameters

• **filter?**: `FilterQuery`\<`T`\>

• **options?**: `QueryOptions`\<`T`\>

##### Returns

`Query`\<`any`, `T`, `object`, `T`, `"deleteOne"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.deleteOne`

##### Defined in

node\_modules/mongoose/types/query.d.ts:319

#### deleteOne(filter)

\> **deleteOne**(`filter`): `Query`\<`any`, `T`, `object`, `T`, `"deleteOne"`, `Record`\<`string`, `never`\>\>

##### Parameters

• **filter**: `FilterQuery`\<`T`\>

##### Returns

`Query`\<`any`, `T`, `object`, `T`, `"deleteOne"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.deleteOne`

##### Defined in

node\_modules/mongoose/types/query.d.ts:323

#### deleteOne()

\> **deleteOne**(): `Query`\<`any`, `T`, `object`, `T`, `"deleteOne"`, `Record`\<`string`, `never`\>\>

##### Returns

`Query`\<`any`, `T`, `object`, `T`, `"deleteOne"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.deleteOne`

##### Defined in

node\_modules/mongoose/types/query.d.ts:330

***

### distinct()

\> **distinct**\<`DocKey`, `ResultType`\>(`field`, `filter`?): `Query`\<`DocKey` *extends* keyof `T` ? `Unpacked`\<`T`\[`DocKey`\<`DocKey`\>\]\> : `ResultType`[], `T`, `object`, `T`, `"distinct"`, `Record`\<`string`, `never`\>\>

Creates a `distinct` query: returns the distinct values of the given `field` that match `filter`.

#### Type Parameters

• **DocKey** *extends* `string`

• **ResultType** = `unknown`

#### Parameters

• **field**: `DocKey`

• **filter?**: `FilterQuery`\<`T`\>

#### Returns

`Query`\<`DocKey` *extends* keyof `T` ? `Unpacked`\<`T`\[`DocKey`\<`DocKey`\>\]\> : `ResultType`[], `T`, `object`, `T`, `"distinct"`, `Record`\<`string`, `never`\>\>

#### Inherited from

`Query.distinct`

#### Defined in

node\_modules/mongoose/types/query.d.ts:333

***

### elemMatch()

#### elemMatch(path, val)

\> **elemMatch**\<`K`\>(`path`, `val`): `this`

Specifies a `$elemMatch` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

• **path**: `K`

• **val**: `any`

##### Returns

`this`

##### Inherited from

`Query.elemMatch`

##### Defined in

node\_modules/mongoose/types/query.d.ts:339

#### elemMatch(val)

\> **elemMatch**(`val`): `this`

##### Parameters

• **val**: `any`

##### Returns

`this`

##### Inherited from

`Query.elemMatch`

##### Defined in

node\_modules/mongoose/types/query.d.ts:340

***

### equals()

\> **equals**(`val`): `this`

Specifies the complementary comparison value for paths specified with `where()`

#### Parameters

• **val**: `any`

#### Returns

`this`

#### Inherited from

`Query.equals`

#### Defined in

node\_modules/mongoose/types/query.d.ts:350

***

### error()

#### error()

\> **error**(): `null` \| `NativeError`

Gets/sets the error flag on this query. If this flag is not null or
undefined, the `exec()` promise will reject without executing.

##### Returns

`null` \| `NativeError`

##### Inherited from

`Query.error`

##### Defined in

node\_modules/mongoose/types/query.d.ts:346

#### error(val)

\> **error**(`val`): `this`

##### Parameters

• **val**: `null` \| `NativeError`

##### Returns

`this`

##### Inherited from

`Query.error`

##### Defined in

node\_modules/mongoose/types/query.d.ts:347

***

### estimatedDocumentCount()

\> **estimatedDocumentCount**(`options`?): `Query`\<`number`, `T`, `object`, `T`, `"estimatedDocumentCount"`, `Record`\<`string`, `never`\>\>

Creates a `estimatedDocumentCount` query: counts the number of documents in the collection.

#### Parameters

• **options?**: `QueryOptions`\<`T`\>

#### Returns

`Query`\<`number`, `T`, `object`, `T`, `"estimatedDocumentCount"`, `Record`\<`string`, `never`\>\>

#### Inherited from

`Query.estimatedDocumentCount`

#### Defined in

node\_modules/mongoose/types/query.d.ts:353

***

### exec()

\> **exec**(): `Promise`\<`unknown`\>

Executes the query

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`Query.exec`

#### Defined in

node\_modules/mongoose/types/query.d.ts:219

***

### exists()

#### exists(path, val)

\> **exists**\<`K`\>(`path`, `val`): `this`

Specifies a `$exists` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

• **path**: `K`

• **val**: `boolean`

##### Returns

`this`

##### Inherited from

`Query.exists`

##### Defined in

node\_modules/mongoose/types/query.d.ts:362

#### exists(val)

\> **exists**(`val`): `this`

##### Parameters

• **val**: `boolean`

##### Returns

`this`

##### Inherited from

`Query.exists`

##### Defined in

node\_modules/mongoose/types/query.d.ts:363

***

### explain()

\> **explain**(`verbose`?): `this`

Sets the [`explain` option](https://www.mongodb.com/docs/manual/reference/method/cursor.explain/),
which makes this query return detailed execution stats instead of the actual
query result. This method is useful for determining what index your queries
use.

#### Parameters

• **verbose?**: `ExplainVerbosityLike`

#### Returns

`this`

#### Inherited from

`Query.explain`

#### Defined in

node\_modules/mongoose/types/query.d.ts:371

***

### find()

#### find(filter, projection, options)

\> **find**(`filter`, `projection`?, `options`?): `Query`\<`T`[], `T`, `object`, `T`, `"find"`, `Record`\<`string`, `never`\>\>

Creates a `find` query: gets a list of documents that match `filter`.

##### Parameters

• **filter**: `FilterQuery`\<`T`\>

• **projection?**: `null` \| `ProjectionType`\<`T`\>

• **options?**: `null` \| `QueryOptions`\<`T`\>

##### Returns

`Query`\<`T`[], `T`, `object`, `T`, `"find"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.find`

##### Defined in

node\_modules/mongoose/types/query.d.ts:374

#### find(filter, projection)

\> **find**(`filter`, `projection`?): `Query`\<`T`[], `T`, `object`, `T`, `"find"`, `Record`\<`string`, `never`\>\>

##### Parameters

• **filter**: `FilterQuery`\<`T`\>

• **projection?**: `null` \| `ProjectionType`\<`T`\>

##### Returns

`Query`\<`T`[], `T`, `object`, `T`, `"find"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.find`

##### Defined in

node\_modules/mongoose/types/query.d.ts:379

#### find(filter)

\> **find**(`filter`): `Query`\<`T`[], `T`, `object`, `T`, `"find"`, `Record`\<`string`, `never`\>\>

##### Parameters

• **filter**: `FilterQuery`\<`T`\>

##### Returns

`Query`\<`T`[], `T`, `object`, `T`, `"find"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.find`

##### Defined in

node\_modules/mongoose/types/query.d.ts:383

#### find()

\> **find**(): `Query`\<`T`[], `T`, `object`, `T`, `"find"`, `Record`\<`string`, `never`\>\>

##### Returns

`Query`\<`T`[], `T`, `object`, `T`, `"find"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.find`

##### Defined in

node\_modules/mongoose/types/query.d.ts:386

***

### findById()

#### findById(id, projection, options)

\> **findById**(`id`, `projection`?, `options`?): `Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOne"`, `Record`\<`string`, `never`\>\>

Declares the query a findById operation. When executed, returns the document with the given `_id`.

##### Parameters

• **id**: `any`

• **projection?**: `null` \| `ProjectionType`\<`T`\>

• **options?**: `null` \| `QueryOptions`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOne"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.findById`

##### Defined in

node\_modules/mongoose/types/query.d.ts:426

#### findById(id, projection)

\> **findById**(`id`, `projection`?): `Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOne"`, `Record`\<`string`, `never`\>\>

##### Parameters

• **id**: `any`

• **projection?**: `null` \| `ProjectionType`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOne"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.findById`

##### Defined in

node\_modules/mongoose/types/query.d.ts:431

#### findById(id)

\> **findById**(`id`): `Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOne"`, `Record`\<`string`, `never`\>\>

##### Parameters

• **id**: `any`

##### Returns

`Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOne"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.findById`

##### Defined in

node\_modules/mongoose/types/query.d.ts:435

***

### findByIdAndDelete()

#### findByIdAndDelete(id, options)

\> **findByIdAndDelete**(`id`, `options`): `Query`\<`ModifyResult`\<`T`\>, `T`, `object`, `T`, `"findOneAndDelete"`, `Record`\<`string`, `never`\>\>

Creates a `findByIdAndDelete` query, filtering by the given `_id`.

##### Parameters

• **id**: `any`

• **options**: `QueryOptions`\<`T`\> & `object`

##### Returns

`Query`\<`ModifyResult`\<`T`\>, `T`, `object`, `T`, `"findOneAndDelete"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.findByIdAndDelete`

##### Defined in

node\_modules/mongoose/types/query.d.ts:440

#### findByIdAndDelete(id, options)

\> **findByIdAndDelete**(`id`?, `options`?): `Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOneAndDelete"`, `Record`\<`string`, `never`\>\>

##### Parameters

• **id?**: `any`

• **options?**: `null` \| `QueryOptions`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOneAndDelete"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.findByIdAndDelete`

##### Defined in

node\_modules/mongoose/types/query.d.ts:444

***

### findByIdAndUpdate()

#### findByIdAndUpdate(id, update, options)

\> **findByIdAndUpdate**(`id`, `update`, `options`): `Query`\<`any`, `T`, `object`, `T`, `"findOneAndUpdate"`, `Record`\<`string`, `never`\>\>

Creates a `findOneAndUpdate` query, filtering by the given `_id`.

##### Parameters

• **id**: `any`

• **update**: `UpdateQuery`\<`T`\>

• **options**: `QueryOptions`\<`T`\> & `object`

##### Returns

`Query`\<`any`, `T`, `object`, `T`, `"findOneAndUpdate"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.findByIdAndUpdate`

##### Defined in

node\_modules/mongoose/types/query.d.ts:450

#### findByIdAndUpdate(id, update, options)

\> **findByIdAndUpdate**(`id`, `update`, `options`): `Query`\<`T`, `T`, `object`, `T`, `"findOneAndUpdate"`, `Record`\<`string`, `never`\>\>

##### Parameters

• **id**: `any`

• **update**: `UpdateQuery`\<`T`\>

• **options**: `QueryOptions`\<`T`\> & `object` & `ReturnsNewDoc`

##### Returns

`Query`\<`T`, `T`, `object`, `T`, `"findOneAndUpdate"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.findByIdAndUpdate`

##### Defined in

node\_modules/mongoose/types/query.d.ts:455

#### findByIdAndUpdate(id, update, options)

\> **findByIdAndUpdate**(`id`?, `update`?, `options`?): `Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOneAndUpdate"`, `Record`\<`string`, `never`\>\>

##### Parameters

• **id?**: `any`

• **update?**: `UpdateQuery`\<`T`\>

• **options?**: `null` \| `QueryOptions`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOneAndUpdate"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.findByIdAndUpdate`

##### Defined in

node\_modules/mongoose/types/query.d.ts:460

#### findByIdAndUpdate(id, update)

\> **findByIdAndUpdate**(`id`, `update`): `Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOneAndUpdate"`, `Record`\<`string`, `never`\>\>

##### Parameters

• **id**: `any`

• **update**: `UpdateQuery`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOneAndUpdate"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.findByIdAndUpdate`

##### Defined in

node\_modules/mongoose/types/query.d.ts:465

***

### findOne()

#### findOne(filter, projection, options)

\> **findOne**(`filter`?, `projection`?, `options`?): `Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOne"`, `Record`\<`string`, `never`\>\>

Declares the query a findOne operation. When executed, returns the first found document.

##### Parameters

• **filter?**: `FilterQuery`\<`T`\>

• **projection?**: `null` \| `ProjectionType`\<`T`\>

• **options?**: `null` \| `QueryOptions`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOne"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.findOne`

##### Defined in

node\_modules/mongoose/types/query.d.ts:389

#### findOne(filter, projection)

\> **findOne**(`filter`?, `projection`?): `Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOne"`, `Record`\<`string`, `never`\>\>

##### Parameters

• **filter?**: `FilterQuery`\<`T`\>

• **projection?**: `null` \| `ProjectionType`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOne"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.findOne`

##### Defined in

node\_modules/mongoose/types/query.d.ts:394

#### findOne(filter)

\> **findOne**(`filter`?): `Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOne"`, `Record`\<`string`, `never`\>\>

##### Parameters

• **filter?**: `FilterQuery`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOne"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.findOne`

##### Defined in

node\_modules/mongoose/types/query.d.ts:398

***

### findOneAndDelete()

\> **findOneAndDelete**(`filter`?, `options`?): `Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOneAndDelete"`, `Record`\<`string`, `never`\>\>

Creates a `findOneAndDelete` query: atomically finds the given document, deletes it, and returns the document as it was before deletion.

#### Parameters

• **filter?**: `FilterQuery`\<`T`\>

• **options?**: `null` \| `QueryOptions`\<`T`\>

#### Returns

`Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOneAndDelete"`, `Record`\<`string`, `never`\>\>

#### Inherited from

`Query.findOneAndDelete`

#### Defined in

node\_modules/mongoose/types/query.d.ts:403

***

### findOneAndUpdate()

#### findOneAndUpdate(filter, update, options)

\> **findOneAndUpdate**(`filter`, `update`, `options`): `Query`\<`ModifyResult`\<`T`\>, `T`, `object`, `T`, `"findOneAndUpdate"`, `Record`\<`string`, `never`\>\>

Creates a `findOneAndUpdate` query: atomically find the first document that matches `filter` and apply `update`.

##### Parameters

• **filter**: `FilterQuery`\<`T`\>

• **update**: `UpdateQuery`\<`T`\>

• **options**: `QueryOptions`\<`T`\> & `object`

##### Returns

`Query`\<`ModifyResult`\<`T`\>, `T`, `object`, `T`, `"findOneAndUpdate"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.findOneAndUpdate`

##### Defined in

node\_modules/mongoose/types/query.d.ts:409

#### findOneAndUpdate(filter, update, options)

\> **findOneAndUpdate**(`filter`, `update`, `options`): `Query`\<`T`, `T`, `object`, `T`, `"findOneAndUpdate"`, `Record`\<`string`, `never`\>\>

##### Parameters

• **filter**: `FilterQuery`\<`T`\>

• **update**: `UpdateQuery`\<`T`\>

• **options**: `QueryOptions`\<`T`\> & `object` & `ReturnsNewDoc`

##### Returns

`Query`\<`T`, `T`, `object`, `T`, `"findOneAndUpdate"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.findOneAndUpdate`

##### Defined in

node\_modules/mongoose/types/query.d.ts:414

#### findOneAndUpdate(filter, update, options)

\> **findOneAndUpdate**(`filter`?, `update`?, `options`?): `Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOneAndUpdate"`, `Record`\<`string`, `never`\>\>

##### Parameters

• **filter?**: `FilterQuery`\<`T`\>

• **update?**: `UpdateQuery`\<`T`\>

• **options?**: `null` \| `QueryOptions`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `object`, `T`, `"findOneAndUpdate"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.findOneAndUpdate`

##### Defined in

node\_modules/mongoose/types/query.d.ts:419

***

### geometry()

\> **geometry**(`object`): `this`

Specifies a `$geometry` condition

#### Parameters

• **object**

• **object.coordinates**: `any`[]

• **object.type**: `string`

#### Returns

`this`

#### Inherited from

`Query.geometry`

#### Defined in

node\_modules/mongoose/types/query.d.ts:471

***

### get()

\> **get**(`path`): `any`

For update operations, returns the value of a path in the update's `$set`.
Useful for writing getters/setters that can work with both update operations
and `save()`.

#### Parameters

• **path**: `string`

#### Returns

`any`

#### Inherited from

`Query.get`

#### Defined in

node\_modules/mongoose/types/query.d.ts:478

***

### getFilter()

\> **getFilter**(): `FilterQuery`\<`T`\>

Returns the current query filter (also known as conditions) as a POJO.

#### Returns

`FilterQuery`\<`T`\>

#### Inherited from

`Query.getFilter`

#### Defined in

node\_modules/mongoose/types/query.d.ts:481

***

### getOptions()

\> **getOptions**(): `QueryOptions`\<`T`\>

Gets query options.

#### Returns

`QueryOptions`\<`T`\>

#### Inherited from

`Query.getOptions`

#### Defined in

node\_modules/mongoose/types/query.d.ts:484

***

### getPopulatedPaths()

\> **getPopulatedPaths**(): `string`[]

Gets a list of paths to be populated by this query

#### Returns

`string`[]

#### Inherited from

`Query.getPopulatedPaths`

#### Defined in

node\_modules/mongoose/types/query.d.ts:487

***

### getQuery()

\> **getQuery**(): `FilterQuery`\<`T`\>

Returns the current query filter. Equivalent to `getFilter()`.

#### Returns

`FilterQuery`\<`T`\>

#### Inherited from

`Query.getQuery`

#### Defined in

node\_modules/mongoose/types/query.d.ts:490

***

### getUpdate()

\> **getUpdate**(): `null` \| `UpdateWithAggregationPipeline` \| `UpdateQuery`\<`T`\>

Returns the current update operations as a JSON object.

#### Returns

`null` \| `UpdateWithAggregationPipeline` \| `UpdateQuery`\<`T`\>

#### Inherited from

`Query.getUpdate`

#### Defined in

node\_modules/mongoose/types/query.d.ts:493

***

### gt()

#### gt(path, val)

\> **gt**\<`K`\>(`path`, `val`): `this`

Specifies a `$gt` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

• **path**: `K`

• **val**: `any`

##### Returns

`this`

##### Inherited from

`Query.gt`

##### Defined in

node\_modules/mongoose/types/query.d.ts:496

#### gt(val)

\> **gt**(`val`): `this`

##### Parameters

• **val**: `number`

##### Returns

`this`

##### Inherited from

`Query.gt`

##### Defined in

node\_modules/mongoose/types/query.d.ts:497

***

### gte()

#### gte(path, val)

\> **gte**\<`K`\>(`path`, `val`): `this`

Specifies a `$gte` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

• **path**: `K`

• **val**: `any`

##### Returns

`this`

##### Inherited from

`Query.gte`

##### Defined in

node\_modules/mongoose/types/query.d.ts:500

#### gte(val)

\> **gte**(`val`): `this`

##### Parameters

• **val**: `number`

##### Returns

`this`

##### Inherited from

`Query.gte`

##### Defined in

node\_modules/mongoose/types/query.d.ts:501

***

### hint()

\> **hint**(`val`): `this`

Sets query hints.

#### Parameters

• **val**: `any`

#### Returns

`this`

#### Inherited from

`Query.hint`

#### Defined in

node\_modules/mongoose/types/query.d.ts:504

***

### in()

#### in(path, val)

\> **in**\<`K`\>(`path`, `val`): `this`

Specifies an `$in` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

• **path**: `K`

• **val**: `any`[]

##### Returns

`this`

##### Inherited from

`Query.in`

##### Defined in

node\_modules/mongoose/types/query.d.ts:507

#### in(val)

\> **in**(`val`): `this`

##### Parameters

• **val**: `any`[]

##### Returns

`this`

##### Inherited from

`Query.in`

##### Defined in

node\_modules/mongoose/types/query.d.ts:508

***

### intersects()

\> **intersects**(`arg`?): `this`

Declares an intersects query for `geometry()`.

#### Parameters

• **arg?**: `any`

#### Returns

`this`

#### Inherited from

`Query.intersects`

#### Defined in

node\_modules/mongoose/types/query.d.ts:511

***

### j()

\> **j**(`val`): `this`

Requests acknowledgement that this operation has been persisted to MongoDB's on-disk journal.

#### Parameters

• **val**: `null` \| `boolean`

#### Returns

`this`

#### Inherited from

`Query.j`

#### Defined in

node\_modules/mongoose/types/query.d.ts:514

***

### lean()

\> **lean**\<`LeanResultType`\>(`val`?): `Query`\<`LeanResultType`, `T`, `object`, `T`, `"find"`, `Record`\<`string`, `never`\>\>

Sets the lean option.

#### Type Parameters

• **LeanResultType** = `Require_id`\<`FlattenMaps`\<`T`\>\>

#### Parameters

• **val?**: `any`

#### Returns

`Query`\<`LeanResultType`, `T`, `object`, `T`, `"find"`, `Record`\<`string`, `never`\>\>

#### Inherited from

`Query.lean`

#### Defined in

node\_modules/mongoose/types/query.d.ts:517

***

### limit()

\> **limit**(`val`): `this`

Specifies the maximum number of documents the query will return.

#### Parameters

• **val**: `number`

#### Returns

`this`

#### Inherited from

`Query.limit`

#### Defined in

node\_modules/mongoose/types/query.d.ts:532

***

### lt()

#### lt(path, val)

\> **lt**\<`K`\>(`path`, `val`): `this`

Specifies a `$lt` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

• **path**: `K`

• **val**: `any`

##### Returns

`this`

##### Inherited from

`Query.lt`

##### Defined in

node\_modules/mongoose/types/query.d.ts:535

#### lt(val)

\> **lt**(`val`): `this`

##### Parameters

• **val**: `number`

##### Returns

`this`

##### Inherited from

`Query.lt`

##### Defined in

node\_modules/mongoose/types/query.d.ts:536

***

### lte()

#### lte(path, val)

\> **lte**\<`K`\>(`path`, `val`): `this`

Specifies a `$lte` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

• **path**: `K`

• **val**: `any`

##### Returns

`this`

##### Inherited from

`Query.lte`

##### Defined in

node\_modules/mongoose/types/query.d.ts:539

#### lte(val)

\> **lte**(`val`): `this`

##### Parameters

• **val**: `number`

##### Returns

`this`

##### Inherited from

`Query.lte`

##### Defined in

node\_modules/mongoose/types/query.d.ts:540

***

### maxDistance()

#### maxDistance(path, val)

\> **maxDistance**(`path`, `val`): `this`

Specifies an `$maxDistance` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

• **path**: `string`

• **val**: `number`

##### Returns

`this`

##### Inherited from

`Query.maxDistance`

##### Defined in

node\_modules/mongoose/types/query.d.ts:549

#### maxDistance(val)

\> **maxDistance**(`val`): `this`

##### Parameters

• **val**: `number`

##### Returns

`this`

##### Inherited from

`Query.maxDistance`

##### Defined in

node\_modules/mongoose/types/query.d.ts:550

***

### maxTimeMS()

\> **maxTimeMS**(`ms`): `this`

Sets the [maxTimeMS](https://www.mongodb.com/docs/manual/reference/method/cursor.maxTimeMS/)
option. This will tell the MongoDB server to abort if the query or write op
has been running for more than `ms` milliseconds.

#### Parameters

• **ms**: `number`

#### Returns

`this`

#### Inherited from

`Query.maxTimeMS`

#### Defined in

node\_modules/mongoose/types/query.d.ts:557

***

### merge()

\> **merge**(`source`): `this`

Merges another Query or conditions object into this one.

#### Parameters

• **source**: `Query`\<`any`, `any`, `object`, `any`, `"find"`, `Record`\<`string`, `never`\>\> \| `FilterQuery`\<`T`\>

#### Returns

`this`

#### Inherited from

`Query.merge`

#### Defined in

node\_modules/mongoose/types/query.d.ts:560

***

### mod()

#### mod(path, val)

\> **mod**\<`K`\>(`path`, `val`): `this`

Specifies a `$mod` condition, filters documents for documents whose `path` property is a number that is equal to `remainder` modulo `divisor`.

##### Type Parameters

• **K** = `string`

##### Parameters

• **path**: `K`

• **val**: `number`

##### Returns

`this`

##### Inherited from

`Query.mod`

##### Defined in

node\_modules/mongoose/types/query.d.ts:563

#### mod(val)

\> **mod**(`val`): `this`

##### Parameters

• **val**: `number`[]

##### Returns

`this`

##### Inherited from

`Query.mod`

##### Defined in

node\_modules/mongoose/types/query.d.ts:564

***

### mongooseOptions()

\> **mongooseOptions**(`val`?): `MongooseQueryOptions`\<`unknown`, `"timestamps"` \| `MongooseBaseQueryOptionKeys` \| `"lean"`\>

Getter/setter around the current mongoose-specific options for this query
Below are the current Mongoose-specific options.

#### Parameters

• **val?**: `MongooseQueryOptions`\<`unknown`, `"timestamps"` \| `MongooseBaseQueryOptionKeys` \| `"lean"`\>

#### Returns

`MongooseQueryOptions`\<`unknown`, `"timestamps"` \| `MongooseBaseQueryOptionKeys` \| `"lean"`\>

#### Inherited from

`Query.mongooseOptions`

#### Defined in

node\_modules/mongoose/types/query.d.ts:573

***

### ne()

#### ne(path, val)

\> **ne**\<`K`\>(`path`, `val`): `this`

Specifies a `$ne` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

• **path**: `K`

• **val**: `any`

##### Returns

`this`

##### Inherited from

`Query.ne`

##### Defined in

node\_modules/mongoose/types/query.d.ts:576

#### ne(val)

\> **ne**(`val`): `this`

##### Parameters

• **val**: `any`

##### Returns

`this`

##### Inherited from

`Query.ne`

##### Defined in

node\_modules/mongoose/types/query.d.ts:577

***

### near()

#### near(path, val)

\> **near**\<`K`\>(`path`, `val`): `this`

Specifies a `$near` or `$nearSphere` condition

##### Type Parameters

• **K** = `string`

##### Parameters

• **path**: `K`

• **val**: `any`

##### Returns

`this`

##### Inherited from

`Query.near`

##### Defined in

node\_modules/mongoose/types/query.d.ts:580

#### near(val)

\> **near**(`val`): `this`

##### Parameters

• **val**: `any`

##### Returns

`this`

##### Inherited from

`Query.near`

##### Defined in

node\_modules/mongoose/types/query.d.ts:581

***

### nin()

#### nin(path, val)

\> **nin**\<`K`\>(`path`, `val`): `this`

Specifies an `$nin` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

• **path**: `K`

• **val**: `any`[]

##### Returns

`this`

##### Inherited from

`Query.nin`

##### Defined in

node\_modules/mongoose/types/query.d.ts:584

#### nin(val)

\> **nin**(`val`): `this`

##### Parameters

• **val**: `any`[]

##### Returns

`this`

##### Inherited from

`Query.nin`

##### Defined in

node\_modules/mongoose/types/query.d.ts:585

***

### nor()

\> **nor**(`array`): `this`

Specifies arguments for an `$nor` condition.

#### Parameters

• **array**: `FilterQuery`\<`T`\>[]

#### Returns

`this`

#### Inherited from

`Query.nor`

#### Defined in

node\_modules/mongoose/types/query.d.ts:588

***

### or()

\> **or**(`array`): `this`

Specifies arguments for an `$or` condition.

#### Parameters

• **array**: `FilterQuery`\<`T`\>[]

#### Returns

`this`

#### Inherited from

`Query.or`

#### Defined in

node\_modules/mongoose/types/query.d.ts:591

***

### orFail()

\> **orFail**(`err`?): `Query`\<`object`, `T`, `object`, `T`, `"find"`, `Record`\<`string`, `never`\>\>

Make this query throw an error if no documents match the given `filter`.
This is handy for integrating with async/await, because `orFail()` saves you
an extra `if` statement to check if no document was found.

#### Parameters

• **err?**: `NativeError` \| () =\> `NativeError`

#### Returns

`Query`\<`object`, `T`, `object`, `T`, `"find"`, `Record`\<`string`, `never`\>\>

#### Inherited from

`Query.orFail`

#### Defined in

node\_modules/mongoose/types/query.d.ts:598

***

### paginate()

#### paginate(options)

\> **paginate**\<`O`\>(`options`?): `Promise`\<`PaginateResult`\<`IfAny`\<`T`, `any`, `Document`\<`unknown`, `O`, `T`\> & `Require_id`\<`T`\>\>\>\>

##### Type Parameters

• **O** *extends* `PaginateOptions`

##### Parameters

• **options?**: `O`

##### Returns

`Promise`\<`PaginateResult`\<`IfAny`\<`T`, `any`, `Document`\<`unknown`, `O`, `T`\> & `Require_id`\<`T`\>\>\>\>

##### Inherited from

`Query.paginate`

##### Defined in

node\_modules/mongoose-paginate-v2/index.d.ts:146

#### paginate(options)

\> **paginate**\<`UserType`, `O`\>(`options`?): `Promise`\<`PaginateResult`\<`IfAny`\<`UserType`, `any`, `Document`\<`unknown`, `O`, `UserType`\> & `Require_id`\<`UserType`\>\>\>\>

##### Type Parameters

• **UserType** = `unknown`

• **O** *extends* `PaginateOptions` = `PaginateOptions`

##### Parameters

• **options?**: `O`

##### Returns

`Promise`\<`PaginateResult`\<`IfAny`\<`UserType`, `any`, `Document`\<`unknown`, `O`, `UserType`\> & `Require_id`\<`UserType`\>\>\>\>

##### Inherited from

`Query.paginate`

##### Defined in

node\_modules/mongoose-paginate-v2/index.d.ts:149

#### paginate(options)

\> **paginate**\<`UserType`\>(`options`?): `Promise`\<`PaginateResult`\<`IfAny`\<`UserType`, `any`, `Document`\<`unknown`, `PaginateOptions`, `UserType`\> & `Require_id`\<`UserType`\>\>\>\>

##### Type Parameters

• **UserType** = `unknown`

##### Parameters

• **options?**: `PaginateOptions`

##### Returns

`Promise`\<`PaginateResult`\<`IfAny`\<`UserType`, `any`, `Document`\<`unknown`, `PaginateOptions`, `UserType`\> & `Require_id`\<`UserType`\>\>\>\>

##### Inherited from

`Query.paginate`

##### Defined in

node\_modules/mongoose-paginate-v2/index.d.ts:152

***

### polygon()

#### polygon(path, coordinatePairs)

\> **polygon**(`path`, ...`coordinatePairs`): `this`

Specifies a `$polygon` condition

##### Parameters

• **path**: `string`

• ...**coordinatePairs**: `number`[][]

##### Returns

`this`

##### Inherited from

`Query.polygon`

##### Defined in

node\_modules/mongoose/types/query.d.ts:601

#### polygon(coordinatePairs)

\> **polygon**(...`coordinatePairs`): `this`

##### Parameters

• ...**coordinatePairs**: `number`[][]

##### Returns

`this`

##### Inherited from

`Query.polygon`

##### Defined in

node\_modules/mongoose/types/query.d.ts:602

***

### populate()

#### populate(path, select, model, match)

\> **populate**\<`Paths`\>(`path`, `select`?, `model`?, `match`?): `Query`\<keyof `Paths` *extends* `never` ? `unknown` : `Omit`\<`unknown`, keyof `Paths`\> & `Paths`, `T`, `object`, `UnpackedIntersection`\<`T`, `Paths`\>, `"find"`, `Record`\<`string`, `never`\>\>

Specifies paths which should be populated with other documents.

##### Type Parameters

• **Paths** = `object`

##### Parameters

• **path**: `string` \| `string`[]

• **select?**: `any`

• **model?**: `string` \| `Model`\<`any`, `object`, `object`, `object`, `any`, `any`\>

• **match?**: `any`

##### Returns

`Query`\<keyof `Paths` *extends* `never` ? `unknown` : `Omit`\<`unknown`, keyof `Paths`\> & `Paths`, `T`, `object`, `UnpackedIntersection`\<`T`, `Paths`\>, `"find"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.populate`

##### Defined in

node\_modules/mongoose/types/query.d.ts:605

#### populate(options)

\> **populate**\<`Paths`\>(`options`): `Query`\<keyof `Paths` *extends* `never` ? `unknown` : `Omit`\<`unknown`, keyof `Paths`\> & `Paths`, `T`, `object`, `UnpackedIntersection`\<`T`, `Paths`\>, `"find"`, `Record`\<`string`, `never`\>\>

##### Type Parameters

• **Paths** = `object`

##### Parameters

• **options**: `PopulateOptions` \| (`string` \| `PopulateOptions`)[]

##### Returns

`Query`\<keyof `Paths` *extends* `never` ? `unknown` : `Omit`\<`unknown`, keyof `Paths`\> & `Paths`, `T`, `object`, `UnpackedIntersection`\<`T`, `Paths`\>, `"find"`, `Record`\<`string`, `never`\>\>

##### Inherited from

`Query.populate`

##### Defined in

node\_modules/mongoose/types/query.d.ts:617

***

### post()

\> **post**(`fn`): `this`

Add post middleware to this query instance. Doesn't affect other queries.

#### Parameters

• **fn**: `Function`

#### Returns

`this`

#### Inherited from

`Query.post`

#### Defined in

node\_modules/mongoose/types/query.d.ts:631

***

### pre()

\> **pre**(`fn`): `this`

Add pre middleware to this query instance. Doesn't affect other queries.

#### Parameters

• **fn**: `Function`

#### Returns

`this`

#### Inherited from

`Query.pre`

#### Defined in

node\_modules/mongoose/types/query.d.ts:628

***

### projection()

#### projection(fields)

\> **projection**(`fields`?): `ProjectionFields`\<`T`\>

Get/set the current projection (AKA fields). Pass `null` to remove the current projection.

##### Parameters

• **fields?**: `string` \| `ProjectionFields`\<`T`\>

##### Returns

`ProjectionFields`\<`T`\>

##### Inherited from

`Query.projection`

##### Defined in

node\_modules/mongoose/types/query.d.ts:634

#### projection(fields)

\> **projection**(`fields`): `null`

##### Parameters

• **fields**: `null`

##### Returns

`null`

##### Inherited from

`Query.projection`

##### Defined in

node\_modules/mongoose/types/query.d.ts:635

#### projection()

\> **projection**(): `null` \| `ProjectionFields`\<`T`\>

##### Returns

`null` \| `ProjectionFields`\<`T`\>

##### Inherited from

`Query.projection`

##### Defined in

node\_modules/mongoose/types/query.d.ts:636

***

### read()

\> **read**(`mode`, `tags`?): `this`

Determines the MongoDB nodes from which to read.

#### Parameters

• **mode**: `string`

• **tags?**: `any`[]

#### Returns

`this`

#### Inherited from

`Query.read`

#### Defined in

node\_modules/mongoose/types/query.d.ts:639

***

### readConcern()

\> **readConcern**(`level`): `this`

Sets the readConcern option for the query.

#### Parameters

• **level**: `string`

#### Returns

`this`

#### Inherited from

`Query.readConcern`

#### Defined in

node\_modules/mongoose/types/query.d.ts:642

***

### regex()

#### regex(path, val)

\> **regex**\<`K`\>(`path`, `val`): `this`

Specifies a `$regex` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

• **path**: `K`

• **val**: `RegExp`

##### Returns

`this`

##### Inherited from

`Query.regex`

##### Defined in

node\_modules/mongoose/types/query.d.ts:645

#### regex(val)

\> **regex**(`val`): `this`

##### Parameters

• **val**: `string` \| `RegExp`

##### Returns

`this`

##### Inherited from

`Query.regex`

##### Defined in

node\_modules/mongoose/types/query.d.ts:646

***

### replaceOne()

\> **replaceOne**(`filter`?, `replacement`?, `options`?): `Query`\<`any`, `T`, `object`, `T`, `"replaceOne"`, `Record`\<`string`, `never`\>\>

Declare and/or execute this query as a replaceOne() operation. Same as
`update()`, except MongoDB will replace the existing document and will
not accept any [atomic](https://www.mongodb.com/docs/manual/tutorial/model-data-for-atomic-operations/#pattern) operators (`$set`, etc.)

#### Parameters

• **filter?**: `FilterQuery`\<`T`\>

• **replacement?**: `T` \| `AnyObject`

• **options?**: `null` \| `QueryOptions`\<`T`\>

#### Returns

`Query`\<`any`, `T`, `object`, `T`, `"replaceOne"`, `Record`\<`string`, `never`\>\>

#### Inherited from

`Query.replaceOne`

#### Defined in

node\_modules/mongoose/types/query.d.ts:653

***

### select()

\> **select**\<`RawDocTypeOverride`\>(`arg`): `Query`\<`IfEquals`\<`RawDocTypeOverride`, `object`, `unknown`, `IfAny`\<`RawDocTypeOverride`, `any`, `Document`\<`unknown`, `object`, `RawDocTypeOverride`\> & `Require_id`\<`RawDocTypeOverride`\>\>\>, `T`, `object`, `IfEquals`\<`RawDocTypeOverride`, `object`, `T`, `RawDocTypeOverride`\>, `"find"`, `Record`\<`string`, `never`\>\>

Specifies which document fields to include or exclude (also known as the query "projection")

#### Type Parameters

• **RawDocTypeOverride** *extends* \{ \[P in string \| number \| symbol\]?: any \} = `object`

#### Parameters

• **arg**: `string` \| `string`[] \| `Record`\<`string`, `string` \| `number` \| `boolean` \| `object`\>

#### Returns

`Query`\<`IfEquals`\<`RawDocTypeOverride`, `object`, `unknown`, `IfAny`\<`RawDocTypeOverride`, `any`, `Document`\<`unknown`, `object`, `RawDocTypeOverride`\> & `Require_id`\<`RawDocTypeOverride`\>\>\>, `T`, `object`, `IfEquals`\<`RawDocTypeOverride`, `object`, `T`, `RawDocTypeOverride`\>, `"find"`, `Record`\<`string`, `never`\>\>

#### Inherited from

`Query.select`

#### Defined in

node\_modules/mongoose/types/query.d.ts:660

***

### selected()

\> **selected**(): `boolean`

Determines if field selection has been made.

#### Returns

`boolean`

#### Inherited from

`Query.selected`

#### Defined in

node\_modules/mongoose/types/query.d.ts:687

***

### selectedExclusively()

\> **selectedExclusively**(): `boolean`

Determines if exclusive field selection has been made.

#### Returns

`boolean`

#### Inherited from

`Query.selectedExclusively`

#### Defined in

node\_modules/mongoose/types/query.d.ts:690

***

### selectedInclusively()

\> **selectedInclusively**(): `boolean`

Determines if inclusive field selection has been made.

#### Returns

`boolean`

#### Inherited from

`Query.selectedInclusively`

#### Defined in

node\_modules/mongoose/types/query.d.ts:693

***

### session()

\> **session**(`session`): `this`

Sets the [MongoDB session](https://www.mongodb.com/docs/manual/reference/server-sessions/)
associated with this query. Sessions are how you mark a query as part of a
[transaction](/docs/transactions.html).

#### Parameters

• **session**: `null` \| `ClientSession`

#### Returns

`this`

#### Inherited from

`Query.session`

#### Defined in

node\_modules/mongoose/types/query.d.ts:700

***

### set()

\> **set**(`path`, `value`?): `this`

Adds a `$set` to this query's update without changing the operation.
This is useful for query middleware so you can add an update regardless
of whether you use `updateOne()`, `updateMany()`, `findOneAndUpdate()`, etc.

#### Parameters

• **path**: `string` \| `Record`\<`string`, `unknown`\>

• **value?**: `any`

#### Returns

`this`

#### Inherited from

`Query.set`

#### Defined in

node\_modules/mongoose/types/query.d.ts:707

***

### setOptions()

\> **setOptions**(`options`, `overwrite`?): `this`

Sets query options. Some options only make sense for certain operations.

#### Parameters

• **options**: `QueryOptions`\<`T`\>

• **overwrite?**: `boolean`

#### Returns

`this`

#### Inherited from

`Query.setOptions`

#### Defined in

node\_modules/mongoose/types/query.d.ts:710

***

### setQuery()

\> **setQuery**(`val`): `void`

Sets the query conditions to the provided JSON object.

#### Parameters

• **val**: `null` \| `FilterQuery`\<`T`\>

#### Returns

`void`

#### Inherited from

`Query.setQuery`

#### Defined in

node\_modules/mongoose/types/query.d.ts:713

***

### setUpdate()

\> **setUpdate**(`update`): `void`

#### Parameters

• **update**: `UpdateWithAggregationPipeline` \| `UpdateQuery`\<`T`\>

#### Returns

`void`

#### Inherited from

`Query.setUpdate`

#### Defined in

node\_modules/mongoose/types/query.d.ts:715

***

### size()

#### size(path, val)

\> **size**\<`K`\>(`path`, `val`): `this`

Specifies an `$size` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

• **path**: `K`

• **val**: `number`

##### Returns

`this`

##### Inherited from

`Query.size`

##### Defined in

node\_modules/mongoose/types/query.d.ts:718

#### size(val)

\> **size**(`val`): `this`

##### Parameters

• **val**: `number`

##### Returns

`this`

##### Inherited from

`Query.size`

##### Defined in

node\_modules/mongoose/types/query.d.ts:719

***

### skip()

\> **skip**(`val`): `this`

Specifies the number of documents to skip.

#### Parameters

• **val**: `number`

#### Returns

`this`

#### Inherited from

`Query.skip`

#### Defined in

node\_modules/mongoose/types/query.d.ts:722

***

### slice()

#### slice(path, val)

\> **slice**(`path`, `val`): `this`

Specifies a `$slice` projection for an array.

##### Parameters

• **path**: `string`

• **val**: `number` \| `number`[]

##### Returns

`this`

##### Inherited from

`Query.slice`

##### Defined in

node\_modules/mongoose/types/query.d.ts:725

#### slice(val)

\> **slice**(`val`): `this`

##### Parameters

• **val**: `number` \| `number`[]

##### Returns

`this`

##### Inherited from

`Query.slice`

##### Defined in

node\_modules/mongoose/types/query.d.ts:726

***

### sort()

\> **sort**(`arg`?, `options`?): `this`

Sets the sort order. If an object is passed, values allowed are `asc`, `desc`, `ascending`, `descending`, `1`, and `-1`.

#### Parameters

• **arg?**: `null` \| `string` \| [`string`, `SortOrder`][] \| `object`

• **options?**

• **options.override?**: `boolean`

#### Returns

`this`

#### Inherited from

`Query.sort`

#### Defined in

node\_modules/mongoose/types/query.d.ts:729

***

### tailable()

\> **tailable**(`bool`?, `opts`?): `this`

Sets the tailable option (for use with capped collections).

#### Parameters

• **bool?**: `boolean`

• **opts?**

• **opts.numberOfRetries?**: `number`

• **opts.tailableRetryInterval?**: `number`

#### Returns

`this`

#### Inherited from

`Query.tailable`

#### Defined in

node\_modules/mongoose/types/query.d.ts:735

***

### toConstructor()

\> **toConstructor**\<`RetType`\>(): `RetType`

Converts this query to a customized, reusable query constructor with all arguments and options retained.

#### Type Parameters

• **RetType** = *typeof* `Query`

#### Returns

`RetType`

#### Inherited from

`Query.toConstructor`

#### Defined in

node\_modules/mongoose/types/query.d.ts:747

***

### transform()

\> **transform**\<`MappedType`\>(`fn`): `Query`\<`MappedType`, `T`, `object`, `T`, `"find"`, `Record`\<`string`, `never`\>\>

Runs a function `fn` and treats the return value of `fn` as the new value
for the query to resolve to.

#### Type Parameters

• **MappedType**

#### Parameters

• **fn**

#### Returns

`Query`\<`MappedType`, `T`, `object`, `T`, `"find"`, `Record`\<`string`, `never`\>\>

#### Inherited from

`Query.transform`

#### Defined in

node\_modules/mongoose/types/query.d.ts:546

***

### updateMany()

\> **updateMany**(`filter`?, `update`?, `options`?): `Query`\<`UpdateWriteOpResult`, `T`, `object`, `T`, `"updateMany"`, `Record`\<`string`, `never`\>\>

Declare and/or execute this query as an updateMany() operation. Same as
`update()`, except MongoDB will update _all_ documents that match
`filter` (as opposed to just the first one) regardless of the value of
the `multi` option.

#### Parameters

• **filter?**: `FilterQuery`\<`T`\>

• **update?**: `UpdateWithAggregationPipeline` \| `UpdateQuery`\<`T`\>

• **options?**: `null` \| `QueryOptions`\<`T`\>

#### Returns

`Query`\<`UpdateWriteOpResult`, `T`, `object`, `T`, `"updateMany"`, `Record`\<`string`, `never`\>\>

#### Inherited from

`Query.updateMany`

#### Defined in

node\_modules/mongoose/types/query.d.ts:755

***

### updateOne()

\> **updateOne**(`filter`?, `update`?, `options`?): `Query`\<`UpdateWriteOpResult`, `T`, `object`, `T`, `"updateOne"`, `Record`\<`string`, `never`\>\>

Declare and/or execute this query as an updateOne() operation. Same as
`update()`, except it does not support the `multi` or `overwrite` options.

#### Parameters

• **filter?**: `FilterQuery`\<`T`\>

• **update?**: `UpdateWithAggregationPipeline` \| `UpdateQuery`\<`T`\>

• **options?**: `null` \| `QueryOptions`\<`T`\>

#### Returns

`Query`\<`UpdateWriteOpResult`, `T`, `object`, `T`, `"updateOne"`, `Record`\<`string`, `never`\>\>

#### Inherited from

`Query.updateOne`

#### Defined in

node\_modules/mongoose/types/query.d.ts:765

***

### w()

\> **w**(`val`): `this`

Sets the specified number of `mongod` servers, or tag set of `mongod` servers,
that must acknowledge this write before this write is considered successful.

#### Parameters

• **val**: `null` \| `string` \| `number`

#### Returns

`this`

#### Inherited from

`Query.w`

#### Defined in

node\_modules/mongoose/types/query.d.ts:775

***

### where()

#### where(path, val)

\> **where**(`path`, `val`?): `this`

Specifies a path for use with chaining.

##### Parameters

• **path**: `string`

• **val?**: `any`

##### Returns

`this`

##### Inherited from

`Query.where`

##### Defined in

node\_modules/mongoose/types/query.d.ts:778

#### where(obj)

\> **where**(`obj`): `this`

##### Parameters

• **obj**: `object`

##### Returns

`this`

##### Inherited from

`Query.where`

##### Defined in

node\_modules/mongoose/types/query.d.ts:779

#### where()

\> **where**(): `this`

##### Returns

`this`

##### Inherited from

`Query.where`

##### Defined in

node\_modules/mongoose/types/query.d.ts:780

***

### within()

\> **within**(`val`?): `this`

Defines a `$within` or `$geoWithin` argument for geo-spatial queries.

#### Parameters

• **val?**: `any`

#### Returns

`this`

#### Inherited from

`Query.within`

#### Defined in

node\_modules/mongoose/types/query.d.ts:783

***

### wtimeout()

\> **wtimeout**(`ms`): `this`

If [`w \> 1`](/docs/api/query.html#query_Query-w), the maximum amount of time to
wait for this write to propagate through the replica set before this
operation fails. The default is `0`, which means no timeout.

#### Parameters

• **ms**: `number`

#### Returns

`this`

#### Inherited from

`Query.wtimeout`

#### Defined in

node\_modules/mongoose/types/query.d.ts:790
