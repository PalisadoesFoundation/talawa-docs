[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / ResolversTypes

# Type Alias: ResolversTypes

\> **ResolversTypes**: `object`

Mapping between all available schema types and the resolvers types

## Type declaration

### ActionItem

\> **ActionItem**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceActionItem`](../../../models/ActionItem/interfaces/InterfaceActionItem.md)\>

### ActionItemCategory

\> **ActionItemCategory**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceActionItemCategory`](../../../models/ActionItemCategory/interfaces/InterfaceActionItemCategory.md)\>

### ActionItemWhereInput

\> **ActionItemWhereInput**: [`ActionItemWhereInput`](ActionItemWhereInput.md)

### ActionItemsOrderByInput

\> **ActionItemsOrderByInput**: [`ActionItemsOrderByInput`](ActionItemsOrderByInput.md)

### Address

\> **Address**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Address`](Address.md)\>

### AddressInput

\> **AddressInput**: [`AddressInput`](AddressInput.md)

### Advertisement

\> **Advertisement**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceAdvertisement`](../../../models/Advertisement/interfaces/InterfaceAdvertisement.md)\>

### AdvertisementEdge

\> **AdvertisementEdge**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`AdvertisementEdge`](AdvertisementEdge.md), `"node"`\> & `object`\>

### AdvertisementType

\> **AdvertisementType**: [`AdvertisementType`](AdvertisementType.md)

### AdvertisementsConnection

\> **AdvertisementsConnection**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`AdvertisementsConnection`](AdvertisementsConnection.md), `"edges"`\> & `object`\>

### AgendaCategory

\> **AgendaCategory**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceAgendaCategory`](../../../models/AgendaCategory/interfaces/InterfaceAgendaCategory.md)\>

### AgendaItem

\> **AgendaItem**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceAgendaItem`](../../../models/AgendaItem/interfaces/InterfaceAgendaItem.md)\>

### AgendaSection

\> **AgendaSection**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceAgendaSection`](../../../models/AgendaSection/interfaces/InterfaceAgendaSection.md)\>

### AggregatePost

\> **AggregatePost**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`AggregatePost`](AggregatePost.md)\>

### AggregateUser

\> **AggregateUser**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`AggregateUser`](AggregateUser.md)\>

### Any

\> **Any**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"Any"`\]\[`"output"`\]\>

### AppUserProfile

\> **AppUserProfile**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceAppUserProfile`](../../../models/AppUserProfile/interfaces/InterfaceAppUserProfile.md)\>

### AuthData

\> **AuthData**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`AuthData`](AuthData.md), `"appUserProfile"` \| `"user"`\> & `object`\>

### Boolean

\> **Boolean**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]\>

### CampaignOrderByInput

\> **CampaignOrderByInput**: [`CampaignOrderByInput`](CampaignOrderByInput.md)

### CampaignWhereInput

\> **CampaignWhereInput**: [`CampaignWhereInput`](CampaignWhereInput.md)

### CheckIn

\> **CheckIn**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceCheckIn`](../../../models/CheckIn/interfaces/InterfaceCheckIn.md)\>

### CheckInCheckOutInput

\> **CheckInCheckOutInput**: [`CheckInCheckOutInput`](CheckInCheckOutInput.md)

### CheckInStatus

\> **CheckInStatus**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`CheckInStatus`](CheckInStatus.md), `"checkIn"` \| `"user"`\> & `object`\>

### CheckOut

\> **CheckOut**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`CheckOut`](CheckOut.md)\>

### Comment

\> **Comment**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceComment`](../../../models/Comment/interfaces/InterfaceComment.md)\>

### CommentInput

\> **CommentInput**: [`CommentInput`](CommentInput.md)

### Community

\> **Community**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceCommunity`](../../../models/Community/interfaces/InterfaceCommunity.md)\>

### ConnectionError

\> **ConnectionError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`ResolversUnionTypes`](ResolversUnionTypes.md)\<[`ResolversTypes`](ResolversTypes.md)\>\[`"ConnectionError"`\]\>

### ConnectionPageInfo

\> **ConnectionPageInfo**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`ResolversInterfaceTypes`](ResolversInterfaceTypes.md)\<[`ResolversTypes`](ResolversTypes.md)\>\[`"ConnectionPageInfo"`\]\>

### CountryCode

\> **CountryCode**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"CountryCode"`\]\[`"output"`\]\>

### CreateActionItemInput

\> **CreateActionItemInput**: [`CreateActionItemInput`](CreateActionItemInput.md)

### CreateAdminError

\> **CreateAdminError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`ResolversUnionTypes`](ResolversUnionTypes.md)\<[`ResolversTypes`](ResolversTypes.md)\>\[`"CreateAdminError"`\]\>

### CreateAdminPayload

\> **CreateAdminPayload**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`CreateAdminPayload`](CreateAdminPayload.md), `"user"` \| `"userErrors"`\> & `object`\>

### CreateAdvertisementInput

\> **CreateAdvertisementInput**: [`CreateAdvertisementInput`](CreateAdvertisementInput.md)

### CreateAdvertisementPayload

\> **CreateAdvertisementPayload**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`CreateAdvertisementPayload`](CreateAdvertisementPayload.md), `"advertisement"`\> & `object`\>

### CreateAgendaCategoryInput

\> **CreateAgendaCategoryInput**: [`CreateAgendaCategoryInput`](CreateAgendaCategoryInput.md)

### CreateAgendaItemInput

\> **CreateAgendaItemInput**: [`CreateAgendaItemInput`](CreateAgendaItemInput.md)

### CreateAgendaSectionInput

\> **CreateAgendaSectionInput**: [`CreateAgendaSectionInput`](CreateAgendaSectionInput.md)

### CreateCommentError

\> **CreateCommentError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`ResolversUnionTypes`](ResolversUnionTypes.md)\<[`ResolversTypes`](ResolversTypes.md)\>\[`"CreateCommentError"`\]\>

### CreateCommentPayload

\> **CreateCommentPayload**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`CreateCommentPayload`](CreateCommentPayload.md), `"comment"` \| `"userErrors"`\> & `object`\>

### CreateDirectChatError

\> **CreateDirectChatError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`ResolversUnionTypes`](ResolversUnionTypes.md)\<[`ResolversTypes`](ResolversTypes.md)\>\[`"CreateDirectChatError"`\]\>

### CreateMemberError

\> **CreateMemberError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`ResolversUnionTypes`](ResolversUnionTypes.md)\<[`ResolversTypes`](ResolversTypes.md)\>\[`"CreateMemberError"`\]\>

### CreateMemberPayload

\> **CreateMemberPayload**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`CreateMemberPayload`](CreateMemberPayload.md), `"organization"` \| `"userErrors"`\> & `object`\>

### CreateUserTagInput

\> **CreateUserTagInput**: [`CreateUserTagInput`](CreateUserTagInput.md)

### Currency

\> **Currency**: [`Currency`](Currency.md)

### CursorPaginationInput

\> **CursorPaginationInput**: [`CursorPaginationInput`](CursorPaginationInput.md)

### Date

\> **Date**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"Date"`\]\[`"output"`\]\>

### DateTime

\> **DateTime**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]\>

### DefaultConnectionPageInfo

\> **DefaultConnectionPageInfo**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`DefaultConnectionPageInfo`](DefaultConnectionPageInfo.md)\>

### DeleteAdvertisementPayload

\> **DeleteAdvertisementPayload**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`DeleteAdvertisementPayload`](DeleteAdvertisementPayload.md), `"advertisement"`\> & `object`\>

### DeletePayload

\> **DeletePayload**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`DeletePayload`](DeletePayload.md)\>

### DirectChat

\> **DirectChat**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceDirectChat`](../../../models/DirectChat/interfaces/InterfaceDirectChat.md)\>

### DirectChatMessage

\> **DirectChatMessage**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceDirectChatMessage`](../../../models/DirectChatMessage/interfaces/InterfaceDirectChatMessage.md)\>

### Donation

\> **Donation**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceDonation`](../../../models/Donation/interfaces/InterfaceDonation.md)\>

### DonationWhereInput

\> **DonationWhereInput**: [`DonationWhereInput`](DonationWhereInput.md)

### EditVenueInput

\> **EditVenueInput**: [`EditVenueInput`](EditVenueInput.md)

### EducationGrade

\> **EducationGrade**: [`EducationGrade`](EducationGrade.md)

### EmailAddress

\> **EmailAddress**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"EmailAddress"`\]\[`"output"`\]\>

### EmploymentStatus

\> **EmploymentStatus**: [`EmploymentStatus`](EmploymentStatus.md)

### Error

\> **Error**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`ResolversInterfaceTypes`](ResolversInterfaceTypes.md)\<[`ResolversTypes`](ResolversTypes.md)\>\[`"Error"`\]\>

### Event

\> **Event**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceEvent`](../../../models/Event/interfaces/InterfaceEvent.md)\>

### EventAttendee

\> **EventAttendee**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceEventAttendee`](../../../models/EventAttendee/interfaces/InterfaceEventAttendee.md)\>

### EventAttendeeInput

\> **EventAttendeeInput**: [`EventAttendeeInput`](EventAttendeeInput.md)

### EventInput

\> **EventInput**: [`EventInput`](EventInput.md)

### EventOrderByInput

\> **EventOrderByInput**: [`EventOrderByInput`](EventOrderByInput.md)

### EventVolunteer

\> **EventVolunteer**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceEventVolunteer`](../../../models/EventVolunteer/interfaces/InterfaceEventVolunteer.md)\>

### EventVolunteerGroup

\> **EventVolunteerGroup**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceEventVolunteerGroup`](../../../models/EventVolunteerGroup/interfaces/InterfaceEventVolunteerGroup.md)\>

### EventVolunteerGroupInput

\> **EventVolunteerGroupInput**: [`EventVolunteerGroupInput`](EventVolunteerGroupInput.md)

### EventVolunteerInput

\> **EventVolunteerInput**: [`EventVolunteerInput`](EventVolunteerInput.md)

### EventVolunteerResponse

\> **EventVolunteerResponse**: [`EventVolunteerResponse`](EventVolunteerResponse.md)

### EventWhereInput

\> **EventWhereInput**: [`EventWhereInput`](EventWhereInput.md)

### ExtendSession

\> **ExtendSession**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`ExtendSession`](ExtendSession.md)\>

### Feedback

\> **Feedback**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceFeedback`](../../../models/Feedback/interfaces/InterfaceFeedback.md)\>

### FeedbackInput

\> **FeedbackInput**: [`FeedbackInput`](FeedbackInput.md)

### FieldError

\> **FieldError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`ResolversInterfaceTypes`](ResolversInterfaceTypes.md)\<[`ResolversTypes`](ResolversTypes.md)\>\[`"FieldError"`\]\>

### Float

\> **Float**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"Float"`\]\[`"output"`\]\>

### ForgotPasswordData

\> **ForgotPasswordData**: [`ForgotPasswordData`](ForgotPasswordData.md)

### Frequency

\> **Frequency**: [`Frequency`](Frequency.md)

### Fund

\> **Fund**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceFund`](../../../models/Fund/interfaces/InterfaceFund.md)\>

### FundCampaignInput

\> **FundCampaignInput**: [`FundCampaignInput`](FundCampaignInput.md)

### FundCampaignPledgeInput

\> **FundCampaignPledgeInput**: [`FundCampaignPledgeInput`](FundCampaignPledgeInput.md)

### FundInput

\> **FundInput**: [`FundInput`](FundInput.md)

### FundOrderByInput

\> **FundOrderByInput**: [`FundOrderByInput`](FundOrderByInput.md)

### FundWhereInput

\> **FundWhereInput**: [`FundWhereInput`](FundWhereInput.md)

### FundraisingCampaign

\> **FundraisingCampaign**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceFundraisingCampaign`](../../../models/FundraisingCampaign/interfaces/InterfaceFundraisingCampaign.md)\>

### FundraisingCampaignPledge

\> **FundraisingCampaignPledge**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceFundraisingCampaignPledges`](../../../models/FundraisingCampaignPledge/interfaces/InterfaceFundraisingCampaignPledges.md)\>

### Gender

\> **Gender**: [`Gender`](Gender.md)

### Group

\> **Group**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceGroup`](../../../models/Group/interfaces/InterfaceGroup.md)\>

### GroupChat

\> **GroupChat**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceGroupChat`](../../../models/GroupChat/interfaces/InterfaceGroupChat.md)\>

### GroupChatMessage

\> **GroupChatMessage**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceGroupChatMessage`](../../../models/GroupChatMessage/interfaces/InterfaceGroupChatMessage.md)\>

### ID

\> **ID**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]\>

### Int

\> **Int**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"Int"`\]\[`"output"`\]\>

### InvalidCursor

\> **InvalidCursor**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InvalidCursor`](InvalidCursor.md)\>

### ItemType

\> **ItemType**: [`ItemType`](ItemType.md)

### JSON

\> **JSON**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"JSON"`\]\[`"output"`\]\>

### Language

\> **Language**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceLanguage`](../../../models/Language/interfaces/InterfaceLanguage.md)\>

### LanguageInput

\> **LanguageInput**: [`LanguageInput`](LanguageInput.md)

### LanguageModel

\> **LanguageModel**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`LanguageModel`](LanguageModel.md)\>

### Latitude

\> **Latitude**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"Latitude"`\]\[`"output"`\]\>

### LoginInput

\> **LoginInput**: [`LoginInput`](LoginInput.md)

### Longitude

\> **Longitude**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"Longitude"`\]\[`"output"`\]\>

### MaritalStatus

\> **MaritalStatus**: [`MaritalStatus`](MaritalStatus.md)

### MaximumLengthError

\> **MaximumLengthError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`MaximumLengthError`](MaximumLengthError.md)\>

### MaximumValueError

\> **MaximumValueError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`MaximumValueError`](MaximumValueError.md)\>

### MemberNotFoundError

\> **MemberNotFoundError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`MemberNotFoundError`](MemberNotFoundError.md)\>

### MembershipRequest

\> **MembershipRequest**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceMembershipRequest`](../../../models/MembershipRequest/interfaces/InterfaceMembershipRequest.md)\>

### MembershipRequestsWhereInput

\> **MembershipRequestsWhereInput**: [`MembershipRequestsWhereInput`](MembershipRequestsWhereInput.md)

### Message

\> **Message**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceMessage`](../../../models/Message/interfaces/InterfaceMessage.md)\>

### MessageChat

\> **MessageChat**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceMessageChat`](../../../models/MessageChat/interfaces/InterfaceMessageChat.md)\>

### MessageChatInput

\> **MessageChatInput**: [`MessageChatInput`](MessageChatInput.md)

### MinimumLengthError

\> **MinimumLengthError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`MinimumLengthError`](MinimumLengthError.md)\>

### MinimumValueError

\> **MinimumValueError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`MinimumValueError`](MinimumValueError.md)\>

### Mutation

\> **Mutation**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<`object`\>

### Note

\> **Note**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceNote`](../../../models/Note/interfaces/InterfaceNote.md)\>

### NoteInput

\> **NoteInput**: [`NoteInput`](NoteInput.md)

### OTPInput

\> **OTPInput**: [`OtpInput`](OtpInput.md)

### Organization

\> **Organization**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceOrganization`](../../../models/Organization/interfaces/InterfaceOrganization.md)\>

### OrganizationCustomField

\> **OrganizationCustomField**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`OrganizationCustomField`](OrganizationCustomField.md)\>

### OrganizationInfoNode

\> **OrganizationInfoNode**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`OrganizationInfoNode`](OrganizationInfoNode.md), `"creator"`\> & `object`\>

### OrganizationInput

\> **OrganizationInput**: [`OrganizationInput`](OrganizationInput.md)

### OrganizationMemberNotFoundError

\> **OrganizationMemberNotFoundError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`OrganizationMemberNotFoundError`](OrganizationMemberNotFoundError.md)\>

### OrganizationNotFoundError

\> **OrganizationNotFoundError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`OrganizationNotFoundError`](OrganizationNotFoundError.md)\>

### OrganizationOrderByInput

\> **OrganizationOrderByInput**: [`OrganizationOrderByInput`](OrganizationOrderByInput.md)

### OrganizationWhereInput

\> **OrganizationWhereInput**: [`OrganizationWhereInput`](OrganizationWhereInput.md)

### OtpData

\> **OtpData**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`OtpData`](OtpData.md)\>

### PageInfo

\> **PageInfo**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`PageInfo`](PageInfo.md)\>

### PaginationDirection

\> **PaginationDirection**: [`PaginationDirection`](PaginationDirection.md)

### PhoneNumber

\> **PhoneNumber**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"PhoneNumber"`\]\[`"output"`\]\>

### PledgeOrderByInput

\> **PledgeOrderByInput**: [`PledgeOrderByInput`](PledgeOrderByInput.md)

### Plugin

\> **Plugin**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfacePlugin`](../../../models/Plugin/interfaces/InterfacePlugin.md)\>

### PluginField

\> **PluginField**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfacePluginField`](../../../models/PluginField/interfaces/InterfacePluginField.md)\>

### PluginFieldInput

\> **PluginFieldInput**: [`PluginFieldInput`](PluginFieldInput.md)

### PluginInput

\> **PluginInput**: [`PluginInput`](PluginInput.md)

### PositiveInt

\> **PositiveInt**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"PositiveInt"`\]\[`"output"`\]\>

### Post

\> **Post**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfacePost`](../../../models/Post/interfaces/InterfacePost.md)\>

### PostEdge

\> **PostEdge**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`PostEdge`](PostEdge.md), `"node"`\> & `object`\>

### PostInput

\> **PostInput**: [`PostInput`](PostInput.md)

### PostNotFoundError

\> **PostNotFoundError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`PostNotFoundError`](PostNotFoundError.md)\>

### PostOrderByInput

\> **PostOrderByInput**: [`PostOrderByInput`](PostOrderByInput.md)

### PostUpdateInput

\> **PostUpdateInput**: [`PostUpdateInput`](PostUpdateInput.md)

### PostWhereInput

\> **PostWhereInput**: [`PostWhereInput`](PostWhereInput.md)

### PostsConnection

\> **PostsConnection**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`PostsConnection`](PostsConnection.md), `"edges"`\> & `object`\>

### Query

\> **Query**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<`object`\>

### RecaptchaVerification

\> **RecaptchaVerification**: [`RecaptchaVerification`](RecaptchaVerification.md)

### RecurrenceRule

\> **RecurrenceRule**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceRecurrenceRule`](../../../models/RecurrenceRule/interfaces/InterfaceRecurrenceRule.md)\>

### RecurrenceRuleInput

\> **RecurrenceRuleInput**: [`RecurrenceRuleInput`](RecurrenceRuleInput.md)

### RecurringEventMutationType

\> **RecurringEventMutationType**: [`RecurringEventMutationType`](RecurringEventMutationType.md)

### SocialMediaUrls

\> **SocialMediaUrls**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`SocialMediaUrls`](SocialMediaUrls.md)\>

### SocialMediaUrlsInput

\> **SocialMediaUrlsInput**: [`SocialMediaUrlsInput`](SocialMediaUrlsInput.md)

### SortedByOrder

\> **SortedByOrder**: [`SortedByOrder`](SortedByOrder.md)

### Status

\> **Status**: [`Status`](Status.md)

### String

\> **String**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

### Subscription

\> **Subscription**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<`object`\>

### Time

\> **Time**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"Time"`\]\[`"output"`\]\>

### ToggleUserTagAssignInput

\> **ToggleUserTagAssignInput**: [`ToggleUserTagAssignInput`](ToggleUserTagAssignInput.md)

### Translation

\> **Translation**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Translation`](Translation.md)\>

### Type

\> **Type**: [`Type`](Type.md)

### URL

\> **URL**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"URL"`\]\[`"output"`\]\>

### UnauthenticatedError

\> **UnauthenticatedError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`UnauthenticatedError`](UnauthenticatedError.md)\>

### UnauthorizedError

\> **UnauthorizedError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`UnauthorizedError`](UnauthorizedError.md)\>

### UpdateActionItemCategoryInput

\> **UpdateActionItemCategoryInput**: [`UpdateActionItemCategoryInput`](UpdateActionItemCategoryInput.md)

### UpdateActionItemInput

\> **UpdateActionItemInput**: [`UpdateActionItemInput`](UpdateActionItemInput.md)

### UpdateAdvertisementInput

\> **UpdateAdvertisementInput**: [`UpdateAdvertisementInput`](UpdateAdvertisementInput.md)

### UpdateAdvertisementPayload

\> **UpdateAdvertisementPayload**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`UpdateAdvertisementPayload`](UpdateAdvertisementPayload.md), `"advertisement"`\> & `object`\>

### UpdateAgendaCategoryInput

\> **UpdateAgendaCategoryInput**: [`UpdateAgendaCategoryInput`](UpdateAgendaCategoryInput.md)

### UpdateAgendaItemInput

\> **UpdateAgendaItemInput**: [`UpdateAgendaItemInput`](UpdateAgendaItemInput.md)

### UpdateAgendaSectionInput

\> **UpdateAgendaSectionInput**: [`UpdateAgendaSectionInput`](UpdateAgendaSectionInput.md)

### UpdateCommunityInput

\> **UpdateCommunityInput**: [`UpdateCommunityInput`](UpdateCommunityInput.md)

### UpdateEventInput

\> **UpdateEventInput**: [`UpdateEventInput`](UpdateEventInput.md)

### UpdateEventVolunteerGroupInput

\> **UpdateEventVolunteerGroupInput**: [`UpdateEventVolunteerGroupInput`](UpdateEventVolunteerGroupInput.md)

### UpdateEventVolunteerInput

\> **UpdateEventVolunteerInput**: [`UpdateEventVolunteerInput`](UpdateEventVolunteerInput.md)

### UpdateFundCampaignInput

\> **UpdateFundCampaignInput**: [`UpdateFundCampaignInput`](UpdateFundCampaignInput.md)

### UpdateFundCampaignPledgeInput

\> **UpdateFundCampaignPledgeInput**: [`UpdateFundCampaignPledgeInput`](UpdateFundCampaignPledgeInput.md)

### UpdateFundInput

\> **UpdateFundInput**: [`UpdateFundInput`](UpdateFundInput.md)

### UpdateNoteInput

\> **UpdateNoteInput**: [`UpdateNoteInput`](UpdateNoteInput.md)

### UpdateOrganizationInput

\> **UpdateOrganizationInput**: [`UpdateOrganizationInput`](UpdateOrganizationInput.md)

### UpdateUserInput

\> **UpdateUserInput**: [`UpdateUserInput`](UpdateUserInput.md)

### UpdateUserPasswordInput

\> **UpdateUserPasswordInput**: [`UpdateUserPasswordInput`](UpdateUserPasswordInput.md)

### UpdateUserTagInput

\> **UpdateUserTagInput**: [`UpdateUserTagInput`](UpdateUserTagInput.md)

### Upload

\> **Upload**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Scalars`](Scalars.md)\[`"Upload"`\]\[`"output"`\]\>

### User

\> **User**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceUser`](../../../models/User/interfaces/InterfaceUser.md)\>

### UserAndOrganizationInput

\> **UserAndOrganizationInput**: [`UserAndOrganizationInput`](UserAndOrganizationInput.md)

### UserConnection

\> **UserConnection**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`UserConnection`](UserConnection.md), `"edges"`\> & `object`\>

### UserCustomData

\> **UserCustomData**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`UserCustomData`](UserCustomData.md)\>

### UserData

\> **UserData**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`UserData`](UserData.md), `"appUserProfile"` \| `"user"`\> & `object`\>

### UserFamily

\> **UserFamily**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceUserFamily`](../../../models/userFamily/interfaces/InterfaceUserFamily.md)\>

### UserInput

\> **UserInput**: [`UserInput`](UserInput.md)

### UserNotAuthorizedAdminError

\> **UserNotAuthorizedAdminError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`UserNotAuthorizedAdminError`](UserNotAuthorizedAdminError.md)\>

### UserNotAuthorizedError

\> **UserNotAuthorizedError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`UserNotAuthorizedError`](UserNotAuthorizedError.md)\>

### UserNotFoundError

\> **UserNotFoundError**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`UserNotFoundError`](UserNotFoundError.md)\>

### UserOrderByInput

\> **UserOrderByInput**: [`UserOrderByInput`](UserOrderByInput.md)

### UserPhone

\> **UserPhone**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`UserPhone`](UserPhone.md)\>

### UserPhoneInput

\> **UserPhoneInput**: [`UserPhoneInput`](UserPhoneInput.md)

### UserTag

\> **UserTag**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceOrganizationTagUser`](../../../models/OrganizationTagUser/interfaces/InterfaceOrganizationTagUser.md)\>

### UserTagsConnection

\> **UserTagsConnection**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`UserTagsConnection`](UserTagsConnection.md), `"edges"`\> & `object`\>

### UserTagsConnectionEdge

\> **UserTagsConnectionEdge**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`UserTagsConnectionEdge`](UserTagsConnectionEdge.md), `"node"`\> & `object`\>

### UserType

\> **UserType**: [`UserType`](UserType.md)

### UserWhereInput

\> **UserWhereInput**: [`UserWhereInput`](UserWhereInput.md)

### UsersConnection

\> **UsersConnection**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`UsersConnection`](UsersConnection.md), `"edges"`\> & `object`\>

### UsersConnectionEdge

\> **UsersConnectionEdge**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`UsersConnectionEdge`](UsersConnectionEdge.md), `"node"`\> & `object`\>

### Venue

\> **Venue**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`InterfaceVenue`](../../../models/Venue/interfaces/InterfaceVenue.md)\>

### VenueInput

\> **VenueInput**: [`VenueInput`](VenueInput.md)

### VenueOrderByInput

\> **VenueOrderByInput**: [`VenueOrderByInput`](VenueOrderByInput.md)

### VenueWhereInput

\> **VenueWhereInput**: [`VenueWhereInput`](VenueWhereInput.md)

### WeekDays

\> **WeekDays**: [`WeekDays`](WeekDays.md)

### createChatInput

\> **createChatInput**: [`CreateChatInput`](CreateChatInput.md)

### createDirectChatPayload

\> **createDirectChatPayload**: [`ResolverTypeWrapper`](ResolverTypeWrapper.md)\<[`Omit`](Omit.md)\<[`CreateDirectChatPayload`](CreateDirectChatPayload.md), `"directChat"` \| `"userErrors"`\> & `object`\>

### createGroupChatInput

\> **createGroupChatInput**: [`CreateGroupChatInput`](CreateGroupChatInput.md)

### createUserFamilyInput

\> **createUserFamilyInput**: [`CreateUserFamilyInput`](CreateUserFamilyInput.md)

## Defined in

[src/types/generatedGraphQLTypes.ts:3250](https://github.com/PalisadoesFoundation/talawa-api/blob/1f38da5423898626c6ebfa24896a9c3d008195c6/src/types/generatedGraphQLTypes.ts#L3250)
