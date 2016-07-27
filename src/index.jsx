import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import io from 'socket.io-client';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_actions_middelware';


const socket = io(`${location.protocol}//${location.hostname}:8090`);
const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware(socket))(createStore);
const store = createStoreWithMiddleware(reducer);
socket.on('test', (data) => {
  console.log(data);
})
socket.on('state', state =>
  store.dispatch(setState(state))
);

const routes = <Route component={App}>
  <Route path="/results" component={ResultsContainer}/>
  <Route path="/" component={VotingContainer}/>
</Route>

ReactDom.render(
  <Provider store={store}>
    <Router history={ hashHistory }>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)
console.log("alive");
