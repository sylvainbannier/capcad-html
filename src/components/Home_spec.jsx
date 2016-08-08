import React from 'react';
import ReactDom from 'react-dom';
import {renderIntoDocument,scryRenderedDOMComponentsWithTag,Simulate} from 'react-addons-test-utils';
import Home from './Home';
import {expect} from 'chai';
import { shallow, mount } from 'enzyme';
import {Link} from 'react-router';

describe("Home", () => {
  it('Displays the add idea button', () => {
    const home = shallow(<Home/>);
    expect(home.containsAllMatchingElements( [ <Link to="/addidea">addIdea</Link> ])).to.equal(true);
  })
});
