const preprocess = require("svelte-preprocess");
const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx|svelte)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
  ],
  framework: "@storybook/svelte",
  core: {
    builder: "webpack5",
  },
  svelteOptions: {
    preprocess: preprocess(),
  },
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        svelte: path.resolve(__dirname, "..", "node_modules", "svelte"),
      },
      mainFields: ["svelte", "browser", "module", "main"],
    };

    config.module.rules.push({
      resolve: {
        fullySpecified: false,
        extensions: [".js", ".ts"],
      },
    });

    return config;
  },
};
