module.exports = {
  someSidebar: {
    "Getting Started": ["about-talawa", "about"],
    Talawa: [
      "talawa/talawa-introduction",
      "talawa/talawa-developer-environment",
      { type: 'link', label: 'Talawa(Docs)', href: 'http://base_url/talawa-docs/talawa/index.html',},
    ],
    "Talawa API": [
      "talawa-api/api-overview",
      {
        "Base Constraints": [
          "talawa-api/constraints/user",
          "talawa-api/constraints/organization",
          "talawa-api/constraints/admin",
        ],
      },
      "talawa-api/authentication",
      "talawa-api/functionality",
      "talawa-api/expectations",
      { type: 'link', label: 'API-Schema(Docs)', href: 'http://base_url/talawa-docs/talawa-api/schema/index.html',},
    ],
    "Talawa Admin": [
      "talawa-admin/talawa-admin-introduction",
      "talawa-admin/index",
      "talawa-admin/my-app.accept_organization_request_mutation",
      "talawa-admin/my-app.add_admin_mutation",
      "talawa-admin/my-app.admin_list",
      "talawa-admin/my-app.block_user_mutation",
      "talawa-admin/my-app.check_auth",
      "talawa-admin/my-app.create_event_mutation",
      "talawa-admin/my-app.create_organization_mutation",
      "talawa-admin/my-app.create_post_mutation",
      "talawa-admin/my-app.delete_event_mutation",
      "talawa-admin/my-app.delete_organization_mutation",
      "talawa-admin/my-app.delete_post_mutation",
      "talawa-admin/my-app.login_mutation",
      "talawa-admin/my-app",
      "talawa-admin/my-app.members_list",
      "talawa-admin/my-app.organization_event_list",
      "talawa-admin/my-app.organization_post_list",
      "talawa-admin/my-app.organizations_list",
      "talawa-admin/my-app.reject_organization_request_mutation",
      "talawa-admin/my-app.remove_admin_mutation",
      "talawa-admin/my-app.remove_member_mutation",
      "talawa-admin/my-app.signup_mutation",
      "talawa-admin/my-app.unblock_user_mutation",
      "talawa-admin/my-app.update_organization_mutation",
      "talawa-admin/my-app.update_user_mutation",
      "talawa-admin/my-app.user_list",
      "talawa-admin/my-app.user_organization_list",
    ],
    Applications: [
      "applications/architecture-overview",
      "applications/app-overview",
      "applications/admin-overview",
    ],
    "Existing Features": ["functionalities/core-functionalities"],
    "Desired Features": [
      "features/features-introduction",
      {
        Installation: ["features/installation/installation-overview"],
        "Admin Portal":["features/admin-portal/admin-portal-overview"],
        "Admin Capabilities": [
          "features/admin-role/admin-role-overview",
          "features/admin-role/admin-messaging",
          "features/admin-role/admin-manage-members",
          "features/admin-role/admin-newsfeed",
        ],
        Advertising: ["features/advertising/ads-overview"],
        "Chat and Messaging": [
          "features/messaging-and-chat/messaging-and-chat-overview",
          "features/messaging-and-chat/message-chat",
          "features/messaging-and-chat/message-messaging",
          "features/messaging-and-chat/message-voice-messaging",
          "features/messaging-and-chat/message-notifications",
        ],
        "Coordinator Capabilities": [
          "features/coordinator-role/coordinator-role-overview",
        ],
        Events: [
          "features/events/event-overview",
          "features/events/event-create-events",
          "features/events/event-signup",
          "features/events/event-grouping",
          "features/events/event-roles",
          "features/events/event-attendee-roster",
          "features/events/event-paid-donation",
        ],
        Members: [
          "features/members/members-overview",
          "features/members/members-access",
          "features/members/members-roles",
          "features/members/members-preapprovals",
          "features/members/members-registration",
          "features/members/members-banning",
          "features/members/members-recovery",
        ],
        Donations: [
          "features/donations/donations-overview",
          "features/donations/donation-fees",
        ],
        "News feed": [
          "features/news feed/news-feed-overview",
          "features/news feed/tagging-support",
          "features/news feed/pinned-posts",
        ],
        Notifications: [
          "features/notifications/notifications-overview",
          "features/notifications/follow-tag-support",
        ],
        "Data Management": [
          "features/data-management/data-management-overview",
          "features/data-management/data-management-compression",
          "features/data-management/data-management-retention",
          "features/data-management/data-management-storage",
          "features/data-management/data-management-distribution",
        ],
        Organisations: [
          "features/organisations/organisations-overview",
          "features/organisations/organisations-onboarding",
        ],
        Plugins: ["features/plugins/plugins-overview", "features/plugins/plugins-billing"],
        Misc: [
          "features/misc/misc-overview",
          "features/misc/misc-language-support",
        ],
      },
    ],
    Design: [
            "design/ux/ux-talawa",
            "design/ux/ux-design-system"],
    Branding: [
            "branding/branding-introduction",
            "branding/branding-logos",
            "branding/branding-color-palette",
            "branding/branding-typography"
    ],
    Internships:[{
        Overview: [
            'internships/internship-ideas',
            'internships/internship-application-template',
            'internships/internship-selection-criteria',
        ],
        GitHub: [
            'internships/github/github-introduction',
            'internships/github/github-application-process',
        ],
        GSoC: [
            'internships/gsoc/gsoc-introduction',
            'internships/gsoc/gsoc-application-process',
        ],
        GSoD: [
            'internships/gsod/gsod-ideas',
        ],
        Palisadoes: [
          'internships/palisadoes/palisadoes-introduction'
        ],
    }],
  },
};
