[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/sendMembershipRequest

# Module: resolvers/Mutation/sendMembershipRequest

## Table of contents

### Variables

- [sendMembershipRequest](resolvers_Mutation_sendMembershipRequest.md#sendmembershiprequest)

## Variables

### sendMembershipRequest

• `Const` **sendMembershipRequest**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"sendMembershipRequest"``]

This function enables to send membership request.

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the organization exists
2. If the user exists.
3. If the membership request already exists.

#### Defined in

[src/resolvers/Mutation/sendMembershipRequest.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/65069df/src/resolvers/Mutation/sendMembershipRequest.ts#L25)
