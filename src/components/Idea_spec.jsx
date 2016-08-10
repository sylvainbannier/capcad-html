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

describe('Idea', () => {
  it(`displays the idea`);
  it(`displays the rename button`);
  it(`calls renameIdea(ideaId, newName) when rename is clicked`);
  it(`displays lists`);
  it(`calls toggleIdeaInList(ideaId, listId) callback when list is clicked`);
  it(`displays add list button`);
  it(`displays event history for this idea`);
  it(`displays back to home button`);
  it(`displays delete button if deletable=true`);
  it(`calls deleteIdea(ideaId) when delete is clicked`);
});
