import React from "react";

class Form extends React.Component {
  handler = event => {
    event.preventDefault();
  };

  capture = event => {
    let current = event.target.value;
    this.props.do(current);
  };

  render() {
    return (
      <form onSubmit={this.handler}>
        <input onChange={this.capture} />{" "}
      </form>
    );
  }
}

export default Form;
