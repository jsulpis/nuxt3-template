describe("Home Page", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.visit("/");
  });

  it("has a title, a header, a main section and a footer", () => {
    cy.title().should("eq", "Nuxt.js Template");
    cy.get("h2");
    cy.get("header");
    cy.get("main");
    cy.get("footer");
  });

  it("has a link to the documentation", () => {
    cy.get(".btn-primary").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/documentation");
  });
});
