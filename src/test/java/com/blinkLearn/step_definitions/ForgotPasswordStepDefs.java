package com.blinkLearn.step_definitions;

import com.blinkLearn.pages.ForgotPasswordPage;
import com.blinkLearn.pages.LoginPage;
import com.blinkLearn.utilities.BrowserUtils;
import com.blinkLearn.utilities.ConfigurationReader;
import com.blinkLearn.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;

public class ForgotPasswordStepDefs {

    ForgotPasswordPage forgotPage = new ForgotPasswordPage();

    @Given("select Forgot Your Password option")
    public void select_Forgot_Your_Password_option() {

        String url = ConfigurationReader.get("loginUrl");
        Driver.get().get(url);
        BrowserUtils.waitFor(2);
        new LoginPage().accept.click();

        Driver.get().findElement(By.id("forgot")).click();

    }

    @When("enter your unregistered email and click send")
    public void enter_your_unregistered_email_and_click_send() {

        String forgotEmail = ConfigurationReader.get("unregistered_username");

        Driver.get().findElement(By.name("emailolvido")).sendKeys("abc");

        Driver.get().findElement(By.id("botonolvido")).click();
    }

    @Then("user should get {string} message")
    public void user_should_get_message(String str) {


        BrowserUtils.waitFor(2);
        String message = Driver.get().findElement(By.className("alert")).getText();
        System.out.println("message = " + message);
        Assert.assertEquals("No user has been found with this email.",message);
    }


}
