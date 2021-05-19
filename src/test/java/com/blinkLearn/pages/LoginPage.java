package com.blinkLearn.pages;

import com.blinkLearn.utilities.Driver;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "/html/body/div[2]/nav//div[2]/ul[1]/li[1]/a")
    public WebElement pageLogin;

    @FindBy(id="email")
    public WebElement email;

    @FindBy(id="contrasena")
    public WebElement password;

    @FindBy(id = "login")
    public WebElement submit;

    @FindBy(xpath = "//*[@id=\"cookie-bar\"]/div/div/div[2]/a[1]")
    public WebElement accept;


    public void login(String userNameStr, String passwordStr) {
        email.sendKeys(userNameStr);
        password.sendKeys(passwordStr);
        submit.click();

    }


}
