import React, { Component } from 'react';
import datastore from './datastore';
import SelectionBox from './SelectionBox';

class Filter extends Component {
  render() {
    const data = window.datastore;
    return (
      <div className='inline-block'>
        <SelectionBox
          defaultValue='Select a Property'
          items={data.getProperties()}
          func={function(prop){return <option key={prop.id}>{prop.name}</option>}}/>

        <SelectionBox
          defaultValue='Select a Operator'
          items={data.getOperators()}
          func={function(op){return <option key={op.id}>{op.text}</option>}}/>
      </div>
    )
  }
}

export default Filter;