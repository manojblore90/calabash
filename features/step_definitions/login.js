/**
 * Created by MJBLR on 23/01/2017.
 */

var assert = require('cucumber-assert');
var webdriver = require('selenium-webdriver');

module.exports = function() {

    this.When(/^I type my name as "([^"]*)"$/, function (queryUserName, next) {
        this.driver.get('<URL OF THE CONTACT PAGE>');
        this.driver.findElement({ name: 'your-name' })
            .sendKeys(queryUserName).then(next);
    });

    this.Then(/^I type subject as "([^"]*)"$/, function (queryPassword, next) {
        this.driver.findElement({ name: 'your-subject' })
            .sendKeys(queryPassword).then(next);
    });

    this.Then(/^I type Email as "([^"]*)"$/, function (queryPassword, next) {
        this.driver.findElement({ name: 'your-email' })
            .sendKeys(queryPassword).then(next);
    });

    this.Then(/^I type message as "([^"]*)"$/, function (queryPassword, next) {
        this.driver.findElement({ name: 'your-message' })
            .sendKeys(queryPassword).then(next);
    });

    this.Then(/^I type phone number as "([^"]*)"$/, function (queryPassword, next) {
        this.driver.findElement({ name: 'your-phone' })
            .sendKeys(queryPassword).then(next);
    });

    this.Then(/^I click send$/, function (next) {
        this.driver.findElement({className: 'wpcf7-submit'})
            .click();
            next();
    });

    this.Then(/^I can see confirmation message$/, function (next) {
        this.driver.findElement({className: 'wpcf7-response-output'});
        next();
    });
};
