import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "../Routes/About";
import Portfolio from "../Routes/Portfolio";
import Detail from "../Routes/Detail";

//
export const PAGE_MAIN = "/";
export const PAGE_ABOUT = "/about";
export const PAGE_PORTFOLIO = "/portfolio";
const detail_param = "/:id";
export const LINK_CONTACT =
  "https://docs.google.com/forms/d/e/1FAIpQLScZRR1pw_Ha3gXgHbhUHpn5x5CVCgeMSNbCHipFtXxupCfWUQ/viewform?usp=sf_link";

export const PAGE_RESUME = "/resume";
export const PAGE_CONTACT = "/contact";

const NormalRoutes = () => (
  <Switch>
    <Route exact path={PAGE_MAIN} component={About} />
    <Route path={PAGE_ABOUT} component={About} />
    <Route path={PAGE_PORTFOLIO + detail_param} component={Detail} />
    <Route path={PAGE_PORTFOLIO} component={Portfolio} />
  </Switch>
);
const Routes = () => (
  <Router>
    <NormalRoutes />
  </Router>
);

export default Routes;
