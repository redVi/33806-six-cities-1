import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import api from '@/api/config';
import App from '@/components/app/app';
import Home from '@/components/home/home';
import Favorites from '@/components/favorites/favorites';
import Login from '@/components/login/login';
import DetailOffer from '@/components/detail-offer/detail-offer';
import ErrorHandler from '@/components/error-handler/error-handler';
import withGuardRoute from '@/hocs/with-guard-route/with-guard-route';
import withFormData from '@/hocs/with-form-data/with-form-data';

export default (
  <ErrorHandler api={api}>
    <Router>
      <Route path="/" component={App} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={withFormData(withGuardRoute(Login, true, `/`))} />
        <Route path="/favorites" component={withGuardRoute(Favorites, false, `/login`)} />
        <Route path="/offer/:id" component={DetailOffer} />
        <Route component={Home} />
      </Switch>
    </Router>
  </ErrorHandler>
);
