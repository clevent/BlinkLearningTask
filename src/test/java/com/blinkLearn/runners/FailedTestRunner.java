package com.blinkLearn.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/fail_html_report"},
        features = "@target/rerun.txt",
        glue = "com/blinkLearn/step_definitions"

)

public class FailedTestRunner {
}
