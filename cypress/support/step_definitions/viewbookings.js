import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginLocators } from '../../../cypress/support/loginingLocators';

Given("a registered user opens the login screen", () => {
  cy.visit("https://sdet.solutechlabs.com/");
  cy.get(loginLocators.loginLink).click();
});

When("they enter valid login credentials", () => {
  cy.get(loginLocators.emailInput).type("admin@account.com ");
  cy.get(loginLocators.passwordInput).type("password");
  cy.get(loginLocators.submitButton).click();
});

When("navigate to the user dashboard and opens bookings", () => {
cy.wait(3000)
cy.contains('a', 'Bookings').should('be.visible').click();
});

Then("bookings with today’s date should be visible", () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const month = monthNames[today.getMonth()];
  const year = today.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;

  cy.get("td").contains(formattedDate).should("be.visible");
});

