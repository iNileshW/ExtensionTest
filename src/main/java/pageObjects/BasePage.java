package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.ProfilesIni;
import org.openqa.selenium.support.PageFactory;

import java.io.File;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.*;
import static util.Constants.*;


public class BasePage {
    public static HomePage homePage;
    public WebDriver driver;

    public WebDriver openUrl(String browser) {
        if (browser.equals("chrome")) {
            System.setProperty(CHROME_BROWSER_DRIVER, CHROME_DRIVER_PATH);
            ChromeOptions options = new ChromeOptions();
            options.addArguments("start-maximized");
            options.addExtensions(new File("src/main/resources/pageloadtime.crx"));
            driver = new ChromeDriver(options);
            driver.manage().deleteAllCookies();
            driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
            driver.manage().window().maximize();
            driver.get(CHROME_HOMEPAGE_URL);
            homePage = PageFactory.initElements(driver, HomePage.class);
        }
        else if(browser.equals("firefox")){
            System.setProperty(FIREFOX_BROWSER_DRIVER, FIREFOX_DRIVER_PATH);
            ProfilesIni profilesIni = new ProfilesIni();
            FirefoxProfile firefoxProfile;
            FirefoxOptions firefoxOptions = new FirefoxOptions();
            firefoxProfile = profilesIni.getProfile("Default User");
            firefoxOptions.setProfile(firefoxProfile);
            firefoxProfile.addExtension(new File("src/main/resources/load_timer.xpi"));
            driver = new FirefoxDriver(firefoxOptions);
            driver.manage().deleteAllCookies();
            driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
            driver.manage().window().maximize();
            driver.get(FIREFOX_HOMEPAGE_URL);
            homePage = PageFactory.initElements(driver, HomePage.class);
        }
        return driver;
    }

    public WebDriver openExtensionUrl(String browser, WebDriver webDriver) {
        if(browser.equals("chrome")) {
            webDriver.get(CHROME_HOMEPAGE_URL);
        }
        else if(browser.equals("firefox")){
            webDriver.get(FIREFOX_HOMEPAGE_URL);
        }
        return driver;
    }

    public void openExtensionUrlToCheck(String browser, WebDriver webDriver) {
        if(browser.equals("chrome")) {
            webDriver.get(CHROME_HOMEPAGE_URL);
        }
        else if(browser.equals("firefox")){
            webDriver.get(FIREFOX_HOMEPAGE_URL);
        }
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
