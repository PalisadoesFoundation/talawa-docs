[talawa-admin](../README.md) / [Modules](../modules.md) / screens/OrganizationFunds/OrganizationFundsMocks

# Module: screens/OrganizationFunds/OrganizationFundsMocks

## Table of contents

### Variables

- [MOCKS](screens_OrganizationFunds_OrganizationFundsMocks.md#mocks)
- [MOCKS\_ARCHIVED\_FUND](screens_OrganizationFunds_OrganizationFundsMocks.md#mocks_archived_fund)
- [MOCKS\_ERROR\_ARCHIVED\_FUND](screens_OrganizationFunds_OrganizationFundsMocks.md#mocks_error_archived_fund)
- [MOCKS\_ERROR\_CREATE\_FUND](screens_OrganizationFunds_OrganizationFundsMocks.md#mocks_error_create_fund)
- [MOCKS\_ERROR\_ORGANIZATIONS\_FUNDS](screens_OrganizationFunds_OrganizationFundsMocks.md#mocks_error_organizations_funds)
- [MOCKS\_ERROR\_REMOVE\_FUND](screens_OrganizationFunds_OrganizationFundsMocks.md#mocks_error_remove_fund)
- [MOCKS\_ERROR\_UNARCHIVED\_FUND](screens_OrganizationFunds_OrganizationFundsMocks.md#mocks_error_unarchived_fund)
- [MOCKS\_ERROR\_UPDATE\_FUND](screens_OrganizationFunds_OrganizationFundsMocks.md#mocks_error_update_fund)
- [MOCKS\_UNARCHIVED\_FUND](screens_OrganizationFunds_OrganizationFundsMocks.md#mocks_unarchived_fund)

## Variables

### MOCKS

• `Const` **MOCKS**: (\{ `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_FUNDS; `variables`: \{ `id`: `undefined` = undefined; `isArchived?`: `undefined` = true; `isDefault?`: `undefined` = true; `name?`: `undefined` = 'ActionItemCategory 1 updated'; `organizationId?`: `undefined` = '123'; `refrenceNumber?`: `undefined` = '1'; `taxDeductible?`: `undefined` = false \}  \} ; `result`: \{ `data`: \{ `createFund?`: `undefined` ; `organizations`: \{ `funds`: \{ `_id`: `string` = '1'; `createdAt`: `string` = '2021-07-01T00:00:00.000Z'; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 1'; `refrenceNumber`: `string` = '123'; `taxDeductible`: `boolean` = true \}[]  \}[] ; `removeFund?`: `undefined` ; `updateFund?`: `undefined`  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = CREATE\_FUND\_MUTATION; `variables`: \{ `id?`: `undefined` = '123'; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Test Fund'; `organizationId`: `undefined` = undefined; `refrenceNumber`: `string` = '1'; `taxDeductible`: `boolean` = true \}  \} ; `result`: \{ `data`: \{ `createFund`: \{ `_id`: `string` = '3' \} ; `organizations?`: `undefined` ; `removeFund?`: `undefined` ; `updateFund?`: `undefined`  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = UPDATE\_FUND\_MUTATION; `variables`: \{ `id`: `string` = '1'; `isArchived`: `boolean` = true; `isDefault`: `boolean` = true; `name`: `string` = 'Fund 4'; `organizationId?`: `undefined` = '123'; `refrenceNumber?`: `undefined` = '1'; `taxDeductible`: `boolean` = false \}  \} ; `result`: \{ `data`: \{ `createFund?`: `undefined` ; `organizations?`: `undefined` ; `removeFund?`: `undefined` ; `updateFund`: \{ `_id`: `string` = '1' \}  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = REMOVE\_FUND\_MUTATION; `variables`: \{ `id`: `string` = '1'; `isArchived?`: `undefined` = true; `isDefault?`: `undefined` = true; `name?`: `undefined` = 'ActionItemCategory 1 updated'; `organizationId?`: `undefined` = '123'; `refrenceNumber?`: `undefined` = '1'; `taxDeductible?`: `undefined` = false \}  \} ; `result`: \{ `data`: \{ `createFund?`: `undefined` ; `organizations?`: `undefined` ; `removeFund`: \{ `_id`: `string` = '1' \} ; `updateFund?`: `undefined`  \}  \}  \})[]

#### Defined in

[src/screens/OrganizationFunds/OrganizationFundsMocks.tsx:8](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationFunds/OrganizationFundsMocks.tsx#L8)

___

### MOCKS\_ARCHIVED\_FUND

• `Const` **MOCKS\_ARCHIVED\_FUND**: (\{ `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_FUNDS; `variables`: \{ `id`: `undefined` = undefined; `isArchived?`: `undefined` = true \}  \} ; `result`: \{ `data`: \{ `organizations`: \{ `funds`: \{ `_id`: `string` = '1'; `createdAt`: `string` = '2021-07-01T00:00:00.000Z'; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 1'; `refrenceNumber`: `string` = '123'; `taxDeductible`: `boolean` = true \}[]  \}[] ; `updateFund?`: `undefined`  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = UPDATE\_FUND\_MUTATION; `variables`: \{ `id`: `string` = '1'; `isArchived`: `boolean` = true \}  \} ; `result`: \{ `data`: \{ `organizations?`: `undefined` ; `updateFund`: \{ `_id`: `string` = '1' \}  \}  \}  \})[]

#### Defined in

[src/screens/OrganizationFunds/OrganizationFundsMocks.tsx:234](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationFunds/OrganizationFundsMocks.tsx#L234)

___

### MOCKS\_ERROR\_ARCHIVED\_FUND

• `Const` **MOCKS\_ERROR\_ARCHIVED\_FUND**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_FUNDS; `variables`: \{ `id`: `undefined` = undefined; `isArchived?`: `undefined` = true \}  \} ; `result`: \{ `data`: \{ `organizations`: \{ `funds`: \{ `_id`: `string` = '1'; `createdAt`: `string` = '2021-07-01T00:00:00.000Z'; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 1'; `refrenceNumber`: `string` = '123'; `taxDeductible`: `boolean` = true \}[]  \}[]  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = UPDATE\_FUND\_MUTATION; `variables`: \{ `id`: `string` = '1'; `isArchived`: `boolean` = true \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/OrganizationFunds/OrganizationFundsMocks.tsx:288](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationFunds/OrganizationFundsMocks.tsx#L288)

___

### MOCKS\_ERROR\_CREATE\_FUND

• `Const` **MOCKS\_ERROR\_CREATE\_FUND**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_FUNDS; `variables`: \{ `id`: `undefined` = undefined; `isArchived?`: `undefined` = true; `isDefault?`: `undefined` = true; `name?`: `undefined` = 'ActionItemCategory 1 updated'; `organizationId?`: `undefined` = '123'; `refrenceNumber?`: `undefined` = '1'; `taxDeductible?`: `undefined` = false \}  \} ; `result`: \{ `data`: \{ `organizations`: \{ `funds`: \{ `_id`: `string` = '1'; `createdAt`: `string` = '2021-07-01T00:00:00.000Z'; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 1'; `refrenceNumber`: `string` = '123'; `taxDeductible`: `boolean` = true \}[]  \}[]  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = CREATE\_FUND\_MUTATION; `variables`: \{ `id?`: `undefined` = '123'; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 3'; `organizationId`: `undefined` = undefined; `refrenceNumber`: `string` = '789'; `taxDeductible`: `boolean` = true \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/OrganizationFunds/OrganizationFundsMocks.tsx:111](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationFunds/OrganizationFundsMocks.tsx#L111)

___

### MOCKS\_ERROR\_ORGANIZATIONS\_FUNDS

• `Const` **MOCKS\_ERROR\_ORGANIZATIONS\_FUNDS**: \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_FUNDS; `variables`: \{ `organizationId`: `string` = '1' \}  \}  \}[]

#### Defined in

[src/screens/OrganizationFunds/OrganizationFundsMocks.tsx:100](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationFunds/OrganizationFundsMocks.tsx#L100)

___

### MOCKS\_ERROR\_REMOVE\_FUND

• `Const` **MOCKS\_ERROR\_REMOVE\_FUND**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_FUNDS; `variables`: \{ `id`: `undefined` = undefined; `isArchived?`: `undefined` = true; `isDefault?`: `undefined` = true; `name?`: `undefined` = 'ActionItemCategory 1 updated'; `organizationId?`: `undefined` = '123'; `refrenceNumber?`: `undefined` = '1'; `taxDeductible?`: `undefined` = false \}  \} ; `result`: \{ `data`: \{ `createFund?`: `undefined` ; `organizations`: \{ `funds`: \{ `_id`: `string` = '3'; `createdAt`: `string` = '2021-07-01T00:00:00.000Z'; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 1'; `refrenceNumber`: `string` = '123'; `taxDeductible`: `boolean` = true \}[]  \}[] ; `updateFund?`: `undefined`  \}  \}  \} \| \{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = CREATE\_FUND\_MUTATION; `variables`: \{ `id?`: `undefined` = '123'; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 3'; `organizationId`: `undefined` = undefined; `refrenceNumber`: `string` = '789'; `taxDeductible`: `boolean` = true \}  \} ; `result`: \{ `data`: \{ `createFund`: \{ `_id`: `string` = '3' \} ; `organizations?`: `undefined` ; `updateFund?`: `undefined`  \}  \}  \} \| \{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = UPDATE\_FUND\_MUTATION; `variables`: \{ `id`: `undefined` = undefined; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 1'; `organizationId?`: `undefined` = '123'; `refrenceNumber?`: `undefined` = '1'; `taxDeductible`: `boolean` = true \}  \} ; `result`: \{ `data`: \{ `createFund?`: `undefined` ; `organizations?`: `undefined` ; `updateFund`: \{ `_id`: `string` = '1' \}  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = REMOVE\_FUND\_MUTATION; `variables`: \{ `id`: `undefined` = undefined; `isArchived?`: `undefined` = true; `isDefault?`: `undefined` = true; `name?`: `undefined` = 'ActionItemCategory 1 updated'; `organizationId?`: `undefined` = '123'; `refrenceNumber?`: `undefined` = '1'; `taxDeductible?`: `undefined` = false \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/OrganizationFunds/OrganizationFundsMocks.tsx:438](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationFunds/OrganizationFundsMocks.tsx#L438)

___

### MOCKS\_ERROR\_UNARCHIVED\_FUND

• `Const` **MOCKS\_ERROR\_UNARCHIVED\_FUND**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_FUNDS; `variables`: \{ `id`: `undefined` = undefined; `isArchived?`: `undefined` = true \}  \} ; `result`: \{ `data`: \{ `organizations`: \{ `funds`: \{ `_id`: `string` = '1'; `createdAt`: `string` = '2021-07-01T00:00:00.000Z'; `isArchived`: `boolean` = true; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 1'; `refrenceNumber`: `string` = '123'; `taxDeductible`: `boolean` = true \}[]  \}[]  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = UPDATE\_FUND\_MUTATION; `variables`: \{ `id`: `string` = '1'; `isArchived`: `boolean` = false \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/OrganizationFunds/OrganizationFundsMocks.tsx:390](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationFunds/OrganizationFundsMocks.tsx#L390)

___

### MOCKS\_ERROR\_UPDATE\_FUND

• `Const` **MOCKS\_ERROR\_UPDATE\_FUND**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_FUNDS; `variables`: \{ `id`: `undefined` = undefined; `isArchived?`: `undefined` = true; `isDefault?`: `undefined` = true; `name?`: `undefined` = 'ActionItemCategory 1 updated'; `organizationId?`: `undefined` = '123'; `refrenceNumber?`: `undefined` = '1'; `taxDeductible?`: `undefined` = false \}  \} ; `result`: \{ `data`: \{ `createFund?`: `undefined` ; `organizations`: \{ `funds`: \{ `_id`: `string` = '1'; `createdAt`: `string` = '2021-07-01T00:00:00.000Z'; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 1'; `refrenceNumber`: `string` = '123'; `taxDeductible`: `boolean` = true \}[]  \}[]  \}  \}  \} \| \{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = CREATE\_FUND\_MUTATION; `variables`: \{ `id?`: `undefined` = '123'; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 3'; `organizationId`: `undefined` = undefined; `refrenceNumber`: `string` = '789'; `taxDeductible`: `boolean` = true \}  \} ; `result`: \{ `data`: \{ `createFund`: \{ `_id`: `string` = '3' \} ; `organizations?`: `undefined`  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = UPDATE\_FUND\_MUTATION; `variables`: \{ `id`: `undefined` = undefined; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 1'; `organizationId?`: `undefined` = '123'; `refrenceNumber?`: `undefined` = '1'; `taxDeductible`: `boolean` = true \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/OrganizationFunds/OrganizationFundsMocks.tsx:163](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationFunds/OrganizationFundsMocks.tsx#L163)

___

### MOCKS\_UNARCHIVED\_FUND

• `Const` **MOCKS\_UNARCHIVED\_FUND**: (\{ `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_FUNDS; `variables`: \{ `id`: `undefined` = undefined; `isArchived?`: `undefined` = true \}  \} ; `result`: \{ `data`: \{ `organizations`: \{ `funds`: \{ `_id`: `string` = '1'; `createdAt`: `string` = '2021-07-01T00:00:00.000Z'; `isArchived`: `boolean` = true; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 1'; `refrenceNumber`: `string` = '123'; `taxDeductible`: `boolean` = true \}[]  \}[] ; `updateFund?`: `undefined`  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = UPDATE\_FUND\_MUTATION; `variables`: \{ `id`: `string` = '1'; `isArchived`: `boolean` = false \}  \} ; `result`: \{ `data`: \{ `organizations?`: `undefined` ; `updateFund`: \{ `_id`: `string` = '1' \}  \}  \}  \})[]

#### Defined in

[src/screens/OrganizationFunds/OrganizationFundsMocks.tsx:336](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationFunds/OrganizationFundsMocks.tsx#L336)
