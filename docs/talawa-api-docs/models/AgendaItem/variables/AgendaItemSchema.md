[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [models/AgendaItem](../README.md) / AgendaItemSchema

# Variable: AgendaItemSchema

\> `const` **AgendaItemSchema**: `Schema`\<`any`, `Model`\<`any`, `any`, `any`, `any`, `any`, `any`\>, `object`, `object`, `object`, `object`, `DefaultSchemaOptions`, `object`, `Document`\<`unknown`, `object`, `FlatRecord`\<`object`\>\> & `FlatRecord`\<`object`\> & `object`\>

This is the Mongoose schema for an agenda item.

## Param

Title of the agenda item.

## Param

Optional description of the agenda item.

## Param

Reference to the event associated with the agenda item.

## Param

Duration of the agenda item.

## Param

Optional array of attachment URLs.

## Param

Reference to the user who created the agenda item.

## Param

Reference to the user who last updated the agenda item.

## Param

Optional users array indicating key note users for the agenda item.

## Param

Optional user associated with the agenda item.

## Param

Optional array of agenda categories associated with the agenda item.

## Param

Sequence number of the agenda item.

## Param

Type of the agenda item (Regular or Note).

## Param

Date when the agenda item was created.

## Param

Date when the agenda item was last updated.

## Param

Indicates whether the agenda item is a note.

## Param

Reference to the organization associated with the agenda item.

## Param

Reference to the notes associated with the agenda item.

## Defined in

[src/models/AgendaItem.ts:60](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/models/AgendaItem.ts#L60)
