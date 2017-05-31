/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import NoMatch from './containers/NoMatch';

const Router = ({ history }) => (
  <BrowserRouter history={history}>
    <Switch>
      <Route
        exact path="/"
        component={Home}
      />
      <Route
        exact path="/404"
        component={NoMatch}
      />
    </Switch>
  </BrowserRouter>
);


export default Router;
