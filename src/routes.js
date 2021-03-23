import { React } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MinionsPage from "./pages/minions_page/minions_page";
import MinionsPurchasePage from "./pages/minions_purchase_page/minions_purchase_page";
import MinionsRegisterPage from "./pages/minions_register_page/minions_register_page";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/">
        <MinionsPage />
      </Route>
      <Route exact={true} path="/cadastroMinions">
        <MinionsRegisterPage />
      </Route>
      <Route exact={true} path="/compraMinion:id">
        <MinionsPurchasePage />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
