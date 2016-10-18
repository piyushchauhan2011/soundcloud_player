import React from 'react';
import { Route } from 'react-router';
import { App, Search, Queue, About } from 'modules';

const routes = () =>
  <Route path="/" component={App}>
    <Route path="/search" component={Search} />
    <Route path="/queue" component={Queue} />
    <Route path="/about" component={About} />
  </Route>;

export default routes;
