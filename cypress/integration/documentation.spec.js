describe("Documentation Page", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
  });

  it("has a title, a header, a main section and a footer", () => {
    cy.visit("/documentation");

    cy.title().should("eq", "Documentation");
    cy.get("h2").should("be.visible");
    cy.get("header").should("be.visible");
    cy.get("main").should("be.visible");
    cy.get("footer").should("be.visible");
  });

  describe("in English", () => {
    beforeEach(() => {
      cy.visit("/documentation");
    });

    it("has multiple documentation sections", () => {
      cy.get("h3").should("have.length.greaterThan", 1);
    });
  });

  describe("in French", () => {
    beforeEach(() => {
      cy.visit("/fr/documentation");
    });

    it("should not show the documentation", () => {
      cy.get("h3").should("not.exist");
    });

    it("should have a link to the english documentation", () => {
      cy.url().should("eq", Cypress.config().baseUrl + "/fr/documentation/");

      cy.get("main a").click();
      cy.url().should("eq", Cypress.config().baseUrl + "/documentation");
    });
  });
});
