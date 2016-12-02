import React, { Component } from 'react'
import Product from './product/Product'
import './Products.css'

class Products extends Component {
  render() {
    return (
      <div>
        <Product className=""/>
        <Product/>
        <Product/>
      </div>
    )
  }
}

export default Products