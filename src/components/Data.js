import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Data extends Component {
  static propTypes = {
    content: PropTypes.object.isRequired
  }

  makeData = (productList) => {
    var allProduct = [];
    productList.forEach(e => {var item = []
              e.forEach(content => {item.push(content.value)});
              allProduct.push(item)});
    return allProduct;
  }

  renderTableColValues = (item) => {
    return item.map(col => <td key={col} className='cell-style'>{col}</td>)
  }

  renderTableRows = (array) => {
    return array.map(item =>
      <tr key={item}>{this.renderTableColValues(item)}</tr>
    );
  }

  renderTableHeads = (properties) => {
    return <tr>{properties.map(prop => prop.name)
                          .map(head => <th key={head} className='header-style'>{head}</th>)}</tr>
  }

  render() {
    const {content} = this.props;
    const data = content.getProperties();
    const productList = content.getProducts().map(product => product.property_values);
    
    return (
      <div>
        <style>{"tr:nth-child(even) {background-color: #f2f2f2;}"}</style>
        <table className='table-style'>
          <thead>
            {this.renderTableHeads(data)}
          </thead>
          <tbody>
            {this.renderTableRows(this.makeData(productList))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Data;