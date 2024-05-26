[talawa-admin](../README.md) / [Modules](../modules.md) / screens/OrganizationFundCampaign/OrganizationFundCampaignMocks

# Module: screens/OrganizationFundCampaign/OrganizationFundCampaignMocks

## Table of contents

### Variables

- [EMPTY\_MOCKS](screens_OrganizationFundCampaign_OrganizationFundCampaignMocks.md#empty_mocks)
- [MOCKS](screens_OrganizationFundCampaign_OrganizationFundCampaignMocks.md#mocks)
- [MOCKS\_ERROR\_CREATE\_CAMPAIGN](screens_OrganizationFundCampaign_OrganizationFundCampaignMocks.md#mocks_error_create_campaign)
- [MOCKS\_ERROR\_DELETE\_CAMPAIGN](screens_OrganizationFundCampaign_OrganizationFundCampaignMocks.md#mocks_error_delete_campaign)
- [MOCKS\_ERROR\_UPDATE\_CAMPAIGN](screens_OrganizationFundCampaign_OrganizationFundCampaignMocks.md#mocks_error_update_campaign)
- [MOCK\_FUND\_CAMPAIGN\_ERROR](screens_OrganizationFundCampaign_OrganizationFundCampaignMocks.md#mock_fund_campaign_error)

## Variables

### EMPTY\_MOCKS

• `Const` **EMPTY\_MOCKS**: \{ `request`: \{ `query`: `DocumentNode` = FUND\_CAMPAIGN; `variables`: \{ `id`: `undefined` = undefined \}  \} ; `result`: \{ `data`: \{ `getFundById`: \{ `campaigns`: `never`[] = [] \}  \}  \}  \}[]

#### Defined in

[src/screens/OrganizationFundCampaign/OrganizationFundCampaignMocks.tsx:249](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationFundCampaign/OrganizationFundCampaignMocks.tsx#L249)

___

### MOCKS

• `Const` **MOCKS**: (\{ `request`: \{ `query`: `DocumentNode` = FUND\_CAMPAIGN; `variables`: \{ `currency?`: `undefined` = 'INR'; `endDate?`: `undefined` = '2/2/23'; `fundId?`: `undefined` = undefined; `fundingGoal?`: `undefined` = 1000; `id`: `undefined` = undefined; `name?`: `undefined` = 'ActionItemCategory 1 updated'; `startDate?`: `undefined` = '1/1/23' \}  \} ; `result`: \{ `data`: \{ `createFundraisingCampaign?`: `undefined` ; `getFundById`: \{ `campaigns`: \{ `_id`: `string` = '1'; `currency`: `string` = 'USD'; `endDate`: `string` = '2024-01-01'; `fundingGoal`: `number` = 100; `name`: `string` = 'Campaign 1'; `startDate`: `string` = '2024-01-01' \}[]  \} ; `removeFundraisingCampaign?`: `undefined` ; `updateFundraisingCampaign?`: `undefined`  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = CREATE\_CAMPAIGN\_MUTATION; `variables`: \{ `currency`: `string` = 'USD'; `endDate`: `string` = '2024-03-10'; `fundId`: `undefined` = undefined; `fundingGoal`: `number` = 100; `id?`: `undefined` = '123'; `name`: `string` = 'Campaign 1'; `startDate`: `string` = '2024-03-10' \}  \} ; `result`: \{ `data`: \{ `createFundraisingCampaign`: \{ `_id`: `string` = '3' \} ; `getFundById?`: `undefined` ; `removeFundraisingCampaign?`: `undefined` ; `updateFundraisingCampaign?`: `undefined`  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = UPDATE\_CAMPAIGN\_MUTATION; `variables`: \{ `currency`: `string` = 'INR'; `endDate`: `string` = '2024-03-10'; `fundId?`: `undefined` = undefined; `fundingGoal`: `number` = 1000; `id`: `string` = '1'; `name`: `string` = 'Campaign 4'; `startDate`: `string` = '2024-03-10' \}  \} ; `result`: \{ `data`: \{ `createFundraisingCampaign?`: `undefined` ; `getFundById?`: `undefined` ; `removeFundraisingCampaign?`: `undefined` ; `updateFundraisingCampaign`: \{ `_id`: `string` = '1' \}  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = DELETE\_CAMPAIGN\_MUTATION; `variables`: \{ `currency?`: `undefined` = 'INR'; `endDate?`: `undefined` = '2/2/23'; `fundId?`: `undefined` = undefined; `fundingGoal?`: `undefined` = 1000; `id`: `string` = '1'; `name?`: `undefined` = 'ActionItemCategory 1 updated'; `startDate?`: `undefined` = '1/1/23' \}  \} ; `result`: \{ `data`: \{ `createFundraisingCampaign?`: `undefined` ; `getFundById?`: `undefined` ; `removeFundraisingCampaign`: \{ `_id`: `string` = '1' \} ; `updateFundraisingCampaign?`: `undefined`  \}  \}  \})[]

#### Defined in

[src/screens/OrganizationFundCampaign/OrganizationFundCampaignMocks.tsx:8](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationFundCampaign/OrganizationFundCampaignMocks.tsx#L8)

___

### MOCKS\_ERROR\_CREATE\_CAMPAIGN

• `Const` **MOCKS\_ERROR\_CREATE\_CAMPAIGN**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = FUND\_CAMPAIGN; `variables`: \{ `currency?`: `undefined` = 'INR'; `endDate?`: `undefined` = '2/2/23'; `fundId?`: `undefined` = undefined; `fundingGoal?`: `undefined` = 1000; `id`: `undefined` = undefined; `name?`: `undefined` = 'ActionItemCategory 1 updated'; `startDate?`: `undefined` = '1/1/23' \}  \} ; `result`: \{ `data`: \{ `getFundById`: \{ `campaigns`: \{ `_id`: `string` = '1'; `currency`: `string` = 'USD'; `endDate`: `string` = '2021-01-01'; `fundingGoal`: `number` = 100; `name`: `string` = 'Campaign 1'; `startDate`: `string` = '2021-01-01' \}[]  \}  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = CREATE\_CAMPAIGN\_MUTATION; `variables`: \{ `currency`: `string` = 'USD'; `endDate`: `string` = '2024-03-10'; `fundId`: `undefined` = undefined; `fundingGoal`: `number` = 100; `id?`: `undefined` = '123'; `name`: `string` = 'Campaign 1'; `startDate`: `string` = '2024-03-10' \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/OrganizationFundCampaign/OrganizationFundCampaignMocks.tsx:109](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationFundCampaign/OrganizationFundCampaignMocks.tsx#L109)

___

### MOCKS\_ERROR\_DELETE\_CAMPAIGN

• `Const` **MOCKS\_ERROR\_DELETE\_CAMPAIGN**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = FUND\_CAMPAIGN; `variables`: \{ `id`: `undefined` = undefined \}  \} ; `result`: \{ `data`: \{ `getFundById`: \{ `campaigns`: \{ `_id`: `string` = '1'; `currency`: `string` = 'USD'; `endDate`: `string` = '2021-01-01'; `fundingGoal`: `number` = 100; `name`: `string` = 'Campaign 1'; `startDate`: `string` = '2021-01-01' \}[]  \}  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = DELETE\_CAMPAIGN\_MUTATION; `variables`: \{ `id`: `string` = '1' \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/OrganizationFundCampaign/OrganizationFundCampaignMocks.tsx:206](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationFundCampaign/OrganizationFundCampaignMocks.tsx#L206)

___

### MOCKS\_ERROR\_UPDATE\_CAMPAIGN

• `Const` **MOCKS\_ERROR\_UPDATE\_CAMPAIGN**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = FUND\_CAMPAIGN; `variables`: \{ `currency?`: `undefined` = 'INR'; `endDate?`: `undefined` = '2/2/23'; `fundingGoal?`: `undefined` = 1000; `id`: `undefined` = undefined; `name?`: `undefined` = 'ActionItemCategory 1 updated'; `startDate?`: `undefined` = '1/1/23' \}  \} ; `result`: \{ `data`: \{ `getFundById`: \{ `campaigns`: \{ `_id`: `string` = '1'; `currency`: `string` = 'USD'; `endDate`: `string` = '2021-01-01'; `fundingGoal`: `number` = 100; `name`: `string` = 'Campaign 1'; `startDate`: `string` = '2021-01-01' \}[]  \}  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = UPDATE\_CAMPAIGN\_MUTATION; `variables`: \{ `currency`: `string` = 'USD'; `endDate`: `string` = '2024-03-10'; `fundingGoal`: `number` = 100; `id`: `undefined` = undefined; `name`: `string` = 'Campaign 1'; `startDate`: `string` = '2024-03-10' \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/OrganizationFundCampaign/OrganizationFundCampaignMocks.tsx:158](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationFundCampaign/OrganizationFundCampaignMocks.tsx#L158)

___

### MOCK\_FUND\_CAMPAIGN\_ERROR

• `Const` **MOCK\_FUND\_CAMPAIGN\_ERROR**: \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = FUND\_CAMPAIGN; `variables`: \{ `id`: `undefined` = undefined \}  \}  \}[]

#### Defined in

[src/screens/OrganizationFundCampaign/OrganizationFundCampaignMocks.tsx:98](https://github.com/adi790uu/talawa-admin/blob/cdaad16/src/screens/OrganizationFundCampaign/OrganizationFundCampaignMocks.tsx#L98)
