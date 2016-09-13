import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  Simulate
} from 'react-addons-test-utils';
import {List, Map} from 'immutable';
import {Idea} from './Idea';
import {expect} from 'chai';
import sinon from 'sinon';

xdescribe('Idea', () => {
  xit(`displays the idea`);
  xit(`displays the rename button`);
  xit(`calls renameIdea(ideaId, newName) when rename is clicked`);
  xit(`displays lists`);
  xit(`calls toggleIdeaInList(ideaId, listId) callback when list is clicked`);
  xit(`displays add list button`);
  xit(`displays event history for this idea`);
  xit(`displays back to home button`);
  xit(`displays delete button if deletable=true`);
  xit(`calls deleteIdea(ideaId) when delete is clicked`);
});
