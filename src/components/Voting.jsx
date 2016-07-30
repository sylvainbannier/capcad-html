import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';
import AddIdea from './AddIdea';
import * as actionCreators from '../action_creators';

const Voting = React.createClass({
  mixins: [PureRenderMixin],
	render() {
    // var { winner, ...other } = this.props;
		return (
      <div className="voting">
        <AddIdea addIdea={()=>{}}/>
        {
          this.props.winner?
          <Winner ref="winner" winner={this.props.winner}/>:
          <Vote {...this.props}/>
        }
        </div>
		);
	}
});

function mapStateToProps(state) {
  return {
    // pair: state.getIn([ 'vote', 'pair' ]),
    // hasVoted: state.get('hasVoted'),
    // winner: state.get('winner')
  }
}

export const VotingContainer = connect(mapStateToProps, actionCreators )( Voting)

export default Voting;
