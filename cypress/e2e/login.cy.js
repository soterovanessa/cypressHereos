describe("Cypress Hereos", () => {
  context("Login ", () => {
    it("Login Sucess", () => {
      const user = Cypress.env("user_name");
      const password = Cypress.env("user_password");

      cy.login(user, password);
    });

    it.skip("Login failed", () => {
      const user = Cypress.env("name_fail");
      const password = Cypress.env("password_fail");

      cy.loginFail(user, password);
    });
  });
});
