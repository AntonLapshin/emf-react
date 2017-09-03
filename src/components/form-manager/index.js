import React, { Component } from "react";
import { Route } from "react-router";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import Form from "./Form";

class FormManager extends Component {
  render() {
    const match = this.props.match;
    return (
      <div className="form-manager">
        <h2>Form Manager</h2>
        <Route path={`${match.url}/form/:formId`} component={Form} />
        <button
          onClick={() => this.props.dispatch(push(`${match.url}/form/1`))}
        >
          Form 1
        </button>
      </div>
    );
  }
}

export default connect()(FormManager);
