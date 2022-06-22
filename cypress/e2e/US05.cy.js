describe("US07", () => {
it("tests US07", () => {
  cy.viewport(981, 721);

  cy.visit("http://localhost:3000/login");

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(2) > div > div > input").click();

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(2) > div > div > input").type("03050285028");

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(3) > div > div > input").click();

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(3) > div > div > input").type("Senha@123");

  cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(4) > button > span.MuiButton-label").click();

  cy.get("#autocomplete").click();

  cy.get("#autocomplete-option-0").click();

  cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root.makeStyles-root-7893 > div > div > div > div > input").click();

  cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root.makeStyles-root-7893 > div > div > div > div > input").type("100");

  cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textSecondary").click();

  cy.get("#root > div > main > div > div > div > div:nth-child(1) > div > div > div > div > div > button.MuiButtonBase-root.MuiIconButton-root.MuiAutocomplete-popupIndicator > span.MuiIconButton-label > svg").click();

  cy.get("#autocomplete-option-1").click();

  cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root.makeStyles-root-7893 > div > div > div > div > input").click();

  cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root.makeStyles-root-7893 > div > div > div > div > input").type("7");

  cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textSecondary > span.MuiButton-label").click();

  cy.get("#root > div > main > div > div > div > div:nth-child(1) > div > div > div > div > div > button.MuiButtonBase-root.MuiIconButton-root.MuiAutocomplete-popupIndicator > span.MuiIconButton-label > svg").click();

  cy.get("#autocomplete-option-2").click();

  cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root.makeStyles-root-7893 > div > div > div > div > input").click();

  cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root.makeStyles-root-7893 > div > div > div > div > input").type("200");

  cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textSecondary > span.MuiButton-label").click();

  });
});
