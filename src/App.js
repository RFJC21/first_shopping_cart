import React, { Component } from "react";
import Router from "./router/router";

import Navigation from "./navigation/navigation";
import classes from "./index.css";

class App extends Component {
  render() {
    return (
      <div className={classes.PageContainer}>
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
