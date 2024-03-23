[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/addUserToUserFamily

# Module: resolvers/Mutation/addUserToUserFamily

## Table of contents

### Variables

- [addUserToUserFamily](resolvers_Mutation_addUserToUserFamily.md#addusertouserfamily)

## Variables

### addUserToUserFamily

• `Const` **addUserToUserFamily**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"addUserToUserFamily"``]

This function adds user to the family.

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of the entire application

**`Remarks`**

The following checks are done:
1. If the family exists
2. If the user exists
3. If the user is already member of the family
4. If the user is admin of the user Family

#### Defined in

[src/resolvers/Mutation/addUserToUserFamily.ts:24](https://github.com/adi790uu/talawa-api/blob/5146430/src/resolvers/Mutation/addUserToUserFamily.ts#L24)
