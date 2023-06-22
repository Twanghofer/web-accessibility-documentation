import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/web-accessibility-documentation/",
  title: "Web Accessibility Docs",
  description:
    "A simple documentation of web accessibility standards and easy ways to implement them",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/basics " },
    ],

    sidebar: [
      {
        text: "Documentation",
        items: [
          { text: "Basics", link: "/basics" },
          { text: "Keyboard Accessibility", link: "/keyboard-accessibility" },
          { text: "Best Practices", link: "/best-practices" },
          { text: "Custom elements", link: "/custom-elements" },
        ],
      },
      {
        text: "Examples",
        items: [{ text: "Infinite scroll", link: "/examples/infinite-scroll" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/twanghofer" }],
  },
});
