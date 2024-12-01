[**talawa-api**](../../../../../README.md)

***

[talawa-api](../../../../../modules.md) / [REST/controllers/mutation/updatePost](../README.md) / updatePost

# Function: updatePost()

\> **updatePost**(`req`, `res`): `Promise`\<`void`\>

Updates an existing post
async
function - updatePost

## Parameters

### req

[`InterfaceAuthenticatedRequest`](../../../../../middleware/isAuth/interfaces/InterfaceAuthenticatedRequest.md)

Express request object with authenticated user

### res

`Response`\<`any`, `Record`\<`string`, `any`\>\>

Express response object

## Returns

`Promise`\<`void`\>

Promise\<void\> - Responds with updated post or error

Description
This controller handles post updates with the following features:
- Validates user permissions (creator, organization admin, or super admin)
- Supports file attachment updates with cleanup of old files
- Enforces business rules for pinned posts and titles
- Validates content length restrictions
- Maintains cache consistency

Request body expects:
```typescript
\{
  title?: string;
  text?: string;
  pinned?: boolean;
\}
```

Authorization Rules:
- Post creator can edit their own posts
- Organization admins can edit posts in their organizations
- Super admins can edit any post

## Throws

NotFoundError - When user or post is not found

## Throws

UnauthorizedError - When user lacks permissions to update the post

## Throws

InputValidationError - When title/text validation fails or pinned status requirements aren't met

## Defined in

[src/REST/controllers/mutation/updatePost.ts:73](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/REST/controllers/mutation/updatePost.ts#L73)
