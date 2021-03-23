import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MinionsPage from "./pages/minions_page/minions_page"
import MinionsRegister from "./pages/minions_register_page/minions_register_page"

const Routes = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/">
        <MinionsPage />
      </Route>
      <Route exact={true} path="/cadastroMinions">
        <MinionsRegister />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
