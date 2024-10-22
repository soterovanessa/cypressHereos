const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    user_name: "test@test.com",
    user_password: "test123",
    name_fail: "testeteste@email.com",
    password_fail: "123456",
    user_adm: "admin@test.com",
    password_adm: "test123",
  },
});
