/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Emilyn Costa Conceição Sharma",
  tagline: "Emilyn Costa Conceição Sharma's personal website.",
  url: "https://emilyncosta.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/emilyncosta.png",
  organizationName: "emilyncosta",
  projectName: "emilyncosta.com",
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      // title: "Emilyn Costa Conceição",
      logo: {
        alt: "Emilyn Costa Conceição Home Page",
        src: "img/emilyncosta.png",
      },
      items: [
        // {
        //   to: "docs/",
        //   activeBasePath: "docs",
        //   label: "Docs",
        //   position: "left",
        // },
        { to: "blog", label: "Blog", position: "left" },
      ],
    },
    // googleAnalytics: {
    //   trackingID: "TODO",
    //   anonymizeIP: false,
    // },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()}, All rights reserved. Emilyn Costa Conceição (@emilyncosta)`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/',
        // },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "Previous scribblings",
          postsPerPage: 10,
          feedOptions: {
            type: "all",
            // title: `TODO`, // default to siteConfig.title
            // description: `TODO`, // default to  `${siteConfig.title} Blog`
            copyright: `Copyright © ${new Date().getFullYear()}, All rights reserved. Emilyn Costa Conceicão Sharma`,
            language: "pr-BR", // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
