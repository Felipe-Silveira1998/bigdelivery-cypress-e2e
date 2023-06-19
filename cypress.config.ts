const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://bigdelivery.com.br',
    experimentalRunAllSpecs: true,
  },
  "viewportWidth": 1440,
  "viewportHeight": 900,
});
