import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from '@/components/app/app';
import Home from '@/components/home-page/home-page';
import Favorites from '@/components/favorites-page/favorites-page';
import Login from '@/components/login/login';
import withGuardRoute from '@/hocs/with-guard-route/with-guard-route';


export default (
  <Router>
    <Route path="/" component={App} />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={withGuardRoute(Login, `anonymous`)} />
      <Route path="/favorites" component={withGuardRoute(Favorites, `user`)} />
    </Switch>
  </Router>
);
