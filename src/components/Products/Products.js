import React, { Component } from 'react'
import Product from './Product/Product'

class Products extends Component {
  render() {
    return (
      <div>
        <Product/>
        <Product/>
        <Product/>
      </div>
    )
  }
}

export default Products