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
      return array.sort((a, b) => a - b).map(val => <option key={val}>{val}</option>)
    }
    return array.sort().map(val => <option key={val} value={val}>{val}</option>)
  }

  handleChange = () => {
    var result=[];
    var x=document.getElementById('select-props');
    for (var i = 0; i < x.options.length; i++) {
      if(x.options[i].selected){
            result.push(x.options[i].value);
        }
      this.props.onUpdate(result);
    }
    
  };

  render() {
    const {items, className, filterA} = this.props;
  
    return (
      <div>
        <select multiple
          id='select-props'
          className={className}
          onChange={this.handleChange}
          size='4'>
          {this.makeSelection(items, filterA)}
        </select>
        <div className='warning-style'>
          * Hold down the Ctrl (Win) or Command (Mac) button to select and unselect multiple options.
        </div>
      </div>
    )
  }
}

export default MultiSelection;