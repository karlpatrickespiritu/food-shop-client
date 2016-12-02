import React from 'react'
import { Card } from 'material-ui/Card'

import { 
  ProductSellerAvatar,
  ProductImage,
  ProductDescription,
  ProductTitle,
  ProductActions
} from './'
import './Product.css'

class Product extends React.Component {
  render() {
    return (
      <Card className="Product">
        <ProductSellerAvatar seller={this.props.product.seller}/>
        <ProductImage src={this.props.product.images[0]} />
        <ProductTitle title={this.props.product.name}/>
        <ProductDescription description={this.props.product.description} />
        <ProductActions />
      </Card>
    )
  }
}

export default Product