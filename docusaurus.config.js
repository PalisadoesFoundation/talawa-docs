// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Talawa Project Documentation',
  tagline: 'Open Source Software for Managing Community Based Organizations',
  url: 'https://docs.talawa.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn', // Or 'throw', 'ignore'
    },
  },
  onBrokenAnchors: 'throw',
  favicon: 'img/favicon.ico',
  deploymentBranch: 'gh-pages',
  organizationName: 'PalisadoesFoundation',
  trailingSlash: false,
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
          editUrl: ({ docPath }) => {
            return `https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/PalisadoesFoundation/talawa-docs/tree/develop/docs',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      navbar: {
        title: 'Talawa',
        logo: {
          alt: 'Talawa Logo',
          src: 'img/logo.png',
          className: 'LogoAnimation',
        },
        items: [
          {
            to: '/docs',
            activeBasePath: 'docs',
            label: 'General',
            position: 'left',
          },
          {
            label: 'Mobile Guide',
            position: 'left',
            to: 'https://docs-mobile.talawa.io/docs',
            target: '_self',
          },
          {
            label: 'Admin Guide',
            position: 'left',
            to: 'https://docs-admin.talawa.io/docs',
            target: '_self',
          },
          {
            label: 'API Guide',
            position: 'left',
            to: 'https://docs-api.talawa.io/docs',
            target: '_self',
          },
          {
            label: 'Plugin Guide',
            position: 'left',
            to: 'https://docs-plugin.talawa.io/docs',
            target: '_self',
          },
          {
            label: 'Community',
            position: 'left',
            to: 'https://community.talawa.io',
            target: '_self',
          },
          {
            label: 'Demo',
            position: 'left',
            to: 'https://demo.talawa.io/',
          },
          {
            to: 'https://github.com/PalisadoesFoundation',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            to: 'https://www.youtube.com/@PalisadoesOrganization',
            position: 'right',
            className: 'header-youtube-link',
            'aria-label': 'Palisadoes Youtube channel',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: ' Community Forum',
                to: 'https://community.talawa.io/',
                className: 'footer__icon footer__news',
              },
              {
                label: ' News',
                to: 'https://www.palisadoes.org/news/',
                className: 'footer__icon footer__news',
              },
              {
                label: ' Contact Us',
                to: 'https://www.palisadoes.org/contact/',
                className: 'footer__icon footer__contact',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: ' Twitter',
                to: 'https://twitter.com/palisadoesorg?lang=en',
                className: 'footer__icon footer__twitter',
              },
              {
                label: ' Facebook',
                to: 'https://www.facebook.com/palisadoesproject/',
                className: 'footer__icon footer__facebook',
              },
              {
                label: ' Instagram',
                to: 'https://www.instagram.com/palisadoes/?hl=en',
                className: 'footer__icon footer__instagram',
              },
            ],
          },
          {
            title: 'Development',
            items: [
              {
                label: ' GitHub',
                to: 'https://github.com/PalisadoesFoundation',
                className: 'footer__icon footer__github',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Palisadoes Foundation, LLC. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
