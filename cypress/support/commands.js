export const selectorsList = {
  buttonLogin: "button.text-center",
  inputEmail: 'input[data-cy="email"]',
  inputPassword: 'input[data-cy="password"]',
  buttonSignIn: "button.text-white",
};

Cypress.Commands.add(
  "login",
  (
    user = Cypress.env("user_name"),
    password = Cypress.env("user_password")
  ) => {
    const login = () => {
      cy.visit("/", { failOnStatusCode: false });
      cy.get(selectorsList.buttonLogin).eq(0).click();
      cy.get(selectorsList.inputEmail).type(user);
      cy.get(selectorsList.inputPassword).type(password);
      cy.get(selectorsList.buttonSignIn).click();
    };

    login();
  }
);
