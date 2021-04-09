/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Welcome to the Talawa Project for the Palisadoes Foundation",
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
    logo: {
      alt: "Palisadoes Logo",
      src: "img/logo-main.png",
    },
    navbar: {
      title: "Talawa",
      logo: {
        alt: "Talawa Logo",
        src: "img/logos/talawa-logo-200x200.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "talawaApi/",
          activeBasePath: "talawaApi",
          label: "Talawa Api",
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
        talawaApi: {
          sidebarPath: require.resolve("./apiSlidebar.js"),
          editUrl:
            "https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
