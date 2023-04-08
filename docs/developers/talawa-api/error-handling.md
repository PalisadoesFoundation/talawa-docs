---
id: api-error-handling-guide
title: API Error Handling Guide
---

This page outlines the core design principles for handling errors within the GraphQl Layer in Talawa-API code base and relaying said errors back to the client apps.

[Marc-Andre Giroux `6a`](https://productionreadygraphql.com/2020-08-01-guide-to-graphql-errors) is the basis of the approach chosen for Error Handling in the Talawa api codebase.

## Graphql Errors

## Introduction

GraphQl is a great tool for building APIs when there is need to give the client more control over the data it needs from the server, where the clients fetch only the data they need in the payload returned by the server. [It returns data in a form which closely resembles a graph, so all data exhanged between client and api should be thought of in terms of graphs](https://graphql.org/learn/thinking-in-graphs/)

It resolves relations which exist in the business logic of the application with field resolvers only if the client specifically asks that relation to be resolved. This means lesser computation required to compute data not specifically needed by clients.(A resolver is basically a function with the same name as the field/relation that it resolves and returns)

The data is returned in the form of a graph where every node is a meaningful object in context to the logic and the edges represent relations.

In short GraphQl allows the clients to (These points will be important later on) -> 

1. Query for a specific resolver which returns an object (node), meaningful to the api logic.
2. Fetch for certain fields within said object(node) to optimize the request/response payload.
3. In case of resolving relations(edges), making a nested query for interrelated objects(nodes).
4. Each Node within the said nested query should be treated as individual entity in the graph.Error in one node should not affect other nodes in the graph. 

This is perfect when everything runs as expected but what if it does not? How does GraphQl by default handle these 4 points for thinking in terms of graphs when an error is made?

## Problem with default Graphql Errors

We will understand more about default Graphql Errors with an example.

Let's say I am making a query on the `signUp` mutation which accepts `email` , `name` and `password` and now we will look for the case where my password is shorter than 8 character, then the response returned by default ->

```
{
  "data": {
    "signUp": null
  },
  "errors": [
    {
      "path": [
        "signUp"
      ],
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "message": "Password should be of atleast length 8"
    }
  ]
}
```


Now the problems with this approach ->
1. The `errors` key of a GraphQL response is not type safe. Graphql is loved because of the consistency and type safety it provides, we do not get the same with the `errors` array. They are specified, but introspection tells a client nothing about what might be found in them, they're harder to evolve, and harder to extend.
2. By default if the `errors` array is present then the resulting query will return `null` in the `data` field. By that this means even if some nested resolver fails, that has the impact on the result of the root parent resolver (contradicts Introduction point 4).Essentially failure of a related node leads to the failure of parent node.This can potentially be a deal breaker if you're wanting to have errors returned as part of a mutation, but want to query for data on the result anyways. A common example is returning an error with some partial data for private Organization(name , location etc) even if a lot of background details like members , admins etc should not be returned.
3. GraphQL errors encode exceptional scenarios - like a service being down or some other internal failure. Errors which are part of the API domain should be captured within that domain, and relayed to the client as information, NOT Graphql error.

## The Solution

The general philosophy at play is that Errors are considered exceptional. Your user data should never be represented as an Error. If your users can do something that needs to provide negative guidance, then you should represent that kind of information in GraphQL as Data not as an Error. Errors should always represent either developer errors or exceptional circumstances (e.g. the database was offline).[Lee Byron makes that clear in a few comments on the GraphQL-Spec repository.](https://github.com/graphql/graphql-spec/issues/391#issuecomment-385553207)


Most of the "Errors" in GraphQL are client side errors not server side errors.

For example errors like `Duplicate Email` or  `Password too short` errors are not server errors they are the client's fault, the server is sending the data requested just that the errors are the ***Result*** of the operation requested by the client. Unlike Errors like `Bad Gateway` or `Internal Server Error` which is the servers fault.

Hence we will need to model the client side errors as results NOT errors.

That is why the 6a(Errors Union List + Interface Contract ) approach is chosen for talawa-api, so that it is easier to send errors with data.

Let us take a look at this Approach for these practical cases ->

1. For sending all field errors at once so that clients can customise errors for them appropriately. For example imagine a sign up page where in case of failed validation for each field, the app screen can display all errors at once under each input boxes and success for.(**Field Level Errors**)
2. For Atomicity in sending error. In some cases it is necessary we will need to send Error or Data not both.(**Atomic Errors**)
3. For relations in the graph sent by the server, each node should be individually treated for its errors. Errors in one node should not directly affect the attributes of other resolved related nodes.(**Nested Resolver Errors** )

Now Let us look at each of these cases with example `mutations/queries` within the `talawa-api`. We will be doing so for both the API and client part to better understand it.

### Field Level Errors -

#### API 
Field Level Errors describe any errors assisciated with a specific field.

In GraphQL, you can request specific fields from an API, and the API will respond with data for those fields. Field errors can occur when there's a problem with one of the fields you've requested.

For example Let us look at the `signUp` Mutation.

The type definitions relevant for `signUp` Mutation->

```rust
  input SignUpInput {
    firstName: String!
    lastName: String!
    email: EmailAddress!
    password: String!
    appLanguageCode: String
    organizationUserBelongsToId: ID
  }

  type AuthData {
    user: User!
    accessToken: String!
    refreshToken: String!
    androidFirebaseOptions: AndroidFirebaseOptions!
    iosFirebaseOptions: IOSFirebaseOptions!
  }
 // Here I went ahead and made the EmailAddress Scalar and _id as nullable the rest is the same, this is important for use later
  type User {
    tokenVersion: Int!
    _id: ID
    firstName: String!
    lastName: String!
    email: EmailAddress
    userType: String,
    appLanguageCode: String!
    createdOrganizations: [Organization]
    joinedOrganizations: [Organization]
    createdEvents: [Event]
    registeredEvents: [Event]
    eventAdmin: [Event]
    adminFor: [Organization]
    membershipRequests: [MembershipRequest]
    organizationsBlockedBy: [Organization]
    image: String
    organizationUserBelongsTo: Organization
    pluginCreationAllowed: Boolean
    adminApproved: Boolean
    createdAt: DateTime
    tagsAssignedWith(
      after: String
      before: String
      first: PositiveInt
      last: PositiveInt
      organizationId: ID
    ): UserTagsConnection
  }
```
Now, let us take a look at the definition of error union for the `signUp` mutation.

GraphQL unions are a way to represent different types of objects in your schema that share some common fields. A union is a composition of multiple types and is useful when we require type definition for an entity that could have multiple types

The interface `UserError` will act as an `interface contract`. The exact purpose for it will be cleared when we reach the  client side explaination part.
```rust
// now begins the Error unions types, we can consume many error types in this
union SignUpError = EmailTaken | PasswordTooShort | UserError

type EmailTaken implements UserError {
  message: String!
  path: String!
  suggestion: String!
}

type PasswordTooShort implements UserError {
  message: String!
  path: String!
  minimumLength: Int!
}

interface UserError {
  message: String!
  path: String!
}
```

As you can see the `signUp` mutation has a return type of `SignUpResult!` which in turn contains `signUpData` with the return type `AuthData` and `signUpErrors` with return type of an array of the `SignUpError` union. This way the `signUp` mutation returns both the actual relevant data and the errors as result.

```rust
// Here is the return type of signup mutation  notice how the signUpData is nullable here, well that is optional.

type SignUpResult {
    signUpData : AuthData ,
    signUpErrors : [SignUpError!]
}

type Mutation {
   signUp(input: SignUpInput!): SignUpResult!
}
```

Let us look at the pseudo code for the resolver now.

```javascript
const resolvers = {
  Mutation: {
    signUp: async (parent, args, context) => {
          //the general approach of how this would work.
           userObj = {} ,
           signUpErrors = []
           If(CHECK DUPLICATION OF EMAIL ) {
                 KEEP THE EMAIL FIELD OF  USEROBJ TO BE RETURNED AS NULL ; 
                 signUpErrors.push({
                      __typename: "EmailTaken" ,
                        message: "Email is already taken"
                        path: "UserInput.email"
                        suggestion: `Try to provide a unique mail or make sure you have not created an account 
                        already`
                 })
           }

           If (CHECK args.PASSWORD LENGTH) {
                   userErrors.push({
                      __typename: "PasswordTooShort" ,
                        message: "Password length is too short"
                        path: "UserInput.password"
                        minimumLength: 8
                   })
           }
           // Approach when we need to fall on a general error based on the interface contract `UserError`
           If (CERTAIN CHECK WHERE WE WOULD NEED TO ADD THAT ERROR IN THE 
                  signUpErrors ARRAY) {
                    userErrors.push({
                            __typename:"UserError" ,
                            message: "message" , 
                            path: "path"
                    })
                  
            }

          // Here we will be returning multiple errors in the form on an array of signUpErrors
          if (signUpErrors) {
               return  {
                   signUpData: {
                         user : userObj,
                          .... other AuthData fields
                   } , 
                   signUpErrors

               }
          }
          
          EVERYTHING IS OKAY, CREATE THE USER IN DB,
          
          CreatedUserObj = DB.CREATE(USER);

          return  {
                   signUpData: {
                         user : CreatedUserObj,
                          .... other AuthData fields
                   } , 
                   signUpErrors

           }

     }
  }
}
```

In this approach for resolving Field Errors ->

1. Multiple Errors can be sent back to the client when needed in case the client apps need to display those errors concurrently with UI elements
2. An Error for a field means only that field will be sent as null in the query, other fields will remain unaffected.
3. A general purpose interface contract `UserError` to fall back to in case we want to send a general purpose error back to the client.


#### Client

Let us take a look at how the clients would be making this query.

```javascript
mutation {
  signUp(
    input: {
      firstName: "Harry"
      lastName: "Potter"
      email: "someDuplicateEmail"
      password: "12345"
    }
    ) {
    signUpData { 
      user: {
        _id,
        firstName,
        lastName,
        email
      } ,
      accessToken,
      refreshToken
     }
    signUpErrors {
      # Specific cases
      ... on EmailTaken {
        __typename
        message
        path
        suggestion
      }

      ... on PasswordTooShort {
        __typename
        message
        path
        minimumLength
      }

      # Interface contract to handle general purpose Error
      ... on UserError {
        message
        path
      }
    }
  }
}
```

As you can see from this mutation input, the following mutation should result in the `EmailTaken` and `PasswordTooShort` Error based on our resolver.

The UserError is to handle any general purpose error that way we get extensibility of the interface with the expressivity of the union.

Hence, this mutation will return a response that looks like this.

```rust

data: {
  signUpData: {
      user: {
        _id:null,
        firstName: "Harry",
        lastName: "Potter",
        email: null
      } ,
      accessToken: null,
      refreshToken: null
  } ,
  signUpErrors: [
    {
      __typename: "EmailTaken" ,
      message: "Email is already taken"
      path: "UserInput.email"
      suggestion: `Try to provide a unique mail or sure you have not created an account already`
    } , 
    {
      __typename: "PasswordTooShort" ,
      message: "Password length is too short"
      path: "UserInput.password"
      minimumLength: 8
    }
  ]
}
```

As you can see, 

1. The `signUpErrors` contains the errors we expected.
2. The `signUpData` has only user.email thrown an error (we are not fetching the password and _id, access and refresh token field is returned by the DB operation which was failed in the resolver) and is the only field fetched, returned null in data and error in the `signUpErrors` and other fetched data are unaffected.



### Atomic Errors

In some cases we would not want to send any partial field data at all if a specific error is thrown. Not all errors have the same heirarchy some might be more "serious" and we would need to have some sort of atomictiy in sending errors i.e we will have to send that errors only without any partial fields of resolved data. **In these cases we will need to send error OR data not inbetween**

The perfect example of this case is a RBAC error. For Access control errors we would need to send back only that error and nothing else in the response.

How does 6a approach handle this case?


Let's take a look at the `createOrganization` mutation for that. Keep in mind that only `SUPERADMIN`s can create an organization and if the user making a request has a role other than that then we wil need to send appropriate errors back to the client.  

For that Let us look at the relevant type definitions first.
#### API
```rust
  input CreateOrganizationInput {
    data: OrganizationInput!
    organizationImage: String
  }
  input OrganizationInput {
    name: String!
    description: String!
    location: String
    attendees: String
    isPublic: Boolean!
    visibleInSearch: Boolean!
    apiUrl: URL
    image: String
  }
  type Organization {
    image: String
    _id: ID!
    name: String!
    description: String!
    location: String
    isPublic: Boolean!
    creator: User!
    members: [User]
    admins(adminId: ID): [User]
    membershipRequests: [MembershipRequest]
    blockedUsers: [User]
    visibleInSearch: Boolean!
    apiUrl: URL!
    createdAt: DateTime
    pinnedPosts: [Post]
    userTags(
      after: String
      before: String
      first: PositiveInt
      last: PositiveInt
    ): UserTagsConnection
  }
```
Now Let us define the mutation data and its error unions.
Most of this is pretty similar to the previous example.

Although the `AccessControlError` interface is there to be implemented within all the other types of RBAC errors.It is not a part of the union for a mutation and hence not an interface contract.

```rust

union CreateOrganizationError = UserNotSuperAdminError | OrganizationError

type UserNotSuperAdminError implements AccessControlError {
  message:String!,
  roleRequired:String!,
}

interface OrganizationError {
  message:String!,
  path:String!
}

interface AccessControlError {
  message:String!,
  roleRequired:String!,
}
```

The mutation types 

```rust
type CreateOrganizationResult {
    createOrganizationData: Organization ,
    createOrganizationErrors: [CreateOrganizationError!]
}

type Mutation {
  createOrganization(input: CreateOrganizationInput!): CreateOrganizationResult!
}
```

All of the above is pretty similar to the previous section for handling field errors. However the difference lies within the resolvers.

Let us take a look at the resolver for `createOrganization`.

```javascript
const resolvers = {
  Mutation: {
    createOrganization: async (parent, args, context) => {

      {
        A CODE BLOCK DENOTING ALL OTHER MISCELLANEOUS CHECKS AND PUSHING THOSE IN THE ERRORS ARRAY.
      }

      If (CHECK FOR context.user.userType !== "SUPERADMIN"){
        // To maintain atomicity the resolver directly returns the result within this check where the `createOrganizationErrors` has length 1 (RBAC error only) and `createOrganizationData` as null
        return {

          createOrganizationData: null ,
          createOrganizationErrors: [
            {
              __typename:"UserNotSuperAdminError",
              message:"Current User role is not Authorised for this operation",
              roleRequired:"SUPERADMIN",
            }
          ]

        }
      }

    }
  }
}
```

#### Client

The client side implementation will look something like this- 

Let's imagine the user making the following mutation has the role of `USER`.

```javascript
mutation Mutation {
  createOrganization(
    input : {
      data: {
        name: "Org Name"
        description: "Org Description"
        isPublic: true
        visibleInSearch: true
      }
    }
  ) {
    createOrganizationData:{
      _id , 
      name , 
      description
    } ,
    createOrganizationError: {
      ... on UserNotSuperAdminError{
          __typename
          message
          roleRequired
      }
      ... on OrganizationError{
          __typename
          message
          path
      }
    }
  }
}
```

After running this mutation the response will be ->

```rust
data: {
  createOrganizationData:null,
  createOrganizationErrors:[
    {
      __typename:"UserNotSuperAdminError",
      message:"Current User role is not Authorised for this operation",
      roleRequired:"SUPERADMIN",
    }
  ]
}
```

Hence now, the only error returned in the response in the Access COntrol Error and we have ensured that no data is sent back in the result, so createOrganizationData is null.

This wraps up Atomic Errors.

### Nested Resolver Errors.