[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / User

# Type Alias: User

\> **User**: `object`

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"User"`

### \_id

\> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### address?

\> `optional` **address**: [`Maybe`](Maybe.md)\<[`Address`](Address.md)\>

### appUserProfileId?

\> `optional` **appUserProfileId**: [`Maybe`](Maybe.md)\<[`AppUserProfile`](AppUserProfile.md)\>

### birthDate?

\> `optional` **birthDate**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Date"`\]\[`"output"`\]\>

### createdAt

\> **createdAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### educationGrade?

\> `optional` **educationGrade**: [`Maybe`](Maybe.md)\<[`EducationGrade`](EducationGrade.md)\>

### email

\> **email**: [`Scalars`](Scalars.md)\[`"EmailAddress"`\]\[`"output"`\]

### employmentStatus?

\> `optional` **employmentStatus**: [`Maybe`](Maybe.md)\<[`EmploymentStatus`](EmploymentStatus.md)\>

### eventAdmin?

\> `optional` **eventAdmin**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`Event`](Event.md)\>[]\>

### firstName

\> **firstName**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

### gender?

\> `optional` **gender**: [`Maybe`](Maybe.md)\<[`Gender`](Gender.md)\>

### identifier

\> **identifier**: [`Scalars`](Scalars.md)\[`"Int"`\]\[`"output"`\]

### image?

\> `optional` **image**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

### joinedOrganizations?

\> `optional` **joinedOrganizations**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`Organization`](Organization.md)\>[]\>

### lastName

\> **lastName**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

### maritalStatus?

\> `optional` **maritalStatus**: [`Maybe`](Maybe.md)\<[`MaritalStatus`](MaritalStatus.md)\>

### membershipRequests?

\> `optional` **membershipRequests**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`MembershipRequest`](MembershipRequest.md)\>[]\>

### organizationsBlockedBy?

\> `optional` **organizationsBlockedBy**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`Organization`](Organization.md)\>[]\>

### phone?

\> `optional` **phone**: [`Maybe`](Maybe.md)\<[`UserPhone`](UserPhone.md)\>

### pluginCreationAllowed

\> **pluginCreationAllowed**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

### posts?

\> `optional` **posts**: [`Maybe`](Maybe.md)\<[`PostsConnection`](PostsConnection.md)\>

### registeredEvents?

\> `optional` **registeredEvents**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`Event`](Event.md)\>[]\>

### tagsAssignedWith?

\> `optional` **tagsAssignedWith**: [`Maybe`](Maybe.md)\<[`UserTagsConnection`](UserTagsConnection.md)\>

### updatedAt

\> **updatedAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

## Defined in

[src/types/generatedGraphQLTypes.ts:2931](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/types/generatedGraphQLTypes.ts#L2931)
