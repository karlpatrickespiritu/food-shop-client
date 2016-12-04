import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './product/Product'
import './Products.css'

class Products extends Component {
  render() {
    const products = this.props.products.map((product) => <Product key={product.id} product={product} />)
    return <div>{products}</div>
  }
}

export default connect((store) => {
  return {
    products: store.products
  }
})(Products)