import React, { Component } from 'react';
import Data from './Data';
import SelectionBox from './SelectionBox';
import Button from './Button';
import Input from './Input';
import MultiSelection from './MultiSelection';
import datastore from '../datastore';

const data = window.datastore;

class Table extends Component {
  state = {
    filter1: '',
    filterType: '',
    filter2: '',
    filter3: [],
    searchVal: ''
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

  setFilter3 = (dataFromChild) => {
    this.setState({ filter3: dataFromChild });
  }

  setSearchVal = (dataFromChild) => {
    this.setState({ searchVal: dataFromChild });
  }

  clearFilter = () => {
    this.setState({filter1: '', filter2: '', filter3: [], filterType: '', searchVal: ''});
    window.location.reload()
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

  renderInput = (filter2) => {
    if (filter2 === 'Contains') {
      return <Input 
              className='input-style' 
              placeholder='Type value to search'
              onUpdate={this.setSearchVal}
              />
    }
  }

  renderMultiSelect = (filter1, filter2) => {
    if (filter2 !== '' && filter2 !=='Contains' 
                       && filter2 !== 'Has any value' 
                       && filter2 !== 'Has no value') {
      return <MultiSelection 
              className='multiselect-box-style'
              items={data}
              filterA={filter1}
              filterB={filter2}
              onUpdate={this.setFilter3}
              />
    }
  }

  render() {
    const {filter1, filter2, filter3, filterType, searchVal} = this.state;
    return (
      <div>
        <div className='filter-style'>
          <div className='title-style'>Salsify Product List</div>
          <SelectionBox
            defaultVal='Select a Property'
            items={data.getProperties()}
            func={(prop) => {return <option key={prop.id}>{prop.name}</option>}}
            funcType='property'
            onUpdate={this.setFilter1}
            setType={this.setFilterType}
            resetBase={filter1}
            />
          <SelectionBox
            defaultVal='Select a Operator'
            items={this.makeOperator(filterType)}
            func={(op) => {return <option key={op.id}>{op.text}</option>}}
            funcType='operator'
            onUpdate={this.setFilter2}
            resetBase={filter2}
            />
          {this.renderMultiSelect(filter1, filter2)}
          {this.renderInput(filter2)}
          <Button onUpdate={this.clearFilter}/>
        </div>
        <Data 
          content={data}
          onUpdate={this.clearFilter}
          filterA={filter1}
          filterB={filter2}
          filterC={filter3}
          searchVal={searchVal}/>
      </div>
    )
  }
}

export default Table;