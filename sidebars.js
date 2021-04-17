module.exports = {
  someSidebar: {
    "Getting Started": ["about-talawa", "about"],
    Applications: [
      "applications/architecture-overview",
      "applications/app-overview",
      "applications/admin-overview",
    ],
    "Talawa API": [
      "talawaApi/api-overview",
      {
        "Base Constraints": [
          "talawaApi/constraints/user",
          "talawaApi/constraints/organization",
          "talawaApi/constraints/admin",
        ],
      },
      "talawaApi/authentication",
      "talawaApi/functionality",
      "talawaApi/expectations",
    ],
    "Existing Features": ["functionalities/core-functionalities"],
    "Desired Features": [
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
        Plugins: ["features/plugins/plugins-overview"],
        Misc: [
          "features/misc/misc-overview",
          "features/misc/misc-language-support",
        ],
      },
    ],
    Branding: ["branding/branding-introduction", "branding/branding-logos"],
    Internships:[{
        GitHub: [
            'internships/github/github-introduction',
            'internships/github/github-application-process',
            'internships/github/github-application-template',
            'internships/github/github-selection-criteria',
            'internships/github/github-ideas'],
        GSoC: [
            'internships/gsoc/gsoc-introduction',
            'internships/gsoc/gsoc-application-process',
            'internships/gsoc/gsoc-application-template',
            'internships/gsoc/gsoc-selection-criteria',
            'internships/gsoc/gsoc-ideas'],
    }],
  },
};
