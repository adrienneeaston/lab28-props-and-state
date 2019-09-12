import React from "react";
import Title from "./title.js";
import Form from "./form.js";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: 'these are my awesome "words" from message.js'
    };
  }
  render() {
    return (
      <>
        <h1>{this.props.text}</h1>
        <h2>{this.state.words}</h2>
        <Title title={this.props.title} />
        <Form do={this.props.action} />
        <h4>{this.props.input}</h4>
      </>
    );
  }
}

export default Message;
