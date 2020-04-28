describe("Contact Page", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.visit("/contact");
  });

  it("has a title, a header, a main section and a footer", () => {
    cy.title().should("eq", "Contact");
    cy.get("h2");
    cy.get("header");
    cy.get("main");
    cy.get("footer");
  });

  it("display an error if submitting an empty message", () => {
    cy.get("button[type='submit']").click();
    cy.get(".error-message").should("be.visible");
  });

  it("should display a success message if submitting a valid message", () => {
    cy.get("textarea").type("Hello, World");
    cy.get("button[type='submit']").click();
    cy.get(".success-message").should("be.visible");
  });
});
