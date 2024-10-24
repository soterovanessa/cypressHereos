describe("Cypress Hereos", () => {
  beforeEach(() => {
    cy.login();
  });
  it("Logout successfully", () => {
    cy.logout();
  });
});
