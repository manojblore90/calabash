Feature: SMS widget on REST Website

  Background: Given I'm a user

  Scenario: Trigger sms widget to get download link for my app
    Given I navigate to "<ENTER YOUR LOGIN URL>" and I'm asked to login
    Then  I enter my username as "<USERNAME>"
    And   I enter my password as "<PASSWORD>"
    Then  I submit
    Given I am now on home page
    When  I click on sms download link button
    Then  I enter my mobile number as "<ENTER YOUR MOBILE NUMBER HERE>"
    Then  I click on send sms button
    Then  I see confirmation