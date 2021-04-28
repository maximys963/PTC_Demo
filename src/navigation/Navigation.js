import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import Traffic from '../pages/Traffic/Traffic';

const Navigation = () => (
  <HashRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={Login}
      />
      <Route
        exact
        path="/registration"
        component={Registration}
      />
      <Route
        path="/traffic"
        component={Traffic}
      />
    </Switch>
  </HashRouter>
);

export default Navigation;
