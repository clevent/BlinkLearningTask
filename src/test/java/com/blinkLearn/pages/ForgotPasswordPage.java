package com.blinkLearn.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ForgotPasswordPage {

    @FindBy(id = "forgot")
    public WebElement forgot;

    @FindBy(name="emailolvido")
    public WebElement enterEmail;

    @FindBy(id="botonolvido")
    public WebElement boton;

    @FindBy(id="alertForgot")
    public WebElement alertMessage;

    @FindBy(xpath = "//*[@id=\"cookie-bar\"]/div/div/div[2]/a[1]")
    public WebElement accept;
}
