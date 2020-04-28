describe("Header", () => {
  describe("on desktop", () => {
    beforeEach(() => {
      cy.viewport("macbook-15");
      cy.visit("/");
    });

    it("has a link to all the pages", () => {
      // first link: home
      cy.get("nav ul li:nth-of-type(1)").click();
      cy.url().should("eq", Cypress.config().baseUrl + "/");

      // second link: documentation
      cy.get("nav ul li:nth-of-type(2)").click();
      cy.url().should("eq", Cypress.config().baseUrl + "/documentation");

      // third link: contact
      cy.get("nav ul li:nth-of-type(3)").click();
      cy.url().should("eq", Cypress.config().baseUrl + "/contact");

      // app name links to the home page
      cy.get("header a").first().click();
      cy.url().should("eq", Cypress.config().baseUrl + "/");
    });
  });

  describe("on mobile", () => {
    beforeEach(() => {
      cy.viewport("samsung-s10");
      cy.visit("/");
    });

    it("has a link to all the pages", () => {
      // first link: home
      cy.get("header button").click();
      cy.get("nav ul li:nth-of-type(1)").click();
      cy.url().should("eq", Cypress.config().baseUrl + "/");

      // second link: documentation
      cy.get("header button").click();
      cy.get("nav ul li:nth-of-type(2)").click();
      cy.url().should("eq", Cypress.config().baseUrl + "/documentation");

      // third link: contact
      cy.get("header button").click();
      cy.get("nav ul li:nth-of-type(3)").click();
      cy.url().should("eq", Cypress.config().baseUrl + "/contact");

      // app name links to the home page
      cy.get("header button").click();
      cy.get("header a").first().click();
      cy.url().should("eq", Cypress.config().baseUrl + "/");
    });
  });
});
