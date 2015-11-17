'use strict';

describe(`when home is loaded`, () => {
  var page;

  beforeEach(() => {
    browser.get('/index.html');
    page = require('./main.po');
  });

  describe(`when adding an idea`, () => {
    it(`should add idea to list`, () => {
      const idea = `new idea`;
      page.add(idea);
      expect(page.list.count()).toBe(1);
    });
  })
});
