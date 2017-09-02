import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { push } from "react-router-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.props.dispatch(push("/dm"))}>DM</button>
        <button onClick={() => this.props.dispatch(push("/fm"))}>FM</button>
      </div>
    );
  }
}

export default connect()(App);
