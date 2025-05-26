Feature: Basic login

  Scenario: User logs into the application
    Given I visit page and open the login page
    When I type in my email and password and click login
    Then I should see the invalid credentials error message