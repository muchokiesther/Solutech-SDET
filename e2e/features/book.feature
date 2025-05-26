Feature: Book Tour
  Create tour booking from the home page as guest

  Scenario: Book a tour as a guest user
    Given I am on the home page
    When I select a tour and book it
    Then I should see a booking confirmation
