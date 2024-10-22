import "cypress-file-upload";

export const selectorsList = {
  button: "button.text-center",
  inputEmail: 'input[data-cy="email"]',
  inputPassword: 'input[data-cy="password"]',
  buttonSignIn: "button.text-white",
  fieldName: '[data-cy="nameInput"]',
  fieldPrice: '[data-cy="priceInput"]',
  fieldFans: '[data-cy="fansInput"]',
  fieldSaves: '[data-cy="savesInput"]',
  powerSelect: '[data-cy="powersSelect"]',
  selectImage: '[data-cy="avatarFile"]',
  buttonTrash: '[data-cy="trash"]',
  buttonYes: "button.text-center.text-white",
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
      cy.get(selectorsList.inputEmail).should("be.visible").type(user);
      cy.get(selectorsList.inputPassword)
        .should("be.visible")
        .type(password, { log: false });
      cy.get(selectorsList.buttonSignIn).should("be.visible").click();
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
      cy.visit("/");
      cy.get(selectorsList.buttonLogin).eq(0).click();
      cy.get(selectorsList.inputEmail).type(user);
      cy.get(selectorsList.inputPassword).type(password, { log: false });
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
  "loginAdm",
  (user = Cypress.env("user_adm"), password = Cypress.env("password_adm")) => {
    const loginAdm = () => {
      cy.visit("/heroes");
      cy.get(selectorsList.button).eq(0).click();
      cy.get(selectorsList.inputEmail).should("be.visible").type(user);
      cy.get(selectorsList.inputPassword)
        .should("be.visible")
        .type(password, { log: false });
      cy.get(selectorsList.buttonSignIn).should("be.visible").click();
    };

    loginAdm();
  }
);

Cypress.Commands.add("newHero", () => {
  const newHero = () => {
    cy.get(selectorsList.button).eq(0).click();
    cy.get(selectorsList.fieldName).type("Vanessa");
    cy.get(selectorsList.fieldFans).type("5");
    cy.get(selectorsList.fieldPrice).type("5");
    cy.get(selectorsList.fieldSaves).type("100");
    cy.get(selectorsList.powerSelect).select("Invisibility");
    cy.get(selectorsList.selectImage).attachFile("avatar.jpeg");
    cy.get(selectorsList.button).eq(2).click();
    cy.contains("Vanessa").should("be.visible");
  };
  newHero();
});

Cypress.Commands.add("removeHero", () => {
  const removeHero = () => {
    cy.visit("/new");
    cy.get(selectorsList.button).eq(0).click();
    cy.get(selectorsList.fieldName).type("Teste");
    cy.get(selectorsList.fieldFans).type("25");
    cy.get(selectorsList.fieldPrice).type("30");
    cy.get(selectorsList.fieldSaves).type("98");
    cy.get(selectorsList.powerSelect).select("Super Strength");
    cy.get(selectorsList.selectImage).attachFile("teste.jpg");
    cy.get(selectorsList.button).eq(2).click();
    cy.visit("/heroes");
    cy.contains("Teste").should("be.visible");

    cy.get(selectorsList.buttonTrash).eq(7).click();
    cy.get(selectorsList.buttonYes).should("be.visible").eq(1).click();
  };
  removeHero();
});
