[talawa-api](../README.md) / [Exports](../modules.md) / utilities/recurrenceDatesUtil

# Module: utilities/recurrenceDatesUtil

## Table of contents

### Functions

- [convertToRRuleDateString](utilities_recurrenceDatesUtil.md#converttorruledatestring)
- [convertToUTCDate](utilities_recurrenceDatesUtil.md#converttoutcdate)
- [countTotalMondaysInMonth](utilities_recurrenceDatesUtil.md#counttotalmondaysinmonth)

## Functions

### convertToRRuleDateString

▸ **convertToRRuleDateString**(`date`): `string`

This function converts the date to a valid rrule string argument.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` | the date string to be converted. |

#### Returns

`string`

converted date string.

#### Defined in

[src/utilities/recurrenceDatesUtil.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/utilities/recurrenceDatesUtil.ts#L24)

___

### convertToUTCDate

▸ **convertToUTCDate**(`date`): `Date`

This function converts the date to UTC.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` | the date to be converted. |

#### Returns

`Date`

converted date.

#### Defined in

[src/utilities/recurrenceDatesUtil.ts:7](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/utilities/recurrenceDatesUtil.ts#L7)

___

### countTotalMondaysInMonth

▸ **countTotalMondaysInMonth**(`date`): `number`

This function counts the total number of mondays in a month.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` | a date. |

#### Returns

`number`

total number of mondays.

#### Defined in

[src/utilities/recurrenceDatesUtil.ts:40](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/utilities/recurrenceDatesUtil.ts#L40)
