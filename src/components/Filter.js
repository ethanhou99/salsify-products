import React, { Component } from 'react';
import SelectionBox from './SelectionBox';
import Button from './Button';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter1: "",
      filter2: ""
    };
  }

  setFilter1 = (dataFromChild) => {
    this.setState({ filter1: dataFromChild });
  }

  setFilter2 = (dataFromChild) => {
    this.setState({ filter2: dataFromChild });
  }

  clearFilter = () => {
    this.setState({filter1: "", filter2: ""});
  }

  render() {
    const data = this.props.content;
    const {setFilter1, setFilter2} = this.props;
    return (
      <div className='filter-style'>
        <SelectionBox
          defaultValue='Select a Property'
          items={data.getProperties()}
          func={(prop) => {return <option key={prop.id}>{prop.name}</option>}}
          onUpdate={setFilter1}
          />
        <SelectionBox
          defaultValue='Select a Operator'
          items={data.getOperators()}
          func={(op) => {return <option key={op.id}>{op.text}</option>}}
          onUpdate={setFilter2}
          />
        <Button onUpdate={this.clearFilter}/>
      </div>
    )
  }
}

export default Filter;