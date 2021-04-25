package stepsdefs;


import io.cucumber.java.After;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.BasePage;

import java.io.IOException;

public class ExtensionTestSteps extends BasePage {

    WebDriver driver;
    static String browser;

    @Given("^User has added extension in browser$")
    public void user_has_added_extension_in_browser(){
        browser = "chrome";
        driver = openUrl(browser);
    }

    @Then("^extension displays table$")
    public void extension_displays_table() throws IOException {
        validateTableRows();
    }

    @When("^user navigates to \"([^\"]*)\"$")
    public void user_navigates_to_https_www_google_com(String url) {
        driver.get(url);
        waitForLoad(driver);
    }

    @Then("^chrome extension displays time to load the website$")
    public void chrome_extension_displays_time_to_load_the_website() throws IOException {
        driver = openExtensionUrl(browser, driver);
        extensionTest();
    }



    @Then("^firefox extension displays time to load the website$")
    public void firefox_extension_displays_time_to_load_the_website() throws IOException {
        driver = openExtensionUrl(browser,driver);
        extensionTest();
    }

    @Then("^extension displays table for time to load the website$")
    public void extension_displays_table_for_time_to_load_the_website() throws IOException {
        openExtensionUrlToCheck(browser,driver);
        validateTableRows();
    }

    @Then("^firefox extension displays table for time to load the website$")
    public void firefox_extension_displays_table_for_time_to_load_the_website(){
        openExtensionUrlToCheck(browser,driver);
        validateTableRows();
    }

    @Then("^the pop up displays the elements of page with time to load$")
    public void the_pop_up_displays_the_elements_of_page_with_time_to_load() throws IOException {
        validateTable();
    }

    @Given("^User has added extension in firefox browser$")
    public void user_has_added_extension_in_firefox_browser()
    {
        browser = "firefox";
        driver = openUrl(browser);
    }

   @After
   @org.junit.After
    public void after() {
       if (driver != null) {
           driver.quit();
       }
   }
}
