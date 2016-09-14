import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router,hashHistory} from 'react-router';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
// import io from 'socket.io-client';
import routes from './routes';
// import remoteActionMiddleware from './remote_actions_middelware';

// const socket = io(`${location.protocol}//${location.hostname}:8090`);
// const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware(socket))(createStore);
let store;
if (process.env.NODE_ENV !== 'production') {
  // store = createStoreWithMiddleware(reducer, window.devToolsExtension && window.devToolsExtensio
  store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());
}
else {
  // store = createStoreWithMiddleware(reducer);
  store = createStore(reducer);
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={ hashHistory }>{routes}</Router>
  </Provider>,
  document.getElementById('root')
)

