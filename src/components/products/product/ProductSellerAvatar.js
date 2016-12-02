import React, { Component } from 'react'
import { CardHeader } from 'material-ui/Card';

class ProductSellerAvatar extends Component {
  render() {
    return (
      <div>
        <CardHeader title="URL Avatar" subtitle="Subtitle" avatar="images/avatar.jpg" />
      </div>
    )
  }
}

export default ProductSellerAvatar