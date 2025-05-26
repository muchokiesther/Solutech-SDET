Feature: View support tickets

  Scenario: Authenticated user views their support tickets
    Given an admin user opens the login screen
    When they enter correct login credentials
    And navigate to the user dashboard and opens the tickets section
    Then support tickets should be visible on the page
