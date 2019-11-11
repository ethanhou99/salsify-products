import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SelectionBox extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    defaultVal: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      filterValue: ''
    }
  }
  
  handleChange = (e) => {
    if (e.target.value !== '') {
      if (this.props.funcType === 'property') {
          this.props.setType(this.getDataType(e.target.value).type);
          this.props.onUpdate(e.target.value);
          this.setState({filterValue: e.target.value});
      } else if (this.props.funcType === 'operator') {
        this.props.onUpdate(e.target.value);
        this.setState({filterValue: e.target.value});
      } else {
        this.props.onUpdate('');
        this.setState({filterValue: ''});
      }
    }
  };

  getDataType = (e) => {
    return this.props.items.filter(property => property.name === e)[0]
  }

  render() {
    const {items, defaultVal, func} = this.props;
    var itemList = items.map(func)
    return (
      <select className='select-box-style' 
        onChange={this.handleChange} 
        value={this.state.filterValue}>
          <option>{defaultVal}</option>
          { itemList }
      </select>
    )
  }
}

export default SelectionBox;