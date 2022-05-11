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

it("check routing", () => {
  cy.visit("/register");
  cy.get("button").contains("Login").click();
  cy.get('input[name="email"]').type("test@test.com");
  cy.get('input[name="password"]').type("test123");
  cy.get("button").contains("Login").click();
  cy.url({ timeout: 20000 }).should("include", "/");
  cy.findByText("play game").click();
  cy.url({ timeout: 20000 }).should("include", "/selectGame");
  cy.findByText("10 x 10").click();
  cy.url({ timeout: 20000 }).should("include", "/selectGame/easy");
  cy.findByText("back").click();
  cy.url({ timeout: 20000 }).should("include", "/selectGame");
  cy.findByText("15 x 15").click();
  cy.url({ timeout: 20000 }).should("include", "/selectGame/medium");
  cy.findByText("back").click();
  cy.url({ timeout: 20000 }).should("include", "/selectGame");
  cy.findByText("20 x 20").click();
  cy.url({ timeout: 20000 }).should("include", "/selectGame/hard");
  cy.findByText("back").click();
  cy.url({ timeout: 20000 }).should("include", "/selectGame");
  cy.findByText("back").click();
  cy.url({ timeout: 20000 }).should("include", "/");
  cy.findByText("custom game").click();
  cy.url({ timeout: 20000 }).should("include", "/difficulty");
  cy.findByText("15 x 15").click();
  cy.url({ timeout: 20000 }).should("include", "/difficulty/medium");
  cy.findByText("back").click();
  cy.url({ timeout: 20000 }).should("include", "/difficulty");
  cy.findByText("20 x 20").click();
  cy.url({ timeout: 20000 }).should("include", "/difficulty/hard");
  cy.findByText("back").click();
  cy.url({ timeout: 20000 }).should("include", "/difficulty");
  cy.findByText("back").click();
  cy.url({ timeout: 20000 }).should("include", "/");
  cy.findByText("settings").click();
  cy.url({ timeout: 20000 }).should("include", "/settings");
  cy.findByText("back").click();
  cy.url({ timeout: 20000 }).should("include", "/");
  cy.findByText("about").click();
  cy.url({ timeout: 20000 }).should("include", "/about");
  cy.findByText("back").click();
  cy.url({ timeout: 20000 }).should("include", "/");
  cy.get("button[title='AiOutlineUser']").click();
  cy.findByText("back").click();
  cy.url({ timeout: 20000 }).should("include", "/");
  cy.findByText("exit game").click();
  cy.url({ timeout: 20000 }).should("include", "/register");
});
