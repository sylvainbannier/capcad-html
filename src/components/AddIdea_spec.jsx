import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  Simulate
} from 'react-addons-test-utils';
import {List, Map} from 'immutable';
import {AddIdea} from './AddIdea';
import {expect} from 'chai';
import sinon from 'sinon';

describe('AddIdea', () => {

  it('invokes the callback when submit button is clicked', () => {
    let addIdeaSpy = sinon.spy();
    const component = renderIntoDocument(<AddIdea addIdea={addIdeaSpy}/>);
    Simulate.click(ReactDOM.findDOMNode(component.refs.addIdea));
    expect(addIdeaSpy.called).to.equal(true);
  });

  it("has focus when when props.focus is set" ); //unable to test it without a real DOM

  it("handle submit on enter key", () => {
    let addIdeaSpy = sinon.spy();
    const component = renderIntoDocument(<AddIdea addIdea={addIdeaSpy}/>);
    Simulate.keyPress(ReactDOM.findDOMNode(component.refs.addIdeaInput),{key:"Enter"});
    expect(addIdeaSpy.called).to.equal(true);
  });

  it("is cleared when the submit button is clicked"); // not sure about that => rename scenario
});
