package stepsdefs;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.BasePage;

import static java.lang.Thread.sleep;
import static org.junit.Assert.assertEquals;

public class ExtensionTestSteps extends BasePage {

    WebDriver driver;

    @Given("^User has added extension in browser$")
    public void user_has_added_extension_in_browser(){
        driver = openUrl("chrome");
    }

    @Then("^extension displays empty table$")
    public void extension_displays_empty_table() {
        validateTableRows();
    }

    @When("^user navigates to \"([^\"]*)\"$")
    public void user_navigates_to_https_www_google_com(String url) throws InterruptedException {
        driver.get(url);
        sleep(10000);
    }

    @Then("^extension displays time to load the website$")
    public void extension_displays_time_to_load_the_website(){
        driver = openExtensionUrl("chrome",driver);
        assertEquals(homePage.redirectTitle.getText(),"Redirect");
        assertEquals(homePage.totalTitle.getText(),"Total");
    }

    @Then("^firefox extension displays time to load the website$")
    public void firefox_extension_displays_time_to_load_the_website(){
        driver = openExtensionUrl("firefox",driver);
        assertEquals(homePage.redirectTitle.getText(),"Redirect");
        assertEquals(homePage.totalTitle.getText(),"Total");
    }

    @Then("^extension displays table for time to load the website$")
    public void extension_displays_table_for_time_to_load_the_website() {
        openExtensionUrlToCheck("chrome",driver);
        validateTableRows();
    }

    @Then("^firefox extension displays table for time to load the website$")
    public void firefox_extension_displays_table_for_time_to_load_the_website() {
        openExtensionUrlToCheck("firefox",driver);
        validateTableRows();
    }

    @Then("^the pop up displays the elements of page with time to load$")
    public void the_pop_up_displays_the_elements_of_page_with_time_to_load(){
        validateTable();
    }

    @Given("^User has added extension in firefox browser$")
    public void user_has_added_extension_in_firefox_browser() {
        driver = openUrl("firefox");
    }

    @After
    public void after() {
        if(driver!=null) {
            driver.quit();
        }
    }
}
