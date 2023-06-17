import { visitUrlOrangeHr, visitUrlStg } from "../../support/testStep/visitUrl";
import { loginOrangeHr } from "../../support/testStep/login";

describe("Add Employee", () => {
  beforeEach(() => {
    visitUrlOrangeHr();
  });

  it("Verify Default State", () => {
    //login using separate test step
    loginOrangeHr();

    //navigate to PIM menu
    cy.contains("PIM").click();
    cy.url().should("inculde", "/pim/viewEmployeeList");

    //navigate to Add Employee tab
    cy.get("li", "Add Employee").click();
    cy.url().should("include", "/pim/addEmployee");
  });
});
