package pageObjects;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends BasePage{
    public @FindBy(css = "h3") WebElement pageHeading;

    public @FindBy(css = "#r-redirect span:nth-child(1)") WebElement redirectTitle;
    public @FindBy(css = "#r-dns span:nth-child(1)") WebElement dnsTitle;
    public @FindBy(css = "#r-connect span:nth-child(1)") WebElement connectTitle;
    public @FindBy(css = "#r-request span:nth-child(1)") WebElement requestTitle;
    public @FindBy(css = "#r-response span:nth-child(1)") WebElement responseTitle;
    public @FindBy(css = "#r-dom span:nth-child(1)") WebElement domTitle;
    public @FindBy(css = "#r-load span:nth-child(1)") WebElement loadTitle;
    public @FindBy(css = "#r-total span:first-child") WebElement totalTitle;

    public @FindBy(css = "#r-redirect span:last-child") WebElement redirectValue;
    public @FindBy(css = "#r-dns span:last-child") WebElement dnsValue;
    public @FindBy(css = "#r-connect span:last-child") WebElement connectValue;
    public @FindBy(css = "#r-request span:last-child") WebElement requestValue;
    public @FindBy(css = "#r-response span:last-child") WebElement responseValue;
    public @FindBy(css = "#r-dom span:last-child") WebElement domValue;
    public @FindBy(css = "#r-load span:last-child") WebElement loadValue;
    public @FindBy(css = "#r-total span:last-child") WebElement totalValue;




}
