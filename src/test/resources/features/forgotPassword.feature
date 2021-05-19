@wip
Feature: try to get password with entering email

  Scenario: use email for getting password
    Given select Forgot Your Password option
    When enter your unregistered email and click send
    Then user should get "No user has been found with this email." message
