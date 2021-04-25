Feature: Firefox Extension Test
  
    @SmokeTest
    @Firefox
  Scenario: Validation of page load time extension loaded is empty
    Given User has added extension in firefox browser
    Then extension displays table

    @SmokeTest
    @Firefox
  Scenario Outline: Validation of page load time displayed
    Given User has added extension in firefox browser
    When user navigates to "<url>"
    Then firefox extension displays table for time to load the website
    And firefox extension displays time to load the website

    Examples:
    |   url                         |
    | https://www.google.com        |
    | https://www.nexthink.com/     |

