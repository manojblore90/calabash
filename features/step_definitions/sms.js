/**
 * Created by MJBLR on 23/01/2017.
 */

var assert = require('cucumber-assert');
var webdriver = require('selenium-webdriver');

module.exports = function() {

    this.Given(/^I navigate to "([^"]*)" and I'm asked to login$/, function (arg1, next) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.manage().window().maximize();
        this.driver.get(arg1);
        next();
    });

    this.Then(/^I enter my username as "([^"]*)"$/, function (arg1, next) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.findElement({name: 'Login1$UserName'}).sendKeys(arg1).then(next);
    });

    this.Then(/^I enter my password as "([^"]*)"$/, function (arg1, next) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.findElement({name: 'Login1$Password'}).sendKeys(arg1).then(next);
    });

    this.Then(/^I submit$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.findElement({name: 'Login1$LoginButton'}).click().then(next);
    });

    this.Given(/^I am now on home page$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        var self = this;
        var currentLink = "http://202.171.181.100:8888/member";
        this.driver.sleep(80000).then(function () {
            self.driver.getCurrentUrl().then(function (link) {
                assert.equal(link, currentLink, next, 'Expected link to be ' + link);
            });
        });
    });

    this.When(/^I click on sms download link button$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.findElement({className: 'sms-download-button'}).click().then(next);
    });

    this.Then(/^I enter my mobile number as "([^"]*)"$/, function (arg1, next) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.findElement({id: 'phoneNumber'}).sendKeys(arg1).then(next);
    });

    this.Then(/^I click on send sms button$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.findElement({id: 'sendsms'}).click();
        this.driver.sleep(20000).then(next);
    });

    this.Then(/^I see confirmation$/, function (next) {
        // Write code here that turns the phrase above into concrete actions
        var self = this;
            this.driver.wait(function () {
                return self.driver.isElementPresent(webdriver.By.className("green-tick"));
            }, 20000);
            next();
        });


};
