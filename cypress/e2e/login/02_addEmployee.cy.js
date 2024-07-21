import { visitUrlOrangeHr } from "../../support/testStep/visitUrl";
import { loginOrangeHr } from "../../support/testStep/login";
import { timeout } from "async";

describe("Add Employee", () => {
  beforeEach(() => {
    visitUrlOrangeHr();
  });

  it("Verify Default State", () => {
    //login using separate test step
    loginOrangeHr();

    //navigate to PIM menu
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    cy.contains("PIM")

    //Create User
    cy.get('button').contains(' Add ').click()
    cy.url().should('include', '/pim/addEmployee')

    cy.get('input[name="firstName"]').type('Maulana')
    cy.get('input[name="middleName"]').type('Malik')
    cy.get('input[name="lastName"]').type('Syaputra')

    cy.get('button[type="submit"]').contains('Save').click()
    cy.url().should('include','/pim/viewPersonalDetails/empNumber/')
  });
});
