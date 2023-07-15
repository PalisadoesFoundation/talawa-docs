---
id: api-error-handling-guide
title: API Error Handling Guide
---

This page outlines the core design principles for handling errors within the GraphQl Layer in Talawa-API code base and relaying said errors back to the client apps.

- [Introduction](#Introduction)
- [Problem with default Graphql Errors](#Problem-with-default-Graphql-Errors)
- [User Errors vs Developer Errors](#User-Errors-vs-Developer-Errors)
   - [When To Model Errors In Schema And When Not To](#When-To-Model-Errors-In-Schema-And-When-Not-To)
- [Cases Where Errors in Schema Is Recommended](#Cases-Where-Errors-in-Schema-Is-Recommended)
  - [Multiple Field Level Validation Errors](#Multiple-Field-Level-Validation-Errors)
  - [Atomic Errors](#Atomic-Errors)
  - [Nested Resolver Errors. (Complex Objects)](#Nested-Resolver-Errors-(Complex-Objects))
  - [Nested Resolvers Errors (Scalar Fields)](#Nested-Resolvers-Errors-(Scalar-Fields))
- [Errors Defined in Schema Approach vs Default GraphQL Errors](#Errors-Defined-in-Schema-Approach-vs-Default-GraphQL-Errors)


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

Let's say I am making a query on the `signUp` mutation which accepts `email` , `name` and `password` and now we will look for the case where the no user with the given email exists, then the response returned by default ->

```json
{
  "data": {
    "signUp": null
  },
  "errors": [
    {
      "path": [
        "login"
      ],
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "message": "User not found"
    }
  ]
}
```


Now the problems with this approach ->
1. The `errors` key of a GraphQL response is not type safe. Graphql is loved because of the consistency and type safety it provides, we do not get the same with the `errors` array. They are specified, but introspection tells a client nothing about what might be found in them, they're harder to evolve, and harder to extend.
2. By default if the `errors` array is present then the resulting query will return `null` in the `data` field.If a non-nullable field returns null, GraphQL will raise an error. So, null value for a nested resolver results in the whole data object being returned as null and the error message will not provide any additional information about why the field returned null unless specifically handled in the resolver.But if a nested resolver is nullable then an error in the nsted resolver will not affect other fields. However, it will specify the path of the error within the root resolver response itself. For the client apps this would require extra effort in extracting and customizing errors.
3. GraphQL errors encode exceptional scenarios - like a service being down or some other internal failure. Errors which are part of the API domain should be captured within that domain, and relayed to the client as information, NOT Graphql error.

## User Errors vs Developer Errors

In GraphQL, user errors and developer errors represent different types of issues that can occur during the execution of a GraphQL operation.

1. User Errors:
User errors are typically related to invalid input or requests made by the client. These errors occur when the client provides data that doesn't meet the requirements or constraints defined by the GraphQL schema or business logic. For example, if a required field is not provided or an incorrect argument value is passed, a user error may occur. User errors are considered part of the expected flow of the application and are not exceptional or unexpected.

Treating user errors as a form of data instead of errors allows for a more flexible and structured way of handling them. Instead of returning a generic error message, GraphQL enables you to provide specific error information along with the response. This allows clients to understand and react to user errors in a meaningful way. By modeling user errors as part of the response, you can provide detailed instructions or suggestions on how to fix the issue, enhancing the overall user experience.

2. Developer Errors:
Developer errors, on the other hand, are exceptional or unexpected issues that occur due to mistakes or bugs in the server-side implementation of the GraphQL API. These errors are not caused by user input but rather by issues with the server, the execution environment, or the logic of the GraphQL server implementation itself. Developer errors could include things like database connection failures, internal server errors, or unhandled exceptions.

When developer errors occur, it is crucial to handle them gracefully and provide appropriate error messages or feedback to the client. GraphQL provides a mechanism to represent these errors using the errors field in the response. By including detailed error information, such as error codes or error messages, developers can diagnose and fix the underlying issues efficiently.

In summary, distinguishing between user errors and developer errors in GraphQL allows for a clear separation of concerns. Treating user errors as data instead of generic errors enables better communication between the server and the client, facilitating a more intuitive and user-friendly experience. Developer errors, on the other hand, should be handled and reported in a way that helps developers identify and address issues in the server-side implementation.

## The Solution


The general philosophy at play is that Errors are considered exceptional. Your user data should never be represented as an Error. If your users can do something that needs to provide negative guidance, then you should represent that kind of information in GraphQL as Data not as an Error. Errors should always represent either developer errors or exceptional circumstances (e.g. the database was offline).[Lee Byron makes that clear in a few comments on the GraphQL-Spec repository.](https://github.com/graphql/graphql-spec/issues/391#issuecomment-385553207)


[Marc-Andre Giroux `6a`](https://productionreadygraphql.com/2020-08-01-guide-to-graphql-errors) is the basis of the approach chosen for Error Handling in the Talawa api codebase.


Most of the "Errors" in GraphQL are client side errors not server side errors.

For example errors like `User Not Found` or  `Invalid Login Credentials` errors are not server errors they are the client's fault, the server is sending the data requested just that the errors are the ***Result*** of the operation requested by the client. Unlike Errors like `Bad Gateway` or `Internal Server Error` which is the servers fault.

Hence we will need to model the client side errors as results NOT errors.

That is why the 6a(Errors Union List + Interface Contract ) approach is chosen for talawa-api, so that it is easier to send errors with data.

### When To Model Errors In Schema And When Not To 

When deciding whether to model errors in the schema for fields in GraphQL, there are several factors to consider. The decision depends on the nature of the errors, the desired behavior of the API, and the needs of the client applications.

Consider the types of errors that can occur for a particular field. If the errors are specific and can be categorized or have additional metadata associated with them, it might be beneficial to model them in the schema. For example, if a field can return validation errors, authorization errors, or specific business logic errors, modeling them in the schema can provide clients with detailed information about the error type.

But for very basic field validation like checking for nullability for a field , type checking etc you can leave the default GraphQL server as is. There is no benefit for adding extra complexity for these cases.


## Cases Where Errors in Schema Is Recommended

Let us take a look at this Approach for these practical cases ->


1. For sending all field errors at once so that clients can customise errors for them appropriately. For example imagine a sign up page where in case of failed validation for each field, the app screen can display all errors at once under each input boxes and success for resolved data.(**Multiple Field Level Validation Errors **)
2. For Atomicity in sending error. In some cases it is necessary we will need to send Error or Data not both.(**Atomic Errors**)
3. For relations in the graph sent by the server, each node should be individually treated for its errors. Errors in one node should not directly affect the attributes of other resolved related nodes.(**Nested Resolver Errors  (Complex Objects)** )
4. For custom scalar objects within another object for example PII fields like a user's `email` where there is an Access Control Logic in order to access those fields in an object , we would need to resolve those fields with a custom resolver, an error within that field should not affect other scalar fields.(**Nested Resolver Errors (Scalar Fields )**).

Now Let us look at each of these cases with example `mutations/queries` within the `talawa-api`. We will be doing so for both the API and client part to better understand it.

### Multiple Field Level Validation Errors -

#### API 
Field Level Errors describe any errors assisciated with a specific field.

In GraphQL, you can request specific fields from an API, and the API will respond with data for those fields. Field errors can occur when there's a problem with one of the fields you've requested.

For example Let us look at the `signUp` Mutation.

The type definitions relevant for `signUp` Mutation->

```gql
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

  type User {
    tokenVersion: Int!
    _id: ID
    firstName: String!
    lastName: String!
    email: EmailAddress
  }
```
Now, let us take a look at the definition of error union for the `signUp` mutation.

GraphQL unions are a way to represent different types of objects in your schema that share some common fields. A union is a composition of multiple types and is useful when we require type definition for an entity that could have multiple types

The interface `UserError` will act as an `interface contract`. The exact purpose for it will be cleared when we reach the  client side explaination part.
```gql
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

```gql
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
                   signUpErrors.push({
                      __typename: "PasswordTooShort" ,
                        message: "Password length is too short"
                        path: "UserInput.password"
                        minimumLength: 8
                   })
           }
           // Approach when we need to fall on a general error based on the interface contract `UserError`
           If (CERTAIN CHECK WHERE WE WOULD NEED TO ADD THAT ERROR IN THE 
                  signUpErrors ARRAY) {
                    signUpErrors.push({
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
2. A general purpose interface contract `UserError` to fall back to in case we want to send a general purpose error back to the client.


#### Client

Let us take a look at how the clients would be making this query.

```gql
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

```gql

data: {
  signUpData: {
      user: null,
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

1. The `signUpErrors` contains the errors we expected. which are typesafe and send back xustom error messages. 
2. The `user` field is null since no user Object was created in the DB because of failure of the operation. 




### Atomic Errors -

#### API 
Field Level Errors describe any errors assisciated with a specific field.

In GraphQL, you can request specific fields from an API, and the API will respond with data for those fields. Field errors can occur when there's a problem with one of the fields you've requested.

For example Let us look at a hypothetical `login` Mutation.

The type definitions relevant for `login` Mutation->

```gql

  type User {
    _id: ID!
    name: String!
    email: String!
    joinedOrganization: Organization
    image: Image!
  }
  
  type Organization {
    name: String!,
    description: String!
  }

  type Image {
    filepath: String!
    size: Int!
  }

  type LoginPayload {
    authtoken: String!
    user: User!
  }

  input LoginInput {
    email: EmailAddress!,
    password: String!
  }

  type Mutation {
    login(input: LoginInput!): LoginPayload!
  }
```
Now, let us take a look at the definition of error union for the `login` mutation.

GraphQL unions are a way to represent different types of objects in your schema that share some common fields. A union is a composition of multiple types and is useful when we require type definition for an entity that could have multiple types

The interface `UserError` will act as an `interface contract`. The exact purpose for it will be cleared when we reach the  client side explaination part.

```gql

# the Error unions types, we can consume many error types in this
  
  
  union LoginError = EmailNotFound | PasswordInvalid | UserError

  interface UserError {
    message: String!
    path: String!
  }

  type EmailNotFound implements UserError {
    message: String!
    path: String!
  }

  type PasswordInvalid implements UserError {
    message: String!
    path: String!
  }

```

The `login` mutation has a return type of `LoginResult!` which in turn contains `loginPayload` and `loginErrors` with return type of an array of the `LoginError` union. This way the `login` mutation returns both the actual relevant data and the errors as result.

```gql
# Here is the return type of login mutation.

  type LoginResult {
    loginPayload: LoginPayload
    loginError: [LoginError!]!
  }

  type Mutation {
    login(input: LoginInput!): LoginResult!
  }

```

Let us look at the pseudo code for the resolvers now. Right now let us just focus on the login resolver. In both cases of Atomic Errors that is `UserNotFound` and `InvalidPassword` the `loginPayload` field returns null whereas the `loginErrors` field returns said errors. For other non-atomic errors which are not "failing errors", can be sent as an array directly along with the User in the db and accesstoken.

```javascript
const resolvers = {
  
  Mutation: {
    login: (parent: any, args: { input: LoginInput }) => {
      
      const { email, password } = args.input;

      userObj = {};
      loginErrors = [];

      if(IF USER WITH EMAIL DOES NOT EXIST) {
        loginErrors.push({
          __typename: "EmailNotFound" ,
          message: "User with Email does not exist"
          path: "LoginInput.email"
        })

        return {
          loginPayload:null,
          loginErrors,
        }
      }

      if(IF PASSWORDS DOES NOT MATCH) {
        loginErrors.push({
          __typename: "PasswordInvalid" ,
          message: "Passwords do not match"
          path: "LoginInput.password"
        })

        return {
          loginPayload:null,
          loginErrors
        }
      }
      
      userObj = DB.FIND(USER WITH EMAIL AND PASSWORD);

      accessToken = GENERATE AND SAVE ACCESS TOKEN.


      if(IF ANY OTHER ERRORS ){
        FOR EACH ERROR->
        loginErrors.push({
          __typename: "UserError" ,
          message: "message"
          path: "PATH"
        })
      }
      
      return {
        loginPayload:{
          userObj,
          accessToken
        },
        loginErrors,
      }
    },
  },

  // We will expand more into this later in the documentation.
  User: {
    email: (parent: { email: string }) => {
      // Logic to restrict PII access to email field
      if (IF REQUESTING USER IS NOT AUTHORISED TO VIEW THE EMAIL OF SAID USER) {
        return '********'; // return ENCRYPTED email value  
      }
      return email;
    },
    joinedOrganization: (parent: { joinedOrganization: Organization } , args , context) => {
      // Logic to retrieve joined organization data
      // You can fetch organization data from a database or another source
      
      if(IF context.userID IS NOT AUTHORISED TO VIEW THE JOINED ORGANIZATION OF THE REQUESTED USER){
        return null;
      }

      return organization;
    },
  },
};

```

In this approach for resolving Field Errors ->



#### Client

Let us take a look at how the clients would be making this query.

```gql
mutation {
  login(
    input: {
      email: ""
      password: "12345"
    }
  ) ... on LoginPayload {
      authtoken
      # Right now let's just focus on the the fields which will not require a custom scalar unlike `email` or `joinedOrganization`
      user {
        _id
        image {
          filepath
          size
        }
      }
    }
    ... on LoginError {
      __typename
      ... on EmailNotFound {
        message
      }
      ... on InvalidPassword {
        message
      }
      ... on IsPasswordValid {
        message
      }
    }
  
}

```

In this client-side query, we use the ... operator to fragment the result based on the type name in the LoginResult union. This allows us to specify the fields to be selected for each possible type within the union.

For the LoginPayload type, we select the authtoken field and the fields for the User type, including _id and image.

For the LoginError type, we select the __typename field to identify the specific error type within the union. We then use the ... on syntax to specify the fields for each error type (EmailNotFound, InvalidPassword, IsPasswordValid) implementing the UserError interface. In this example, we only select the message field for each error type.

By using fragment spreading, we can handle different types within the LoginResult union and select the appropriate fields accordingly.

Here's how the response would look like for different error scenarios:

1. If a user with the provided email does not exist:
```json
{
  "data": {
    "login": {
      "loginPayload": null,
      "loginErrors": [
        {
          "__typename": "EmailNotFound",
          "message": "User with Email does not exist",
          "path": "LoginInput.email"
        }
      ]
    }
  }
}

```

2. If the provided password is invalid:

```json
{
  "data": {
    "login": {
      "loginPayload": null,
      "loginErrors": [
        {
          "__typename": "PasswordInvalid",
          "message": "Passwords do not match",
          "path": "LoginInput.password"
        }
      ]
    }
  }
}

```
3. If there are other unspecified errors in the loginErrors array:

```json
{
  "data": {
    "login": {
      "loginPayload": null,
      "loginErrors": [
        {
          "__typename": "UserError",
          "message": "Some error message",
          "path": "Some path"
        },
        {
          "__typename": "UserError",
          "message": "Another error message",
          "path": "Another path"
        }
      ]
    }
  }
}

```

In each case, the loginPayload field is set to null since the login was unsuccessful. The loginErrors field contains an array of error objects, where each object includes the __typename to identify the specific error type, the error message, and the path where the error occurred.

Please note that the actual error handling and response structure may vary depending on your implementation and the GraphQL client library or framework you are using. The provided examples illustrate the general structure of the response for different error scenarios.

### Nested Resolver Errors. (Complex Objects)

**Make sure you are completely thorough with the above two sections before proceeding further.**

To understand nested resolvers in terms of graph nomenclature, it's helpful to think of GraphQL schemas as directed graphs, where the types are nodes and the fields are edges. Each field in the schema has a resolver associated with it, which determines how the data for that field should be retrieved.

When a GraphQL query is executed, the resolver for the root field is called first, and then the resolvers for any nested fields are called recursively. This process continues until all of the fields in the query have been resolved.

Overall, nested resolvers are an important concept in GraphQL because they allow you to retrieve complex data structures in a flexible and efficient way, while keeping your schema simple and easy to understand.

As such we will also need to make sure Errors in one node should not break the entire query.

Let's First make a small adjustment to our Schema and Resolvers,

```gql

  type Organization {
    name: String!
    description: String!
  }

  interface OrganizationError {
    message: String!
    path: String!
  }

  type UnauthorizedError implements OrganizationError {
    message: String!
    path: String!
  }

  union OrganizationErrors = UnauthorizedError | OrganizationError

  type OrganizationResult {
    organizationPayload: Organization
    organizationErrors: [OrganizationErrors!]!
  }

  type User {
    _id: ID!
    email: String!
    joinedOrganization: OrganizationResult!
    image: Image!
  }

```

`OrganizationErrors`: It represents the possible types of errors that can occur related to organizations.
It includes the `UnauthorizedError` type, which represents an unauthorized error related to organizations.
It can also include other types that implement the `OrganizationError` interface.
The `OrganizationErrors` union allows for flexibility in handling different types of errors that can occur in operations related to organizations. It ensures that the result can contain the appropriate error type within the union.

Certainly! Here's an explanation of the `OrganizationResult` type:

The `OrganizationResult` type represents the result of an operation related to organizations. It consists of two fields: `organizationPayload` and `organizationErrors`. 
The `organizationPayload` field contains the payload for the operation, which includes the `name` and `description` of the organization. This field represents the successful result of the operation, providing the organization data. 
The `organizationErrors` field is a list of errors that occurred during the operation. It can include various types of errors, such as the `UnauthorizedError` type or other types that implement the `OrganizationError` interface. 
This field allows for proper error handling and provides details about any issues encountered during the organization-related operation. The `OrganizationResult` type ensures that both successful results and errors are properly represented and returned in a consistent manner.

Let's Modify the nested resolver for `joinedOrganization`

```javascript
const resolver  = {
   Mutation: {
    login: (parent: any, args: { input: LoginInput }) => {
    // Implementation of the login mutation resolver
    },
  },
  User:{
    email:(parent:User) =>{
      // Implementation of the email resolver which will be explained later
    },
    joinedOrganization: (parent: User , args , context) => {
      // Logic to retrieve joined organization data
      
      if (IF parent._id IS PRIVATE AND context.userID IS UNAUTHORISED TO ACCESS THE DATA OF THE REQUESTED USER) {

        const unauthorizedError = {
          __typename: 'UnauthorizedError',
          message: 'Unauthorized',
          path: 'User.joinedOrganization',
        };

        return {
          organizationPayload: null,
          organizationErrors: [unauthorizedError],
        };
      }

      if (ANY OTHER ERROR) {
        
        const organizationError = {
          __typename: 'OrganizationError',
          message: 'Unauthorized',
          path: 'User.joinedOrganization',
        };

        return {
          organizationPayload: null,
          organizationErrors: [organizationError],
        };
      }

      return {
        organizationPayload: organization,
        organizationErrors: [],
      };
    },

  }
}

```

In this updated resolver, the joinedOrganization field resolver for the User type includes the additional logic to check if the requesting user is authorized to access the data of the requested user. If the conditions are met, it returns the organization data within the organizationPayload field. If not authorized, it returns an UnauthorizedError within the organizationErrors field.



```gql
mutation Login($input: LoginInput!) {
  login(input: $input) {
    loginPayload {
      authtoken
      user {
        _id
        email
        joinedOrganization {
         
            organizationPayload {
              ... on Organization {
                name
                description
              }
            }
            organizationErrors {
              __typename
              ... on UnauthorizedError {
                message
                path
              }
              ... on OrganizationError {
                message
                path
              }
            }
          
        }
      }
    }
    loginErrors {
      __typename
      ... on EmailNotFound {
        message
        path
      }
      ... on PasswordInvalid {
        message
        path
      }
      ... on IsPasswordValid {
        message
        path
      }
    }
  }
}

```

The `joinedOrganization` field is a nested field within the `login` mutation. It represents the organization-related data for the logged-in user. It is accessed within the `user` field, which is part of the `loginPayload` field.

Within the `joinedOrganization` field, there are two possible selections: `organizationPayload` and `organizationErrors`. The `organizationPayload` field represents the successful result of the joined organization data retrieval. It includes the `name` and `description` fields, which provide information about the joined organization.

The `organizationErrors` field is a list of errors that can occur during the joined organization data retrieval. It includes the `__typename`, `message`, and `path` fields. Specifically, it includes the `UnauthorizedError` type, which represents an unauthorized error related to accessing the joined organization. Additionally, it includes any other types that implement the `OrganizationError` interface, providing further details about potential errors.

By including both the `organizationPayload` and `organizationErrors` fields within the `joinedOrganization` field, this query allows for handling both successful results and any errors that may occur during the joined organization data retrieval.

Here's an example of a response from Apollo Server for a query that represents a successful login but unauthorized access to the `joinedOrganization`:

```json
{
  "data": {
    "login": {
      "loginPayload": {
        "authtoken": "abc123",
        "user": {
          "_id": "123",
          "email": "example@example.com",
          "joinedOrganization": {
            "organizationPayload": null,
            "organizationErrors": [
              {
                "__typename": "UnauthorizedError",
                "message": "Unauthorized access to joined organization",
                "path": "User.joinedOrganization"
              }
            ]
          }
        }
      },
      "loginErrors": null
    }
  }
}

```


In this response, the `login` mutation was successful, resulting in a valid authentication token (`authtoken`). The `user` field represents the logged-in user, with an `_id` and `email`. However, when attempting to access the `joinedOrganization`, the response indicates that it is unauthorized. The `organizationPayload` is set to `null`, indicating that no organization data was returned. Instead, the `organizationErrors` field contains an error object with the `__typename` of `UnauthorizedError`, along with the `message` and `path` fields providing information about the unauthorized access to the joined organization.

This response structure allows the client to handle both successful results and potential errors, such as unauthorized access to certain resources, in a standardized manner.

### Nested Resolvers Errors (Scalar Fields)

In GraphQL, a scalar field resolver is a resolver function that is responsible for resolving the value of a scalar field. A scalar field is a field that has a scalar type, such as a `String`, `Int`, or `Boolean` or any other Custom Scalar type.

In Graphql Server, resolving fields is done using resolver functions. Resolver functions are responsible for fetching the data for a field, and they are defined in the resolver map, which maps the types and fields in the schema to their respective resolver functions.

When a GraphQL query is received by the server, Graphql Server parses the query and traverses the schema to determine which resolver functions need to be called to resolve the requested fields. For each field in the query, Graphql Server calls the resolver function associated with that field to fetch the data.

Resolver functions can be synchronous or asynchronous, and they can return the data for the field directly, or they can return a Promise that resolves to the data. If a resolver function returns a Promise, Graphql Server will wait for the Promise to resolve before continuing to resolve other fields.

Nested scalar field resolvers in GraphQL are resolver functions that are used to resolve the value of scalar fields that are nested within other fields. For example, consider a `User` type. Here, the `email` field is a PII (Personal Identifiable Information) field and would be encrypted at rest and in transit and thus need to be resolved with its own custom resolver.

We would need to resolve that field seperately when we are fetching a user and treat its errors like it is a nested resolver.

#### API

```gql

type EmailAdressResult {
  emailData:EmailAddress,
  emailErrors:[EmailErrors!].
}

union EmailErrors = PIIError | AccessControlError

type PIIError implements AccessControlError {
  message: String!,
  authorisedRole: String!
}

interface AccessControlError {
  message: String!,
  authorisedRole: String!
}

type User {
    _id: ID!
    email: EmailAdressResult!
    joinedOrganization: OrganizationResult!
    image: Image!
}
```


Now let's take a look at their `user` query  resolver types ->

```gql
type UserResult {
    userData: User ,
    userErrors: [UserError!]
}



type Query {
   user(id: ID!): UserResult!
}

```

And now finally take a look at their resolvers ->

```javascript
const resolver  = {
   Mutation: {
    login: (parent: any, args: { input: LoginInput }) => {
    // Implementation of the login mutation resolver
    },
  },
  User:{
    email:(parent:User) =>{

      const email = parent.email;
      let emailError= [];
      if(NOT AUTHRORISED TO VIEW PII OF PARENT USER) {
        emailErrors.push({
          __typename: "PIIError",
          message: "Cannout access this info",
          authorisedRole: "Authorised roles are : ..."
        })
      }

      return {
        emailData: !emailErrors ? email : encrypted(email),
        emailErrors: emailErrors,
      };

    },
    joinedOrganization: (parent: User , args , context) => {
      // Implementation of the joinedOrganization resolver
    },

  }
```

The `email` resolver checks if the requesting user is authorized to access the email information of the parent user. If unauthorized, it adds a `PIIError` object to the `emailErrors` array. Otherwise, it returns the email information (`emailData`) and any errors (`emailErrors`) within an object. This resolver allows for controlled access to sensitive email information based on authorization rules, returning the data or appropriate errors accordingly.

#### Client

If the query is made to access an email of another user like this -> 

```gql
#Here the requesting user i.e context.user has an id of 1 
mutation Login($input: LoginInput!) {
  login(input: $input) {
    loginPayload {
      authtoken
      user {
        _id
        email {
          emailData
          emailErrors {
            __typename
            ... on PIIError {
              message
              authorisedRole
            }
          }
        }
        joinedOrganization {
         
            organizationPayload {
              ... on Organization {
                name
                description
              }
            }
            organizationErrors {
              __typename
              ... on UnauthorizedError {
                message
                path
              }
              ... on OrganizationError {
                message
                path
              }
            }
          
        }
      }
    }
    loginErrors {
      __typename
      ... on EmailNotFound {
        message
        path
      }
      ... on PasswordInvalid {
        message
        path
      }
      ... on IsPasswordValid {
        message
        path
      }
    }
  }
}
```

Since here the context user is not allowed to access the email field the returned response is something like this ->

```json 
{
  "data": {
    "login": {
      "loginPayload": {
        "authtoken": "abc123",
        "user": {
          "_id": "123",
          "email": {
            "emailData": null,
            "emailErrors": [
              {
                "__typename": "PIIError",
                "message": "Unauthorized access to email",
                "authorisedRole": "Admin"
              }
            ]
          },
          "joinedOrganization": {
            "organizationPayload": {
              "name": "Example Organization",
              "description": "Organization description"
            },
            "organizationErrors": null
          }
        }
      },
      "loginErrors": null
    }
  }
}


```

Certainly! Here's a concise explanation of the response in case of a PII error in the `email` field, along with all other queries running successfully:

The response includes a `loginPayload` with an authentication token and a `user` object containing various fields. The `email` field within the `user` object has an `emailData` field set to `null` due to unauthorized access. The `emailErrors` field contains an array with a single `PIIError` object, indicating the unauthorized access to the email. The `PIIError` object provides the error `message` and specifies the required `authorisedRole` for access. The `joinedOrganization` field returns the organization data within the `organizationPayload` field, while the `organizationErrors` field is set to `null`, indicating no errors. Additionally, the `loginErrors` field is `null`, indicating no errors for other queries. This response structure enables handling both successful results and potential errors, ensuring appropriate communication of the PII error in the `email` field.

Since some scalar fields are database intensive to compute within their own custom resolver and because there are not a lot of fields which can fall under "scalars which need Access Control Logic seperately" it is okay to have this approach.

**Note :**

The purpose of nested resolvers is not "magic", but rather to help organize code and maintain a clean architecture. They are necessary for delegating the computation of expensive or custom fields that only exist at the GraphQL level and not in the database. For instance, `email` is an excellent example of such a field. Other examples include bank `accountNumber`, `bankBalance`, `phoneNumber` (which have some kind of access control logic assiciated with them), and `postCount` or `joinedOrganizationsCount` which are not defined explicitly in the database. By using nested resolvers, we can delegate these operations to the appropriate location and ensure proper organization and maintenance of the code.

When resolving custom or complex fields within the parent resolver, it is possible to return errors related to those fields within the errors field of that parent resolver. While it is technically feasible to resolve an entire GraphQL schema and all related fields within a single resolver, doing so is not in accordance with GraphQL best practices. This approach differs from the root errors approach in that errors are type-safe, whereas in the root errors list they are not. However, when resolving errors for all fields or nested fields within the parent resolver, a long list of possible errors may result.

Adopting a modular approach by extracting data and errors into resolvers can help isolate information to specific fields' resolvers, whether they are for scalar or complex objects. However, this may lead to the GraphQL schema not directly representing relations. As a result, many fields (scalar or complex) may have {success,errors} objects, which can appear peculiar.


## Errors Defined in Schema Approach vs Default GraphQL Errors

When it comes to error handling in GraphQL, there are two main approaches: errors defined in the schema and default GraphQL errors. Each approach has its own tradeoffs. Let's compare them in the table below:

|                      | Errors Defined in Schema Approach                           | Default GraphQL Errors                                   |
|----------------------|------------------------------------------------------------|---------------------------------------------------------|
| Definition           | Errors are explicitly defined in the GraphQL schema         | GraphQL provides standard error responses               |
| Control              | Fine-grained control over error structure and behavior      | Limited control, standardized error format              |
| Customization        | Custom error types and specific error messages              | Limited ability to customize error types and messages    |
| Integration          | Integrated with the GraphQL schema and types                 | Separate from the schema, less tightly coupled           |
| Consistency          | Ensures consistency in error handling across the API         | Consistent error structure provided by the GraphQL spec |
| Ease of Use          | Requires explicit error handling in resolvers and clients   | Automatically handles and returns errors in responses   |
| Flexibility          | Can handle complex business logic and specific error cases   | More suitable for simple error scenarios                |
| Error Extensions     | Supports additional metadata or context for errors          | Limited ability to extend error information              |
| Overhead             | Requires additional code and complexity in the implementation | Less implementation overhead, simpler setup            |

Both approaches have their tradeoffs, and the choice depends on the specific requirements and complexity of your GraphQL API. The errors defined in the schema approach offers more control, customization, and flexibility but comes with additional implementation complexity. On the other hand, default GraphQL errors provide simplicity, consistency, and ease of use out of the box but may be limited in customization for complex error scenarios.

Consider your project's needs and development constraints when choosing the error handling approach in GraphQL.

