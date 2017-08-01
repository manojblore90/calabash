# calabash

•	Introduction
This document outlines the tools and software’s used to achieve automated testing process for any web projects that is built at Mobiddiction Sydney. This process consists of two main tools which is cucumberJS and BrowserStack.
Cucumber is a tool for running automated tests written in plain language. Because they're written in plain language, they can be read by anyone on your team. Because they can be read by anyone, you can use them to help improve communication, collaboration and trust on your team. Cucumber.js is the JavaScript implementation of Cucumber and runs on both Node.js (4 and above) and modern web browsers.
BrowserStack supports Selenium automated tests using Cucumber JS, and running your tests on our cloud setup is simple and straightforward. 
There are few pre-requisites that would need to be installed to help cucumber and browserstack integrate seamlessly for the automated testing to run successfully. Please check the Setup section for more details.

•	Test Plan/Process
 

•	setup

Pre-requisites:

•	NodeJS
•	Browserstack automated account
•	Preferred code editor

Setup Instructions:

•	Download NodeJS from here 
•	Install NodeJS
•	Make sure you have the system environment is set
•	Open command prompt and type npm -version 
•	You should see something like 3.xx.xx if the installation was successful
•	Navigate to project folder in command prompt
•	Clone the default repo from here 
•	Install dependencies npm install from command prompt
•	Update *.conf.js files inside the conf/ directory with your BrowserStack Username and Access Key 
•	Navigate to features folder and create a new file as <filename>.feature
•	Navigate to step_definitions folder and create a new file as <filename>.js (the file name must be same as .feature file)  
•	Writing a Feature

A feature is a set of instructions to perform the test that written Gherkin language. Gherkin is the language that Cucumber understands. It is a Business Readable, Domain Specific Language that lets you describe software’s behavior without detailing how that behavior is implemented.
Like Python and YAML, Gherkin is a line-oriented language that uses indentation to define structure. Line endings terminate statements (eg, steps). Either spaces or tabs may be used for indentation (but spaces are more portable). Most lines start with a keyword.
Comment lines are allowed anywhere in the file. They begin with zero or more spaces, followed by a hash sign (#) and some amount of text.
The parser divides the input into features, scenarios and steps. When you run the feature the trailing portion (after the keyword) of each step is matched to a NodeJS code block called Step Definitions.
A Gherkin source file usually looks like this
 
 1: Feature: Some terse yet descriptive text of what is desired
 2:   Textual description of the business value of this feature
 3:   Business rules that govern the scope of the feature
 4:   Any additional information that will make the feature easier to understand
 5: 
 6:   Scenario: Some determinable business situation
 7:     Given some precondition
 8:        And some other precondition
 9:     When some action by the actor
10:       And some other action
11:       And yet another action
12:     Then some testable outcome is achieved
13:       And something else we can check happens too
14: 
15:   Scenario: A different situation
16:       ...

Cucumber scenarios consist of steps, also known as Givens, Whens and Thens. Cucumber doesn’t technically distinguish between these three kind of steps. These words have been carefully selected for their purpose, and you should know what the purpose is to get into the BDD mindset.

•	Writing a Step Definition 
Step definitions are glue between features written in Gherkin and the actual system under test. Use this.Given, this.When, this.Then, and this.defineStep. Matching groups in the regular expression are passed as parameters to the step definition.
A step definition file usually looks like this:
var assert = require('cucumber-assert');
var webdriver = require('selenium-webdriver');

module.exports = function() {
    Defined your steps here
    this.Given(){
        Add your action statements here
        ...
    }
    ....
}

With cucumberJS we can create a step definition in a much smarter way, follow the steps below to create your steps definition template with cucumberJS.

•	Navigate to your project folder in command prompt
•	Run the command CONFIG_FILE=single ./node_modules/cucumber/bin/cucumber.js features/<filename>.feature 
•	Copy the step definition generated in the command prompt and paste it into your step definition file
•	Add the action statements inside the step definition file
•	Once this is complete run the test with the following command CONFIG_FILE=single ./node_modules/cucumber/bin/cucumber.js features/<filename>.feature

