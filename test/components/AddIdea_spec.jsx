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
    let nextInvoked = false;
    const next = () => nextInvoked = true;

    const component = renderIntoDocument(
      <AddIdea addIdea={next}/>
    );
    Simulate.click(ReactDOM.findDOMNode(component.refs.addIdea));

    expect(nextInvoked).to.equal(true);
  });

});
