import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from 'routes';

import { createStore } from 'redux';
import reducer from './reducers'

const store = createStore(reducer);

import {Provider} from 'react-redux';

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