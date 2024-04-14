[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/inviteEventAttendee

# Module: resolvers/Mutation/inviteEventAttendee

## Table of contents

### Variables

- [inviteEventAttendee](resolvers_Mutation_inviteEventAttendee.md#inviteeventattendee)

## Variables

### inviteEventAttendee

• `Const` **inviteEventAttendee**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"inviteEventAttendee"``]

Invites an attendee to an event.

This resolver function facilitates the invitation process for an attendee to participate in an event.
It ensures the current user's authorization, validates the existence of the event, and manages the invitation status
to prevent duplicate invitations.

**`Param`**

The parent resolver.

**`Param`**

Arguments containing data for the invitation, including the eventId and userId.

**`Param`**

Context object providing information about the current user.

**`Throws`**

NotFoundError if the user or event is not found.

**`Throws`**

UnauthorizedError if the current user lacks authorization to invite attendees.

**`Throws`**

ConflictError if the user is already invited to the event.

#### Defined in

[src/resolvers/Mutation/inviteEventAttendee.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/65069df/src/resolvers/Mutation/inviteEventAttendee.ts#L32)
