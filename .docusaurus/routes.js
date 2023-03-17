import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '193'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '7c5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '978'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '4c2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '10f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'be8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '446'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'ecc'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'acd'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'acc'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/applications/architecture-overview',
        component: ComponentCreator('/docs/applications/architecture-overview', '922'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/applications/overview',
        component: ComponentCreator('/docs/applications/overview', 'b73'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/design/branding',
        component: ComponentCreator('/docs/design/branding', '366'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/design/ux/ux-design-system',
        component: ComponentCreator('/docs/design/ux/ux-design-system', 'ffd'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/design/ux/ux-talawa',
        component: ComponentCreator('/docs/design/ux/ux-talawa', '1f8'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/developers/talawa-admin/plugins/implementing-plugins',
        component: ComponentCreator('/docs/developers/talawa-admin/plugins/implementing-plugins', '6d9'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/developers/talawa-admin/plugins/implementing-plugins-example',
        component: ComponentCreator('/docs/developers/talawa-admin/plugins/implementing-plugins-example', '377'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/developers/talawa-admin/plugins/plugin-architecture',
        component: ComponentCreator('/docs/developers/talawa-admin/plugins/plugin-architecture', '12e'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/developers/talawa-admin/talawa-admin-introduction',
        component: ComponentCreator('/docs/developers/talawa-admin/talawa-admin-introduction', '1a9'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/developers/talawa-api/api-overview',
        component: ComponentCreator('/docs/developers/talawa-api/api-overview', '8a4'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/developers/talawa-api/authentication',
        component: ComponentCreator('/docs/developers/talawa-api/authentication', 'd95'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/developers/talawa-api/constraints/admin',
        component: ComponentCreator('/docs/developers/talawa-api/constraints/admin', '94a'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/developers/talawa-api/constraints/organization',
        component: ComponentCreator('/docs/developers/talawa-api/constraints/organization', '060'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/developers/talawa-api/constraints/user',
        component: ComponentCreator('/docs/developers/talawa-api/constraints/user', '899'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/developers/talawa-api/expectations',
        component: ComponentCreator('/docs/developers/talawa-api/expectations', 'a2f'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/developers/talawa-api/functionality',
        component: ComponentCreator('/docs/developers/talawa-api/functionality', 'fc1'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/developers/talawa-api/mutations',
        component: ComponentCreator('/docs/developers/talawa-api/mutations', '9e9'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/developers/talawa-api/schemas',
        component: ComponentCreator('/docs/developers/talawa-api/schemas', 'd40'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/developers/talawa/talawa-introduction',
        component: ComponentCreator('/docs/developers/talawa/talawa-introduction', '4d6'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/developers/talawa/talawa-lint',
        component: ComponentCreator('/docs/developers/talawa/talawa-lint', '4eb'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/doc1',
        component: ComponentCreator('/docs/doc1', 'e2f'),
        exact: true
      },
      {
        path: '/docs/features/admin-portal/admin-portal-overview',
        component: ComponentCreator('/docs/features/admin-portal/admin-portal-overview', 'eff'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/admin-role/admin-manage-members',
        component: ComponentCreator('/docs/features/admin-role/admin-manage-members', '778'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/admin-role/admin-messaging',
        component: ComponentCreator('/docs/features/admin-role/admin-messaging', '737'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/admin-role/admin-newsfeed',
        component: ComponentCreator('/docs/features/admin-role/admin-newsfeed', '7d9'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/admin-role/admin-role-overview',
        component: ComponentCreator('/docs/features/admin-role/admin-role-overview', '13d'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/coordinator-role/coordinator-role-overview',
        component: ComponentCreator('/docs/features/coordinator-role/coordinator-role-overview', '5c1'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/data-management/data-management-compression',
        component: ComponentCreator('/docs/features/data-management/data-management-compression', '76a'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/data-management/data-management-distribution',
        component: ComponentCreator('/docs/features/data-management/data-management-distribution', 'a2f'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/data-management/data-management-overview',
        component: ComponentCreator('/docs/features/data-management/data-management-overview', '827'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/data-management/data-management-retention',
        component: ComponentCreator('/docs/features/data-management/data-management-retention', '30e'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/data-management/data-management-storage',
        component: ComponentCreator('/docs/features/data-management/data-management-storage', 'f89'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/donations/donation-fees',
        component: ComponentCreator('/docs/features/donations/donation-fees', '193'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/donations/donations-overview',
        component: ComponentCreator('/docs/features/donations/donations-overview', '9ea'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/events/event-attendee-roster',
        component: ComponentCreator('/docs/features/events/event-attendee-roster', 'a57'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/events/event-create-events',
        component: ComponentCreator('/docs/features/events/event-create-events', 'd83'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/events/event-grouping',
        component: ComponentCreator('/docs/features/events/event-grouping', '434'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/events/event-overview',
        component: ComponentCreator('/docs/features/events/event-overview', 'fc9'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/events/event-paid-donation',
        component: ComponentCreator('/docs/features/events/event-paid-donation', 'f87'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/events/event-roles',
        component: ComponentCreator('/docs/features/events/event-roles', 'eb1'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/events/event-signup',
        component: ComponentCreator('/docs/features/events/event-signup', 'da8'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/features-introduction',
        component: ComponentCreator('/docs/features/features-introduction', '25f'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/members/members-access',
        component: ComponentCreator('/docs/features/members/members-access', '29e'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/members/members-banning',
        component: ComponentCreator('/docs/features/members/members-banning', 'd80'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/members/members-overview',
        component: ComponentCreator('/docs/features/members/members-overview', '51b'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/members/members-preapprovals',
        component: ComponentCreator('/docs/features/members/members-preapprovals', '8be'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/members/members-recovery',
        component: ComponentCreator('/docs/features/members/members-recovery', 'f6e'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/members/members-registration',
        component: ComponentCreator('/docs/features/members/members-registration', 'eff'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/members/members-roles',
        component: ComponentCreator('/docs/features/members/members-roles', 'cb3'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/messaging-and-chat/message-chat',
        component: ComponentCreator('/docs/features/messaging-and-chat/message-chat', '0b6'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/messaging-and-chat/message-messaging',
        component: ComponentCreator('/docs/features/messaging-and-chat/message-messaging', 'd25'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/messaging-and-chat/message-notifications',
        component: ComponentCreator('/docs/features/messaging-and-chat/message-notifications', '746'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/messaging-and-chat/message-voice-messaging',
        component: ComponentCreator('/docs/features/messaging-and-chat/message-voice-messaging', '8da'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/messaging-and-chat/messaging-and-chat-overview',
        component: ComponentCreator('/docs/features/messaging-and-chat/messaging-and-chat-overview', 'fc3'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/news feed/news-feed-overview',
        component: ComponentCreator('/docs/features/news feed/news-feed-overview', '8c3'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/news feed/pinned-posts',
        component: ComponentCreator('/docs/features/news feed/pinned-posts', 'da9'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/news feed/tagging-support',
        component: ComponentCreator('/docs/features/news feed/tagging-support', '548'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/notifications/follow-tag-support',
        component: ComponentCreator('/docs/features/notifications/follow-tag-support', 'e4d'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/notifications/notifications-overview',
        component: ComponentCreator('/docs/features/notifications/notifications-overview', '874'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/organisations/organisations-onboarding',
        component: ComponentCreator('/docs/features/organisations/organisations-onboarding', '061'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/features/organisations/organisations-overview',
        component: ComponentCreator('/docs/features/organisations/organisations-overview', '382'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/functionalities/core-functionalities',
        component: ComponentCreator('/docs/functionalities/core-functionalities', '6be'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/functionalities/implementing-plugins',
        component: ComponentCreator('/docs/functionalities/implementing-plugins', '6fe'),
        exact: true
      },
      {
        path: '/docs/functionalities/implementing-plugins-example',
        component: ComponentCreator('/docs/functionalities/implementing-plugins-example', '2aa'),
        exact: true
      },
      {
        path: '/docs/functionalities/plugin-architecture',
        component: ComponentCreator('/docs/functionalities/plugin-architecture', '1fa'),
        exact: true
      },
      {
        path: '/docs/internships/conflicts-of-interest',
        component: ComponentCreator('/docs/internships/conflicts-of-interest', 'c3f'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/internships/gsoc/gsoc-application-process',
        component: ComponentCreator('/docs/internships/gsoc/gsoc-application-process', 'a18'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/internships/gsoc/gsoc-introduction',
        component: ComponentCreator('/docs/internships/gsoc/gsoc-introduction', '233'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/internships/gsod/gsod-ideas',
        component: ComponentCreator('/docs/internships/gsod/gsod-ideas', '5c0'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/internships/gsod/gsod-ideas-2022',
        component: ComponentCreator('/docs/internships/gsod/gsod-ideas-2022', '76d'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/internships/internship-application-template',
        component: ComponentCreator('/docs/internships/internship-application-template', '7c4'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/internships/internship-ideas',
        component: ComponentCreator('/docs/internships/internship-ideas', '470'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/internships/internship-selection-criteria',
        component: ComponentCreator('/docs/internships/internship-selection-criteria', '09b'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/internships/outreachy/contribution-process',
        component: ComponentCreator('/docs/internships/outreachy/contribution-process', '7d4'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/internships/outreachy/getting-starteds',
        component: ComponentCreator('/docs/internships/outreachy/getting-starteds', '273'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/internships/outreachy/outreachy-introduction',
        component: ComponentCreator('/docs/internships/outreachy/outreachy-introduction', 'aaf'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/internships/palisadoes/palisadoes-introduction',
        component: ComponentCreator('/docs/internships/palisadoes/palisadoes-introduction', 'f77'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/mdx',
        component: ComponentCreator('/docs/mdx', '398'),
        exact: true
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ae2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
