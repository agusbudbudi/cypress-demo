import { visitUrlOrangeHr, visitUrlStg } from "../../support/testStep/visitUrl";
import { loginOrangeHr } from "../../support/testStep/login";

describe("Login Orange HRM", () => {
  beforeEach(() => {
    visitUrlOrangeHr();
  });

  it("Verify Default State", () => {
    //login using separate test step
    loginOrangeHr();
  });
});
