import { defineConfig } from "cypress";
require("dotenv").config();

export default defineConfig({
  fixturesFolder: "tests/e2e/fixtures",
  screenshotsFolder: "tests/e2e/screenshots",
  videosFolder: "tests/e2e/videos",

  e2e: {
    specPattern: "src/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "tests/e2e/support/index.js",
    baseUrl: "http://localhost:8100",
  },

  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
