# ExtensionTest
This is a Maven, Java 8, Automation Test Project for Testing of on-time extension in Chrome & Firefox browser. It uses Selenium, Cucumber with JUnit 4 Unit testing framework. 

Following is the Quiz:
Thank you very much for filling out this quiz to the best of your competencies. The purpose of this
quiz is to evaluate your level of expertise in technologies and techniques that we use daily.
Upon submitting the solution please make sure to provide:
• all the necessary source code and dependencies
• build and deployment scripts
• a Readme file with answers / explanations / instructions you find necessary
If the questions are not clear, feel free to state assumptions that will help you in solving the problem.
Good luck and thank you again for your time!

Challenge 1
Consider the following relatively simple browser extension:
Page Load Time by alex-vv on GitHub
This Chrome / Firefox extension measures page load time and displays it in the toolbar.
You have to do the following:
• Please write a comprehensive test plan for this web extension
• Please describe the different types of tests that you would do
• Please describe the architecture and the flow of actions in the framework you would choose to automate the different tests

Solution:

Architecture:
Is attached in Github project by file name Architecture.png

Comprehensive Test Plan:

As this is for browser extension testing the testing will mainly focus on Functional Tests. The various testcases that can be considered in BDD format are:
Testcases:

	Feature: Extension testing
	
	Functional Test for Chrome & Firefox:
		Scenario: Validation of page load time extension loaded
    			Given User has added extension in browser
			Then extension displays table

		Scenario Outline: Validation of page load time displayed
    			Given User has added extension in browser
			When user navigates to "<url>"
			Then extension displays table for time to load the website
			And chrome extension displays time to load the website

		      |   url                         		|
		      | https://www.google.com    	|
		      | https://www.nexthink.com/   	|	

		Scenario: Validation of extension not working when disabled
    			Given User has added extension in browser
			When User has disabled the extension 
			Then extension does not display time for page load
 
		Scenario: Validation of extension is removable
    			Given User has added extension in browser
			When User removes the extension 
			Then extension is removed 
			And extension is no longer displayed to user

		Scenario: Validation of extension can be added(End to end)
    			Given User has not added extension to browser
			When User searches for extension in webstore
			And User adds the extension 
			Then extension is displayed 
			And extension displays time to load a webpage			
			And when clicks on extension then the detailed table of timing is displayed





Challenge 2
Out of the test plan you built above, the challenge for you is to write a suite of automated tests that
validate the functionality of this extension.
You should make sure that the following stages are automated:
• the test environment set-up: browser installation, extension instalation etc.
• running the test cases
• the test environment tear-down
At the end of the process, the suite should output a report of the tests and results.
Details:
• Feel free to use testing framework(s) of your choice.
• In case you choose to use any third-party libraries, make sure you comply with the license
restrictions
• Although in an ideal case the tests should cover all the supported OSes and browsers, feel free to simplify the approach and state your strategy for doing this
Thank you!

Solution:
I have added the repository in Github. 
The project is a Maven project using Java8, Junit, Selenium, Cucumber in BDD format with feature files, runner files, step definition file, test-output for reporting of the test results. 
The project has got all the required files for Browser driver, extension files of xpi & crx files as well firefox profile in resources package of project.
The project tests the extension in Firefox & Chrome browser & they have there respective feature files
These feature files are glued with step definition files in runner file 
The test report can be found in test-output folder with index.html file. 

Following is the link for the project:


https://github.com/iNileshW/ExtensionTest 
