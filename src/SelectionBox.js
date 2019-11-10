import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SelectionBox extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    defaultValue: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired
  }
  
  render() {
    const {items, defaultValue, func} = this.props;
    var itemList = items.map(func)
    return (
      <div>
        <select>
          <option value=''>{defaultValue}</option>
          { itemList }
        </select>
      </div>
    )
  }
}

export default SelectionBox;