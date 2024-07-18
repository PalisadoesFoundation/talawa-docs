[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / RecurrenceRuleInput

# Type Alias: RecurrenceRuleInput

\> **RecurrenceRuleInput**: `object`

## Type declaration

### count?

\> `optional` **count**: [`InputMaybe`](InputMaybe.md)\<[`Scalars`](Scalars.md)\[`"PositiveInt"`\]\[`"input"`\]\>

### frequency?

\> `optional` **frequency**: [`InputMaybe`](InputMaybe.md)\<[`Frequency`](Frequency.md)\>

### interval?

\> `optional` **interval**: [`InputMaybe`](InputMaybe.md)\<[`Scalars`](Scalars.md)\[`"PositiveInt"`\]\[`"input"`\]\>

### recurrenceEndDate?

\> `optional` **recurrenceEndDate**: [`InputMaybe`](InputMaybe.md)\<[`Scalars`](Scalars.md)\[`"Date"`\]\[`"input"`\]\>

### recurrenceStartDate?

\> `optional` **recurrenceStartDate**: [`InputMaybe`](InputMaybe.md)\<[`Scalars`](Scalars.md)\[`"Date"`\]\[`"input"`\]\>

### weekDayOccurenceInMonth?

\> `optional` **weekDayOccurenceInMonth**: [`InputMaybe`](InputMaybe.md)\<[`Scalars`](Scalars.md)\[`"Int"`\]\[`"input"`\]\>

### weekDays?

\> `optional` **weekDays**: [`InputMaybe`](InputMaybe.md)\<[`InputMaybe`](InputMaybe.md)\<[`WeekDays`](WeekDays.md)\>[]\>

## Defined in

[src/types/generatedGraphQLTypes.ts:2606](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/types/generatedGraphQLTypes.ts#L2606)
