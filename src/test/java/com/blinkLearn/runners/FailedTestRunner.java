package com.blinkLearn.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/fail_html_report"},
        features = "@target/rerun.txt",
        glue = "com/vytrack/step_definitions"

)

public class FailedTestRunner {
}
