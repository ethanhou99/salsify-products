import React, { Component } from 'react';
import Data from './Data';
import SelectionBox from './SelectionBox';
import Button from './Button';
import datastore from '../datastore';
import MultiSelection from './MultiSelection';

const data = window.datastore;

class Table extends Component {
  state = {
    filter1: '',
    filterType: '',
    filter2: ''
  };

  setFilter1 = (dataFromChild) => {
      this.setState({ filter1: dataFromChild });
  }

  setFilterType = (dataFromChild) => {
    this.setState({ filterType: dataFromChild });
  }

  setFilter2 = (dataFromChild) => {
    this.setState({ filter2: dataFromChild });
  }

  clearFilter = () => {
    this.setState({filter1: '', filter2: '', filterType: ''});
  }

  makeOperator = (filterType) => {
    if (filterType === 'enumerated') {
      return data.getOperators()
                 .filter(operator => 
                  operator.text !== ('Is greater than')
                  && operator.text !== ('Is less than')
                  && operator.text !== ('Contains'))
    } else if (filterType === 'string') {
      return data.getOperators()
                 .filter(operator => 
                  operator.text !== ('Is greater than') 
                  && operator.text !== ('Is less than'))
    } else if (filterType === 'number') {
      return data.getOperators()
                 .filter(operator => 
                  operator.text !== 'Contains')
    } else {
      return data.getOperators()
    }
  }

  render() {
    const {filter1, filter2, filterType} = this.state;

    return (
      <div>
        <div className='filter-style'>
          <SelectionBox
            defaultValue='Select a Property'
            items={data.getProperties()}
            func={(prop) => {return <option key={prop.id}>{prop.name}</option>}}
            funcType='property'
            onUpdate={this.setFilter1}
            setType={this.setFilterType}
            />
          <SelectionBox
            defaultValue='Select a Operator'
            items={this.makeOperator(filterType)}
            func={(op) => {return <option key={op.id}>{op.text}</option>}}
            funcType='operator'
            onUpdate={this.setFilter2}
            />
          <MultiSelection 
            className='multiselect-box-style'
            items={data}
            filterA={filter1}
            filterB={filter2}
            />
          <Button onUpdate={this.clearFilter}/>
        </div>
        <Data content={data} onUpdate={this.clearFilter}/>
      </div>
    )
  }
}

export default Table;