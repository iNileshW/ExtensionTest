$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ChromeExtensionTest.feature");
formatter.feature({
  "line": 1,
  "name": "Chrome Extension Test",
  "description": "",
  "id": "chrome-extension-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 688423500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Validation of page load time extension loaded",
  "description": "",
  "id": "chrome-extension-test;validation-of-page-load-time-extension-loaded",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    },
    {
      "line": 4,
      "name": "@chrome"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User has added extension in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "extension displays table",
  "keyword": "Then "
});
formatter.match({
  "location": "ExtensionTestSteps.user_has_added_extension_in_browser()"
});
formatter.result({
  "duration": 10424738400,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.extension_displays_table()"
});
formatter.result({
  "duration": 559996100,
  "status": "passed"
});
formatter.after({
  "duration": 2179454400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Validation of page load time displayed",
  "description": "",
  "id": "chrome-extension-test;validation-of-page-load-time-displayed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SmokeTest"
    },
    {
      "line": 10,
      "name": "@chrome"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User has added extension in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user navigates to \"\u003curl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "extension displays table for time to load the website",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "chrome extension displays time to load the website",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 17
    },
    {
      "cells": [
        "https://www.google.com"
      ],
      "line": 18
    },
    {
      "cells": [
        "https://www.nexthink.com/"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.uri("FirefoxExtensionTest.feature");
formatter.feature({
  "line": 1,
  "name": "Firefox Extension Test",
  "description": "",
  "id": "firefox-extension-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7173500,
  "status": "passed"
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
  "name": "extension displays table",
  "keyword": "Then "
});
formatter.match({
  "location": "ExtensionTestSteps.user_has_added_extension_in_firefox_browser()"
});
formatter.result({
  "duration": 87738798000,
  "error_message": "org.openqa.selenium.WebDriverException: java.net.SocketTimeoutException: timeout\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SAMSUNG-PC\u0027, ip: \u0027192.168.0.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat pageObjects.BasePage.openUrl(BasePage.java:52)\r\n\tat stepsdefs.ExtensionTestSteps.user_has_added_extension_in_firefox_browser(ExtensionTestSteps.java:78)\r\n\tat ✽.Given User has added extension in firefox browser(FirefoxExtensionTest.feature:6)\r\nCaused by: java.net.SocketTimeoutException: timeout\r\n\tat okio.Okio$4.newTimeoutException(Okio.java:232)\r\n\tat okio.AsyncTimeout.exit(AsyncTimeout.java:285)\r\n\tat okio.AsyncTimeout$1.write(AsyncTimeout.java:184)\r\n\tat okio.RealBufferedSink.emitCompleteSegments(RealBufferedSink.java:179)\r\n\tat okio.RealBufferedSink.write(RealBufferedSink.java:42)\r\n\tat okhttp3.internal.http1.Http1Codec$FixedLengthSink.write(Http1Codec.java:295)\r\n\tat okio.ForwardingSink.write(ForwardingSink.java:35)\r\n\tat okhttp3.internal.http.CallServerInterceptor$CountingSink.write(CallServerInterceptor.java:149)\r\n\tat okio.RealBufferedSink.emitCompleteSegments(RealBufferedSink.java:179)\r\n\tat okio.RealBufferedSink.write(RealBufferedSink.java:92)\r\n\tat okhttp3.RequestBody$2.writeTo(RequestBody.java:98)\r\n\tat okhttp3.internal.http.CallServerInterceptor.intercept(CallServerInterceptor.java:72)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient$Factory$1.lambda$createClient$1(OkHttpClient.java:152)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:45)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:105)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat pageObjects.BasePage.openUrl(BasePage.java:52)\r\n\tat stepsdefs.ExtensionTestSteps.user_has_added_extension_in_firefox_browser(ExtensionTestSteps.java:78)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.net.SocketException: Socket closed\r\n\tat java.net.SocketOutputStream.socketWrite(SocketOutputStream.java:118)\r\n\tat java.net.SocketOutputStream.write(SocketOutputStream.java:155)\r\n\tat okio.Okio$1.write(Okio.java:79)\r\n\tat okio.AsyncTimeout$1.write(AsyncTimeout.java:180)\r\n\t... 76 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ExtensionTestSteps.extension_displays_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 170349300,
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
        "https://www.nexthink.com/"
      ],
      "line": 20,
      "id": "firefox-extension-test;validation-of-page-load-time-displayed;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10576600,
  "status": "passed"
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
  "duration": 183750029900,
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
  "duration": 12033598100,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.firefox_extension_displays_table_for_time_to_load_the_website()"
});
formatter.result({
  "duration": 690438900,
  "status": "passed"
});
formatter.match({
  "location": "ExtensionTestSteps.firefox_extension_displays_time_to_load_the_website()"
});
formatter.result({
  "duration": 228139900,
  "status": "passed"
});
formatter.after({
  "duration": 14890465400,
  "status": "passed"
});
formatter.before({
  "duration": 17745900,
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
  "name": "user navigates to \"https://www.nexthink.com/\"",
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
  "duration": 432334564200,
  "error_message": "org.openqa.selenium.TimeoutException: \nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SAMSUNG-PC\u0027, ip: \u0027192.168.0.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 87.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210318103112, moz:geckodriverVersion: 0.29.1, moz:headless: false, moz:processID: 12032, moz:profile: C:\\Users\\enduser\\AppData\\Lo..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8b077140-6e2e-4ade-898e-360d6a0b5b89\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pageObjects.BasePage.openUrl(BasePage.java:56)\r\n\tat stepsdefs.ExtensionTestSteps.user_has_added_extension_in_firefox_browser(ExtensionTestSteps.java:78)\r\n\tat ✽.Given User has added extension in firefox browser(FirefoxExtensionTest.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.nexthink.com/",
      "offset": 19
    }
  ],
  "location": "ExtensionTestSteps.user_navigates_to_https_www_google_com(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ExtensionTestSteps.firefox_extension_displays_table_for_time_to_load_the_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ExtensionTestSteps.firefox_extension_displays_time_to_load_the_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 145407200,
  "status": "passed"
});
});