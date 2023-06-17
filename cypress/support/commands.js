// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", () => {
  cy.fixture("credentials.json").then((credentials) => {
    const validUser = credentials.validUser;
    cy.get('input[data-test="username"]').type(validUser.username);
    cy.get('input[data-test="password"]').type(validUser.password);
  });
});

//Custom command visit URL
Cypress.Commands.add("visitUrl", () => {
  cy.visit("https://www.saucedemo.com/");
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
