Feature: Chrome Extension Test

    @SmokeTest
    @chrome
  Scenario: Validation of page load time extension loaded is empty
    Given User has added extension in browser
    Then extension displays empty table

    @SmokeTest
    @chrome
  Scenario Outline: Validation of page load time displayed
    Given User has added extension in browser
    When user navigates to "<url>"
    Then extension displays table for time to load the website
    And extension displays time to load the website

    Examples:
    |   url                     |
    | https://www.google.com    |
    | http://www.google.com     |

