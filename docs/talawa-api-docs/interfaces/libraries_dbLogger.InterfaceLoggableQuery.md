[talawa-api](../README.md) / [Exports](../modules.md) / [libraries/dbLogger](../modules/libraries_dbLogger.md) / InterfaceLoggableQuery

# Interface: InterfaceLoggableQuery\<T\>

[libraries/dbLogger](../modules/libraries_dbLogger.md).InterfaceLoggableQuery

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Query`\<`unknown`, `T`\>

  ↳ **`InterfaceLoggableQuery`**

## Table of contents

### Properties

- [[toStringTag]](libraries_dbLogger.InterfaceLoggableQuery.md#[tostringtag])
- [\_mongooseOptions](libraries_dbLogger.InterfaceLoggableQuery.md#_mongooseoptions)
- [catch](libraries_dbLogger.InterfaceLoggableQuery.md#catch)
- [finally](libraries_dbLogger.InterfaceLoggableQuery.md#finally)
- [logInfo](libraries_dbLogger.InterfaceLoggableQuery.md#loginfo)
- [model](libraries_dbLogger.InterfaceLoggableQuery.md#model)
- [then](libraries_dbLogger.InterfaceLoggableQuery.md#then)

### Methods

- [$where](libraries_dbLogger.InterfaceLoggableQuery.md#$where)
- [[asyncIterator]](libraries_dbLogger.InterfaceLoggableQuery.md#[asynciterator])
- [all](libraries_dbLogger.InterfaceLoggableQuery.md#all)
- [allowDiskUse](libraries_dbLogger.InterfaceLoggableQuery.md#allowdiskuse)
- [and](libraries_dbLogger.InterfaceLoggableQuery.md#and)
- [batchSize](libraries_dbLogger.InterfaceLoggableQuery.md#batchsize)
- [box](libraries_dbLogger.InterfaceLoggableQuery.md#box)
- [cast](libraries_dbLogger.InterfaceLoggableQuery.md#cast)
- [circle](libraries_dbLogger.InterfaceLoggableQuery.md#circle)
- [clone](libraries_dbLogger.InterfaceLoggableQuery.md#clone)
- [collation](libraries_dbLogger.InterfaceLoggableQuery.md#collation)
- [comment](libraries_dbLogger.InterfaceLoggableQuery.md#comment)
- [countDocuments](libraries_dbLogger.InterfaceLoggableQuery.md#countdocuments)
- [cursor](libraries_dbLogger.InterfaceLoggableQuery.md#cursor)
- [deleteMany](libraries_dbLogger.InterfaceLoggableQuery.md#deletemany)
- [deleteOne](libraries_dbLogger.InterfaceLoggableQuery.md#deleteone)
- [distinct](libraries_dbLogger.InterfaceLoggableQuery.md#distinct)
- [elemMatch](libraries_dbLogger.InterfaceLoggableQuery.md#elemmatch)
- [equals](libraries_dbLogger.InterfaceLoggableQuery.md#equals)
- [error](libraries_dbLogger.InterfaceLoggableQuery.md#error)
- [estimatedDocumentCount](libraries_dbLogger.InterfaceLoggableQuery.md#estimateddocumentcount)
- [exec](libraries_dbLogger.InterfaceLoggableQuery.md#exec)
- [exists](libraries_dbLogger.InterfaceLoggableQuery.md#exists)
- [explain](libraries_dbLogger.InterfaceLoggableQuery.md#explain)
- [find](libraries_dbLogger.InterfaceLoggableQuery.md#find)
- [findById](libraries_dbLogger.InterfaceLoggableQuery.md#findbyid)
- [findByIdAndDelete](libraries_dbLogger.InterfaceLoggableQuery.md#findbyidanddelete)
- [findByIdAndUpdate](libraries_dbLogger.InterfaceLoggableQuery.md#findbyidandupdate)
- [findOne](libraries_dbLogger.InterfaceLoggableQuery.md#findone)
- [findOneAndDelete](libraries_dbLogger.InterfaceLoggableQuery.md#findoneanddelete)
- [findOneAndUpdate](libraries_dbLogger.InterfaceLoggableQuery.md#findoneandupdate)
- [geometry](libraries_dbLogger.InterfaceLoggableQuery.md#geometry)
- [get](libraries_dbLogger.InterfaceLoggableQuery.md#get)
- [getFilter](libraries_dbLogger.InterfaceLoggableQuery.md#getfilter)
- [getOptions](libraries_dbLogger.InterfaceLoggableQuery.md#getoptions)
- [getPopulatedPaths](libraries_dbLogger.InterfaceLoggableQuery.md#getpopulatedpaths)
- [getQuery](libraries_dbLogger.InterfaceLoggableQuery.md#getquery)
- [getUpdate](libraries_dbLogger.InterfaceLoggableQuery.md#getupdate)
- [gt](libraries_dbLogger.InterfaceLoggableQuery.md#gt)
- [gte](libraries_dbLogger.InterfaceLoggableQuery.md#gte)
- [hint](libraries_dbLogger.InterfaceLoggableQuery.md#hint)
- [in](libraries_dbLogger.InterfaceLoggableQuery.md#in)
- [intersects](libraries_dbLogger.InterfaceLoggableQuery.md#intersects)
- [j](libraries_dbLogger.InterfaceLoggableQuery.md#j)
- [lean](libraries_dbLogger.InterfaceLoggableQuery.md#lean)
- [limit](libraries_dbLogger.InterfaceLoggableQuery.md#limit)
- [lt](libraries_dbLogger.InterfaceLoggableQuery.md#lt)
- [lte](libraries_dbLogger.InterfaceLoggableQuery.md#lte)
- [maxDistance](libraries_dbLogger.InterfaceLoggableQuery.md#maxdistance)
- [maxTimeMS](libraries_dbLogger.InterfaceLoggableQuery.md#maxtimems)
- [merge](libraries_dbLogger.InterfaceLoggableQuery.md#merge)
- [mod](libraries_dbLogger.InterfaceLoggableQuery.md#mod)
- [mongooseOptions](libraries_dbLogger.InterfaceLoggableQuery.md#mongooseoptions)
- [ne](libraries_dbLogger.InterfaceLoggableQuery.md#ne)
- [near](libraries_dbLogger.InterfaceLoggableQuery.md#near)
- [nin](libraries_dbLogger.InterfaceLoggableQuery.md#nin)
- [nor](libraries_dbLogger.InterfaceLoggableQuery.md#nor)
- [or](libraries_dbLogger.InterfaceLoggableQuery.md#or)
- [orFail](libraries_dbLogger.InterfaceLoggableQuery.md#orfail)
- [polygon](libraries_dbLogger.InterfaceLoggableQuery.md#polygon)
- [populate](libraries_dbLogger.InterfaceLoggableQuery.md#populate)
- [post](libraries_dbLogger.InterfaceLoggableQuery.md#post)
- [pre](libraries_dbLogger.InterfaceLoggableQuery.md#pre)
- [projection](libraries_dbLogger.InterfaceLoggableQuery.md#projection)
- [read](libraries_dbLogger.InterfaceLoggableQuery.md#read)
- [readConcern](libraries_dbLogger.InterfaceLoggableQuery.md#readconcern)
- [regex](libraries_dbLogger.InterfaceLoggableQuery.md#regex)
- [replaceOne](libraries_dbLogger.InterfaceLoggableQuery.md#replaceone)
- [select](libraries_dbLogger.InterfaceLoggableQuery.md#select)
- [selected](libraries_dbLogger.InterfaceLoggableQuery.md#selected)
- [selectedExclusively](libraries_dbLogger.InterfaceLoggableQuery.md#selectedexclusively)
- [selectedInclusively](libraries_dbLogger.InterfaceLoggableQuery.md#selectedinclusively)
- [session](libraries_dbLogger.InterfaceLoggableQuery.md#session)
- [set](libraries_dbLogger.InterfaceLoggableQuery.md#set)
- [setOptions](libraries_dbLogger.InterfaceLoggableQuery.md#setoptions)
- [setQuery](libraries_dbLogger.InterfaceLoggableQuery.md#setquery)
- [setUpdate](libraries_dbLogger.InterfaceLoggableQuery.md#setupdate)
- [size](libraries_dbLogger.InterfaceLoggableQuery.md#size)
- [skip](libraries_dbLogger.InterfaceLoggableQuery.md#skip)
- [slice](libraries_dbLogger.InterfaceLoggableQuery.md#slice)
- [sort](libraries_dbLogger.InterfaceLoggableQuery.md#sort)
- [tailable](libraries_dbLogger.InterfaceLoggableQuery.md#tailable)
- [toConstructor](libraries_dbLogger.InterfaceLoggableQuery.md#toconstructor)
- [transform](libraries_dbLogger.InterfaceLoggableQuery.md#transform)
- [updateMany](libraries_dbLogger.InterfaceLoggableQuery.md#updatemany)
- [updateOne](libraries_dbLogger.InterfaceLoggableQuery.md#updateone)
- [w](libraries_dbLogger.InterfaceLoggableQuery.md#w)
- [where](libraries_dbLogger.InterfaceLoggableQuery.md#where)
- [within](libraries_dbLogger.InterfaceLoggableQuery.md#within)
- [wtimeout](libraries_dbLogger.InterfaceLoggableQuery.md#wtimeout)

## Properties

### [toStringTag]

• **[toStringTag]**: `string`

#### Inherited from

Query.[toStringTag]

#### Defined in

node_modules/mongoose/types/query.d.ts:284

___

### \_mongooseOptions

• **\_mongooseOptions**: `MongooseQueryOptions`\<`T`, ``"timestamps"`` \| `MongooseBaseQueryOptionKeys` \| ``"lean"``\>

#### Inherited from

Query.\_mongooseOptions

#### Defined in

node_modules/mongoose/types/query.d.ts:224

___

### catch

• **catch**: \<TResult\>(`onrejected?`: ``null`` \| (`reason`: `any`) =\> `TResult` \| `PromiseLike`\<`TResult`\>) =\> `Promise`\<`unknown`\>

Executes the query returning a `Promise` which will be
resolved with either the doc(s) or rejected with the error.
Like `.then()`, but only takes a rejection handler.

#### Type declaration

▸ \<`TResult`\>(`onrejected?`): `Promise`\<`unknown`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `never` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `onrejected?` | ``null`` \| (`reason`: `any`) =\> `TResult` \| `PromiseLike`\<`TResult`\> |

##### Returns

`Promise`\<`unknown`\>

#### Inherited from

Query.catch

#### Defined in

node_modules/mongoose/types/query.d.ts:275

___

### finally

• **finally**: (`onfinally?`: ``null`` \| () =\> `void`) =\> `Promise`\<`unknown`\>

Executes the query returning a `Promise` which will be
resolved with `.finally()` chained.

#### Type declaration

▸ (`onfinally?`): `Promise`\<`unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `onfinally?` | ``null`` \| () =\> `void` |

##### Returns

`Promise`\<`unknown`\>

#### Inherited from

Query.finally

#### Defined in

node_modules/mongoose/types/query.d.ts:281

___

### logInfo

• `Optional` **logInfo**: [`TransactionLogInfo`](../modules/libraries_dbLogger.md#transactionloginfo)

#### Defined in

[src/libraries/dbLogger.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/libraries/dbLogger.ts#L37)

___

### model

• **model**: `Model`\<`any`, \{\}, \{\}, \{\}, `any`, `any`\>

The model this query was created from

#### Inherited from

Query.model

#### Defined in

node_modules/mongoose/types/query.d.ts:582

___

### then

• **then**: \<TResult1, TResult2\>(`onfulfilled?`: ``null`` \| (`value`: `unknown`) =\> `TResult1` \| `PromiseLike`\<`TResult1`\>, `onrejected?`: ``null`` \| (`reason`: `any`) =\> `TResult2` \| `PromiseLike`\<`TResult2`\>) =\> `Promise`\<`TResult1` \| `TResult2`\>

Executes the query returning a `Promise` which will be
resolved with either the doc(s) or rejected with the error.

#### Type declaration

▸ \<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`\<`TResult1` \| `TResult2`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `unknown` |
| `TResult2` | `never` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `onfulfilled?` | ``null`` \| (`value`: `unknown`) =\> `TResult1` \| `PromiseLike`\<`TResult1`\> |
| `onrejected?` | ``null`` \| (`reason`: `any`) =\> `TResult2` \| `PromiseLike`\<`TResult2`\> |

##### Returns

`Promise`\<`TResult1` \| `TResult2`\>

#### Inherited from

Query.then

#### Defined in

node_modules/mongoose/types/query.d.ts:759

## Methods

### $where

▸ **$where**(`argument`): `Query`\<`T`[], `T`, \{\}, `T`, ``"find"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `argument` | `string` \| `Function` |

#### Returns

`Query`\<`T`[], `T`, \{\}, `T`, ``"find"``\>

#### Inherited from

Query.$where

#### Defined in

node_modules/mongoose/types/query.d.ts:236

___

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`\<`unknown`\>

Returns a wrapper around a [mongodb driver cursor](https://mongodb.github.io/node-mongodb-native/4.9/classes/FindCursor.html).
A QueryCursor exposes a Streams3 interface, as well as a `.next()` function.
This is equivalent to calling `.cursor()` with no arguments.

#### Returns

`AsyncIterableIterator`\<`unknown`\>

#### Inherited from

Query.[asyncIterator]

#### Defined in

node_modules/mongoose/types/query.d.ts:231

___

### all

▸ **all**(`path`, `val`): `this`

Specifies an `$all` query condition. When called with one argument, the most recent path passed to `where()` is used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `val` | `any`[] |

#### Returns

`this`

#### Inherited from

Query.all

#### Defined in

node_modules/mongoose/types/query.d.ts:245

▸ **all**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any`[] |

#### Returns

`this`

#### Inherited from

Query.all

#### Defined in

node_modules/mongoose/types/query.d.ts:246

___

### allowDiskUse

▸ **allowDiskUse**(`value`): `this`

Sets the allowDiskUse option for the query (ignored for \< 4.4.0)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`this`

#### Inherited from

Query.allowDiskUse

#### Defined in

node_modules/mongoose/types/query.d.ts:249

___

### and

▸ **and**(`array`): `this`

Specifies arguments for an `$and` condition.

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `FilterQuery`\<`T`\>[] |

#### Returns

`this`

#### Inherited from

Query.and

#### Defined in

node_modules/mongoose/types/query.d.ts:252

___

### batchSize

▸ **batchSize**(`val`): `this`

Specifies the batchSize option.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`this`

#### Inherited from

Query.batchSize

#### Defined in

node_modules/mongoose/types/query.d.ts:255

___

### box

▸ **box**(`lower`, `upper`): `this`

Specifies a `$box` condition

#### Parameters

| Name | Type |
| :------ | :------ |
| `lower` | `number`[] |
| `upper` | `number`[] |

#### Returns

`this`

#### Inherited from

Query.box

#### Defined in

node_modules/mongoose/types/query.d.ts:258

▸ **box**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`this`

#### Inherited from

Query.box

#### Defined in

node_modules/mongoose/types/query.d.ts:259

___

### cast

▸ **cast**(`model?`, `obj?`): `any`

Casts this query to the schema of `model`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `model?` | ``null`` \| `Model`\<`any`, \{\}, \{\}, \{\}, `any`, `any`\> | the model to cast to. If not set, defaults to `this.model` |
| `obj?` | `any` | If not set, defaults to this query's conditions |

#### Returns

`any`

the casted `obj`

#### Inherited from

Query.cast

#### Defined in

node_modules/mongoose/types/query.d.ts:268

___

### circle

▸ **circle**(`path`, `area`): `this`

Specifies a `$center` or `$centerSphere` condition.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `area` | `any` |

#### Returns

`this`

#### Inherited from

Query.circle

#### Defined in

node_modules/mongoose/types/query.d.ts:287

▸ **circle**(`area`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `area` | `any` |

#### Returns

`this`

#### Inherited from

Query.circle

#### Defined in

node_modules/mongoose/types/query.d.ts:288

___

### clone

▸ **clone**(): `this`

Make a copy of this query so you can re-execute it.

#### Returns

`this`

#### Inherited from

Query.clone

#### Defined in

node_modules/mongoose/types/query.d.ts:291

___

### collation

▸ **collation**(`value`): `this`

Adds a collation to this op (MongoDB 3.4 and up)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `CollationOptions` |

#### Returns

`this`

#### Inherited from

Query.collation

#### Defined in

node_modules/mongoose/types/query.d.ts:294

___

### comment

▸ **comment**(`val`): `this`

Specifies the `comment` option.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`this`

#### Inherited from

Query.comment

#### Defined in

node_modules/mongoose/types/query.d.ts:297

___

### countDocuments

▸ **countDocuments**(`criteria?`, `options?`): `Query`\<`number`, `T`, \{\}, `T`, ``"countDocuments"``\>

Specifies this query as a `countDocuments` query.

#### Parameters

| Name | Type |
| :------ | :------ |
| `criteria?` | `FilterQuery`\<`T`\> |
| `options?` | `QueryOptions`\<`T`\> |

#### Returns

`Query`\<`number`, `T`, \{\}, `T`, ``"countDocuments"``\>

#### Inherited from

Query.countDocuments

#### Defined in

node_modules/mongoose/types/query.d.ts:300

___

### cursor

▸ **cursor**(`options?`): `Cursor`\<`unknown`, `QueryOptions`\<`T`\>\>

Returns a wrapper around a [mongodb driver cursor](https://mongodb.github.io/node-mongodb-native/4.9/classes/FindCursor.html).
A QueryCursor exposes a Streams3 interface, as well as a `.next()` function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `QueryOptions`\<`T`\> |

#### Returns

`Cursor`\<`unknown`, `QueryOptions`\<`T`\>\>

#### Inherited from

Query.cursor

#### Defined in

node_modules/mongoose/types/query.d.ts:309

___

### deleteMany

▸ **deleteMany**(`filter?`, `options?`): `Query`\<`any`, `T`, \{\}, `T`, ``"deleteMany"``\>

Declare and/or execute this query as a `deleteMany()` operation. Works like
remove, except it deletes _every_ document that matches `filter` in the
collection, regardless of the value of `single`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `FilterQuery`\<`T`\> |
| `options?` | `QueryOptions`\<`T`\> |

#### Returns

`Query`\<`any`, `T`, \{\}, `T`, ``"deleteMany"``\>

#### Inherited from

Query.deleteMany

#### Defined in

node_modules/mongoose/types/query.d.ts:316

▸ **deleteMany**(`filter`): `Query`\<`any`, `T`, \{\}, `T`, ``"deleteMany"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `FilterQuery`\<`T`\> |

#### Returns

`Query`\<`any`, `T`, \{\}, `T`, ``"deleteMany"``\>

#### Inherited from

Query.deleteMany

#### Defined in

node_modules/mongoose/types/query.d.ts:320

▸ **deleteMany**(): `Query`\<`any`, `T`, \{\}, `T`, ``"deleteMany"``\>

#### Returns

`Query`\<`any`, `T`, \{\}, `T`, ``"deleteMany"``\>

#### Inherited from

Query.deleteMany

#### Defined in

node_modules/mongoose/types/query.d.ts:327

___

### deleteOne

▸ **deleteOne**(`filter?`, `options?`): `Query`\<`any`, `T`, \{\}, `T`, ``"deleteOne"``\>

Declare and/or execute this query as a `deleteOne()` operation. Works like
remove, except it deletes at most one document regardless of the `single`
option.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `FilterQuery`\<`T`\> |
| `options?` | `QueryOptions`\<`T`\> |

#### Returns

`Query`\<`any`, `T`, \{\}, `T`, ``"deleteOne"``\>

#### Inherited from

Query.deleteOne

#### Defined in

node_modules/mongoose/types/query.d.ts:334

▸ **deleteOne**(`filter`): `Query`\<`any`, `T`, \{\}, `T`, ``"deleteOne"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `FilterQuery`\<`T`\> |

#### Returns

`Query`\<`any`, `T`, \{\}, `T`, ``"deleteOne"``\>

#### Inherited from

Query.deleteOne

#### Defined in

node_modules/mongoose/types/query.d.ts:338

▸ **deleteOne**(): `Query`\<`any`, `T`, \{\}, `T`, ``"deleteOne"``\>

#### Returns

`Query`\<`any`, `T`, \{\}, `T`, ``"deleteOne"``\>

#### Inherited from

Query.deleteOne

#### Defined in

node_modules/mongoose/types/query.d.ts:345

___

### distinct

▸ **distinct**\<`DocKey`, `ResultType`\>(`field`, `filter?`): `Query`\<`DocKey` extends keyof `T` ? `Unpacked`\<`T`[`DocKey`]\> : `ResultType`[], `T`, \{\}, `T`, ``"distinct"``\>

Creates a `distinct` query: returns the distinct values of the given `field` that match `filter`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DocKey` | extends `string` |
| `ResultType` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `DocKey` |
| `filter?` | `FilterQuery`\<`T`\> |

#### Returns

`Query`\<`DocKey` extends keyof `T` ? `Unpacked`\<`T`[`DocKey`]\> : `ResultType`[], `T`, \{\}, `T`, ``"distinct"``\>

#### Inherited from

Query.distinct

#### Defined in

node_modules/mongoose/types/query.d.ts:348

___

### elemMatch

▸ **elemMatch**\<`K`\>(`path`, `val`): `this`

Specifies a `$elemMatch` query condition. When called with one argument, the most recent path passed to `where()` is used.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K` |
| `val` | `any` |

#### Returns

`this`

#### Inherited from

Query.elemMatch

#### Defined in

node_modules/mongoose/types/query.d.ts:354

▸ **elemMatch**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`this`

#### Inherited from

Query.elemMatch

#### Defined in

node_modules/mongoose/types/query.d.ts:355

___

### equals

▸ **equals**(`val`): `this`

Specifies the complementary comparison value for paths specified with `where()`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`this`

#### Inherited from

Query.equals

#### Defined in

node_modules/mongoose/types/query.d.ts:365

___

### error

▸ **error**(): ``null`` \| `NativeError`

Gets/sets the error flag on this query. If this flag is not null or
undefined, the `exec()` promise will reject without executing.

#### Returns

``null`` \| `NativeError`

#### Inherited from

Query.error

#### Defined in

node_modules/mongoose/types/query.d.ts:361

▸ **error**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | ``null`` \| `NativeError` |

#### Returns

`this`

#### Inherited from

Query.error

#### Defined in

node_modules/mongoose/types/query.d.ts:362

___

### estimatedDocumentCount

▸ **estimatedDocumentCount**(`options?`): `Query`\<`number`, `T`, \{\}, `T`, ``"estimatedDocumentCount"``\>

Creates a `estimatedDocumentCount` query: counts the number of documents in the collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `QueryOptions`\<`T`\> |

#### Returns

`Query`\<`number`, `T`, \{\}, `T`, ``"estimatedDocumentCount"``\>

#### Inherited from

Query.estimatedDocumentCount

#### Defined in

node_modules/mongoose/types/query.d.ts:368

___

### exec

▸ **exec**(): `Promise`\<`unknown`\>

Executes the query

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

Query.exec

#### Defined in

node_modules/mongoose/types/query.d.ts:234

___

### exists

▸ **exists**\<`K`\>(`path`, `val`): `this`

Specifies a `$exists` query condition. When called with one argument, the most recent path passed to `where()` is used.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K` |
| `val` | `boolean` |

#### Returns

`this`

#### Inherited from

Query.exists

#### Defined in

node_modules/mongoose/types/query.d.ts:377

▸ **exists**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`this`

#### Inherited from

Query.exists

#### Defined in

node_modules/mongoose/types/query.d.ts:378

___

### explain

▸ **explain**(`verbose?`): `this`

Sets the [`explain` option](https://www.mongodb.com/docs/manual/reference/method/cursor.explain/),
which makes this query return detailed execution stats instead of the actual
query result. This method is useful for determining what index your queries
use.

#### Parameters

| Name | Type |
| :------ | :------ |
| `verbose?` | `ExplainVerbosityLike` |

#### Returns

`this`

#### Inherited from

Query.explain

#### Defined in

node_modules/mongoose/types/query.d.ts:386

___

### find

▸ **find**(`filter`, `projection?`, `options?`): `Query`\<`T`[], `T`, \{\}, `T`, ``"find"``\>

Creates a `find` query: gets a list of documents that match `filter`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `FilterQuery`\<`T`\> |
| `projection?` | ``null`` \| `ProjectionType`\<`T`\> |
| `options?` | ``null`` \| `QueryOptions`\<`T`\> |

#### Returns

`Query`\<`T`[], `T`, \{\}, `T`, ``"find"``\>

#### Inherited from

Query.find

#### Defined in

node_modules/mongoose/types/query.d.ts:389

▸ **find**(`filter`, `projection?`): `Query`\<`T`[], `T`, \{\}, `T`, ``"find"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `FilterQuery`\<`T`\> |
| `projection?` | ``null`` \| `ProjectionType`\<`T`\> |

#### Returns

`Query`\<`T`[], `T`, \{\}, `T`, ``"find"``\>

#### Inherited from

Query.find

#### Defined in

node_modules/mongoose/types/query.d.ts:394

▸ **find**(`filter`): `Query`\<`T`[], `T`, \{\}, `T`, ``"find"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `FilterQuery`\<`T`\> |

#### Returns

`Query`\<`T`[], `T`, \{\}, `T`, ``"find"``\>

#### Inherited from

Query.find

#### Defined in

node_modules/mongoose/types/query.d.ts:398

▸ **find**(): `Query`\<`T`[], `T`, \{\}, `T`, ``"find"``\>

#### Returns

`Query`\<`T`[], `T`, \{\}, `T`, ``"find"``\>

#### Inherited from

Query.find

#### Defined in

node_modules/mongoose/types/query.d.ts:401

___

### findById

▸ **findById**(`id`, `projection?`, `options?`): `Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOne"``\>

Declares the query a findById operation. When executed, returns the document with the given `_id`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |
| `projection?` | ``null`` \| `ProjectionType`\<`T`\> |
| `options?` | ``null`` \| `QueryOptions`\<`T`\> |

#### Returns

`Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOne"``\>

#### Inherited from

Query.findById

#### Defined in

node_modules/mongoose/types/query.d.ts:441

▸ **findById**(`id`, `projection?`): `Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOne"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |
| `projection?` | ``null`` \| `ProjectionType`\<`T`\> |

#### Returns

`Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOne"``\>

#### Inherited from

Query.findById

#### Defined in

node_modules/mongoose/types/query.d.ts:446

▸ **findById**(`id`): `Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOne"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |

#### Returns

`Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOne"``\>

#### Inherited from

Query.findById

#### Defined in

node_modules/mongoose/types/query.d.ts:450

___

### findByIdAndDelete

▸ **findByIdAndDelete**(`id`, `options`): `Query`\<`ModifyResult`\<`T`\>, `T`, \{\}, `T`, ``"findOneAndDelete"``\>

Creates a `findByIdAndDelete` query, filtering by the given `_id`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |
| `options` | `QueryOptions`\<`T`\> & \{ `includeResultMetadata`: ``true``  \} |

#### Returns

`Query`\<`ModifyResult`\<`T`\>, `T`, \{\}, `T`, ``"findOneAndDelete"``\>

#### Inherited from

Query.findByIdAndDelete

#### Defined in

node_modules/mongoose/types/query.d.ts:455

▸ **findByIdAndDelete**(`id?`, `options?`): `Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOneAndDelete"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `any` |
| `options?` | ``null`` \| `QueryOptions`\<`T`\> |

#### Returns

`Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOneAndDelete"``\>

#### Inherited from

Query.findByIdAndDelete

#### Defined in

node_modules/mongoose/types/query.d.ts:459

___

### findByIdAndUpdate

▸ **findByIdAndUpdate**(`id`, `update`, `options`): `Query`\<`any`, `T`, \{\}, `T`, ``"findOneAndUpdate"``\>

Creates a `findOneAndUpdate` query, filtering by the given `_id`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |
| `update` | `UpdateQuery`\<`T`\> |
| `options` | `QueryOptions`\<`T`\> & \{ `includeResultMetadata`: ``true``  \} |

#### Returns

`Query`\<`any`, `T`, \{\}, `T`, ``"findOneAndUpdate"``\>

#### Inherited from

Query.findByIdAndUpdate

#### Defined in

node_modules/mongoose/types/query.d.ts:465

▸ **findByIdAndUpdate**(`id`, `update`, `options`): `Query`\<`T`, `T`, \{\}, `T`, ``"findOneAndUpdate"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |
| `update` | `UpdateQuery`\<`T`\> |
| `options` | `QueryOptions`\<`T`\> & \{ `upsert`: ``true``  \} & `ReturnsNewDoc` |

#### Returns

`Query`\<`T`, `T`, \{\}, `T`, ``"findOneAndUpdate"``\>

#### Inherited from

Query.findByIdAndUpdate

#### Defined in

node_modules/mongoose/types/query.d.ts:470

▸ **findByIdAndUpdate**(`id?`, `update?`, `options?`): `Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOneAndUpdate"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `any` |
| `update?` | `UpdateQuery`\<`T`\> |
| `options?` | ``null`` \| `QueryOptions`\<`T`\> |

#### Returns

`Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOneAndUpdate"``\>

#### Inherited from

Query.findByIdAndUpdate

#### Defined in

node_modules/mongoose/types/query.d.ts:475

▸ **findByIdAndUpdate**(`id`, `update`): `Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOneAndUpdate"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |
| `update` | `UpdateQuery`\<`T`\> |

#### Returns

`Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOneAndUpdate"``\>

#### Inherited from

Query.findByIdAndUpdate

#### Defined in

node_modules/mongoose/types/query.d.ts:480

___

### findOne

▸ **findOne**(`filter?`, `projection?`, `options?`): `Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOne"``\>

Declares the query a findOne operation. When executed, returns the first found document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `FilterQuery`\<`T`\> |
| `projection?` | ``null`` \| `ProjectionType`\<`T`\> |
| `options?` | ``null`` \| `QueryOptions`\<`T`\> |

#### Returns

`Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOne"``\>

#### Inherited from

Query.findOne

#### Defined in

node_modules/mongoose/types/query.d.ts:404

▸ **findOne**(`filter?`, `projection?`): `Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOne"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `FilterQuery`\<`T`\> |
| `projection?` | ``null`` \| `ProjectionType`\<`T`\> |

#### Returns

`Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOne"``\>

#### Inherited from

Query.findOne

#### Defined in

node_modules/mongoose/types/query.d.ts:409

▸ **findOne**(`filter?`): `Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOne"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `FilterQuery`\<`T`\> |

#### Returns

`Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOne"``\>

#### Inherited from

Query.findOne

#### Defined in

node_modules/mongoose/types/query.d.ts:413

___

### findOneAndDelete

▸ **findOneAndDelete**(`filter?`, `options?`): `Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOneAndDelete"``\>

Creates a `findOneAndDelete` query: atomically finds the given document, deletes it, and returns the document as it was before deletion.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `FilterQuery`\<`T`\> |
| `options?` | ``null`` \| `QueryOptions`\<`T`\> |

#### Returns

`Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOneAndDelete"``\>

#### Inherited from

Query.findOneAndDelete

#### Defined in

node_modules/mongoose/types/query.d.ts:418

___

### findOneAndUpdate

▸ **findOneAndUpdate**(`filter`, `update`, `options`): `Query`\<`ModifyResult`\<`T`\>, `T`, \{\}, `T`, ``"findOneAndUpdate"``\>

Creates a `findOneAndUpdate` query: atomically find the first document that matches `filter` and apply `update`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `FilterQuery`\<`T`\> |
| `update` | `UpdateQuery`\<`T`\> |
| `options` | `QueryOptions`\<`T`\> & \{ `includeResultMetadata`: ``true``  \} |

#### Returns

`Query`\<`ModifyResult`\<`T`\>, `T`, \{\}, `T`, ``"findOneAndUpdate"``\>

#### Inherited from

Query.findOneAndUpdate

#### Defined in

node_modules/mongoose/types/query.d.ts:424

▸ **findOneAndUpdate**(`filter`, `update`, `options`): `Query`\<`T`, `T`, \{\}, `T`, ``"findOneAndUpdate"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `FilterQuery`\<`T`\> |
| `update` | `UpdateQuery`\<`T`\> |
| `options` | `QueryOptions`\<`T`\> & \{ `upsert`: ``true``  \} & `ReturnsNewDoc` |

#### Returns

`Query`\<`T`, `T`, \{\}, `T`, ``"findOneAndUpdate"``\>

#### Inherited from

Query.findOneAndUpdate

#### Defined in

node_modules/mongoose/types/query.d.ts:429

▸ **findOneAndUpdate**(`filter?`, `update?`, `options?`): `Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOneAndUpdate"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `FilterQuery`\<`T`\> |
| `update?` | `UpdateQuery`\<`T`\> |
| `options?` | ``null`` \| `QueryOptions`\<`T`\> |

#### Returns

`Query`\<``null`` \| `T`, `T`, \{\}, `T`, ``"findOneAndUpdate"``\>

#### Inherited from

Query.findOneAndUpdate

#### Defined in

node_modules/mongoose/types/query.d.ts:434

___

### geometry

▸ **geometry**(`object`): `this`

Specifies a `$geometry` condition

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |
| `object.coordinates` | `any`[] |
| `object.type` | `string` |

#### Returns

`this`

#### Inherited from

Query.geometry

#### Defined in

node_modules/mongoose/types/query.d.ts:486

___

### get

▸ **get**(`path`): `any`

For update operations, returns the value of a path in the update's `$set`.
Useful for writing getters/setters that can work with both update operations
and `save()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`any`

#### Inherited from

Query.get

#### Defined in

node_modules/mongoose/types/query.d.ts:493

___

### getFilter

▸ **getFilter**(): `FilterQuery`\<`T`\>

Returns the current query filter (also known as conditions) as a POJO.

#### Returns

`FilterQuery`\<`T`\>

#### Inherited from

Query.getFilter

#### Defined in

node_modules/mongoose/types/query.d.ts:496

___

### getOptions

▸ **getOptions**(): `QueryOptions`\<`T`\>

Gets query options.

#### Returns

`QueryOptions`\<`T`\>

#### Inherited from

Query.getOptions

#### Defined in

node_modules/mongoose/types/query.d.ts:499

___

### getPopulatedPaths

▸ **getPopulatedPaths**(): `string`[]

Gets a list of paths to be populated by this query

#### Returns

`string`[]

#### Inherited from

Query.getPopulatedPaths

#### Defined in

node_modules/mongoose/types/query.d.ts:502

___

### getQuery

▸ **getQuery**(): `FilterQuery`\<`T`\>

Returns the current query filter. Equivalent to `getFilter()`.

#### Returns

`FilterQuery`\<`T`\>

#### Inherited from

Query.getQuery

#### Defined in

node_modules/mongoose/types/query.d.ts:505

___

### getUpdate

▸ **getUpdate**(): ``null`` \| `UpdateWithAggregationPipeline` \| `UpdateQuery`\<`T`\>

Returns the current update operations as a JSON object.

#### Returns

``null`` \| `UpdateWithAggregationPipeline` \| `UpdateQuery`\<`T`\>

#### Inherited from

Query.getUpdate

#### Defined in

node_modules/mongoose/types/query.d.ts:508

___

### gt

▸ **gt**\<`K`\>(`path`, `val`): `this`

Specifies a `$gt` query condition. When called with one argument, the most recent path passed to `where()` is used.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K` |
| `val` | `any` |

#### Returns

`this`

#### Inherited from

Query.gt

#### Defined in

node_modules/mongoose/types/query.d.ts:511

▸ **gt**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`this`

#### Inherited from

Query.gt

#### Defined in

node_modules/mongoose/types/query.d.ts:512

___

### gte

▸ **gte**\<`K`\>(`path`, `val`): `this`

Specifies a `$gte` query condition. When called with one argument, the most recent path passed to `where()` is used.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K` |
| `val` | `any` |

#### Returns

`this`

#### Inherited from

Query.gte

#### Defined in

node_modules/mongoose/types/query.d.ts:515

▸ **gte**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`this`

#### Inherited from

Query.gte

#### Defined in

node_modules/mongoose/types/query.d.ts:516

___

### hint

▸ **hint**(`val`): `this`

Sets query hints.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`this`

#### Inherited from

Query.hint

#### Defined in

node_modules/mongoose/types/query.d.ts:519

___

### in

▸ **in**\<`K`\>(`path`, `val`): `this`

Specifies an `$in` query condition. When called with one argument, the most recent path passed to `where()` is used.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K` |
| `val` | `any`[] |

#### Returns

`this`

#### Inherited from

Query.in

#### Defined in

node_modules/mongoose/types/query.d.ts:522

▸ **in**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any`[] |

#### Returns

`this`

#### Inherited from

Query.in

#### Defined in

node_modules/mongoose/types/query.d.ts:523

___

### intersects

▸ **intersects**(`arg?`): `this`

Declares an intersects query for `geometry()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg?` | `any` |

#### Returns

`this`

#### Inherited from

Query.intersects

#### Defined in

node_modules/mongoose/types/query.d.ts:526

___

### j

▸ **j**(`val`): `this`

Requests acknowledgement that this operation has been persisted to MongoDB's on-disk journal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | ``null`` \| `boolean` |

#### Returns

`this`

#### Inherited from

Query.j

#### Defined in

node_modules/mongoose/types/query.d.ts:529

___

### lean

▸ **lean**\<`LeanResultType`\>(`val?`): `Query`\<`LeanResultType`, `T`, \{\}, `T`, ``"find"``\>

Sets the lean option.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LeanResultType` | `Require_id`\<`FlattenMaps`\<`T`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val?` | `any` |

#### Returns

`Query`\<`LeanResultType`, `T`, \{\}, `T`, ``"find"``\>

#### Inherited from

Query.lean

#### Defined in

node_modules/mongoose/types/query.d.ts:532

___

### limit

▸ **limit**(`val`): `this`

Specifies the maximum number of documents the query will return.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`this`

#### Inherited from

Query.limit

#### Defined in

node_modules/mongoose/types/query.d.ts:547

___

### lt

▸ **lt**\<`K`\>(`path`, `val`): `this`

Specifies a `$lt` query condition. When called with one argument, the most recent path passed to `where()` is used.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K` |
| `val` | `any` |

#### Returns

`this`

#### Inherited from

Query.lt

#### Defined in

node_modules/mongoose/types/query.d.ts:550

▸ **lt**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`this`

#### Inherited from

Query.lt

#### Defined in

node_modules/mongoose/types/query.d.ts:551

___

### lte

▸ **lte**\<`K`\>(`path`, `val`): `this`

Specifies a `$lte` query condition. When called with one argument, the most recent path passed to `where()` is used.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K` |
| `val` | `any` |

#### Returns

`this`

#### Inherited from

Query.lte

#### Defined in

node_modules/mongoose/types/query.d.ts:554

▸ **lte**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`this`

#### Inherited from

Query.lte

#### Defined in

node_modules/mongoose/types/query.d.ts:555

___

### maxDistance

▸ **maxDistance**(`path`, `val`): `this`

Specifies an `$maxDistance` query condition. When called with one argument, the most recent path passed to `where()` is used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `val` | `number` |

#### Returns

`this`

#### Inherited from

Query.maxDistance

#### Defined in

node_modules/mongoose/types/query.d.ts:564

▸ **maxDistance**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`this`

#### Inherited from

Query.maxDistance

#### Defined in

node_modules/mongoose/types/query.d.ts:565

___

### maxTimeMS

▸ **maxTimeMS**(`ms`): `this`

Sets the [maxTimeMS](https://www.mongodb.com/docs/manual/reference/method/cursor.maxTimeMS/)
option. This will tell the MongoDB server to abort if the query or write op
has been running for more than `ms` milliseconds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`this`

#### Inherited from

Query.maxTimeMS

#### Defined in

node_modules/mongoose/types/query.d.ts:572

___

### merge

▸ **merge**(`source`): `this`

Merges another Query or conditions object into this one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Query`\<`any`, `any`, \{\}, `any`, ``"find"``\> \| `FilterQuery`\<`T`\> |

#### Returns

`this`

#### Inherited from

Query.merge

#### Defined in

node_modules/mongoose/types/query.d.ts:575

___

### mod

▸ **mod**\<`K`\>(`path`, `val`): `this`

Specifies a `$mod` condition, filters documents for documents whose `path` property is a number that is equal to `remainder` modulo `divisor`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K` |
| `val` | `number` |

#### Returns

`this`

#### Inherited from

Query.mod

#### Defined in

node_modules/mongoose/types/query.d.ts:578

▸ **mod**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number`[] |

#### Returns

`this`

#### Inherited from

Query.mod

#### Defined in

node_modules/mongoose/types/query.d.ts:579

___

### mongooseOptions

▸ **mongooseOptions**(`val?`): `MongooseQueryOptions`\<`unknown`, ``"timestamps"`` \| `MongooseBaseQueryOptionKeys` \| ``"lean"``\>

Getter/setter around the current mongoose-specific options for this query
Below are the current Mongoose-specific options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val?` | `MongooseQueryOptions`\<`unknown`, ``"timestamps"`` \| `MongooseBaseQueryOptionKeys` \| ``"lean"``\> |

#### Returns

`MongooseQueryOptions`\<`unknown`, ``"timestamps"`` \| `MongooseBaseQueryOptionKeys` \| ``"lean"``\>

#### Inherited from

Query.mongooseOptions

#### Defined in

node_modules/mongoose/types/query.d.ts:588

___

### ne

▸ **ne**\<`K`\>(`path`, `val`): `this`

Specifies a `$ne` query condition. When called with one argument, the most recent path passed to `where()` is used.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K` |
| `val` | `any` |

#### Returns

`this`

#### Inherited from

Query.ne

#### Defined in

node_modules/mongoose/types/query.d.ts:591

▸ **ne**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`this`

#### Inherited from

Query.ne

#### Defined in

node_modules/mongoose/types/query.d.ts:592

___

### near

▸ **near**\<`K`\>(`path`, `val`): `this`

Specifies a `$near` or `$nearSphere` condition

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K` |
| `val` | `any` |

#### Returns

`this`

#### Inherited from

Query.near

#### Defined in

node_modules/mongoose/types/query.d.ts:595

▸ **near**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`this`

#### Inherited from

Query.near

#### Defined in

node_modules/mongoose/types/query.d.ts:596

___

### nin

▸ **nin**\<`K`\>(`path`, `val`): `this`

Specifies an `$nin` query condition. When called with one argument, the most recent path passed to `where()` is used.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K` |
| `val` | `any`[] |

#### Returns

`this`

#### Inherited from

Query.nin

#### Defined in

node_modules/mongoose/types/query.d.ts:599

▸ **nin**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any`[] |

#### Returns

`this`

#### Inherited from

Query.nin

#### Defined in

node_modules/mongoose/types/query.d.ts:600

___

### nor

▸ **nor**(`array`): `this`

Specifies arguments for an `$nor` condition.

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `FilterQuery`\<`T`\>[] |

#### Returns

`this`

#### Inherited from

Query.nor

#### Defined in

node_modules/mongoose/types/query.d.ts:603

___

### or

▸ **or**(`array`): `this`

Specifies arguments for an `$or` condition.

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `FilterQuery`\<`T`\>[] |

#### Returns

`this`

#### Inherited from

Query.or

#### Defined in

node_modules/mongoose/types/query.d.ts:606

___

### orFail

▸ **orFail**(`err?`): `Query`\<\{\}, `T`, \{\}, `T`, ``"find"``\>

Make this query throw an error if no documents match the given `filter`.
This is handy for integrating with async/await, because `orFail()` saves you
an extra `if` statement to check if no document was found.

#### Parameters

| Name | Type |
| :------ | :------ |
| `err?` | `NativeError` \| () =\> `NativeError` |

#### Returns

`Query`\<\{\}, `T`, \{\}, `T`, ``"find"``\>

#### Inherited from

Query.orFail

#### Defined in

node_modules/mongoose/types/query.d.ts:613

___

### polygon

▸ **polygon**(`path`, `...coordinatePairs`): `this`

Specifies a `$polygon` condition

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `...coordinatePairs` | `number`[][] |

#### Returns

`this`

#### Inherited from

Query.polygon

#### Defined in

node_modules/mongoose/types/query.d.ts:616

▸ **polygon**(`...coordinatePairs`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...coordinatePairs` | `number`[][] |

#### Returns

`this`

#### Inherited from

Query.polygon

#### Defined in

node_modules/mongoose/types/query.d.ts:617

___

### populate

▸ **populate**\<`Paths`\>(`path`, `select?`, `model?`, `match?`): `Query`\<keyof `Paths` extends `never` ? `unknown` : `Omit`\<`unknown`, keyof `Paths`\> & `Paths`, `T`, \{\}, `UnpackedIntersection`\<`T`, `Paths`\>, ``"find"``\>

Specifies paths which should be populated with other documents.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Paths` | \{\} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `string`[] |
| `select?` | `any` |
| `model?` | `string` \| `Model`\<`any`, \{\}, \{\}, \{\}, `any`, `any`\> |
| `match?` | `any` |

#### Returns

`Query`\<keyof `Paths` extends `never` ? `unknown` : `Omit`\<`unknown`, keyof `Paths`\> & `Paths`, `T`, \{\}, `UnpackedIntersection`\<`T`, `Paths`\>, ``"find"``\>

#### Inherited from

Query.populate

#### Defined in

node_modules/mongoose/types/query.d.ts:620

▸ **populate**\<`Paths`\>(`options`): `Query`\<keyof `Paths` extends `never` ? `unknown` : `Omit`\<`unknown`, keyof `Paths`\> & `Paths`, `T`, \{\}, `UnpackedIntersection`\<`T`, `Paths`\>, ``"find"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Paths` | \{\} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `PopulateOptions` \| (`string` \| `PopulateOptions`)[] |

#### Returns

`Query`\<keyof `Paths` extends `never` ? `unknown` : `Omit`\<`unknown`, keyof `Paths`\> & `Paths`, `T`, \{\}, `UnpackedIntersection`\<`T`, `Paths`\>, ``"find"``\>

#### Inherited from

Query.populate

#### Defined in

node_modules/mongoose/types/query.d.ts:632

___

### post

▸ **post**(`fn`): `this`

Add post middleware to this query instance. Doesn't affect other queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Function` |

#### Returns

`this`

#### Inherited from

Query.post

#### Defined in

node_modules/mongoose/types/query.d.ts:646

___

### pre

▸ **pre**(`fn`): `this`

Add pre middleware to this query instance. Doesn't affect other queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Function` |

#### Returns

`this`

#### Inherited from

Query.pre

#### Defined in

node_modules/mongoose/types/query.d.ts:643

___

### projection

▸ **projection**(`fields?`): `ProjectionFields`\<`T`\>

Get/set the current projection (AKA fields). Pass `null` to remove the current projection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields?` | `string` \| `ProjectionFields`\<`T`\> |

#### Returns

`ProjectionFields`\<`T`\>

#### Inherited from

Query.projection

#### Defined in

node_modules/mongoose/types/query.d.ts:649

▸ **projection**(`fields`): ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | ``null`` |

#### Returns

``null``

#### Inherited from

Query.projection

#### Defined in

node_modules/mongoose/types/query.d.ts:650

▸ **projection**(): ``null`` \| `ProjectionFields`\<`T`\>

#### Returns

``null`` \| `ProjectionFields`\<`T`\>

#### Inherited from

Query.projection

#### Defined in

node_modules/mongoose/types/query.d.ts:651

___

### read

▸ **read**(`mode`, `tags?`): `this`

Determines the MongoDB nodes from which to read.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `string` |
| `tags?` | `any`[] |

#### Returns

`this`

#### Inherited from

Query.read

#### Defined in

node_modules/mongoose/types/query.d.ts:654

___

### readConcern

▸ **readConcern**(`level`): `this`

Sets the readConcern option for the query.

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `string` |

#### Returns

`this`

#### Inherited from

Query.readConcern

#### Defined in

node_modules/mongoose/types/query.d.ts:657

___

### regex

▸ **regex**\<`K`\>(`path`, `val`): `this`

Specifies a `$regex` query condition. When called with one argument, the most recent path passed to `where()` is used.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K` |
| `val` | `RegExp` |

#### Returns

`this`

#### Inherited from

Query.regex

#### Defined in

node_modules/mongoose/types/query.d.ts:660

▸ **regex**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` \| `RegExp` |

#### Returns

`this`

#### Inherited from

Query.regex

#### Defined in

node_modules/mongoose/types/query.d.ts:661

___

### replaceOne

▸ **replaceOne**(`filter?`, `replacement?`, `options?`): `Query`\<`any`, `T`, \{\}, `T`, ``"replaceOne"``\>

Declare and/or execute this query as a replaceOne() operation. Same as
`update()`, except MongoDB will replace the existing document and will
not accept any [atomic](https://www.mongodb.com/docs/manual/tutorial/model-data-for-atomic-operations/#pattern) operators (`$set`, etc.)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `FilterQuery`\<`T`\> |
| `replacement?` | `T` \| `AnyObject` |
| `options?` | ``null`` \| `QueryOptions`\<`T`\> |

#### Returns

`Query`\<`any`, `T`, \{\}, `T`, ``"replaceOne"``\>

#### Inherited from

Query.replaceOne

#### Defined in

node_modules/mongoose/types/query.d.ts:668

___

### select

▸ **select**\<`RawDocTypeOverride`\>(`arg`): `Query`\<`IfEquals`\<`RawDocTypeOverride`, \{\}, `unknown`, `IfAny`\<`RawDocTypeOverride`, `any`, `Document`\<`unknown`, \{\}, `RawDocTypeOverride`\> & `Require_id`\<`RawDocTypeOverride`\>\>\>, `T`, \{\}, `IfEquals`\<`RawDocTypeOverride`, \{\}, `T`, `RawDocTypeOverride`\>, ``"find"``\>

Specifies which document fields to include or exclude (also known as the query "projection")

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RawDocTypeOverride` | extends \{ [P in string \| number \| symbol]?: any \} = \{\} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `string` \| `string`[] \| `Record`\<`string`, `string` \| `number` \| `boolean` \| `object`\> |

#### Returns

`Query`\<`IfEquals`\<`RawDocTypeOverride`, \{\}, `unknown`, `IfAny`\<`RawDocTypeOverride`, `any`, `Document`\<`unknown`, \{\}, `RawDocTypeOverride`\> & `Require_id`\<`RawDocTypeOverride`\>\>\>, `T`, \{\}, `IfEquals`\<`RawDocTypeOverride`, \{\}, `T`, `RawDocTypeOverride`\>, ``"find"``\>

#### Inherited from

Query.select

#### Defined in

node_modules/mongoose/types/query.d.ts:675

___

### selected

▸ **selected**(): `boolean`

Determines if field selection has been made.

#### Returns

`boolean`

#### Inherited from

Query.selected

#### Defined in

node_modules/mongoose/types/query.d.ts:702

___

### selectedExclusively

▸ **selectedExclusively**(): `boolean`

Determines if exclusive field selection has been made.

#### Returns

`boolean`

#### Inherited from

Query.selectedExclusively

#### Defined in

node_modules/mongoose/types/query.d.ts:705

___

### selectedInclusively

▸ **selectedInclusively**(): `boolean`

Determines if inclusive field selection has been made.

#### Returns

`boolean`

#### Inherited from

Query.selectedInclusively

#### Defined in

node_modules/mongoose/types/query.d.ts:708

___

### session

▸ **session**(`session`): `this`

Sets the [MongoDB session](https://www.mongodb.com/docs/manual/reference/server-sessions/)
associated with this query. Sessions are how you mark a query as part of a
[transaction](/docs/transactions.html).

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | ``null`` \| `ClientSession` |

#### Returns

`this`

#### Inherited from

Query.session

#### Defined in

node_modules/mongoose/types/query.d.ts:715

___

### set

▸ **set**(`path`, `value?`): `this`

Adds a `$set` to this query's update without changing the operation.
This is useful for query middleware so you can add an update regardless
of whether you use `updateOne()`, `updateMany()`, `findOneAndUpdate()`, etc.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `Record`\<`string`, `unknown`\> |
| `value?` | `any` |

#### Returns

`this`

#### Inherited from

Query.set

#### Defined in

node_modules/mongoose/types/query.d.ts:722

___

### setOptions

▸ **setOptions**(`options`, `overwrite?`): `this`

Sets query options. Some options only make sense for certain operations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `QueryOptions`\<`T`\> |
| `overwrite?` | `boolean` |

#### Returns

`this`

#### Inherited from

Query.setOptions

#### Defined in

node_modules/mongoose/types/query.d.ts:725

___

### setQuery

▸ **setQuery**(`val`): `void`

Sets the query conditions to the provided JSON object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | ``null`` \| `FilterQuery`\<`T`\> |

#### Returns

`void`

#### Inherited from

Query.setQuery

#### Defined in

node_modules/mongoose/types/query.d.ts:728

___

### setUpdate

▸ **setUpdate**(`update`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `update` | `UpdateWithAggregationPipeline` \| `UpdateQuery`\<`T`\> |

#### Returns

`void`

#### Inherited from

Query.setUpdate

#### Defined in

node_modules/mongoose/types/query.d.ts:730

___

### size

▸ **size**\<`K`\>(`path`, `val`): `this`

Specifies an `$size` query condition. When called with one argument, the most recent path passed to `where()` is used.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K` |
| `val` | `number` |

#### Returns

`this`

#### Inherited from

Query.size

#### Defined in

node_modules/mongoose/types/query.d.ts:733

▸ **size**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`this`

#### Inherited from

Query.size

#### Defined in

node_modules/mongoose/types/query.d.ts:734

___

### skip

▸ **skip**(`val`): `this`

Specifies the number of documents to skip.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`this`

#### Inherited from

Query.skip

#### Defined in

node_modules/mongoose/types/query.d.ts:737

___

### slice

▸ **slice**(`path`, `val`): `this`

Specifies a `$slice` projection for an array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `val` | `number` \| `number`[] |

#### Returns

`this`

#### Inherited from

Query.slice

#### Defined in

node_modules/mongoose/types/query.d.ts:740

▸ **slice**(`val`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` \| `number`[] |

#### Returns

`this`

#### Inherited from

Query.slice

#### Defined in

node_modules/mongoose/types/query.d.ts:741

___

### sort

▸ **sort**(`arg?`, `options?`): `this`

Sets the sort order. If an object is passed, values allowed are `asc`, `desc`, `ascending`, `descending`, `1`, and `-1`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg?` | ``null`` \| `string` \| \{ `[key: string]`: `SortOrder` \| \{ `$meta`: `any`  \};  \} \| [`string`, `SortOrder`][] |
| `options?` | `Object` |
| `options.override?` | `boolean` |

#### Returns

`this`

#### Inherited from

Query.sort

#### Defined in

node_modules/mongoose/types/query.d.ts:744

___

### tailable

▸ **tailable**(`bool?`, `opts?`): `this`

Sets the tailable option (for use with capped collections).

#### Parameters

| Name | Type |
| :------ | :------ |
| `bool?` | `boolean` |
| `opts?` | `Object` |
| `opts.numberOfRetries?` | `number` |
| `opts.tailableRetryInterval?` | `number` |

#### Returns

`this`

#### Inherited from

Query.tailable

#### Defined in

node_modules/mongoose/types/query.d.ts:750

___

### toConstructor

▸ **toConstructor**\<`RetType`\>(): `RetType`

Converts this query to a customized, reusable query constructor with all arguments and options retained.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RetType` | typeof `Query` |

#### Returns

`RetType`

#### Inherited from

Query.toConstructor

#### Defined in

node_modules/mongoose/types/query.d.ts:762

___

### transform

▸ **transform**\<`MappedType`\>(`fn`): `Query`\<`MappedType`, `T`, \{\}, `T`, ``"find"``\>

Runs a function `fn` and treats the return value of `fn` as the new value
for the query to resolve to.

#### Type parameters

| Name |
| :------ |
| `MappedType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`doc`: `unknown`) =\> `MappedType` |

#### Returns

`Query`\<`MappedType`, `T`, \{\}, `T`, ``"find"``\>

#### Inherited from

Query.transform

#### Defined in

node_modules/mongoose/types/query.d.ts:561

___

### updateMany

▸ **updateMany**(`filter?`, `update?`, `options?`): `Query`\<`UpdateWriteOpResult`, `T`, \{\}, `T`, ``"updateMany"``\>

Declare and/or execute this query as an updateMany() operation. Same as
`update()`, except MongoDB will update _all_ documents that match
`filter` (as opposed to just the first one) regardless of the value of
the `multi` option.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `FilterQuery`\<`T`\> |
| `update?` | `UpdateWithAggregationPipeline` \| `UpdateQuery`\<`T`\> |
| `options?` | ``null`` \| `QueryOptions`\<`T`\> |

#### Returns

`Query`\<`UpdateWriteOpResult`, `T`, \{\}, `T`, ``"updateMany"``\>

#### Inherited from

Query.updateMany

#### Defined in

node_modules/mongoose/types/query.d.ts:770

___

### updateOne

▸ **updateOne**(`filter?`, `update?`, `options?`): `Query`\<`UpdateWriteOpResult`, `T`, \{\}, `T`, ``"updateOne"``\>

Declare and/or execute this query as an updateOne() operation. Same as
`update()`, except it does not support the `multi` or `overwrite` options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `FilterQuery`\<`T`\> |
| `update?` | `UpdateWithAggregationPipeline` \| `UpdateQuery`\<`T`\> |
| `options?` | ``null`` \| `QueryOptions`\<`T`\> |

#### Returns

`Query`\<`UpdateWriteOpResult`, `T`, \{\}, `T`, ``"updateOne"``\>

#### Inherited from

Query.updateOne

#### Defined in

node_modules/mongoose/types/query.d.ts:780

___

### w

▸ **w**(`val`): `this`

Sets the specified number of `mongod` servers, or tag set of `mongod` servers,
that must acknowledge this write before this write is considered successful.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | ``null`` \| `string` \| `number` |

#### Returns

`this`

#### Inherited from

Query.w

#### Defined in

node_modules/mongoose/types/query.d.ts:790

___

### where

▸ **where**(`path`, `val?`): `this`

Specifies a path for use with chaining.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `val?` | `any` |

#### Returns

`this`

#### Inherited from

Query.where

#### Defined in

node_modules/mongoose/types/query.d.ts:793

▸ **where**(`obj`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |

#### Returns

`this`

#### Inherited from

Query.where

#### Defined in

node_modules/mongoose/types/query.d.ts:794

▸ **where**(): `this`

#### Returns

`this`

#### Inherited from

Query.where

#### Defined in

node_modules/mongoose/types/query.d.ts:795

___

### within

▸ **within**(`val?`): `this`

Defines a `$within` or `$geoWithin` argument for geo-spatial queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val?` | `any` |

#### Returns

`this`

#### Inherited from

Query.within

#### Defined in

node_modules/mongoose/types/query.d.ts:798

___

### wtimeout

▸ **wtimeout**(`ms`): `this`

If [`w \> 1`](/docs/api/query.html#query_Query-w), the maximum amount of time to
wait for this write to propagate through the replica set before this
operation fails. The default is `0`, which means no timeout.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`this`

#### Inherited from

Query.wtimeout

#### Defined in

node_modules/mongoose/types/query.d.ts:805
