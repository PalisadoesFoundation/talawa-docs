[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/createEventVolunteerGroup

# Module: resolvers/Mutation/createEventVolunteerGroup

## Table of contents

### Variables

- [createEventVolunteerGroup](resolvers_Mutation_createEventVolunteerGroup.md#createeventvolunteergroup)

## Variables

### createEventVolunteerGroup

• `Const` **createEventVolunteerGroup**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"createEventVolunteerGroup"``]

This function enables to create an event volunteer group

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the current user exists
2. If the eventId exists
3. If the current user is admin of event

#### Defined in

[src/resolvers/Mutation/createEventVolunteerGroup.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/e5f7a9d/src/resolvers/Mutation/createEventVolunteerGroup.ts#L22)
