package pageObjects;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.ProfilesIni;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import static util.Constants.*;

//import com.aventstack.extentreports.LogStatus;


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
            //FirefoxProfile firefoxProfile;
            FirefoxOptions firefoxOptions = new FirefoxOptions();
            //firefoxProfile = profilesIni.getProfile("Default User");
            //firefoxProfile = new File("src/main/resources/Default User");
            FirefoxProfile firefoxProfile = new FirefoxProfile(new File("src/main/resources/Default User"));
            firefoxProfile.addExtension(new File("src/main/resources/load_timer.xpi"));
            firefoxProfile.setPreference("browser.cache.disk.enable", false);
            firefoxProfile.setPreference("browser.cache.memory.enable", false);
            firefoxProfile.setPreference("browser.cache.offline.enable", false);
            firefoxProfile.setPreference("network.http.use-cache", false);


            firefoxOptions.setProfile(firefoxProfile);
            driver = new FirefoxDriver(firefoxOptions);
            //driver = new FirefoxDriver();
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

    public void validateTableRows() {
        if(homePage.pageHeading.isDisplayed())
        {
            if (!homePage.redirectTitle.isDisplayed()) throw new AssertionError();
            if(!homePage.redirectTitle.isDisplayed()) throw new AssertionError();
            if(!homePage.dnsTitle.isDisplayed()) throw new AssertionError();
            if(!homePage.connectTitle.isDisplayed()) throw new AssertionError();
            if(!homePage.requestTitle.isDisplayed()) throw new AssertionError();
            if(!homePage.responseTitle.isDisplayed()) throw new AssertionError();
            if(!homePage.domTitle.isDisplayed()) throw new AssertionError();
            if(!homePage.loadTitle.isDisplayed()) throw new AssertionError();
            if(!homePage.totalTitle.isDisplayed()) throw new AssertionError();
        }
    }

    public void validateTable() throws IOException {
        if (homePage.pageHeading.isDisplayed()) {
            if (!(homePage.redirectValue.getText().equals(null) |
                    homePage.dnsValue.getText().equals(null) |
                    homePage.connectValue.getText().equals(null) |
                    homePage.requestValue.getText().equals(null) |
                    homePage.responseValue.getText().equals(null) |
                    homePage.domValue.getText().equals(null) |
                    homePage.loadValue.getText().equals(null) |
                    homePage.totalValue.getText().equals(null))) {
                validateTableRows();
            } else {
                throw new AssertionError("Table Validation Test Failed");
            }
        }
    }

    public void printValues(WebElement element){
        System.out.println(element.getText());
    }

    public void extensionTest() throws IOException {
        if(homePage.pageHeading.isDisplayed())
        {
            if(!(homePage.redirectTitle.getText().equals("Redirect"))) throw new AssertionError();
            if(!(homePage.totalTitle.getText().equals("Total"))) throw new AssertionError();
        }
    }


    public static String capture(WebDriver driver) throws IOException {
        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        File Dest = new File("src/../ErrImages/" + System.currentTimeMillis()
                + ".png");
        String errflpath = Dest.getAbsolutePath();
        FileUtils.copyFile(scrFile, Dest);
        return errflpath;
    }

    public void waitForLoad(WebDriver driver) {
        ExpectedCondition<Boolean> pageLoadCondition = new
                ExpectedCondition<Boolean>() {
                    public Boolean apply(WebDriver driver) {
                        return ((JavascriptExecutor)driver).executeScript("return document.readyState").equals("complete");
                    }
                };
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(pageLoadCondition);
    }
}
