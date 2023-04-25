const sidebars = {
	docs: [
		"introduction/introduction",
		{
			type: "category",
			label: "Getting Started",
			link: {
				type: "generated-index",
			},
			collapsed: false,
			items: ["introduction/about", "introduction/core-concepts", "introduction/our-repositories"],
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
				type: "category",
				label: "Working copies",
				link: {
					type: "doc",
					id:  'git-guide/Workingcopies/workingcopies'
				},
				collapsed: true,
				items: [
					"git-guide/Workingcopies/workflows",
					"git-guide/Workingcopies/usefulgitcommands"
				],
			},
			
			{
				type: "category",
				label: "Using Git as you work",
				link: {
					type: "doc",
					id:  'git-guide/gitworkflow'
				},
				collapsed: true,
				items: [
					"git-guide/Git working/Fork",	
					"git-guide/Git working/Feature-branch",
				{
				type: "category",
				label: "Stage changes",
				link: {
						type: "doc",
						id:  'git-guide/Git working/Stage changes/stage-changes'
				},
				collapsed: true,
				items: [
					"git-guide/Git working/Stage changes/status",
					"git-guide/Git working/Stage changes/stage-additions",
					"git-guide/Git working/Stage changes/stage-deletions",	
					],
					},	
					"git-guide/Git working/commit-changes",
					"git-guide/Git working/push-commits"

				],
			},
			
			
	
			]

		},
		{
			type: "category",
			label: "Developer Resources",
			link: {
				type: "generated-index",
			},
			collapsed: true,
			items: [
				"developers/technical-introduction",
				{
					type: "category",
					label: "Talawa",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: [
						"developers/talawa/talawa-introduction",
						"developers/talawa/talawa-lint",
						"developers/talawa/flutter-testing",
					],
				},
				{
					type: "category",
					label: "Talawa API",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: [
						"developers/talawa-api/api-overview",
						"developers/talawa-api/api-design-guide",
						{
							type: "link",
							label: "Schema Documentation",
							href: "/docs/schema",
						},
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
						"features/admin-portal",
						"features/admin-role",
						"features/chat-and-messaging",
						"features/coordinator-role",
						"features/events",
						"features/members",
						"features/donations-and-fees",
						"features/news-feed",
						"features/notifications",
						"features/data-management",
						"features/organizations",
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
			items: ["design/branding", "design/ux/ux-talawa", "design/ux/ux-design-system"],
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
					items: ["internships/gsod/gsod-ideas", "internships/gsod/gsod-ideas-2022"],
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
		,
	],
	...require("./docs/schema/sidebar-schema.js"),
};

module.exports = sidebars;
