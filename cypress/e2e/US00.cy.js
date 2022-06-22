describe("US00", () => {
it("tests US00", () => {
  cy.viewport(981, 721);

  cy.visit("http://localhost:3000/login");

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(2) > div > div > input").click();

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(2) > div > div > input").type("admin-sicredi");

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(3) > div > div > input").click();

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(3) > div > div > input").type("Senha@123");

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(4) > button > span.MuiButton-label").click();

  cy.get("#root > div > main > div > div > div > div:nth-child(1) > div > div > div > button:nth-child(2) > span.MuiTab-wrapper").click();

  cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-18.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div.makeStyles-rightContainer-26.makeStyles-rightContainer-38 > form > div:nth-child(1) > div > input").click();

  cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-18.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div.makeStyles-rightContainer-26.makeStyles-rightContainer-38 > form > div:nth-child(1) > div > input").type("010101");

  cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-18.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div.makeStyles-rightContainer-26.makeStyles-rightContainer-38 > form > div:nth-child(2) > div > input").click();

  cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-18.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div.makeStyles-rightContainer-26.makeStyles-rightContainer-38 > form > div:nth-child(2) > div > input").type("Senha@123");

  cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-18.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div.makeStyles-rightContainer-26.makeStyles-rightContainer-38 > form > div.MuiFormControl-root.MuiTextField-root.makeStyles-root-8.makeStyles-lastInput-28 > div > input").click();

  cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-18.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div.makeStyles-rightContainer-26.makeStyles-rightContainer-38 > form > div.MuiFormControl-root.MuiTextField-root.makeStyles-root-8.makeStyles-lastInput-28 > div > input").type("0101");

  cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-18.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div.makeStyles-rightContainer-26.makeStyles-rightContainer-38 > form > button").click();

  });
});
