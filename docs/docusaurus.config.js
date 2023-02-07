// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HypeTML",
  tagline: "A simple, lightweight, and fast Front-End framework",
  url: "https://hypetml.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dothtmlqc", // Usually your GitHub org/user name.
  projectName: "hypetml", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  stylesheets: [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css",
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/dotHTMLQC/HypeTML/tree/main/docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: "IS3ZVE3BDZ",

      // Public API key: it is safe to commit it
      apiKey: "96aee93923957a92f816e8314289daf9",

      indexName: "hypetml-dothtml",

      placeholder: 'Search in the docs',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: "external\\.com|domain\\.com",

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",

      //... other Algolia params
    },
    navbar: {
      logo: {
        alt: "",
        src: "assets/img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "getting-started",
          position: "left",
          label: "Documentation",
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          type: "html",
          position: "right",
          value:
            "<a href='https://github.com/dothtmlqc/hypetml' class='navbar__item navbar__link' rel='noopener noreferrer'><i class='fab fa-github'></i></a><a href='https://discord.gg/' class='navbar__item navbar__link' rel='noopener noreferrer'><i class='fab fa-discord'></i></a>",
        },
      ],
    },
    announcementBar: {
      id: "devBuild",
      content:
        "HypeTML is still in active development. Some features may not work as expected or not currently be available. Thank you for your patience.",
      backgroundColor: "#ff4336",
      textColor: "#fff",
      isCloseable: false,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/getting-started",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/dothtmlqc/hypetml",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HypeTML by <a href="https://dothtml.ca" target="_blank">DotHTML</a>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
