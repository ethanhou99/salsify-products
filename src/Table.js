import React, { Component } from 'react';
import PropTypes from 'prop-types'
import datastore from './datastore';

class Table extends Component {
  // static propTypes = {
  //   items: PropTypes.array.isRequired,
  //   defaultValue: PropTypes.string.isRequired,
  //   func: PropTypes.func.isRequired
  // }
  renderTableColValues = (item) => {
    return item.map(col => <td>{col}</td>)
  }

  renderTableRows = (array) => {
    return array.map(item =>
      <tr>{this.renderTableColValues(item)}</tr>
    );
  }

  renderTableHeads = (properties) => {
    return <tr>{properties.map(prop => prop.name)
                          .map(head => <th>{head}</th>)}</tr>
  }

  makeData = (productList) => {
    var allProduct = [];
    productList.forEach(e => {var item = []
              e.forEach(content => {item.push(content.value)});
              allProduct.push(item)});
    return allProduct;
  }

  render() {
    const {items, func} = this.props;
    const data = window.datastore.getProperties();
    const products = window.datastore.getProducts();
    const productList = products.map(product => product.property_values);
    
    return (
      <div>
        <table className="table table-striped">
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

export default Table;