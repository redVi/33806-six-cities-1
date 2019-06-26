import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import api from "@/api/config";

import App from "@/containers/app/app";
import Home from "@/containers/home/home";
import Favorites from "@/containers/favorites/favorites";
import Login from "@/containers/login/login";
import DetailOffer from "@/containers/detail-offer/detail-offer";
import ErrorHandler from "@/containers/error-handler/error-handler";

import withGuardRoute from "@/hocs/with-guard-route/with-guard-route";
import withFormData from "@/hocs/with-form-data/with-form-data";

export default (
  <ErrorHandler api={api}>
    <Router basename='/'>
      <Route path="/" component={App} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={withFormData(withGuardRoute(Login, true, "/"))} />
        <Route path="/favorites" component={withGuardRoute(Favorites, false, "/login")} />
        <Route path="/offer/:id" component={DetailOffer} />
        <Route component={Home} />
      </Switch>
    </Router>
  </ErrorHandler>
);
