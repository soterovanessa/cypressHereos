describe("Cypress Hereos", () => {
  beforeEach(() => {
    cy.loginAdm();
  });
  it("Remove an Hereo", () => {
    cy.removeHero();
  });
});
