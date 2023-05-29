const sidebars = {
  docs: [
    'introduction/introduction',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index'
      },
      collapsed: false,
      items: [
        'introduction/about',
        'introduction/core-concepts',
        'introduction/roadmap'
      ]
    },
    {
      type: 'category',
      label: 'Developer Resources',
      link: {
        type: 'generated-index'
      },
      collapsed: true,
      items: [
        'developers/technical-introduction',
        'developers/contributing',
        {
          type: 'category',
          label: 'Talawa',
          link: {
            type: 'generated-index'
          },
          collapsed: true,
          items: [
            'developers/talawa/talawa-introduction',
            'developers/talawa/talawa-lint',
            'developers/talawa/flutter-testing'
          ]
        },
        {
          type: 'category',
          label: 'Talawa API',
          link: {
            type: 'generated-index'
          },
          collapsed: true,
          items: [
            'developers/talawa-api/api-overview',
            'developers/talawa-api/api-design-guide',
            {
              type: 'link',
              label: 'Schema Documentation',
              href: '/docs/schema'
            },
            {
              type: 'category',
              label: 'Base Constraints',
              link: {
                type: 'generated-index'
              },
              collapsed: true,
              items: [
                'developers/talawa-api/constraints/user',
                'developers/talawa-api/constraints/organization',
                'developers/talawa-api/constraints/admin'
              ]
            },
            'developers/talawa-api/mutations',
            'developers/talawa-api/schemas',
            'developers/talawa-api/authentication',
            'developers/talawa-api/functionality',
            'developers/talawa-api/expectations'
          ]
        },
        {
          type: 'category',
          label: 'Talawa Admin',
          link: {
            type: 'generated-index'
          },
          collapsed: true,
          items: [
            'developers/talawa-admin/talawa-admin-introduction',
            {
              type: 'category',
              label: 'Plugins',
              link: {
                type: 'generated-index'
              },
              collapsed: true,
              items: [
                'developers/talawa-admin/plugins/plugin-architecture',
                'developers/talawa-admin/plugins/implementing-plugins',
                'developers/talawa-admin/plugins/implementing-plugins-example'
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Requirements Docs',
      link: {
        type: 'generated-index'
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Existing Features',
          link: {
            type: 'generated-index'
          },
          collapsed: true,
          items: ['functionalities/core-functionalities']
        },
        {
          type: 'category',
          label: 'Desired Features',
          link: {
            type: 'generated-index'
          },
          collapsed: true,
          items: [
            'features/features-introduction',
            'features/admin-portal',
            'features/admin-role',
            'features/chat-and-messaging',
            'features/coordinator-role',
            'features/events',
            'features/members',
            'features/donations-and-fees',
            'features/news-feed',
            'features/notifications',
            'features/data-management',
            'features/organizations'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Git Guide',
      link: {
        type: 'generated-index'
      },
      collapsed: true,
      items: [
        'git-guide/quickstart',
        'git-guide/setup-git',
        'git-guide/get-talawa-code',
        'git-guide/pullrequest',
        'git-guide/collaborate',
        {
          type: 'category',
          label: 'Working copies',
          link: {
            type: 'doc',
            id: 'git-guide/Workingcopies/workingcopies'
          },
          collapsed: true,
          items: [
            'git-guide/Workingcopies/workflows',
            'git-guide/Workingcopies/usefulgitcommands'
          ]
        },

        {
          type: 'category',
          label: 'Using Git as you work',
          link: {
            type: 'doc',
            id: 'git-guide/gitworkflow'
          },
          collapsed: true,
          items: [
            'git-guide/Git working/Fork',
            'git-guide/Git working/Feature-branch',
            {
              type: 'category',
              label: 'Stage changes',
              link: {
                type: 'doc',
                id: 'git-guide/Git working/Stage changes/stage-changes'
              },
              collapsed: true,
              items: [
                'git-guide/Git working/Stage changes/status',
                'git-guide/Git working/Stage changes/stage-additions',
                'git-guide/Git working/Stage changes/stage-deletions'
              ]
            },
            'git-guide/Git working/commit-changes',
            'git-guide/Git working/push-commits'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'UI/UX Design',
      link: {
        type: 'generated-index'
      },
      collapsed: true,
      items: [
        'design/branding',
        'design/ux/ux-talawa',
        'design/ux/ux-design-system'
      ]
    },
    {
      type: 'category',
      label: 'Internships',
      link: {
        type: 'generated-index'
      },
      collapsed: true,
      items: [
        'internships/internship-ideas',
        'internships/internship-application-template',
        'internships/internship-selection-criteria',
        'internships/conflicts-of-interest',
        {
          type: 'category',
          label: 'GSoC',
          link: {
            type: 'generated-index'
          },
          collapsed: true,
          items: [
            'internships/gsoc/gsoc-introduction',
            'internships/gsoc/gsoc-ideas',
            'internships/gsoc/gsoc-application-process'
          ]
        },
        {
          type: 'category',
          label: 'Outreachy',
          link: {
            type: 'generated-index'
          },
          collapsed: true,
          items: [
            'internships/outreachy/outreachy-introduction',
            'internships/outreachy/outreachy-ideas'
          ]
        },

        {
          type: 'category',
          label: 'GSoD',
          link: {
            type: 'generated-index'
          },
          collapsed: true,
          items: [
            'internships/gsod/gsod-ideas',
            'internships/gsod/gsod-ideas-2022'
          ]
        },

        {
          type: 'category',
          label: 'Palisadoes',
          link: {
            type: 'generated-index'
          },
          collapsed: true,
          items: ['internships/palisadoes/palisadoes-introduction']
        }
      ]
    },
  ],
  apiNavbar: [
    {
      type: 'category',
      collapsed: false,
      label: 'API',
      items: [
        'talawa-api/modules',
        {
          type: 'category',
          label: 'Class',
          items: [
            'talawa-api/classes/authDirective',
            'talawa-api/classes/roleAuthDirective',
            'talawa-api/classes/applicationError',
            'talawa-api/classes/conflictError',
            'talawa-api/classes/inputValidationError',
            'talawa-api/classes/internalServerError',
            'talawa-api/classes/invalidFileTypeError',
            'talawa-api/classes/notFoundError',
            'talawa-api/classes/unauthenticatedError',
            'talawa-api/classes/unauthorizedError',
            'talawa-api/classes/validationError',
          ],
        },
        {
          type: 'category',
          label: 'Interface',
          items: [
            'talawa-api/interfaces/libraries_errors_applicationInterfaceError',
            'talawa-api/interfaces/middleware_isAuth_Interface_authdata',
            'talawa-api/interfaces/modelsInterfaceComment',
            'talawa-api/interfaces/modelsInterfaceDirectChat',
            'talawa-api/interfaces/modelsInterfaceDirectChatMessage', 
    
            'talawa-api/interfaces/modelsInterfaceDonation',
            'talawa-api/interfaces/modelsInterfaceEncodedImage',
            'talawa-api/interfaces/modelsInterfaceEvents',
            'talawa-api/interfaces/modelsInterfaceUserAttendee',
            'talawa-api/interfaces/modelsInterfaceEventProject',
    
            'talawa-api/interfaces/modelsInterfaceFile',
            'talawa-api/interfaces/modelsInterfaceGroup',
            'talawa-api/interfaces/modelsInterfaceGroupChat',
            'talawa-api/interfaces/modelsInterfaceGroupChatMessage',
            'talawa-api/interfaces/modelsInterfaceImageHash',
    
            'talawa-api/interfaces/modelsInterfaceLanguage',
            'talawa-api/interfaces/modelsInterfaceLanguageModel',
            'talawa-api/interfaces/modelsInterfaceMembershipRequest',
            'talawa-api/interfaces/modelsInterfaceMessage',
            'talawa-api/interfaces/modelsInterfaceMessageChat',
    
            'talawa-api/interfaces/modelsInterfaceOrganization',
            'talawa-api/interfaces/modelsInterfaceOrganizationTagUser',
            'talawa-api/interfaces/modelsInterfacePlugin',
            'talawa-api/interfaces/modelsInterfacePluginField',
            'talawa-api/interfaces/modelsInterfacePost', 
    
            'talawa-api/interfaces/modelsInterfaceTagUser',
            'talawa-api/interfaces/modelsInterfaceTask',
            'talawa-api/interfaces/modelsInterfaceUser',
            'talawa-api/interfaces/graphQLDateScalarConfig',
            'talawa-api/interfaces/graphQLDateTimeScalarConfig',
    
            'talawa-api/interfaces/graphQLEmailAddressScalarConfig',
            'talawa-api/interfaces/graphQLLatitudeScalarConfig',
            'talawa-api/interfaces/graphQLLongitudeScalarConfig',
            'talawa-api/interfaces/graphQLPhoneNumcalarConfig',
            'talawa-api/interfaces/graphQLPositiveIntScalarConfig',
    
            'talawa-api/interfaces/graphQLSubscriptionResolverObject',
            'talawa-api/interfaces/graphQLSubscriptionSubscriberObject',
            'talawa-api/interfaces/graphQLTimeScalarConfig',
            'talawa-api/interfaces/graphQLUploadScalarConfig',
            'talawa-api/interfaces/graphQLURLScalarConfig',
    
    
            'talawa-api/interfaces/utilitiesInterfaceAuthTokenPayload',
            'talawa-api/interfaces/utilitiesInterfaceMailFields',
    
          ],
        },
        {
          type: 'category',
          label: 'Modules',
          items: [
            'talawa-api/modules/config_appConfig',
            'talawa-api/modules/config_firebaseConfig',
            'talawa-api/modules/config',
            'talawa-api/modules/constants',
            'talawa-api/modules/db',

            'talawa-api/modules/directives_authDirective',
            'talawa-api/modules/directives_roleDirective',
            'talawa-api/modules/directives',
            'talawa-api/modules/middleware_isAuth',
            'talawa-api/modules/middleware',

            'talawa-api/modules/server',
            'talawa-api/modules/types_generatedGraphQLTypes',
            {
              type: 'category',
              label: 'Libraries',
              link: {
                type: 'generated-index'
              },
              collapsed: true,
              items: [
                'talawa-api/modules/libraries_errors_applicationError',
                'talawa-api/modules/libraries_errors_conflictError',

                'talawa-api/modules/libraries_errors_inputValidationError',
                'talawa-api/modules/libraries_errors_internalServerError',
                'talawa-api/modules/libraries_errors_invalidFileTypeError',
                'talawa-api/modules/libraries_errors_notFoundError',
                'talawa-api/modules/libraries_errors_unauthenticatedError',

                'talawa-api/modules/libraries_errors_unauthorizedError',
                'talawa-api/modules/libraries_errors_validationError',
                'talawa-api/modules/libraries_errors',
                'talawa-api/modules/libraries_logger',
                'talawa-api/modules/libraries_requestContext',

                'talawa-api/modules/libraries_requestTracing',
                'talawa-api/modules/libraries_validators_compareDates',
                'talawa-api/modules/libraries_validators_validatePassword',
                'talawa-api/modules/libraries_validators_validateString',
                'talawa-api/modules/libraries',
              ]
            },
            {
              type: 'category',
              label: 'Models',
              link: {
                type: 'generated-index'
              },
              collapsed: true,
              items: [
                'talawa-api/modules/models_Comment',
              'talawa-api/modules/models_DirectChat',
              'talawa-api/modules/models_DirectChatMessage',

              'talawa-api/modules/models_Donation',
              'talawa-api/modules/models_EncodedImage',
              'talawa-api/modules/models_Event',
              'talawa-api/modules/models_EventProject',
              'talawa-api/modules/models_File',

              'talawa-api/modules/models_Group',
              'talawa-api/modules/models_GroupChat',
              'talawa-api/modules/models_GroupChatMessage',
              'talawa-api/modules/models_ImageHash',
              'talawa-api/modules/models_Language',

              'talawa-api/modules/models_MembershipRequest',
              'talawa-api/modules/models_Message',
              'talawa-api/modules/models_MessageChat',
              'talawa-api/modules/models_Organization',
              'talawa-api/modules/models_OrganizationTagUser',

              'talawa-api/modules/models_Plugin',
              'talawa-api/modules/models_PluginField',
              'talawa-api/modules/models_Post',
              'talawa-api/modules/models_TagUser',
              'talawa-api/modules/models_Task',

              'talawa-api/modules/models_User',
              'talawa-api/modules/models',
              ]
            },
            {
              type: 'category',
              label: 'Resolvers',
              link: {
                type: 'generated-index'
              },
              collapsed: true,
              items: [
                'talawa-api/modules/resolvers_DirectChat_creator',
                'talawa-api/modules/resolvers_DirectChat_messages',
                'talawa-api/modules/resolvers_DirectChat_organizations',

                'talawa-api/modules/resolvers_DirectChat_users',
                'talawa-api/modules/resolvers_DirectChat',
                'talawa-api/modules/resolvers_DirectChatMessage_directChatMessageBelongsTo',
                'talawa-api/modules/resolvers_DirectChatMessage_receiver',
                'talawa-api/modules/resolvers_DirectChatMessage_sender',

                'talawa-api/modules/resolvers_DirectChatMessage',
                'talawa-api/modules/resolvers_GroupChat_creator',
                'talawa-api/modules/resolvers_GroupChat_messages',
                'talawa-api/modules/resolvers_GroupChat_organization',
                'talawa-api/modules/resolvers_GroupChat_users',

                'talawa-api/modules/resolvers_GroupChat',
                'talawa-api/modules/resolvers_GroupChatMessage_sender',
                'talawa-api/modules/resolvers_MembershipRequest_organization',
                'talawa-api/modules/resolvers_MembershipRequest_user',
                'talawa-api/modules/resolvers_MembershipRequest',

                'talawa-api/modules/resolvers_User',
                'talawa-api/modules/resolvers_UserTag_organization',
                'talawa-api/modules/resolvers_UserTag_parentTag',
                'talawa-api/modules/resolvers_UserTag',
                'talawa-api/modules/resolvers',

                {
                  type: 'category',
                  label: 'Mutations',
                  link: {
                    type: 'generated-index'
                  },
                  collapsed: true,
                  items: [
                    'talawa-api/modules/resolvers_Mutation_acceptAdmin',
                    'talawa-api/modules/resolvers_Mutation_acceptMembershipRequest',
                    'talawa-api/modules/resolvers_Mutation_addLanguageTranslation',
                    'talawa-api/modules/resolvers_Mutation_addOrganizationImage',
                    'talawa-api/modules/resolvers_Mutation_addUserImage',

                    'talawa-api/modules/resolvers_Mutation_addUserToGroupChat',
                    'talawa-api/modules/resolvers_Mutation_adminRemoveEvent',
                    'talawa-api/modules/resolvers_Mutation_adminRemoveGroup',
                    'talawa-api/modules/resolvers_Mutation_assignUserTag',
                    'talawa-api/modules/resolvers_Mutation_blockPluginCreationBySuperAdmin',

                    'talawa-api/modules/resolvers_Mutation_blockUser',
                    'talawa-api/modules/resolvers_Mutation_cancelMembershipRequest',
                    'talawa-api/modules/resolvers_Mutation_createAdmin',
                    'talawa-api/modules/resolvers_Mutation_createComment',
                    'talawa-api/modules/resolvers_Mutation_createDirectChat',

                    'talawa-api/modules/resolvers_Mutation_createDonation',
                    'talawa-api/modules/resolvers_Mutation_createEvent',
                    'talawa-api/modules/resolvers_Mutation_createEventProject',
                    'talawa-api/modules/resolvers_Mutation_createGroupChat',
                    'talawa-api/modules/resolvers_Mutation_createOrganization',

                    'talawa-api/modules/resolvers_Mutation_createMessageChat',
                    'talawa-api/modules/resolvers_Mutation_createPlugin',
                    'talawa-api/modules/resolvers_Mutation_createPost',
                    'talawa-api/modules/resolvers_Mutation_createTask',
                    'talawa-api/modules/resolvers_Mutation_createUserTag',

                    'talawa-api/modules/resolvers_Mutation_deleteDonationById',
                    'talawa-api/modules/resolvers_Mutation_forgotPassword',
                    'talawa-api/modules/resolvers_Mutation_joinPublicOrganization',
                    'talawa-api/modules/resolvers_Mutation_leaveOrganization',
                    'talawa-api/modules/resolvers_Mutation_likeComment',

                    'talawa-api/modules/resolvers_Mutation_likePost',
                    'talawa-api/modules/resolvers_Mutation_login',
                    'talawa-api/modules/resolvers_Mutation_logout',
                    'talawa-api/modules/resolvers_Mutation_otp',
                    'talawa-api/modules/resolvers_Mutation_recaptcha',

                    'talawa-api/modules/resolvers_Mutation_refreshToken',
                    'talawa-api/modules/resolvers_Mutation_registerForEvent',
                    'talawa-api/modules/resolvers_Mutation_rejectAdmin',
                    'talawa-api/modules/resolvers_Mutation_rejectMembershipRequest',
                    'talawa-api/modules/resolvers_Mutation_removeAdmin',

                    'talawa-api/modules/resolvers_Mutation_removeComment',
                    'talawa-api/modules/resolvers_Mutation_removeDirectChat',
                    'talawa-api/modules/resolvers_Mutation_removeEvent',
                    'talawa-api/modules/resolvers_Mutation_removeEventProject',
                    'talawa-api/modules/resolvers_Mutation_removeGroupChat',

                    'talawa-api/modules/resolvers_Mutation_removeMember',
                    'talawa-api/modules/resolvers_Mutation_removeOrganization',
                    'talawa-api/modules/resolvers_Mutation_removeOrganizationImage',
                    'talawa-api/modules/resolvers_Mutation_removePost',
                    'talawa-api/modules/resolvers_Mutation_removeTask',

                    'talawa-api/modules/resolvers_Mutation_removeUserFromGroupChat',
                    'talawa-api/modules/resolvers_Mutation_removeUserImage',
                    'talawa-api/modules/resolvers_Mutation_removeUserTag',
                    'talawa-api/modules/resolvers_Mutation_revokeRefreshTokenForUser',
                    'talawa-api/modules/resolvers_Mutation_saveFcmToken',

                    'talawa-api/modules/resolvers_Mutation_sendMembershipRequest',
                    'talawa-api/modules/resolvers_Mutation_sendMessageToDirectChat',
                    'talawa-api/modules/resolvers_Mutation_sendMessageToGroupChat',
                    'talawa-api/modules/resolvers_Mutation_signUp',
                    'talawa-api/modules/resolvers_Mutation_togglePostPin',

                    'talawa-api/modules/resolvers_Mutation_unassignUserTag',
                    'talawa-api/modules/resolvers_Mutation_unblockUser',
                    'talawa-api/modules/resolvers_Mutation_unlikeComment',
                    'talawa-api/modules/resolvers_Mutation_unlikePost',
                    'talawa-api/modules/resolvers_Mutation_unregisterForEventByUser',

                    'talawa-api/modules/resolvers_Mutation_updateEvent',
                    'talawa-api/modules/resolvers_Mutation_updateEventProject',
                    'talawa-api/modules/resolvers_Mutation_updateLanguage',
                    'talawa-api/modules/resolvers_Mutation_updateOrganization',
                    'talawa-api/modules/resolvers_Mutation_updatePluginInstalledOrgs',

                    'talawa-api/modules/resolvers_Mutation_updatePluginStatus',
                    'talawa-api/modules/resolvers_Mutation_updatePost',
                    'talawa-api/modules/resolvers_Mutation_updateTask',
                    'talawa-api/modules/resolvers_Mutation_updateUserPassword',
                    'talawa-api/modules/resolvers_Mutation_updateUserProfile',

                    'talawa-api/modules/resolvers_Mutation_updateUserTag',
                    'talawa-api/modules/resolvers_Mutation_updateUserType',
                    'talawa-api/modules/resolvers_Mutation',
                  ]
                },
                {
                  type: 'category',
                  label: 'Organization',
                  link: {
                    type: 'generated-index'
                  },
                  collapsed: true,
                  items: [
                    'talawa-api/modules/resolvers_Organization_admins',
                    'talawa-api/modules/resolvers_Organization_blockedUsers',

                    'talawa-api/modules/resolvers_Organization_creator',
                    'talawa-api/modules/resolvers_Organization_image',
                    'talawa-api/modules/resolvers_Organization_members',
                    'talawa-api/modules/resolvers_Organization_membershipRequest',
                    'talawa-api/modules/resolvers_Organization_pinnedPosts',

                    'talawa-api/modules/resolvers_Organization',
                  ]
                },
                {
                  type: 'category',
                  label: 'Query',
                  link: {
                    type: 'generated-index'
                  },
                  collapsed: true,
                  items: [
                    'talawa-api/modules/resolvers_Query_checkAuth',
                    'talawa-api/modules/resolvers_Query_comments',
                    'talawa-api/modules/resolvers_Query_commentsByPost',
                    'talawa-api/modules/resolvers_Query_directChatMessages',

                    'talawa-api/modules/resolvers_Query_directChats',
                    'talawa-api/modules/resolvers_Query_directChatsByUserID',
                    'talawa-api/modules/resolvers_Query_directChatsByChatID',
                    'talawa-api/modules/resolvers_Query_event',
                    'talawa-api/modules/resolvers_Query_events',

                    'talawa-api/modules/resolvers_Query_eventsByOrganization',
                    'talawa-api/modules/resolvers_Query_eventsByOrganizationConnection',
                    'talawa-api/modules/resolvers_Query_getDonationById',
                    'talawa-api/modules/resolvers_Query_getDonationByOrgId',
                    'talawa-api/modules/resolvers_Query_getDonationByOrgIdConnection',

                    'talawa-api/modules/resolvers_Query_getDonations',
                    'talawa-api/modules/resolvers_Query_getLanguage',
                    'talawa-api/modules/resolvers_Query_getPlugins',
                    'talawa-api/modules/resolvers_Query_groupChatMessages',
                    'talawa-api/modules/resolvers_Query_groupChats',

                    'talawa-api/modules/resolvers_Query_groups',
                    'talawa-api/modules/resolvers_Query_helperFunctions_getSort',
                    'talawa-api/modules/resolvers_Query_isUserRegister',
                    'talawa-api/modules/resolvers_Query_me',
                    'talawa-api/modules/resolvers_Query_myLanguage',

                    'talawa-api/modules/resolvers_Query_organizations',
                    'talawa-api/modules/resolvers_Query_organizationsConnection',
                    'talawa-api/modules/resolvers_Query_organizationsMemberConnection',
                    'talawa-api/modules/resolvers_Query_post',
                    'talawa-api/modules/resolvers_Query_posts',

                    'talawa-api/modules/resolvers_Query_postsByOrganization',
                    'talawa-api/modules/resolvers_Query_postsByOrganizationConnection',
                    'talawa-api/modules/resolvers_Query_registeredEventsByUser',
                    'talawa-api/modules/resolvers_Query_registerantsByEvent',
                    'talawa-api/modules/resolvers_Query_tasksByEvent',

                    'talawa-api/modules/resolvers_Query_tasksByUser',
                    'talawa-api/modules/resolvers_Query_user',
                    'talawa-api/modules/resolvers_Query_userLanguage',
                    'talawa-api/modules/resolvers_Query_users',
                    'talawa-api/modules/resolvers_Query_usersConnection',

                    'talawa-api/modules/resolvers_Query',
                  ]
                },
                {
                  type: 'category',
                  label: 'Subscription',
                  link: {
                    type: 'generated-index'
                  },
                  collapsed: true,
                  items: [
                    'talawa-api/modules/resolvers_Subscription_directMessageChat',
                    'talawa-api/modules/resolvers_Subscription_messageSentToDirectChat',
                    'talawa-api/modules/resolvers_Subscription_messageSentToGroupChat',
                    'talawa-api/modules/resolvers_Subscription',
                  ]
                },
              ]
            },
            {
              type: 'category',
              label: 'Utilities',
              link: {
                type: 'generated-index'
              },
              collapsed: true,
              items: [
                'talawa-api/modules/utilities_adminCheck',
                'talawa-api/modules/utilities_auth',

                'talawa-api/modules/utilities_copyToClipboard',
                'talawa-api/modules/utilities_deleteDuplicatedImage',
                'talawa-api/modules/utilities_deleteImage',
                'talawa-api/modules/utilities_encodedImageStorage_deletePreviousImage',
                'talawa-api/modules/utilities_encodedImageStorage_encodedImageExtentsionCheck',

                'talawa-api/modules/utilities_encodedImageStorage_uploadEncodedImage',
                'talawa-api/modules/utilities_graphqlConnectionFactory',
                'talawa-api/modules/utilities_imageAlreadyInDbCheck',
                'talawa-api/modules/utilities_imageExtensionCheck',
                'talawa-api/modules/utilities_mailer',

                'talawa-api/modules/utilities_reuploadDuplicateCheck',
                'talawa-api/modules/utilities_superAdminCheck',
                'talawa-api/modules/utilities_uploadImage',
                'talawa-api/modules/utilities',
              ],
            },
            {
              type: 'category',
              label: 'TypeDef',
              link: {
                type: 'generated-index'
              },
              collapsed: true,
              items: [
                'talawa-api/modules/typeDefs_directives',
                'talawa-api/modules/typeDefs_enums',
                'talawa-api/modules/typeDefs_inputs',
                'talawa-api/modules/typeDefs_interfaces',

                'talawa-api/modules/typeDefs_mutations',
                'talawa-api/modules/typeDefs_queries',
                'talawa-api/modules/typeDefs_scalars',
                'talawa-api/modules/typeDefs_subscriptions',
                'talawa-api/modules/typeDefs_types',

                'talawa-api/modules/typeDefs_unions',
                'talawa-api/modules/typeDefs',
              ]
            },
          ],
        },
      ],
    },
    
  ],
  ...require('./docs/schema/sidebar-schema.js')
}

module.exports = sidebars





