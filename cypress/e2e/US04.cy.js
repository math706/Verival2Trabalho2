describe("US06", () => {
it("tests US06", () => {
  cy.viewport(981, 721);

  cy.visit("http://localhost:3000/login");

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(2) > div > div > input").click();

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(2) > div > div > input").type("03050285028");

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(3) > div > div > input").click();

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(3) > div > div > input").type("Senha@123");

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(4) > button > span.MuiButton-label").click();

  });
});
