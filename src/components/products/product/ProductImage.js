import React from 'react'
import { CardMedia } from 'material-ui/Card';

class ProductImage extends React.Component {
  render() {
    return (
      <CardMedia>
        <img src={this.props.src} alt="" />
      </CardMedia>
    )
  }
}

export default ProductImage