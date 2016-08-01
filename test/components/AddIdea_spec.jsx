import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  Simulate
} from 'react-addons-test-utils';
import {List, Map} from 'immutable';
import {AddIdea} from '../../src/components/AddIdea';
import {expect} from 'chai';


describe('AddIdea', () => {

  it('invokes the callback when next button is clicked', () => {
    let addIdeaInvoked = false;
    const addIdea = () => addIdeaInvoked = true;

    const component = renderIntoDocument(
      <AddIdea addIdea={addIdea}/>
    );
    Simulate.click(ReactDOM.findDOMNode(component.refs.addIdea));

    expect(addIdeaInvoked).to.equal(true);
  });

});
