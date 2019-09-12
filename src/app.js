import React from "react";

import "./styles.css";

import Message from "./components/message.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  sayIt = string => {
    this.setState({ input: string });
  };

  render() {
    return (
      <Message
        text="To Do App"
        title="this is my title in app.js"
        action={this.sayIt}
        input={this.state.input}
      />
    );
  }
}

export default App;
