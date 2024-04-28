[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/registerForEvent

# Module: resolvers/Mutation/registerForEvent

## Table of contents

### Variables

- [registerForEvent](resolvers_Mutation_registerForEvent.md#registerforevent)

## Variables

### registerForEvent

• `Const` **registerForEvent**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"registerForEvent"``]

Enables a user to register for an event.

This resolver function allows a user to register for a specific event.
It performs the necessary checks to ensure that the user exists, the event exists,
and that the user has not already registered for the event.

**`Param`**

The parent of the current request.

**`Param`**

The payload provided with the request, including the ID of the event to register for.

**`Param`**

The context of the entire application, containing user authentication and request information.

**`Throws`**

NotFoundError if the specified event is not found.

**`Throws`**

InputValidationError if the current user is already registered for the event.

**`Remarks`**

The function performs the following checks:
1. Checks if the event exists.
2. Checks if the current user has already registered for the event.
If the user is invited, their registration status is updated. Otherwise, a new entry is created in the EventAttendee collection.

#### Defined in

[src/resolvers/Mutation/registerForEvent.ts:34](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/resolvers/Mutation/registerForEvent.ts#L34)
