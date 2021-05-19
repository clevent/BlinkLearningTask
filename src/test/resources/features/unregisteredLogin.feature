@wip
Feature: Users should not be able to login with invalid credentials

  Scenario Outline: login with unregistered user information
    Given the user is on the login page
    When the user enters the "<email>" and "<password>" information
    Then the user should not be able to login

    Examples:
    |email      |password |
    |abc@abc.com|Abc123   |
    |def        |Def123   |
    |def@def    |Def123   |
    |def@def.com|Def123   |


  Scenario Outline: login with missing information
    Given the user is on the login page
    When the user enters the "<email>" and "<password>" information
    Then the user should not be able to login2

    Examples:
      |email      |password |
      |           |         |
      |abc        |         |
      |           |Abc123   |







