import React from 'react'
import { Card } from 'material-ui/Card'

import './Product.css'
import ProductSellerAvatar from './ProductSellerAvatar'
import ProductImage from './ProductImage'
import ProductDescription from './ProductDescription'
import ProductTitle from './ProductTitle'
import ProductActions from './ProductActions'

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