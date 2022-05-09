it("register user", () => {
  cy.visit("/register");
  cy.get('input[name="name"]').type("test");
  cy.get('input[name="email"]').type("test@test.com");
  cy.get('input[name="password"]').type("test123");
  cy.get("button").contains("Register").click();
  cy.url({ timeout: 20000 }).should("include", "/");
});

it("login user", () => {
  cy.visit("/register");
  cy.get("button").contains("Login").click();
  cy.get('input[name="email"]').type("test@test.com");
  cy.get('input[name="password"]').type("test123");
  cy.get("button").contains("Login").click();
  cy.url({ timeout: 20000 }).should("include", "/");
});

it("logout user", () => {
  cy.visit("/register");
  cy.get("button").contains("Login").click();
  cy.get('input[name="email"]').type("test@test.com");
  cy.get('input[name="password"]').type("test123");
  cy.get("button").contains("Login").click();
  cy.url({ timeout: 20000 }).should("include", "/");
  cy.findByText("exit game").click();
  cy.url({ timeout: 20000 }).should("include", "/register");
});
