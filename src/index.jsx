import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import {HomeContainer} from './components/Home';
import AddIdea from './components/AddIdea';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import io from 'socket.io-client';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_actions_middelware';


const socket = io(`${location.protocol}//${location.hostname}:8090`);
// const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware(socket))(createStore);
let store;
if (process.env.NODE_ENV !== 'production') {
  // store = createStoreWithMiddleware(reducer, window.devToolsExtension && window.devToolsExtension());
  store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());
}
else {
  // store = createStoreWithMiddleware(reducer);
  store = createStore(reducer);
}

// socket.on('test', (data) => {
//   console.log(data);
// })
// socket.on('state', state =>
//   store.dispatch(setState(state))
// );

const routes = <Route component={App}>
  <Route path="/addidea" component={AddIdea}/>
  <Route path="/" component={HomeContainer}/>
</Route>

ReactDom.render(
  <Provider store={store}>
    <Router history={ hashHistory }>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)
console.log("alive");
