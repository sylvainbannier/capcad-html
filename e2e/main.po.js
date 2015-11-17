/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.add = (idea) => {
    element(by.css('input')).sendKeys(idea);
    element(by.css('button.add')).click();

  }
  this.list = element.all(by.repeater('idea in main.ideas'));
};

module.exports = new MainPage();
