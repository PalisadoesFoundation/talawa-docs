[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addPeopleToUserTag](../README.md) / addPeopleToUserTag

# Variable: addPeopleToUserTag

\> `const` **addPeopleToUserTag**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addPeopleToUserTag"`\]

This function enables an admin to assign a tag to multiple users.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the current user exists and has a profile.
2. If the tag object exists.
3. If the current user is an admin for the organization of the tag.
4. If each user to be assigned the tag exists and belongs to the tag's organization.
5. Assign the tag only to users who do not already have it.

## Returns

Array of users to whom the tag was assigned.

## Defined in

[src/resolvers/Mutation/addPeopleToUserTag.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Mutation/addPeopleToUserTag.ts#L36)
