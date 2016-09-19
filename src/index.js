import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router,hashHistory} from 'react-router';
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import routes from './routes';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import merger from 'redux-storage-merger-immutablejs';

const storableReducer = storage.reducer(reducer, merger);
const engine = createEngine('my-save-key');
const middleware = storage.createMiddleware(engine);
let store;

if (process.env.NODE_ENV !== 'production') {
  store = createStore(storableReducer, compose(
    applyMiddleware(middleware),
    window.devToolsExtension ? window.devToolsExtension():(f) => f
  ));
}
else {
  store = applyMiddleware(middleware)(createStore)(storableReducer);
}

const load = storage.createLoader(engine);
load(store)
.then((newState) => {
  console.log('Loaded state:', newState);
  ReactDOM.render(
    <Provider store={store}>
      <Router history={ hashHistory }>{routes}</Router>
    </Provider>,
    document.getElementById('root')
  )
})
.catch(() => console.log('Failed to load previous state'));


