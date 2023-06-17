export function login() {
  cy.fixture("credentials.json").then((credentials) => {
    const validUser = credentials.validUser;
    cy.get('input[data-test="username"]').type(validUser.username);
    cy.get('input[data-test="password"]').type(validUser.password);
  });
}

export function loginOrangeHr() {
  cy.fixture("credentials.json").then((credentials) => {
    const validUserOrangeHr = credentials.validUserOrangeHr;
    cy.get('input[name="username"]').type(validUserOrangeHr.username);
    cy.get('input[name="password"]').type(validUserOrangeHr.password);
    //click button
    cy.get('button[type="submit"]').click();
    //assert URL
    cy.url().should("include", "/dashboard/index");
  });
}
