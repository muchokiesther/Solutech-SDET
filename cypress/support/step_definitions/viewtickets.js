import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginLocators } from "../../../cypress/support/loginingLocators";

Given("an admin user opens the login screen", () => {
  cy.visit("https://sdet.solutechlabs.com/");
  cy.get(loginLocators.loginLink).click();
});

When("they enter correct login credentials", () => {
  cy.get(loginLocators.emailInput).type("admin@account.com");
  cy.get(loginLocators.passwordInput).type("password");
  cy.get(loginLocators.submitButton).click();
});

When("navigate to the user dashboard and opens the tickets section", () => {
  cy.wait(3000);
  cy.contains('a', 'Tickets').should('be.visible').click();
});

Then("support tickets should be visible on the page", () => {
  cy.get('table').should('exist');
  cy.get('table td').should('have.length.greaterThan', 0);
});
