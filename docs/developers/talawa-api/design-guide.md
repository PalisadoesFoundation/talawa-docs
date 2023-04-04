---
id: api-design-guide
title: API Design Guide
---

This page outlines the core design principles of our Talawa-API code base.

## Resolvers

We need a common design approach when designing our resolvers to help ensure predictable results.

### Constraints Standardization

Add content here

## Error Handling

Both our developer and user communities require meaningful and actionable error handling to help troubleshoot issues they may have with the code. This section outlines the tenets of our approach.

The graphql error handling approach within the talawa-api is based on [this really great blog](https://productionreadygraphql.com/2020-08-01-guide-to-graphql-errors/) which guides developers about how production ready graphql api handles error. Talawa api uses a hybrid approach shown in Stage:5 and Stage:6a of that post. 

A popular approach to representing errors in GraphQL is by using union types. [There is a great post by Sasha Solomon (Twitter) that explains the philosophy behind it in more detail.](https://medium.com/@sachee/200-ok-error-handling-in-graphql-7ec869aec9bc)

Error unions are great because they are a really expressive way of structuring our schema. It lets clients see right away what could happen when querying or mutating a resource.

### Field Errors

Here the field errors within a resolver are handled this way ->

```javascript
//Base interface for error so that whenever a new custom error needs to be added, it can be added by implementing this.
interface Error {
  path: String!
  message: String!
}

// Error Types
type FieldError implements Error {
  path: String!
  message: String!
}

// Basically sends many errors at the same time exactly like your implementation in the original post does.
type DummyMutationErrors {
  fieldErrors: [FieldErrors!]!
}

// The inputs
input DummyLocationInput {
  latitude: String!
  longitude: String!
}

input DummyMutationInput {
  username: String!
  location: DummyLocationInput!
}


// Union
union DummyMutationPayload = DummyResult |  DummyMutationErrors ;

type Mutation {
  dummyMutation(id: ID!, input: DummyMutationInput!): DummyMutationPayload ; 
}
```

In the resolver, we can basically then send back the FieldErrors type array for sending multiple fieldErrors at once.

The client side would look something like this-

```javascript
mutation MyMutation{
  dummyMutation(id: "nonexistingID", input: SomeInputDataObject){
    __typename
    // Query different fields depending on the response type
    ...on DummyResult { 
         // Fields needed
    }
    ...on  DummyMutationErrors {
      fieldErrors { 
            path
            message
       }
    }
  }
}
```
For example lets say I run that mutation then I will get an error response like this based on how I am inserting the new FieldError object in fieldErrors array in the root resolver.

```javascript
{
  "data": {
   	" dummyMutation": {
      "__typename": " DummyMutationErrors",
      // Error messages specific to each input:
      "fieldErrors": [
        {"path": "id", "message": "This account not found."},
        {"path": "location.longitude", "message": "Invalid Longitude or something idk"},
      ]
    }
  }
}
```

Here the most obvious difference is the nonexistence of nesting and instead using dot notation to relay the path of the error and send everything as a single non-nested array to allow the client to spread the array and get all the errors even more easily in a single non-nested iteration.

This way based on the field (path) the client can implement custom UI elements to relay the error like different color notifications or something without worrying about perfect nested iteration to get the error path they are looking for.

### Handling logical errors in a resolver
We can just use another custom error and then check for it in the client for example. Like lets say I have an email check for certain email extensions like gmail etc or hell even user role then how that would be implemented is like this ->

```javascript
interface Error {
  path: String!
  message: String!
}

type FieldError implements Error {
  path: String!
  message: String!
}


type EmailExtensionError implements Error {
  message: String!
}

type UnauthorisedRoleError implements Error {
  message: String!
}

type FieldErrors {
    fieldErrors: [FieldError!]
}

// keep email as a string.
type User {
  email: String!
  id: ID!
}

//union
union UserQueryPayload = User | FieldErrors | UnauthorisedRoleError  | EmailExtensionError 

type Query {
  user(id: ID!): UserQueryPayload
}

```

The resolver :

```javascript
const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      const userRecord = await context.db.findUserById(args.id);
         .... Other validation checks here.
      if (ADMIN ROLE CHECK PSEUDOCODE) {
                  return {
                       __typename: "UnauthorisedRoleError",
                        message: `The user is unauthorised`,
                  };
      }

      if (SOME BOOLEAN FUNCTION TO CHECK EMAIL EXTENSION OF USER) {
                  return {
                       __typename: "EmailExtensionError",
                        message: `The user's email is not valid`,
                  };
      }
      return user;

    },
  },
};
```
the client side:
```javascript
Query MyMutation{
// User is Non admin and 
  user(id: "validIDofUserID"){
    __typename
    // Query different fields depending on the response type
    ...on User { 
         // Fields needed
    }
    ...on  FieldErrors {
      fieldErrors { 
            path
            message
       }
    }
    ... on EmailExtensionError {
            message
    } 
    
    .... on UnauthorisedRoleError {
            message
     }

  }
}
```
Here the point to note is that on `EmailExtensionError` or `UnauthorisedRoleError` the resolver will return only one of them at a given time as data and the `User` object will not get resolved at all, this makes errors more atomic.

### Custom Scalars and Nested Relations Error Handling

Some times relaying certain partial data along with errors are very useful let's take an example.

A good example of partial data can be the instagram profile page. Even if the profile is private and you're not a follower, you can see all details about the user's profile except for posts, followers and following.But you can view the post, follower and following count of a profile.

Think about how this logic would be implemented in graphql. You fetch the user's object, and along with it you also fetch the nested postsConnection. But since posts are private, they cannot be fetched. You can only view data on the user's object, not the nested postsConnection.

For this use case we do not have to rely on the partial success of a resolver for this use case. The "Errors" in this approach are very custom so you can send the relevant data you want with a message for eg I will take the same example of user and private posts and look at how we can go about it.

```javascript
// This way we have added the "partial" data we want with the Error type itself this way we will know exactly what query will return what kind of partial data unlike inconsistently guessing for each field
type PrivatePostsError implements Error{
  postCount: Number  // We can  may or may not declare it nullable depending on use cases
  message : String!
}
```
In the resolver, we basically add a private profile check after the posts query and return the PrivatePostError with postCount: numberOfPosts 

```javascript
query MyQuery {
  user(id: "validIDofUserID"){
    __typename
    // Query different fields depending on the response type, Unlike default graphql error behavior this entire query will not fail even if the error is returned in some nested relation like postConnection or Some other nested object
    ...on User { 
        _id,
        name,
        postsConnection { 
           __typename
           ... on Post { 
               // fields of successful query
           }
           ... on PrivatePostsError {
              postCount, 
              message
           }
        }
    }
    ...on  FieldErrors {
      fieldErrors { 
            path
            message
       }
    }
    ... on EmailExtensionError {
            message
    } 
    
    .... on UnauthorisedRoleError {
            message
     }

   }
}

```

That query when run for a valid user ID but a private profile will run successfully for the user but will fail only for the nested postConnection. But the query as a whole will not fail, and return something like this -

```javascript
{
  "data": {
   	"user": {
      "__typename": "User",
      _id : "1902831092831",
      name : "Name",
      postConnection {
           "__typename": "PrivatePostsError",
           postCount: 8,
           message: "Posts of the User are Private"
     }
    }
  }
}
```
Using this approach we will know exactly what kind of data we are sending with our custom error in a type-safe and consistent manner than sending partial data within the same object we are using when a query is successfully resolved. We will get more control over exactly what specific fields are allowed to access in case of specific errors, which will be a great developer experience and is pretty flexible on both client and API sides instead of binding errors to the same schemas.

Not only that we can easily customize what kind of data we want to send with an Error at any time we want. The message field of an error will decide the UI notification behavior. This approach will also make customizing error UI elements on the client side easier by listening for a fragment.

Now lets look at how this kind of "error" can be relayed speaking in terms of UI wise in a react component->

```javascript
useEffect(()=>{
  // all custom behaviors here 
  // Since we know exactly what kind of partial data along with what kind of message we will be receiving 
     //in this error we can mould the UI behaviour this way.
  if(CHECK IF __typename of postConnection NESTED QUERY IN data ==="PrivatePostsError" ) {
     setTogglePrivatePost(true); // Think to toggle a lock image like Instagram displays in case of private profile instead of mounting the list of posts.
      setNumberOfPosts(postConnection.postCount); // SO that at least the post count can be displayed
      toast.info(postConnection.message);
  }
})[data]
```

Notice I used toast.info instead of toast.error? Thats because the toast library currently used by admin portal is very customizable https://fkhadra.github.io/react-toastify/icons . We can also add customized styles too. The fact that the posts are private is not an error, it is information and hence the UI displays it as such.

This way the approach of modeling specific errors has allowed the client to customize UI behavior in case of the 'PrivatePostsError'.

Let's say I am a UI developer and I want to customize the display of notifications in case of specific errors (some "errors" may not even be errors they might just be pieces of information ) then this approach allows me to do that. Same for the case of mobile developers .

Control over the UI behavior in case of specific errors is still with the Client apps. In my approach, the server response is basically making it easier for them to do so. "lead the horse to water ..." kinda thing. Exactly what they do with the responses they needed is up to them.


