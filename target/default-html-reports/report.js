$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/forgotPassword.feature");
formatter.feature({
  "name": "try to get password with entering email",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "use email for getting password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "select Forgot Your Password option",
  "keyword": "Given "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.ForgotPasswordStepDefs.select_Forgot_Your_Password_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter your unregistered email and click send",
  "keyword": "When "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.ForgotPasswordStepDefs.enter_your_unregistered_email_and_click_send()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should get \"No user has been found with this email.\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.ForgotPasswordStepDefs.user_should_get_message(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/register.feature");
formatter.feature({
  "name": "initialize registration process",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "register yourself using private info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "select Register Now option",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "enter your data",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "confirm licence invalid massage",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/unregisteredLogin.feature");
formatter.feature({
  "name": "Users should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenarioOutline({
  "name": "login with unregistered user information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user enters the \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" information",
  "keyword": "When "
});
formatter.step({
  "name": "the user should not be able to login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "abc@abc.com",
        "Abc123"
      ]
    },
    {
      "cells": [
        "def",
        "Def123"
      ]
    },
    {
      "cells": [
        "def@def",
        "Def123"
      ]
    },
    {
      "cells": [
        "def@def.com",
        "Def123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login with unregistered user information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the \"abc@abc.com\" and \"Abc123\" information",
  "keyword": "When "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_enters_the_and_information(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should not be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "login with unregistered user information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the \"def\" and \"Def123\" information",
  "keyword": "When "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_enters_the_and_information(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should not be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "login with unregistered user information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the \"def@def\" and \"Def123\" information",
  "keyword": "When "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_enters_the_and_information(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should not be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "login with unregistered user information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the \"def@def.com\" and \"Def123\" information",
  "keyword": "When "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_enters_the_and_information(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should not be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "login with missing information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user enters the \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" information",
  "keyword": "When "
});
formatter.step({
  "name": "the user should not be able to login2",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "abc",
        ""
      ]
    },
    {
      "cells": [
        "",
        "Abc123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login with missing information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the \"\" and \"\" information",
  "keyword": "When "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_enters_the_and_information(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should not be able to login2",
  "keyword": "Then "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_should_be_able_to_login2()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "login with missing information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the \"abc\" and \"\" information",
  "keyword": "When "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_enters_the_and_information(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should not be able to login2",
  "keyword": "Then "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_should_be_able_to_login2()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "login with missing information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the \"\" and \"Abc123\" information",
  "keyword": "When "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_enters_the_and_information(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should not be able to login2",
  "keyword": "Then "
});
formatter.match({
  "location": "com.blinkLearn.step_definitions.UnregisteredLoginStepDefs.the_user_should_be_able_to_login2()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});