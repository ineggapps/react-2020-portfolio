import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Intro from "../Routes/Intro";
import Portfolio from "../Routes/Portfolio";

//
export const PAGE_INTRO = "/introduce";
export const PAGE_PORTFOLIO = "/portfolio";

const NormalRoutes = () => (
  <Switch>
    <Route path={PAGE_INTRO} component={Intro} />
    <Route path={PAGE_PORTFOLIO} component={Portfolio} />
  </Switch>
);
const Routes = () => (
  <Router>
    <NormalRoutes />
  </Router>
);

export default Routes;
