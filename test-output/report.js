$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ExtensionTest.feature");
formatter.feature({
  "line": 1,
  "name": "Extension Test",
  "description": "",
  "id": "extension-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validation of page load time extension loaded is empty",
  "description": "",
  "id": "extension-test;validation-of-page-load-time-extension-loaded-is-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User has added extension in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "extension displays empty table",
  "keyword": "Then "
});
formatter.match({
  "location": "ExtensionTestSteps.user_has_added_extension_in_browser()"
});
formatter.result({
  "duration": 16708431100,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.extension_displays_empty_table()"
});
formatter.result({
  "duration": 772489000,
  "status": "passed"
});
formatter.after({
  "duration": 972086200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Validation of page load time displayed",
  "description": "",
  "id": "extension-test;validation-of-page-load-time-displayed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User has added extension in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user navigates to \"\u003curl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "extension displays table for time to load the website",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "extension displays time to load the website",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "extension-test;validation-of-page-load-time-displayed;",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 15,
      "id": "extension-test;validation-of-page-load-time-displayed;;1"
    },
    {
      "cells": [
        "https://www.google.com"
      ],
      "line": 16,
      "id": "extension-test;validation-of-page-load-time-displayed;;2"
    },
    {
      "cells": [
        "http://www.google.com"
      ],
      "line": 17,
      "id": "extension-test;validation-of-page-load-time-displayed;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Validation of page load time displayed",
  "description": "",
  "id": "extension-test;validation-of-page-load-time-displayed;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User has added extension in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user navigates to \"https://www.google.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "extension displays table for time to load the website",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "extension displays time to load the website",
  "keyword": "And "
});
formatter.match({
  "location": "ExtensionTestSteps.user_has_added_extension_in_browser()"
});
formatter.result({
  "duration": 42273633900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com",
      "offset": 19
    }
  ],
  "location": "ExtensionTestSteps.user_navigates_to_https_www_google_com(String)"
});
formatter.result({
  "duration": 10922070700,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.extension_displays_table_for_time_to_load_the_website()"
});
formatter.result({
  "duration": 2102215100,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.extension_displays_time_to_load_the_website()"
});
formatter.result({
  "duration": 312650600,
  "status": "passed"
});
formatter.after({
  "duration": 1043837500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validation of page load time displayed",
  "description": "",
  "id": "extension-test;validation-of-page-load-time-displayed;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User has added extension in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user navigates to \"http://www.google.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "extension displays table for time to load the website",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "extension displays time to load the website",
  "keyword": "And "
});
formatter.match({
  "location": "ExtensionTestSteps.user_has_added_extension_in_browser()"
});
formatter.result({
  "duration": 3447774800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.com",
      "offset": 19
    }
  ],
  "location": "ExtensionTestSteps.user_navigates_to_https_www_google_com(String)"
});
formatter.result({
  "duration": 11127351000,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.extension_displays_table_for_time_to_load_the_website()"
});
formatter.result({
  "duration": 639021300,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.extension_displays_time_to_load_the_website()"
});
formatter.result({
  "duration": 213967200,
  "status": "passed"
});
formatter.after({
  "duration": 1602420700,
  "status": "passed"
});
});