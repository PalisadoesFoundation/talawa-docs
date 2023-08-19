// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Talawa Project Documentation",
	tagline: "Open Source Software for Managing Community Based Organizations",
	url: "https://docs.talawa.io",
	baseUrl: "/",
	onBrokenLinks: "warn",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	deploymentBranch: "gh-pages",
	organizationName: "PalisadoesFoundation",
	projectName: "talawa-docs",
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},
	plugins: [
		[
			"@graphql-markdown/docusaurus",
			{
				schema: "docs/github-actions/schema.json",
				rootPath: "docs",
				baseURL: "schema",
				linkRoot: "../../../docs",
				pretty: true,
				docOptions: {
					pagination: true,
					toc: true,
					index: true,
				},
				loaders: {
					JsonFileLoader: "@graphql-tools/json-file-loader",
				},
			},
		],
	],
	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl: ({ docPath }) => {
						return `https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/${docPath}`;
					},
				},
				blog: {
					showReadingTime: true,
					editUrl: "https://github.com/PalisadoesFoundation/talawa-docs/tree/develop/docs",
				},
				theme: {
					customCss: [
						require.resolve("./src/css/custom.css"),
						require.resolve("./src/css/index.css"),
					],
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			docs: {
				sidebar: {
					hideable: true,
				},
			},
			navbar: {
				title: "Talawa",
				logo: {
					alt: "Talawa Logo",
					src: "img/logo.png",
				},
				items: [
					{
						to: "docs/",
						activeBasePath: "docs",
						label: "Docs",
						position: "left",
					},
					{
						to: 'docs/',
						activeBasePath: 'docs',
						label: 'Developer Docs',
						position: 'left',
						items: [
						  {
							label: 'Talawa API',
							to: "docs/Introduction-TalawaAPI",
							activeBasePath: "docs",
						  },
						  {
							label: 'Talawa Flutter Docs',
							to: "docs/talawa-mobile-docs",
							activeBasePath: "docs",
						  },
						  {
							label: 'Talawa Admin - Coming Soon',
							to: "#",
						  },
						],
					},
					{
						to: "https://github.com/PalisadoesFoundation",
						position: "right",
						className: "header-github-link",
						"aria-label": "GitHub repository",
					},
					{
						to: "https://www.youtube.com/@PalisadoesOrganization",
						position: "right",
						className: "header-youtube-link",
						"aria-label": "Palisadoes Youtube channel",
					},
					
				],
			},
			colorMode: {
				defaultMode: "light",
				disableSwitch: true,
				respectPrefersColorScheme: false,
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Community",
						items: [
							{
								label: " Slack",
								to: "https://github.com/PalisadoesFoundation/talawa#readme",
								className: "footer__icon footer__slack",
							},
							{
								label: " News",
								to: "https://www.palisadoes.org/news/",
								className: "footer__icon footer__news",
							},
							{
								label: " Contact Us",
								to: "https://www.palisadoes.org/contact/",
								className: "footer__icon footer__contact",
							},
						],
					},
					{
						title: "Social Media",
						items: [
							{
								label: " Twitter",
								to: "https://twitter.com/palisadoesorg?lang=en",
								className: "footer__icon footer__twitter",
							},
							{
								label: " Facebook",
								to: "https://www.facebook.com/palisadoesproject/",
								className: "footer__icon footer__facebook",
							},
							{
								label: " Instagram",
								to: "https://www.instagram.com/palisadoes/?hl=en",
								className: "footer__icon footer__instagram",
							},
						],
					},
					{
						title: "Development",
						items: [
							{
								label: " GitHub",
								to: "https://github.com/PalisadoesFoundation",
								className: "footer__icon footer__github",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} The Palisadoes Foundation, LLC. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
