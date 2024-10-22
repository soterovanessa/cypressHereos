const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/heroes",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    user_name: "test@test.com",
    user_password: "test123",
  },
});
