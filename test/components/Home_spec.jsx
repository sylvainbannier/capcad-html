import React from 'react';
import ReactDom from 'react-dom';
import {renderIntoDocument,scryRenderedDOMComponentsWithTag,Simulate} from 'react-addons-test-utils';
import Home from '../../src/components/Home';
import Winner from '../../src/components/Winner';
import Vote from '../../src/components/Vote';
import {expect} from 'chai';
import { shallow, mount } from 'enzyme';

describe.skip("Home", () => {
	it("displays buttons", () => {
		const component = renderIntoDocument(
			<Home pair={["Trainspotting", "28 Days Later"]} />
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons.length).to.equal(2);
		expect(buttons[0].textContent).to.equal('Trainspotting');
		expect(buttons[1].textContent).to.equal('28 Days Later');
	});

  it("invoke callbacks when button is clicked", () => {
    let votedWith;
    const vote = (entry) => votedWith = entry;
    const component = renderIntoDocument(
      <Home pair={["Trainspotting", "28 Days Later"]} vote={vote}/>
    );
    const button = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    Simulate.click(button);
    expect(votedWith).to.equal("Trainspotting");
  });

  it("disables buttons when has Voted", () => {
    const component = renderIntoDocument(
      <Home pair={["Trainspotting", "28 Days Later"]} hasVoted="Trainspotting"/>
    );
    expect(scryRenderedDOMComponentsWithTag(component, 'button')[0].hasAttribute("disabled")).to.equal(true);
    expect(scryRenderedDOMComponentsWithTag(component, 'button')[1].hasAttribute("disabled")).to.equal(true);
  });

  it("adds label to the voted entry", () => {
    const component = renderIntoDocument(
      <Home pair={["Trainspotting", "28 Days Later"]} hasVoted="Trainspotting"/>
    );
    expect(scryRenderedDOMComponentsWithTag(component, 'button')[0].textContent).to.contain('Voted');
  });

  it("Expects to render winner when there is one", () => {
    const component = renderIntoDocument(
      <Home pair={["Trainspotting", "28 Days Later"]} winner="Trainspotting"/>
    );
    expect(scryRenderedDOMComponentsWithTag(component, 'button').length).to.equal(0);
    const winner = ReactDom.findDOMNode(component.refs.winner);
    expect(winner).to.be.ok;
    expect(winner.textContent).to.contain('Trainspotting');
  });

  /*
   * test with shallow rendering
   */
  describe("With shallow rendering", () => {
    it('renders the winner', () => {
      const home = shallow(<Home pair={["Trainspotting", "28 Days Later"]} winner="Trainspotting"/>);
      expect(home.containsAllMatchingElements(
        [
          <Winner/>
      ])).to.equal(true);
    })

    it('renders the vote', () => {
      const home = shallow(<Home pair={["Trainspotting", "28 Days Later"]}/>);
      expect(home.containsAllMatchingElements(
        [
          <Vote/>
      ])).to.equal(true);
    })
  });


});
