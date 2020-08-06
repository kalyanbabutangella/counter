import React, { Component } from "react";
import Presentation from "./Presentation";

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  render() {
    return (
      <div>
        <Presentation
          details={this.state}
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}
