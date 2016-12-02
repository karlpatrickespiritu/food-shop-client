import React from 'react'
import { CardHeader } from 'material-ui/Card';

class ProductSellerAvatar extends React.Component {
  render() {
    return (
      <div>
        <CardHeader title={this.props.seller.name} subtitle={this.props.seller.address} avatar={this.props.seller.avatar} />
      </div>
    )
  }
}

export default ProductSellerAvatar