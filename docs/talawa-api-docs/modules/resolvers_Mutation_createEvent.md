[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/createEvent

# Module: resolvers/Mutation/createEvent

## Table of contents

### Variables

- [createEvent](resolvers_Mutation_createEvent.md#createevent)

## Variables

### createEvent

• `Const` **createEvent**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"createEvent"``]

This function enables to create an event.

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following steps are followed:
1. Check if the user exists
2. Check if the organization exists
3. Check if the user is a part of the organization.
4. If the event is recurring, create the recurring event instances.
5. If the event is non-recurring, create a single event.

#### Defined in

[src/resolvers/Mutation/createEvent.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/9cb91bb/src/resolvers/Mutation/createEvent.ts#L33)
