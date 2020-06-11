export default {
  title: "Resium",
  description: "React component library for Cesium",
  typescript: true,
  propsParser: false,
  menu: [
    "Home",
    {
      name: "Installation",
      menu: ["Installation", "Set up webpack config 1", "Set up webpack config 2"],
    },
    "Getting Started",
    "Guide",
    "Components",
    {
      name: "Examples",
      href: "/examples/",
    },
    "Advanced",
    "Migration Guide",
    "Contribution",
  ],
  themeConfig: {
    initialColorMode: "dark",
    colors: {
      primary: "#00A0E8",
      link: "#00A0E8",
    },
    styles: {
      body: {
        fontFamily: "'Source Sans Pro', Helvetica, sans-serif",
      },
      h1: {
        fontFamily: "'Source Sans Pro', Helvetica, sans-serif",
        fontSize: "50px",
      },
      h2: {
        fontSize: "28px",
        color: "#00A0E8",
      },
      h3: {
        color: "#50c0f1",
      },
      p: {
        margin: "10px 0",
      },
    },
  },
};
