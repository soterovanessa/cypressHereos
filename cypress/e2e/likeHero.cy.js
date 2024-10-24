describe("Cypress Heroes", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Click in button like all hereos", () => {
    cy.likeHero();
  });
});
