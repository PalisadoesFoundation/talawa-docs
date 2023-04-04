---
id: api-error-handling-guide
title: API Error Handling Guide
---

This page outlines the core design principles for handling errors within the GraphQl Layer in Talawa-API code base and relaying said errors back to the client apps.

[Marc-Andre Giroux `6a`](https://productionreadygraphql.com/2020-08-01-guide-to-graphql-errors) is the basis of the approach chosen for Error Handling in the Talawa api codebase.

## Graphql Errors

### Introduction

GraphQl is a great tool for building APIs when there is need to give the client more control over the data it needs from the server, where the clients fetch only the data they need in the payload returned by the server. [It returns data in a form which closely resembles a grapq, so all data exhanged between client and api should be thought of in terms of graphs](https://graphql.org/learn/thinking-in-graphs/)

It resolves relations which exist in the business logic of the application with field resolvers only if the client specifically asks that relation to be resolved. This means lesser computation required to compute data not specifically needed by clients.(A resolver is basically a function with the same name as the field/relation that it resolves and returns)

The data is returned in the form of a graph where every node is a meaningful object in context to the logic and the edges represent relations.

In short GraphQl allows the clients to (These points will be important later on) -> 

1. Query for a specific resolver which returns an object (node), meaningful to the api logic.
2. Fetch for certain fields within said object(node) to optimize the request/response payload.
3. In case of resolving relations(edges), making a nested query for interrelated objects(nodes).
4. Each Node within the said nested query should be treated as individual entity in the graph.Error in one node should not affect other nodes in the graph. 

This is perfect when everything runs as expected but what if it does not? How does GraphQl by default handle these 4 points for thinking in terms of graphs when an error is made?

### Problem with default Graphql Errors

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
2. By default if the `errors` array is present then the resulting query will return `null` in the `data` field. By that this means even if some nested resolver fails, that has the impact on the result of the root parent resolver (contradicts Introduction point 4).Essentially failure of a related node leads to the failure of parent node.This can potentially be a deal breaker if you're wanting to have errors returned as part of a mutation, but want to query for data on the result anyways. A common examp;e is returning an error with some partial data for private Organization(name , location etc) even if a lot of background details like members , admins etc should not be returned.
3. GraphQL errors encode exceptional scenarios - like a service being down or some other internal failure. Errors which are part of the API domain should be captured within that domain, and relayed to the client as information, NOT Graphql error.

### The Solution

The general philosophy at play is that Errors are considered exceptional. Your user data should never be represented as an Error. If your users can do something that needs to provide negative guidance, then you should represent that kind of information in GraphQL as Data not as an Error. Errors should always represent either developer errors or exceptional circumstances (e.g. the database was offline).[Lee Byron makes that clear in a few comments on the GraphQL-Spec repository.](https://github.com/graphql/graphql-spec/issues/391#issuecomment-385553207)


