describe("US09", () => {
it("tests US09", () => {
  cy.viewport(981, 721);

  cy.visit("http://localhost:3000/login");

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(2) > div > div > input").click();

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(2) > div > div > input").type("admin-sicredi");

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(3) > div > div > input").click();

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(3) > div > div > input").type("Senha@123");

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(4) > button > span.MuiButton-label").click();

  cy.get("#root > div > main > div > div > div > div:nth-child(1) > div > div > div > button:nth-child(3) > span.MuiTab-wrapper").click();

  cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-3510.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-justify-content-xs-center.MuiGrid-grid-xs-12 > div > div.Component-horizontalScrollContainer-4234 > div > div > div > table > tbody > tr:nth-child(1) > td.MuiTableCell-root-4243.MuiTableCell-body-4245.MuiTableCell-paddingNone-4249 > div > button > span.MuiIconButton-label-4232 > span").click();

  cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-3510.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-justify-content-xs-center.MuiGrid-grid-xs-12 > div > div.Component-horizontalScrollContainer-4234 > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > div > button:nth-child(1) > span.MuiIconButton-label-4232 > span").click();

  });
});
