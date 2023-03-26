module.exports = {
  someSidebar: {
    Introduction: ['about'],
    'Technical Overview': [
      'applications/architecture-overview',
      'applications/overview'
    ],
    'Developer Resources': [
      {
        Talawa: [
          'developers/talawa/talawa-introduction',
          'developers/talawa/talawa-lint',
        ]
      },
      {
        'Talawa API': [
          'developers/talawa-api/api-overview',
          'developers/talawa-api/api-design-guide',
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
          'features/organizations',
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
          'internships/internship-selection-criteria',
          'internships/conflicts-of-interest'
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
