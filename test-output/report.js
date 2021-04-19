$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ChromeExtensionTest.feature");
formatter.feature({
  "line": 1,
  "name": "Chrome Extension Test",
  "description": "",
  "id": "chrome-extension-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validation of page load time extension loaded is empty",
  "description": "",
  "id": "chrome-extension-test;validation-of-page-load-time-extension-loaded-is-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User has added extension in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "extension displays empty table",
  "keyword": "Then "
});
formatter.match({
  "location": "ExtensionTestSteps.user_has_added_extension_in_browser()"
});
formatter.result({
  "duration": 8669614800,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.extension_displays_empty_table()"
});
formatter.result({
  "duration": 520856300,
  "status": "passed"
});
formatter.after({
  "duration": 1578448300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Validation of page load time displayed",
  "description": "",
  "id": "chrome-extension-test;validation-of-page-load-time-displayed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User has added extension in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigates to \"\u003curl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "extension displays table for time to load the website",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "extension displays time to load the website",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "chrome-extension-test;validation-of-page-load-time-displayed;",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 16,
      "id": "chrome-extension-test;validation-of-page-load-time-displayed;;1"
    },
    {
      "cells": [
        "https://www.google.com"
      ],
      "line": 17,
      "id": "chrome-extension-test;validation-of-page-load-time-displayed;;2"
    },
    {
      "cells": [
        "http://www.google.com"
      ],
      "line": 18,
      "id": "chrome-extension-test;validation-of-page-load-time-displayed;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Validation of page load time displayed",
  "description": "",
  "id": "chrome-extension-test;validation-of-page-load-time-displayed;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User has added extension in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigates to \"https://www.google.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "extension displays table for time to load the website",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "extension displays time to load the website",
  "keyword": "And "
});
formatter.match({
  "location": "ExtensionTestSteps.user_has_added_extension_in_browser()"
});
formatter.result({
  "duration": 11082852500,
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
  "duration": 12539692100,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.extension_displays_table_for_time_to_load_the_website()"
});
formatter.result({
  "duration": 3000957500,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.extension_displays_time_to_load_the_website()"
});
formatter.result({
  "duration": 637366900,
  "status": "passed"
});
formatter.after({
  "duration": 1668914200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validation of page load time displayed",
  "description": "",
  "id": "chrome-extension-test;validation-of-page-load-time-displayed;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User has added extension in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigates to \"http://www.google.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "extension displays table for time to load the website",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "extension displays time to load the website",
  "keyword": "And "
});
formatter.match({
  "location": "ExtensionTestSteps.user_has_added_extension_in_browser()"
});
formatter.result({
  "duration": 4409179500,
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
  "duration": 10888055200,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.extension_displays_table_for_time_to_load_the_website()"
});
formatter.result({
  "duration": 637088400,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.extension_displays_time_to_load_the_website()"
});
formatter.result({
  "duration": 193584800,
  "status": "passed"
});
formatter.after({
  "duration": 2163246100,
  "status": "passed"
});
formatter.uri("FirefoxExtensionTest.feature");
formatter.feature({
  "line": 1,
  "name": "Firefox Extension Test",
  "description": "",
  "id": "firefox-extension-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Validation of page load time extension loaded is empty",
  "description": "",
  "id": "firefox-extension-test;validation-of-page-load-time-extension-loaded-is-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    },
    {
      "line": 4,
      "name": "@Firefox"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User has added extension in firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "extension displays empty table",
  "keyword": "Then "
});
formatter.match({
  "location": "ExtensionTestSteps.user_has_added_extension_in_firefox_browser()"
});
formatter.result({
  "duration": 220416604600,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.extension_displays_empty_table()"
});
formatter.result({
  "duration": 1022367200,
  "status": "passed"
});
formatter.after({
  "duration": 20084420100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Validation of page load time displayed",
  "description": "",
  "id": "firefox-extension-test;validation-of-page-load-time-displayed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SmokeTest"
    },
    {
      "line": 10,
      "name": "@Firefox"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User has added extension in firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user navigates to \"\u003curl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "firefox extension displays table for time to load the website",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "firefox extension displays time to load the website",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "firefox-extension-test;validation-of-page-load-time-displayed;",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 18,
      "id": "firefox-extension-test;validation-of-page-load-time-displayed;;1"
    },
    {
      "cells": [
        "https://www.google.com"
      ],
      "line": 19,
      "id": "firefox-extension-test;validation-of-page-load-time-displayed;;2"
    },
    {
      "cells": [
        "http://www.google.com"
      ],
      "line": 20,
      "id": "firefox-extension-test;validation-of-page-load-time-displayed;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Validation of page load time displayed",
  "description": "",
  "id": "firefox-extension-test;validation-of-page-load-time-displayed;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Firefox"
    },
    {
      "line": 9,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User has added extension in firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user navigates to \"https://www.google.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "firefox extension displays table for time to load the website",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "firefox extension displays time to load the website",
  "keyword": "And "
});
formatter.match({
  "location": "ExtensionTestSteps.user_has_added_extension_in_firefox_browser()"
});
formatter.result({
  "duration": 220396552500,
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
  "duration": 11520933000,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.firefox_extension_displays_table_for_time_to_load_the_website()"
});
formatter.result({
  "duration": 1210847800,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.firefox_extension_displays_time_to_load_the_website()"
});
formatter.result({
  "duration": 195810100,
  "status": "passed"
});
formatter.after({
  "duration": 1870968000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Validation of page load time displayed",
  "description": "",
  "id": "firefox-extension-test;validation-of-page-load-time-displayed;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Firefox"
    },
    {
      "line": 9,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User has added extension in firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user navigates to \"http://www.google.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "firefox extension displays table for time to load the website",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "firefox extension displays time to load the website",
  "keyword": "And "
});
formatter.match({
  "location": "ExtensionTestSteps.user_has_added_extension_in_firefox_browser()"
});
formatter.result({
  "duration": 152821629200,
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
  "duration": 11137931900,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.firefox_extension_displays_table_for_time_to_load_the_website()"
});
formatter.result({
  "duration": 24068515500,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.firefox_extension_displays_time_to_load_the_website()"
});
formatter.result({
  "duration": 2706455000,
  "status": "passed"
});
formatter.after({
  "duration": 1968556300,
  "status": "passed"
});
});