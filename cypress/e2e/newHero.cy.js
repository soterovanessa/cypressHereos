describe("Cypress Hereos", () => {
  beforeEach(() => {
    cy.loginAdm();
  });
  it("Create New Hereo", () => {
    cy.newHero();
  });
});
