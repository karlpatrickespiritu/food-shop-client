import React, { Component } from 'react'
import { CardTitle, CardMedia } from 'material-ui/Card';

class ProductImage extends Component {
  render() {
    return (
      <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
        <img src="images/img1.jpg" alt="" />
      </CardMedia>
    )
  }
}

export default ProductImage