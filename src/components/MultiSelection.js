import React, { Component } from 'react';

class MultiSelection extends Component {
  
  makeSelection = (items, filter) => {
    var set = new Set();
    var propId;
    if (filter === 'Product Name') {
      propId = 0;
    } else if (filter === 'color') {
      propId = 1;
    } else if (filter === 'weight (oz)') {
      propId = 2;
    } else if (filter === 'category') {
      propId = 3;
    } else if (filter === 'wireless') {
      propId = 4;
    }
    items.getProducts().map(
      prop => prop.property_values.filter(prop => prop.property_id === propId)
      .map(val => set.add(val.value)));
    var array = [...set];
    if (array !== null && (typeof array[0] === 'number')) {
      return array.sort((a, b) => a - b).map(val => <option>{val}</option>)
    }
    return array.sort().map(val => <option>{val}</option>)
  }

  render() {
    const {items, className, filterA} = this.props;
    
    if (filterA !== '') {
      return (
        <select
          className={className}
          multiple='multiple'
          size='3'>
          {this.makeSelection(items, filterA)}
        </select>
      )
    } else {
      return (
        null
      )
    }
  }
}

export default MultiSelection;