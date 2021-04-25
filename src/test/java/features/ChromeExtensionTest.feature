Feature: Chrome Extension Test

    @SmokeTest
    @chrome
  Scenario: Validation of page load time extension loaded
    Given User has added extension in browser
    Then extension displays table

    @SmokeTest
    @chrome
  Scenario Outline: Validation of page load time displayed
    Given User has added extension in browser
    When user navigates to "<url>"
    Then extension displays table for time to load the website
    And chrome extension displays time to load the website

    Examples:
      |   url                         |
      | https://www.google.com        |
      | https://www.nexthink.com/     |
