export function visitUrlStg() {
  cy.visit("https://www.saucedemo.com/");
}

export function visitUrlOrangeHr() {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  //verify logo Orange HRM
  cy.get('div img[alt="company-branding"]').should("be.visible");
}
