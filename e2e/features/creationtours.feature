Feature: Admin creates new tours

  Scenario: Admin adds a new tour with details
    Given the admin is logged into the system
    When they navigate to the Tour Management section
    And they click to create a new tour
    And they fill in the tour name, destination, slots, price, and description
    And they submit the new tour
    Then they should see a success confirmation message
