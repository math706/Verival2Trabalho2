describe("US03", () => {
  it("tests US03", () => {
    cy.viewport(981, 721);
  
    cy.visit("http://localhost:3000/login");
  
    cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(2) > div > div > input").click();
  
    cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(2) > div > div > input").type("010101");
  
    cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(3) > div > div > input").type("Senha@123");
  
    cy.get("#root > div > main > div > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-4 > div:nth-child(4) > button > span.MuiButton-label").click();
  
    cy.get("#root > div > main > div > div > div > div.MuiGrid-root.makeStyles-container-6622.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div.MuiGrid-root.makeStyles-titleLarge-6629.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-12 > div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-justify-content-xs-flex-end.MuiGrid-grid-xs-6 > button > span.MuiFab-label > svg").click();
  
    cy.get("#mui-9991").click();
  
    cy.get("#mui-9991-option-0").click();
  
    cy.get("#mui-9991").type("Visa");
  
    cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root > div > form > div > div:nth-child(2) > div > div > input").click();
  
    cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root > div > form > div > div:nth-child(2) > div > div > input").type("100");
  
    cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root > div > form > div > div:nth-child(3) > div > div > input").click();
  
    cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root > div > form > div > div:nth-child(3) > div > div > input").type("2");
  
    cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root > div > form > div > div:nth-child(4) > button > span.MuiButton-label").click();
  
    });
  });
  