import React, { Component } from 'react';

class Button extends Component {
  handleClick = () => {
    this.props.onUpdate();
  };

  render() {
    return (
      <button 
        type="button" 
        className="button-style" 
        onClick={this.props.onUpdate}>Clear
      </button>
    )
  }
}

export default Button;