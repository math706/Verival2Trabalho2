describe("US10", () => {
it("tests US10", () => {
  cy.viewport(981, 721);

  cy.visit("http://localhost:3000/login");

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(5) > div:nth-child(2) > a").click();

  cy.get("#root > div > main > div > form > div > div > div:nth-child(3) > div > div > input").click();

  cy.get("#root > div > main > div > form > div > div > div:nth-child(3) > div > div > input").type("03050285028");

  cy.get("#root > div > main > div > form > div > div > div:nth-child(5) > div > div > input").click();

  cy.get("#root > div > main > div > form > div > div > div:nth-child(5) > div > div > input").type("Senha@1234");

  cy.get("#root > div > main > div > form > div > div > div:nth-child(7) > div > div > input").click();

  cy.get("#root > div > main > div > form > div > div > div:nth-child(7) > div > div > input").type("Senha@1234");

  cy.get("#root > div > main > div > form > div > div > div:nth-child(8) > button > span.MuiButton-label").click();

  });
});
