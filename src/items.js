import React from 'react';
import Header from './header.js';
import Form from './form.js'

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: "these are my awesome \"words\" from item
    }
  }

  render() {
    return(
    <>
    <h1>{this.props.text}</h1>
    <h2>{this.state.words}</h2>
    )
  }
}