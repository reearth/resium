// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://resium.reearth.io",
  integrations: [
    starlight({
      title: "Resium",
      description: "React components for 🌍 Cesium",
      logo: {
        src: "./src/assets/logo-sidebar.png",
        alt: "Resium",
        replacesTitle: true,
      },
      favicon: "/favicon.ico",
      head: [
        {
          tag: "meta",
          attrs: { property: "og:image", content: "https://resium.reearth.io/og.png" },
        },
      ],
      customCss: ["./src/styles/custom.css"],
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/reearth/resium" },
      ],
      editLink: {
        baseUrl: "https://github.com/reearth/resium/edit/main/docs/",
      },
      sidebar: [
        { label: "Installation", slug: "installation" },
        { label: "Getting Started", slug: "getting-started" },
        { label: "Guide", slug: "guide" },
        { label: "Advanced", slug: "advanced" },
        { label: "Migration Guide", slug: "migration" },
        { label: "Contribution", slug: "contribution" },
        {
          label: "Components",
          items: [{ autogenerate: { directory: "components" } }],
        },
        {
          label: "Examples ↗",
          link: "https://resium.reearth.io/examples/",
          attrs: { target: "_blank", rel: "noopener" },
        },
      ],
    }),
  ],
});
