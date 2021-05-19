package com.blinkLearn.step_definitions;

import com.blinkLearn.pages.LoginPage;
import com.blinkLearn.utilities.BrowserUtils;
import com.blinkLearn.utilities.ConfigurationReader;
import com.blinkLearn.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.UnhandledAlertException;
import org.openqa.selenium.WebDriver;

public class UnregisteredLoginStepDefs {
    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() throws InterruptedException {
        
        String url = ConfigurationReader.get("loginUrl");
        Driver.get().get(url);

    }

    @When("the user enters the {string} and {string} information")
    public void the_user_enters_the_and_information(String username, String password)throws InterruptedException {
//        String username = ConfigurationReader.get("username");
//        String password = ConfigurationReader.get("password");
        
        LoginPage loginPage = new LoginPage();
        loginPage.accept.click();
        loginPage.login(username,password);
    }


    @Then("the user should not be able to login")
    public void the_user_should_be_able_to_login() throws UnhandledAlertException {
        try {
            // Add a wait timeout before this statement to make
            // sure you are not checking for the alert too soon.

            Alert alt = Driver.get().switchTo().alert();
            alt.accept();
        } catch(NoAlertPresentException noe) {
            // No alert found on page, proceed with test.
        }

        BrowserUtils.waitFor(2);

        Alert alert = Driver.get().switchTo().alert();
        String messageAlert = alert.getText();
        System.out.println("messageAlert = " + messageAlert);

        Assert.assertEquals("Unable to connect with your email/password. Please, check them and try again or click on “Forgot password?”. Remember that the login is case sensitive.",messageAlert);


    }
    @Then("the user should not be able to login2")
    public void the_user_should_be_able_to_login2()  {
        BrowserUtils.waitFor(3);
        Alert alert = Driver.get().switchTo().alert();
        String messageAlert = alert.getText();
        System.out.println("messageAlert = " + messageAlert);

        Assert.assertEquals("Enter your user name and password",messageAlert);

        try {

            Alert alt = Driver.get().switchTo().alert();
            alt.accept();
        } catch(NoAlertPresentException noe) {
            // No alert found on page, proceed with test.
        }



        String actualTitle = Driver.get().getTitle();

        Assert.assertEquals("Login | BlinkLearning",actualTitle);





    }




    }








