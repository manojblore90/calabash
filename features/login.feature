Feature: Contact Mobiddiction

  Background: Given I'm on Contact us page Screen

  Scenario: Submit contact us form in mobiddiction
    When I type my name as "<NAME>"
    Then I type subject as "<TEST SUBJECT>"
    Then I type Email as "<EMAIL>"
    Then I type message as "<MESSAGE>"
    Then I type phone number as "<MOBILE NUMBER>"
    Then I click send
    Then I can see confirmation message