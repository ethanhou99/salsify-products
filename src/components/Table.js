import React, { Component } from 'react';
import Data from './Data';
import SelectionBox from './SelectionBox';
import Button from './Button';
import datastore from '../datastore';

const data = window.datastore;

class Table extends Component {
  state = {
    filter1: '',
    filter2: ''
  };

  setFilter1 = (dataFromChild) => {
      this.setState({ filter1: dataFromChild });
  }

  setFilter2 = (dataFromChild) => {
    this.setState({ filter2: dataFromChild });
  }

  clearFilter = () => {
    this.setState({filter1: '', filter2: ''});
  }

  makeOperator = (filter1) => {
    if (filter1 === 'enumerated') {
      return data.getOperators()
                 .filter(operator => 
                  operator.text !== ('Is greater than')
                  && operator.text !== ('Is less than')
                  && operator.text !== ('Contains'))
    } else if (filter1 === 'string') {
      return data.getOperators()
                 .filter(operator => 
                  operator.text !== ('Is greater than') 
                  && operator.text !== ('Is less than'))
    } else if (filter1 === 'number') {
      return data.getOperators()
                 .filter(operator => 
                  operator.text !== 'Contains')
    } else {
      return data.getOperators()
    }
  }

  render() {
    return (
      <div>
        <div className='filter-style'>
          <SelectionBox
            defaultValue='Select a Property'
            items={data.getProperties()}
            func={(prop) => {return <option key={prop.id}>{prop.name}</option>}}
            funcType='property'
            onUpdate={this.setFilter1}
            />
          <SelectionBox
            defaultValue='Select a Operator'
            items={this.makeOperator(this.state.filter1)}
            func={(op) => {return <option key={op.id}>{op.text}</option>}}
            funcType='operator'
            onUpdate={this.setFilter2}
            />
          <Button onUpdate={this.clearFilter}/>
        </div>
        <Data content={data} onUpdate={this.clearFilter}/>
      </div>
    )
  }
}

export default Table;