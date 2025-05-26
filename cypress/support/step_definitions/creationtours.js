import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginLocators } from '../../../cypress/support/loginingLocators';

Given("the admin is logged into the system", () => {
cy.visit("https://sdet.solutechlabs.com/");
cy.get(loginLocators.loginLink).click();
cy.get(loginLocators.emailInput).type("admin@account.com ");
cy.get(loginLocators.passwordInput).type("password");
cy.get(loginLocators.submitButton).click();
});

When("they navigate to the Tour Management section", () => {
  cy.wait(2000);
  cy.contains("a", "Tours").click();
});

When("they click to create a new tour", () => {
cy.contains('button', 'Create Tour').click();
});

When("they fill in the tour name, destination, slots, price, and description", () => {
cy.get('input[placeholder="Enter tour name"]').type("Cypress Safari ");
cy.get('input[placeholder="Enter Tour description"]').type('Explore the wild in an unforgettable tour');
cy.contains('span', 'Choose Destination').click();
cy.get('ul.ivu-select-dropdown-list > li.ivu-select-item').first().click();
cy.get('input[placeholder="Enter the price per slot"]').click().type('2500');
cy.get('input[placeholder="Enter the number of slots available"]').click().type('10');

});

When("they submit the new tour", () => {
cy.contains('button', 'Submit').click();
});

Then("they should see a success confirmation message", () => {
  cy.get('.ivu-message-notice-content-text', { timeout: 2000 }).find('span').should('have.text', 'Tour created successfully!');
});

