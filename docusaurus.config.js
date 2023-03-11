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
                    editUrl: ({ docPath }) => {
                        return (`https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/${docPath}`)
                    }
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/PalisadoesFoundation/talawa-docs/tree/develop/docs',
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
        
        // Changed the label About to About Us-- Its more descriptive
         items: [
          {
            to: "docs/",
            activeBasePath: "docs",
            label: "About Us",  
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
                label: 'Facebook',
                to: 'https://www.facebook.com/palisadoesproject/',
              },
              {
                label: 'Instagram',
                to: 'https://www.instagram.com/palisadoes/?hl=en',
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
                // Changed the link to a more related page
                label: 'Team',
                to: 'https://github.com/orgs/PalisadoesFoundation/people',
              },

        navbar: {
            title: 'Talawa',
            logo: {
                alt: 'Talawa Logo',
                src: 'img/logo.png',
            },
            items: [{
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
            links: [{
                    title: 'Community',
                    items: [{
                            label: ' Slack',
                            to: 'https://github.com/PalisadoesFoundation/talawa#readme',
                            className: 'footer__icon footer__slack'
                        },
                        {
                            label: ' Twitter',
                            to: 'https://twitter.com/palisadoesorg?lang=en',
                            className: 'footer__icon footer__twitter'
                        },
                        {
                            label: ' Facebook',
                            to: 'https://www.facebook.com/palisadoesproject/',
                            className: 'footer__icon footer__facebook'
                        },
                        {
                            label: ' Instagram',
                            to: 'https://www.instagram.com/palisadoes/?hl=en',
                            className: 'footer__icon footer__instagram'
                        },

                        {
                            label: ' News',
                            to: '/docs/features/news%20feed/news-feed-overview',
                            className: 'footer__icon footer__news'
                        },
                        {
                            label: ' Contact Us',
                            to: 'https://www.palisadoes.org/contact/',
                            className: 'footer__icon footer__contact'

                        }
                    ],
                },
                {
                    title: 'Development',
                    items: [

                        {
                            label: ' GitHub',
                            to: 'https://github.com/PalisadoesFoundation',
                            className: 'footer__icon footer__github'
                        },
                        {
                            label: ' Opportunities',
                            to: '/docs/internships/internship-ideas',
                            className: 'footer__icon footer__opportunities'
                        },
                        {
                            label: ' Team',
                            to: '/docs/features/members/members-overview',
                            className: 'footer__icon footer__team'
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