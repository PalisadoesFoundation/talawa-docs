[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createActionItem](../README.md) / createActionItem

# Variable: createActionItem

\> `const` **createActionItem**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createActionItem"`\]

Creates a new action item and assigns it to a user.

This function performs several checks:

1. Verifies if the current user exists.
2. Ensures that the current user has an associated app user profile.
3. Checks if the assignee exists.
4. Validates if the action item category exists and is not disabled.
5. If the action item is related to an event, checks if the event exists and whether the current user is an admin of that event.
6. Verifies if the current user is an admin of the organization or a superadmin.

## Param

The parent object for the mutation (not used in this function).

## Param

The arguments provided with the request, including:
  - `data`: An object containing:
    - `assigneeId`: The ID of the user to whom the action item is assigned.
    - `assigneeType`: The type of the assignee (EventVolunteer or EventVolunteerGroup).
    - `preCompletionNotes`: Notes to be added before the action item is completed.
    - `dueDate`: The due date for the action item.
    - `eventId` (optional): The ID of the event associated with the action item.
    - `actionItemCategoryId`: The ID of the action item category.

## Param

The context of the entire application, including user information and other context-specific data.

## Returns

A promise that resolves to the created action item object.

## Defined in

[src/resolvers/Mutation/createActionItem.ts:58](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Mutation/createActionItem.ts#L58)
