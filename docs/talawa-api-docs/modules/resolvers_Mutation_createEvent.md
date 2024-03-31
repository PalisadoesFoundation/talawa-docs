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

The following checks are done:
1. If the user exists
2.If the user has appUserProfile
3. If the organization exists
4. If the user is a part of the organization.
5. If the event is recurring, create the recurring event instances.
6. If the event is non-recurring, create a single event.

#### Defined in

[src/resolvers/Mutation/createEvent.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/e5f7a9d/src/resolvers/Mutation/createEvent.ts#L37)
