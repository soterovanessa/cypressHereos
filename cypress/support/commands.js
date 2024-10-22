export const selectorsList = {
  button: "button.text-center",
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
      cy.visit("/heroes");
      cy.get(selectorsList.button).eq(0).click();
      cy.get(selectorsList.inputEmail).type(user);
      cy.get(selectorsList.inputPassword).type(password);
      cy.get(selectorsList.buttonSignIn).click();
    };

    login();
  }
);

Cypress.Commands.add(
  "loginFail",
  (
    user = Cypress.env("name_fail"),
    password = Cypress.env("password_fail")
  ) => {
    const loginFail = () => {
      cy.visit("/", { failOnStatusCode: false });
      cy.get(selectorsList.buttonLogin).eq(0).click();
      cy.get(selectorsList.inputEmail).type(user);
      cy.get(selectorsList.inputPassword).type(password);
      cy.get(selectorsList.buttonSignIn).click();
      cy.contains("Invalid email or password");
    };

    loginFail();
  }
);

Cypress.Commands.add("logout", () => {
  const logout = () => {
    cy.get(selectorsList.button).eq(0).click();
    cy.contains("Login");
  };

  logout();
});

Cypress.Commands.add(
  "newHero",
  (user = Cypress.env("user_adm"), password = Cypress.env("password_adm")) => {
    const newHero = () => {};
  }
);
