Feature: View all user bookings

  Scenario: Authenticated user views today’s bookings
    Given a registered user opens the login screen
    When they enter valid login credentials
    And navigate to the user dashboard and opens bookings
    Then bookings with today’s date should be visible
