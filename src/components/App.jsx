import React from 'react';
import { Map } from 'immutable';

let votedWith = "";
const vote = (entry) => votedWith = entry;

export default React.createClass({
  render: function() {
    return this.props.children;
  }
})
