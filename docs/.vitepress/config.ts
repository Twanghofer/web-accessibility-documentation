import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web Accessibility Docs",
  description:
    "A simple documentation of web accessibility standards and easy ways to implement them",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation1", link: "/basics " },
    ],

    sidebar: [
      {
        text: "Documentation",
        items: [
          { text: "Basics", link: "/basics" },
          { text: "Keyboard Accessibility", link: "/keyboard-accessibility" },
          { text: "Best Practices", link: "/best-practices" },
          { text: "Custom elements", link: "/custom-elements" },
          { text: "Special Cases", link: "/special-cases" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/twanghofer" }],
  },
});
