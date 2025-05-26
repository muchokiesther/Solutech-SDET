import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { bookingLocators } from '../../../cypress/support/bookingLocators'; 
const randomEmail = `user${Math.floor(Math.random() * 100000)}@example.com`;

Given("I am on the home page", () => {
  cy.visit("https://sdet.solutechlabs.com/");
});

When("I select a tour and book it", () => {
  cy.get(bookingLocators.firstBookTourButton).eq(0).click({ force: true });
  cy.get(bookingLocators.slotsInput).click().type('1');
  cy.get(bookingLocators.nameInput).click().type('Esther');
  cy.get(bookingLocators.emailInput).click().type(randomEmail);
  cy.get(bookingLocators.confirmBookingBtn).contains('Book Tour').click();
});

Then("I should see a booking confirmation", () => {
  cy.contains(bookingLocators.successMsgText, { timeout: 10000 }).should('be.visible');
});
