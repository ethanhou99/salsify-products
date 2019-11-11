import React, { Component } from 'react';

class Input extends Component {
  handleChange = (e) => {
    this.props.onUpdate(e.target.value);
  };

  render() {
    const {className, placeholder} = this.props;
    return (
      <input
        className={className}
        placeholder={placeholder}
        onChange={this.handleChange}>
      </input>
    )
  }
}

export default Input;