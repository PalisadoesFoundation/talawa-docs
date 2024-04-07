[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/assignUserTag

# Module: resolvers/Mutation/assignUserTag

## Table of contents

### Variables

- [assignUserTag](resolvers_Mutation_assignUserTag.md#assignusertag)

## Variables

### assignUserTag

• `Const` **assignUserTag**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"assignUserTag"``]

This function enables an admin to assign tag to user or not.

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the user exists.
2. If the user has appProfile.
3. If the tag object exists.
4. If the user is an admin for the organization.
5. If the user to be assigned the tag exists.
6. If the user to be assigned the tag belongs to the tag's organization.
7. If the user already has the tag.

#### Defined in

[src/resolvers/Mutation/assignUserTag.ts:34](https://github.com/PalisadoesFoundation/talawa-api/blob/53234da/src/resolvers/Mutation/assignUserTag.ts#L34)
