import React, { Component } from 'react';

class Row extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.product.decathlon_id}</td>
        <td>{this.props.product.title}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default Row
