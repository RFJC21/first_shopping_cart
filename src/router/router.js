import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/homepage";
import CartPage from "../pages/cartpage";

//we are going to call that component HomePage

const router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/cart" component={CartPage} />
  </Switch>
);

export default router;
