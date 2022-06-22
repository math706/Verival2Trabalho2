describe("US03", () => {
  it("tests US03", () => {
    cy.viewport(981, 721);
  
    cy.visit("http://localhost:3000/register");
  
    cy.get("#root > div > main > div > div.makeStyles-rightContainer-474.makeStyles-rightContainer-482 > form > div:nth-child(1) > div > input").click();
  
    cy.get("#root > div > main > div > div.makeStyles-rightContainer-474.makeStyles-rightContainer-482 > form > div:nth-child(1) > div > input").type("MATHIAS FATUR KAUFFMANN");
  
    cy.get("#root > div > main > div > div.makeStyles-rightContainer-474.makeStyles-rightContainer-482 > form > div:nth-child(2) > div > input").click();
  
    cy.get("#root > div > main > div > div.makeStyles-rightContainer-474.makeStyles-rightContainer-482 > form > div:nth-child(2) > div > input").type("030.502.850-28");
  
    cy.get("#root > div > main > div > div.makeStyles-rightContainer-474.makeStyles-rightContainer-482 > form > div:nth-child(3) > div > input").click();
  
    cy.get("#root > div > main > div > div.makeStyles-rightContainer-474.makeStyles-rightContainer-482 > form > div:nth-child(3) > div > input").type("Senha@123");
  
    cy.get("#root > div > main > div > div.makeStyles-rightContainer-474.makeStyles-rightContainer-482 > form > div.MuiFormControl-root.MuiTextField-root.makeStyles-root-462.makeStyles-lastInput-476 > div > input").click();
  
    cy.get("#root > div > main > div > div.makeStyles-rightContainer-474.makeStyles-rightContainer-482 > form > div.MuiFormControl-root.MuiTextField-root.makeStyles-root-462.makeStyles-lastInput-476 > div > input").type("0101");
  
    cy.get("#root > div > main > div > div.makeStyles-rightContainer-474.makeStyles-rightContainer-482 > form > button > span.MuiButton-label").click();
  
    });
  });
  