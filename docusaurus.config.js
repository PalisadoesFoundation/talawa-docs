// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Talawa Project Documentation',
  tagline: 'Open Source Software for Managing Community Based Organizations',
  url: 'https://docs.talawa.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  deploymentBranch: 'gh-pages',
  organizationName: 'PalisadoesFoundation',
  projectName: 'talawa-docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        title: 'Talawa',
        logo: {
          alt: 'Talawa Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: "docs/",
            activeBasePath: "docs",
            label: "About",
            position: "left",
          },
          {
            href: 'https://docs.talawa.io/talawa/index.html',
            target: "_self",
            label: "Talawa",
            position: "left",
          },
          {
            href: 'https://docs.talawa.io/talawa-api/schema/index.html',
            target: "_self",
            label: "Talawa Api",
            position: "left",
          },
          {
            href: 'https://github.com/PalisadoesFoundation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                to: 'https://github.com/PalisadoesFoundation/talawa#readme',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/palisadoesorg?lang=en',
              },
              {
                label: 'News',
                to: '/docs/features/news%20feed/news-feed-overview',
              },
              {
                label: 'Contact Us',
                to: 'https://www.palisadoes.org/contact/',
              }
            ],
          },
          {
            title: 'Development',
            items: [
              
              {
                label: 'GitHub',
                to: 'https://github.com/PalisadoesFoundation',
              },
              {
                label: 'Opportunities',
                to: '/docs/internships/internship-ideas',
              },
              {
                label: 'Team',
                to: '/docs/features/members/members-overview',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
