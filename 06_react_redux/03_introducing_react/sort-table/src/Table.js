import React, { Component } from 'react';
import Row from './Row.js'
import { _ } from 'underscore';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {sortContext: 'decathlon_id'}
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th onClick={() => this.setState({sortContext: 'decathlon_id'})}>Product Id</th>
              <th onClick={() => this.setState({sortContext: 'title'})}>Title</th>
              <th onClick={() => this.setState({sortContext: 'price'})}>Price</th>
            </tr>
          </thead>
          <tbody>
            {_.sortBy(this.props.products, this.state.sortContext).map(
              (product) => <Row key={product.decathlon_id} product={product}></Row>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table
