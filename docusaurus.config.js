/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Talawa",
  tagline: "Community Organization Management Software",
  url: "https://palisadoesfoundation.github.io",
  baseUrl: "/talawa-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "PalisadoesFoundation", // Usually your GitHub org/user name.
  projectName: "talawa-docs", // Usually your repo name.
  onBrokenLinks: "ignore",
  themeConfig: {
    navbar: {
      title: "Talawa",
      logo: {
        alt: "Talawa Logo",
        src: "img/Logos/talawa-logo-lite-200x200-transparent.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/PalisadoesFoundation",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/palisadoesproject",
            },
            {
              label: "Slack",
              href: "https://thepalisadoes-dyb6419.slack.com",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/palisadoesorg",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/palisadoesfoundation",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/c/palisadoesorganization",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Talawa. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
