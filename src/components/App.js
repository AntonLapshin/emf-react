import React, { Component } from "react";
import { Route, Redirect } from "react-router";

import Pages from "./pages";

class App extends Component {
  render() {
    console.log(this.props.match);
    const redirect = this.props.match.isExact && (
      <Redirect from="/" to="/form-manager" />
    );
    return (
      <div>
        <h2>App</h2>
        {Pages.map((p, i) => {
          return (
            <Route key={`route-${i}`} path={p.url} component={p.component} />
          );
        })}
        {redirect}
      </div>
    );
  }
}

export default App;
