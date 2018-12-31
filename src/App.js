import React, { Component } from "react";
import Router from "./router/router";

import Navigation from "./navigation/navigation";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
