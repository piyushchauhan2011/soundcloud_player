import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from 'routes';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux';

import reducer from './reducers'
import {watchForQueryTracks} from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchForQueryTracks);

const App = () => (
  <Router history={browserHistory}>
    {routes()}
  </Router>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);