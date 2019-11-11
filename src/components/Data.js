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

  filterData = (productList, filter1, filter2, filter3) => {
    const {searchVal} = this.props
    
    var propId = -1;
    if (filter1 === 'Product Name') {
      propId = 0;
    } else if (filter1 === 'color') {
      propId = 1;
    } else if (filter1 === 'weight (oz)') {
      propId = 2;
    } else if (filter1 === 'category') {
      propId = 3;
    } else if (filter1 === 'wireless') {
      propId = 4;
    }
    
    if (propId !== -1 && (filter2 === 'Has any value' 
                      || filter2 === 'Has no value' 
                      || (filter3 && filter3.length)) !== 0) {
      if (filter2 === 'Equals') {
        return productList.filter(prop => filter3.includes(prop[propId].value.toString()));
      } else if (filter2 === 'Is greater than') {
        return productList.filter(prop => prop[propId].value > filter3);
      } else if (filter2 === 'Is less than') {
        return productList.filter(prop => prop[propId].value < filter3);
      } else if (filter2 === 'Has any value') {
        return productList.filter(prop => prop[propId] !== undefined);
      } else if (filter2 === 'Has no value') {
        return productList.filter(prop => prop[propId] === undefined);
      }else if (filter2 === 'Is any of') {
        return productList.filter(prop => filter3.includes(prop[propId].value));
      } else if (filter2 === 'Contains') {
        return productList.filter(prop => 
          prop[propId].value.toLowerCase().includes(searchVal.toLowerCase()));
      }
    }
    
    return productList;
  }

  renderTableColValues = (item) => item
    .map(col => <td key={col} className='cell-style'>{col}</td>);

  renderTableRows = (array) => array.map(item =>
      <tr key={item}>{this.renderTableColValues(item)}</tr>);

  renderTableHeads = (properties) => 
    <tr>{properties.map(prop => prop.name)
                    .map(head => <th key={head} className='header-style'>{head}</th>)}</tr>;

  render() {
    const {content, filterA, filterB, filterC} = this.props;
    const data = content.getProperties();
    const productList = content.getProducts().map(product => product.property_values);
    const filteredList = this.filterData(productList, filterA, filterB, filterC);
    return (
      <div>
        <style>{"tr:nth-child(even) {background-color: #f2f2f2;}"}</style>
        <table className='table-style'>
          <thead>
            {this.renderTableHeads(data)}
          </thead>
          <tbody>
            {this.renderTableRows(this.makeData(filteredList))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Data;