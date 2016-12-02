import React, { Component } from 'react'
import { Card } from 'material-ui/Card'

import './Product.css'
import ProductSellerAvatar from './ProductSellerAvatar'
import ProductImage from './ProductImage'
import ProductDescription from './ProductDescription'
import ProductTitle from './ProductTitle'
import ProductActions from './ProductActions'

class Product extends Component {
  render() {
    return (
      <Card className="Product">
        <ProductSellerAvatar />
        <ProductImage />
        <ProductTitle />
        <ProductDescription />
        <ProductActions />
      </Card>
    )
  }
}

export default Product