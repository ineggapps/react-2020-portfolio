import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Intro from "../Routes/Intro";

const NormalRoutes = () => (
  <Switch>
    <Route path="/" component={Intro} />
  </Switch>
);
const Routes = () => (
  <Router>
    <NormalRoutes />
  </Router>
);

export default Routes;
