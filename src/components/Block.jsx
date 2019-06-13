import React, { Component } from "react";

class Block extends Component {
  state = {
    value: "Hi"
  };

  clicko = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };
  render() {
    return (
      <div>
        <button onClick={this.clicko}>{this.state.value}</button>
      </div>
    );
  }
}
export default Block;
