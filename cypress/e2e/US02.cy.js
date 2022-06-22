describe("US04", () => {
it("tests US04", () => {
  cy.viewport(981, 721);

  cy.visit("http://localhost:3000/login");

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(2) > div > div > input").click();

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(2) > div > div > input").type("010101");

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(3) > div > div > input").type("Senha@123");

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(4) > button > span.MuiButton-label").click();

  cy.get("#root > div > main > div > div > div > div:nth-child(1) > div > div > div > button:nth-child(2) > span.MuiTab-wrapper").click();

  cy.get("#root > div > main > div > div > div > div:nth-child(1) > div > div > div > button.MuiButtonBase-root.MuiTab-root.MuiTab-textColorInherit.Mui-selected > span.MuiTab-wrapper").click();

  cy.get("#root > div > main > div > div > div > div:nth-child(1) > div > div > div > button.MuiButtonBase-root.MuiTab-root.MuiTab-textColorInherit.Mui-selected > span.MuiTab-wrapper").click();

  cy.get("#root > div > main > div > div > div > div:nth-child(1) > div > div > div > button.MuiButtonBase-root.MuiTab-root.MuiTab-textColorInherit.Mui-selected > span.MuiTab-wrapper").click();

  cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-5879.MuiGrid-item.MuiGrid-grid-xs-12 > div").click();

  cy.get("#root > div > main > div > div > div > div:nth-child(1) > div > div > div").click();

  cy.get("body").click();

  cy.get("#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(2)").click();

  cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-5879.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div > div.MuiGrid-root.makeStyles-items-6673.MuiGrid-container.MuiGrid-item.MuiGrid-align-items-xs-center.MuiGrid-justify-content-xs-space-between.MuiGrid-grid-xs-12 > form > div > div:nth-child(2) > div > div > input").click();

  cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-5879.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div > div.MuiGrid-root.makeStyles-items-6673.MuiGrid-container.MuiGrid-item.MuiGrid-align-items-xs-center.MuiGrid-justify-content-xs-space-between.MuiGrid-grid-xs-12 > form > div > div:nth-child(2) > div > div > input").type("100.0001");

  cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-5879.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div > div.MuiGrid-root.makeStyles-items-6673.MuiGrid-container.MuiGrid-item.MuiGrid-align-items-xs-center.MuiGrid-justify-content-xs-space-between.MuiGrid-grid-xs-12 > form > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12 > button").click();

  cy.get("body").click();

  cy.get("#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(3)").click();

  cy.get("#root > div.makeStyles-root-1 > main > div > div > div > div.MuiGrid-root.makeStyles-container-5879.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div > div.MuiGrid-root.makeStyles-items-6673.MuiGrid-container.MuiGrid-item.MuiGrid-align-items-xs-center.MuiGrid-justify-content-xs-space-between.MuiGrid-grid-xs-12 > form > div > div:nth-child(2) > div > div > input").click();

  cy.get("body").click();

  cy.get("#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(4)").click();

  cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-5879.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div > div.MuiGrid-root.makeStyles-items-6673.MuiGrid-container.MuiGrid-item.MuiGrid-align-items-xs-center.MuiGrid-justify-content-xs-space-between.MuiGrid-grid-xs-12 > form > div > div:nth-child(2) > div > div > input").click();

  cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-5879.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div > div.MuiGrid-root.makeStyles-items-6673.MuiGrid-container.MuiGrid-item.MuiGrid-align-items-xs-center.MuiGrid-justify-content-xs-space-between.MuiGrid-grid-xs-12 > form > div > div:nth-child(2) > div > div > input").type("02");

  cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-5879.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div > div.MuiGrid-root.makeStyles-items-6673.MuiGrid-container.MuiGrid-item.MuiGrid-align-items-xs-center.MuiGrid-justify-content-xs-space-between.MuiGrid-grid-xs-12 > form > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12 > button > span.MuiButton-label").click();

  });
});
