const sidebars = {
  docs: [
    "introduction/introduction",
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
      },

      {
        'Talawa API': [
          'developers/talawa-api/api-overview',
          'developers/talawa-api/api-design-guide',
          {
            'Base Constraints': [
              'developers/talawa-api/constraints/user',
              'developers/talawa-api/constraints/organization',
              'developers/talawa-api/constraints/admin',
              'developers/talawa-api/constraints/SuperAdmin'
            ]
          },
          collapsed: true,
          items: [
            "developers/talawa-api/api-overview",
            "developers/talawa-api/api-design-guide",
            {
              type: "category",
              label: "Base Constraints",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/talawa-api/constraints/user",
                "developers/talawa-api/constraints/organization",
                "developers/talawa-api/constraints/admin",
              ],
            },
            "developers/talawa-api/mutations",
            "developers/talawa-api/schemas",
            "developers/talawa-api/authentication",
            "developers/talawa-api/functionality",
            "developers/talawa-api/expectations",
          ],
        },
        {
          type: "category",
          label: "Talawa Admin",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "developers/talawa-admin/talawa-admin-introduction",
            {
              type: "category",
              label: "Plugins",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/talawa-admin/plugins/plugin-architecture",
                "developers/talawa-admin/plugins/implementing-plugins",
                "developers/talawa-admin/plugins/implementing-plugins-example",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Requirements Docs",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Existing Features",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: ["functionalities/core-functionalities"],
        },
        {
          type: "category",
          label: "Desired Features",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "features/features-introduction",
            {
              type: "category",
              label: "Admin Portal",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: ["features/admin-portal/admin-portal-overview"],
            },
            {
              type: "category",
              label: "Admin Capabilities",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "features/admin-role/admin-role-overview",
                "features/admin-role/admin-messaging",
                "features/admin-role/admin-manage-members",
                "features/admin-role/admin-newsfeed",
              ],
            },
            {
              type: "category",
              label: "Chat and Messaging",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "features/messaging-and-chat/messaging-and-chat-overview",
                "features/messaging-and-chat/message-chat",
                "features/messaging-and-chat/message-messaging",
                "features/messaging-and-chat/message-voice-messaging",
                "features/messaging-and-chat/message-notifications",
              ],
            },
            {
              type: "category",
              label: "Coordinator Capabilities",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: ["features/coordinator-role/coordinator-role-overview"],
            },
            {
              type: "category",
              label: "Events",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "features/events/event-overview",
                "features/events/event-create-events",
                "features/events/event-signup",
                "features/events/event-grouping",
                "features/events/event-roles",
                "features/events/event-attendee-roster",
                "features/events/event-paid-donation",
              ],
            },
            {
              type: "category",
              label: "Members",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "features/members/members-overview",
                "features/members/members-access",
                "features/members/members-roles",
                "features/members/members-preapprovals",
                "features/members/members-registration",
                "features/members/members-banning",
                "features/members/members-recovery",
              ],
            },
            {
              type: "category",
              label: "Donations",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "features/donations/donations-overview",
                "features/donations/donation-fees",
              ],
            },
            {
              type: "category",
              label: "Newsfeed",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "features/news feed/news-feed-overview",
                "features/news feed/tagging-support",
                "features/news feed/pinned-posts",
              ],
            },
            {
              type: "category",
              label: "Notifications",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "features/notifications/notifications-overview",
                "features/notifications/follow-tag-support",
              ],
            },
            {
              type: "category",
              label: "Data Management",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "features/data-management/data-management-overview",
                "features/data-management/data-management-compression",
                "features/data-management/data-management-retention",
                "features/data-management/data-management-storage",
                "features/data-management/data-management-distribution",
              ],
            },
            {
              type: "category",
              label: "Organisations",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "features/organisations/organisations-overview",
                "features/organisations/organisations-onboarding",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "UI/UX Design",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "design/branding",
        "design/ux/ux-talawa",
        "design/ux/ux-design-system",
      ],
    },
    {
      type: "category",
      label: "Internships",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "internships/internship-ideas",
        "internships/internship-application-template",
        "internships/internship-selection-criteria",
        "internships/conflicts-of-interest",
        {
          type: "category",
          label: "GSoC",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "internships/gsoc/gsoc-introduction",
            "internships/gsoc/gsoc-ideas",
            "internships/gsoc/gsoc-application-process",
          ],
        },
        {
          type: "category",
          label: "Outreachy",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "internships/outreachy/outreachy-introduction",
            "internships/outreachy/outreachy-ideas",
          ],
        },

        {
          type: "category",
          label: "GSoD",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "internships/gsod/gsod-ideas",
            "internships/gsod/gsod-ideas-2022",
          ],
        },

        {
          type: "category",
          label: "Palisadoes",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: ["internships/palisadoes/palisadoes-introduction"],
        },
      ],
    },
  ],
};

module.exports = sidebars;
