[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/registerEventAttendee

# Module: resolvers/Mutation/registerEventAttendee

## Table of contents

### Variables

- [registerEventAttendee](resolvers_Mutation_registerEventAttendee.md#registereventattendee)

## Variables

### registerEventAttendee

• `Const` **registerEventAttendee**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"registerEventAttendee"``]

Registers an attendee for an event.

This function handles the registration process for an attendee to participate in an event.
It checks the user's authorization, verifies the event's existence, and manages the registration status
based on whether the user was invited or directly registered.

**`Param`**

The parent resolver.

**`Param`**

Arguments passed to the resolver containing registration data.

**`Param`**

Context object containing user authentication and request information.

**`Throws`**

NotFoundError Throws a NotFoundError if the user or event is not found.

**`Throws`**

UnauthorizedError Throws an UnauthorizedError if the current user is not authorized to register attendees.

#### Defined in

[src/resolvers/Mutation/registerEventAttendee.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/resolvers/Mutation/registerEventAttendee.ts#L38)
