import React, { Component } from "react";

class Form extends Component {
  render() {
    const match = this.props.match;
    return (
      <div>
        <h3>Form {match.params.formId}</h3>
      </div>
    );
  }
}

export default Form;
