module.exports = {
  title: "Resium",
  tagline: "React components for 🌍 Cesium",
  url: "https://resium.reearth.io",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "log",
  favicon: "favicon.ico",
  organizationName: "reearth", // Usually your GitHub org/user name.
  projectName: "resium", // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    image: "og.png",
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      logo: {
        alt: "Resium",
        src: "logo-sidebar.png",
      },
      items: [
        {
          type: "doc",
          label: "Docs",
          position: "left",
          docId: "home",
        },
        {
          href: "https://resium.reearth.io/examples/",
          label: "Examples",
          position: "left",
        },
        {
          href: "https://github.com/reearth/resium",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Re:Earth`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/reearth/resium/edit/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
