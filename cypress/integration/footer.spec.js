describe("Footer", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.visit("/");
  });

  it("contains a link to my profile", () => {
    cy.get("footer a[href='https://github.com/jsulpis']").should("have.text", "Julien Sulpis");
  });

  it("contains the name of the template and its author", () => {
    cy.get("footer").contains("Tailwind Starter Kit");
    cy.get("footer").contains("Creative Tim");
  });

  it("contains the language selector", () => {
    cy.get(".lang-switcher > :nth-child(1)").click();
    cy.title("Nuxt.js Template");

    cy.get(".lang-switcher > :nth-child(2)").click();
    cy.title("Template Nuxt.js");
  });
});
