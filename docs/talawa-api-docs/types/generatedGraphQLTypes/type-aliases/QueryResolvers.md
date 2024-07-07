[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / QueryResolvers

# Type Alias: QueryResolvers\<ContextType, ParentType\>

\> **QueryResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"Query"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"Query"`\]

## Type declaration

### actionItemCategoriesByOrganization?

\> `optional` **actionItemCategoriesByOrganization**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ActionItemCategory"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryActionItemCategoriesByOrganizationArgs`](QueryActionItemCategoriesByOrganizationArgs.md), `"organizationId"`\>\>

### actionItemsByEvent?

\> `optional` **actionItemsByEvent**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ActionItem"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryActionItemsByEventArgs`](QueryActionItemsByEventArgs.md), `"eventId"`\>\>

### actionItemsByOrganization?

\> `optional` **actionItemsByOrganization**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ActionItem"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryActionItemsByOrganizationArgs`](QueryActionItemsByOrganizationArgs.md), `"organizationId"`\>\>

### adminPlugin?

\> `optional` **adminPlugin**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Plugin"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryAdminPluginArgs`](QueryAdminPluginArgs.md), `"orgId"`\>\>

### advertisementsConnection?

\> `optional` **advertisementsConnection**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"AdvertisementsConnection"`\]\>, `ParentType`, `ContextType`, `Partial`\<[`QueryAdvertisementsConnectionArgs`](QueryAdvertisementsConnectionArgs.md)\>\>

### agendaCategory?

\> `optional` **agendaCategory**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"AgendaCategory"`\], `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryAgendaCategoryArgs`](QueryAgendaCategoryArgs.md), `"id"`\>\>

### agendaItemByEvent?

\> `optional` **agendaItemByEvent**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"AgendaItem"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryAgendaItemByEventArgs`](QueryAgendaItemByEventArgs.md), `"relatedEventId"`\>\>

### agendaItemByOrganization?

\> `optional` **agendaItemByOrganization**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"AgendaItem"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryAgendaItemByOrganizationArgs`](QueryAgendaItemByOrganizationArgs.md), `"organizationId"`\>\>

### agendaItemCategoriesByOrganization?

\> `optional` **agendaItemCategoriesByOrganization**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"AgendaCategory"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryAgendaItemCategoriesByOrganizationArgs`](QueryAgendaItemCategoriesByOrganizationArgs.md), `"organizationId"`\>\>

### checkAuth?

\> `optional` **checkAuth**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"User"`\], `ParentType`, `ContextType`\>

### customDataByOrganization?

\> `optional` **customDataByOrganization**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"UserCustomData"`\][], `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryCustomDataByOrganizationArgs`](QueryCustomDataByOrganizationArgs.md), `"organizationId"`\>\>

### customFieldsByOrganization?

\> `optional` **customFieldsByOrganization**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"OrganizationCustomField"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryCustomFieldsByOrganizationArgs`](QueryCustomFieldsByOrganizationArgs.md), `"id"`\>\>

### directChatsByUserID?

\> `optional` **directChatsByUserID**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"DirectChat"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryDirectChatsByUserIdArgs`](QueryDirectChatsByUserIdArgs.md), `"id"`\>\>

### directChatsMessagesByChatID?

\> `optional` **directChatsMessagesByChatID**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"DirectChatMessage"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryDirectChatsMessagesByChatIdArgs`](QueryDirectChatsMessagesByChatIdArgs.md), `"id"`\>\>

### event?

\> `optional` **event**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Event"`\]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryEventArgs`](QueryEventArgs.md), `"id"`\>\>

### eventVolunteersByEvent?

\> `optional` **eventVolunteersByEvent**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"EventVolunteer"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryEventVolunteersByEventArgs`](QueryEventVolunteersByEventArgs.md), `"id"`\>\>

### eventsByOrganization?

\> `optional` **eventsByOrganization**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Event"`\]\>[]\>, `ParentType`, `ContextType`, `Partial`\<[`QueryEventsByOrganizationArgs`](QueryEventsByOrganizationArgs.md)\>\>

### eventsByOrganizationConnection?

\> `optional` **eventsByOrganizationConnection**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Event"`\][], `ParentType`, `ContextType`, `Partial`\<[`QueryEventsByOrganizationConnectionArgs`](QueryEventsByOrganizationConnectionArgs.md)\>\>

### fundsByOrganization?

\> `optional` **fundsByOrganization**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Fund"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryFundsByOrganizationArgs`](QueryFundsByOrganizationArgs.md), `"organizationId"`\>\>

### getAgendaItem?

\> `optional` **getAgendaItem**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"AgendaItem"`\]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryGetAgendaItemArgs`](QueryGetAgendaItemArgs.md), `"id"`\>\>

### getAgendaSection?

\> `optional` **getAgendaSection**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"AgendaSection"`\]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryGetAgendaSectionArgs`](QueryGetAgendaSectionArgs.md), `"id"`\>\>

### getAllAgendaItems?

\> `optional` **getAllAgendaItems**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"AgendaItem"`\]\>[]\>, `ParentType`, `ContextType`\>

### getAllNotesForAgendaItem?

\> `optional` **getAllNotesForAgendaItem**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Note"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryGetAllNotesForAgendaItemArgs`](QueryGetAllNotesForAgendaItemArgs.md), `"agendaItemId"`\>\>

### getCommunityData?

\> `optional` **getCommunityData**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Community"`\]\>, `ParentType`, `ContextType`\>

### getDonationById?

\> `optional` **getDonationById**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Donation"`\], `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryGetDonationByIdArgs`](QueryGetDonationByIdArgs.md), `"id"`\>\>

### getDonationByOrgId?

\> `optional` **getDonationByOrgId**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Donation"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryGetDonationByOrgIdArgs`](QueryGetDonationByOrgIdArgs.md), `"orgId"`\>\>

### getDonationByOrgIdConnection?

\> `optional` **getDonationByOrgIdConnection**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Donation"`\][], `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryGetDonationByOrgIdConnectionArgs`](QueryGetDonationByOrgIdConnectionArgs.md), `"orgId"`\>\>

### getEventAttendee?

\> `optional` **getEventAttendee**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"EventAttendee"`\]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryGetEventAttendeeArgs`](QueryGetEventAttendeeArgs.md), `"eventId"` \| `"userId"`\>\>

### getEventAttendeesByEventId?

\> `optional` **getEventAttendeesByEventId**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"EventAttendee"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryGetEventAttendeesByEventIdArgs`](QueryGetEventAttendeesByEventIdArgs.md), `"eventId"`\>\>

### getEventInvitesByUserId?

\> `optional` **getEventInvitesByUserId**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"EventAttendee"`\][], `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryGetEventInvitesByUserIdArgs`](QueryGetEventInvitesByUserIdArgs.md), `"userId"`\>\>

### getFundById?

\> `optional` **getFundById**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Fund"`\], `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryGetFundByIdArgs`](QueryGetFundByIdArgs.md), `"id"`\>\>

### getFundraisingCampaignById?

\> `optional` **getFundraisingCampaignById**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"FundraisingCampaign"`\], `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryGetFundraisingCampaignByIdArgs`](QueryGetFundraisingCampaignByIdArgs.md), `"id"`\>\>

### getFundraisingCampaignPledgeById?

\> `optional` **getFundraisingCampaignPledgeById**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"FundraisingCampaignPledge"`\], `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryGetFundraisingCampaignPledgeByIdArgs`](QueryGetFundraisingCampaignPledgeByIdArgs.md), `"id"`\>\>

### getNoteById?

\> `optional` **getNoteById**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Note"`\], `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryGetNoteByIdArgs`](QueryGetNoteByIdArgs.md), `"id"`\>\>

### getPlugins?

\> `optional` **getPlugins**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Plugin"`\]\>[]\>, `ParentType`, `ContextType`\>

### getVenueByOrgId?

\> `optional` **getVenueByOrgId**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Venue"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryGetVenueByOrgIdArgs`](QueryGetVenueByOrgIdArgs.md), `"orgId"`\>\>

### getlanguage?

\> `optional` **getlanguage**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Translation"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryGetlanguageArgs`](QueryGetlanguageArgs.md), `"lang_code"`\>\>

### hasSubmittedFeedback?

\> `optional` **hasSubmittedFeedback**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Boolean"`\]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryHasSubmittedFeedbackArgs`](QueryHasSubmittedFeedbackArgs.md), `"eventId"` \| `"userId"`\>\>

### isSampleOrganization?

\> `optional` **isSampleOrganization**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Boolean"`\], `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryIsSampleOrganizationArgs`](QueryIsSampleOrganizationArgs.md), `"id"`\>\>

### joinedOrganizations?

\> `optional` **joinedOrganizations**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Organization"`\]\>[]\>, `ParentType`, `ContextType`, `Partial`\<[`QueryJoinedOrganizationsArgs`](QueryJoinedOrganizationsArgs.md)\>\>

### me?

\> `optional` **me**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"UserData"`\], `ParentType`, `ContextType`\>

### myLanguage?

\> `optional` **myLanguage**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\]\>, `ParentType`, `ContextType`\>

### organizations?

\> `optional` **organizations**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Organization"`\]\>[]\>, `ParentType`, `ContextType`, `Partial`\<[`QueryOrganizationsArgs`](QueryOrganizationsArgs.md)\>\>

### organizationsConnection?

\> `optional` **organizationsConnection**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Organization"`\]\>[], `ParentType`, `ContextType`, `Partial`\<[`QueryOrganizationsConnectionArgs`](QueryOrganizationsConnectionArgs.md)\>\>

### organizationsMemberConnection?

\> `optional` **organizationsMemberConnection**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"UserConnection"`\], `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryOrganizationsMemberConnectionArgs`](QueryOrganizationsMemberConnectionArgs.md), `"orgId"`\>\>

### plugin?

\> `optional` **plugin**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Plugin"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryPluginArgs`](QueryPluginArgs.md), `"orgId"`\>\>

### post?

\> `optional` **post**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Post"`\]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryPostArgs`](QueryPostArgs.md), `"id"`\>\>

### registeredEventsByUser?

\> `optional` **registeredEventsByUser**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Event"`\]\>[]\>, `ParentType`, `ContextType`, `Partial`\<[`QueryRegisteredEventsByUserArgs`](QueryRegisteredEventsByUserArgs.md)\>\>

### registrantsByEvent?

\> `optional` **registrantsByEvent**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"User"`\]\>[]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryRegistrantsByEventArgs`](QueryRegistrantsByEventArgs.md), `"id"`\>\>

### user?

\> `optional` **user**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"UserData"`\], `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryUserArgs`](QueryUserArgs.md), `"id"`\>\>

### userLanguage?

\> `optional` **userLanguage**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryUserLanguageArgs`](QueryUserLanguageArgs.md), `"userId"`\>\>

### users?

\> `optional` **users**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"UserData"`\]\>[]\>, `ParentType`, `ContextType`, `Partial`\<[`QueryUsersArgs`](QueryUsersArgs.md)\>\>

### usersConnection?

\> `optional` **usersConnection**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"UserData"`\]\>[], `ParentType`, `ContextType`, `Partial`\<[`QueryUsersConnectionArgs`](QueryUsersConnectionArgs.md)\>\>

### venue?

\> `optional` **venue**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Venue"`\]\>, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`QueryVenueArgs`](QueryVenueArgs.md), `"id"`\>\>

## Defined in

[src/types/generatedGraphQLTypes.ts:4491](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/types/generatedGraphQLTypes.ts#L4491)
