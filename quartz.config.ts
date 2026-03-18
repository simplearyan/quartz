import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fdfdfd", // cleaner white background
          lightgray: "#f0f0f0", // borders
          gray: "#9ca3af", // graph links, heavier borders
          darkgray: "#4b5563", // body text
          dark: "#111827", // header text and icons
          secondary: "#2563eb", // links, current graph node
          tertiary: "#60a5fa", // hover states and visited graph nodes
          highlight: "rgba(37, 99, 235, 0.08)", // internal link background, highlighted text
          textHighlight: "rgba(253, 224, 71, 0.5)", // markdown highlight
        },
        darkMode: {
          light: "#0a0a0a", // pure deep dark background for low eye strain
          lightgray: "#1f2937", // borders and search box
          gray: "#4b5563", // graph links
          darkgray: "#9ca3af", // body text
          dark: "#f3f4f6", // headers and text
          secondary: "#60a5fa", // link color
          tertiary: "#93c5fd", // hover states
          highlight: "rgba(96, 165, 250, 0.15)", // link backgrounds
          textHighlight: "rgba(253, 224, 71, 0.3)", // markdown highlight darker
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
