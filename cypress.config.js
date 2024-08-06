const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ocg3jz',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern:"cypress/testcase/*.js"
  },
});
