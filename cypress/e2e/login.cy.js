describe("Cypress Hereos", () => {
  it("Login Sucess", () => {
    const user = Cypress.env("user_name");
    const password = Cypress.env("user_password");

    cy.login(user, password);
  });
});
