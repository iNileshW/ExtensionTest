package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;

import java.io.File;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.*;
import static util.Constants.*;


public class BasePage {
    public static HomePage homePage;
    public static WebDriver driver;

    public WebDriver openUrl() {
        System.setProperty(BROWSER_DRIVER, DRIVER_PATH);
        ChromeOptions options = new ChromeOptions();
        options.addArguments("start-maximized");
        options.addExtensions(new File("src/main/resources/pageloadtime.crx"));
        driver = new ChromeDriver(options);
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get(HOMEPAGE_URL);
        homePage = PageFactory.initElements(driver, HomePage.class);
        return driver;
    }

    public WebDriver openExtensionUrl() {
        driver.get(HOMEPAGE_URL);
        return driver;
    }

    public void openExtensionUrlToCheck(WebDriver webDriver) {
        webDriver.get(HOMEPAGE_URL);
    }

    public void validateEmptyTable(){
        String emptyString = "";
        assertEquals(homePage.redirectValue.getText(),emptyString);
        assertEquals(homePage.dnsValue.getText(),emptyString);
        assertEquals(homePage.connectValue.getText(),emptyString);
        assertEquals(homePage.requestValue.getText(),emptyString);
        assertEquals(homePage.responseValue.getText(),emptyString);
        assertEquals(homePage.domValue.getText(),emptyString);
        assertEquals(homePage.loadValue.getText(),emptyString);
        assertEquals(homePage.totalValue.getText(),emptyString);
        validateTableRows();
    }

    public void validateTableRows(){
        assertTrue(homePage.redirectTitle.isDisplayed());
        assertTrue(homePage.dnsTitle.isDisplayed());
        assertTrue(homePage.connectTitle.isDisplayed());
        assertTrue(homePage.requestTitle.isDisplayed());
        assertTrue(homePage.responseTitle.isDisplayed());
        assertTrue(homePage.domTitle.isDisplayed());
        assertTrue(homePage.loadTitle.isDisplayed());
        assertTrue(homePage.totalTitle.isDisplayed());
    }

    public void validateTable(){
        printValues(homePage.redirectValue);
        printValues(homePage.dnsValue);
        printValues(homePage.connectValue);
        printValues(homePage.requestValue);
        printValues(homePage.responseValue);
        printValues(homePage.domValue);
        printValues(homePage.loadValue);
        printValues(homePage.totalValue);

        assertNotNull(homePage.redirectValue.getText());
        assertNotNull(homePage.dnsValue.getText());
        assertNotNull(homePage.connectValue.getText());
        assertNotNull(homePage.requestValue.getText());
        assertNotNull(homePage.responseValue.getText());
        assertNotNull(homePage.domValue.getText());
        assertNotNull(homePage.loadValue.getText());
        assertNotNull(homePage.totalValue.getText());
        validateTableRows();
    }

    public void printValues(WebElement element){
        System.out.println(element.getText());
    }
}
