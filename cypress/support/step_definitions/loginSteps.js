import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginLocators } from '../../../cypress/support/loginingLocators';

Given("I visit page and open the login page", () => {
  cy.visit("https://sdet.solutechlabs.com/");
  cy.get(loginLocators.loginLink).click();
});

When("I type in my email and password and click login", () => {
  cy.get(loginLocators.emailInput).type("muchokiesther8@gmail.com");
  cy.get(loginLocators.passwordInput).type("1234@Wamuyu");
  cy.get(loginLocators.submitButton).click();
});

Then("I should see the invalid credentials error message", () => {
  cy.wait(3000);
  cy.get(loginLocators.invalidCredsMsg)
    .should("be.visible")
    .and("have.text", "These credentials do not match our records.");
});
