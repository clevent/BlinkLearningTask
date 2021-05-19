@wip
  Feature: initialize registration process

    Scenario: register yourself using private info
      Given select Register Now option
      When enter your data
      Then confirm licence invalid massage