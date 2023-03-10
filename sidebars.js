module.exports = {
  someSidebar: {
    Introduction: ['about'],
    'Technical Overview': [
      'applications/architecture-overview',
      'applications/overview'
    ],
    'Developer Resources': [
      {
        Talawa: ['developers/talawa/talawa-introduction']
      },
      {
        'Talawa API': [
          'developers/talawa-api/api-overview',
          {
            'Base Constraints': [
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
        'Talawa Admin': [
          'developers/talawa-admin/talawa-admin-introduction',

          {
            Plugins: [
              'developers/talawa-admin/plugins/plugin-architecture',
              'developers/talawa-admin/plugins/implementing-plugins',
              'developers/talawa-admin/plugins/implementing-plugins-example'
            ]
          }
        ]
      }
    ],
    'Requirements Docs': [
      {
        'Existing Features': ['functionalities/core-functionalities']
      },
      {
        'Desired Features': [
          'features/features-introduction',
          {
            'Admin Portal': ['features/admin-portal/admin-portal-overview'],
            'Admin Capabilities': [
              'features/admin-role/admin-role-overview',
              'features/admin-role/admin-messaging',
              'features/admin-role/admin-manage-members',
              'features/admin-role/admin-newsfeed'
            ],
            'Chat and Messaging': [
              'features/messaging-and-chat/messaging-and-chat-overview',
              'features/messaging-and-chat/message-chat',
              'features/messaging-and-chat/message-messaging',
              'features/messaging-and-chat/message-voice-messaging',
              'features/messaging-and-chat/message-notifications'
            ],
            'Coordinator Capabilities': [
              'features/coordinator-role/coordinator-role-overview'
            ],
            Events: [
              'features/events/event-overview',
              'features/events/event-create-events',
              'features/events/event-signup',
              'features/events/event-grouping',
              'features/events/event-roles',
              'features/events/event-attendee-roster',
              'features/events/event-paid-donation'
            ],
            Members: [
              'features/members/members-overview',
              'features/members/members-access',
              'features/members/members-roles',
              'features/members/members-preapprovals',
              'features/members/members-registration',
              'features/members/members-banning',
              'features/members/members-recovery'
            ],
            Donations: [
              'features/donations/donations-overview',
              'features/donations/donation-fees'
            ],
            'News feed': [
              'features/news feed/news-feed-overview',
              'features/news feed/tagging-support',
              'features/news feed/pinned-posts'
            ],
            Notifications: [
              'features/notifications/notifications-overview',
              'features/notifications/follow-tag-support'
            ],
            'Data Management': [
              'features/data-management/data-management-overview',
              'features/data-management/data-management-compression',
              'features/data-management/data-management-retention',
              'features/data-management/data-management-storage',
              'features/data-management/data-management-distribution'
            ],
            Organisations: [
              'features/organisations/organisations-overview',
              'features/organisations/organisations-onboarding'
            ]
          }
        ]
      }
    ],

    'UI/UX Design': [
      'design/branding',
      'design/ux/ux-talawa',
      'design/ux/ux-design-system'
    ],
    Internships: [
      {
        Overview: [
          'internships/internship-ideas',
          'internships/internship-application-template',
          'internships/internship-selection-criteria'
        ],
        GSoC: [
          'internships/gsoc/gsoc-introduction',
          'internships/gsoc/gsoc-application-process'
        ],
        Outreachy: [
          'internships/outreachy/outreachy-introduction',
          'internships/outreachy/contribution-process',
          'internships/outreachy/getting-starteds'
        ],
        GSoD: ['internships/gsod/gsod-ideas', 'internships/gsod/gsod-ideas-2022'],
        Palisadoes: ['internships/palisadoes/palisadoes-introduction']
      }
    ]
  }
}
