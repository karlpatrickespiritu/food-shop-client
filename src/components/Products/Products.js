import React, { Component } from 'react'
import Product from './product/Product'
import './Products.css'

class Products extends Component {
  constructor() {
    super()
    this.state = {
      products: [{
        id: 1,
        name: 'Burger Yum',
        categories: ['burger', 'fast food', 'snack'],
        images: ['images/img1.jpg'],
        price: 40.00,
        description: 'A very yummy buger you dont want to miss!',
        seller: {
          id: 1,
          name: 'Jollibee',
          address: 'F. Ramos St., Cebu City',
          avatar: 'images/avatar.jpg'
        }
      }, {
        id: 2,
        name: 'Spaghetti',
        categories: ['pasta', 'faste food'],
        images: ['images/img1.jpg'],
        price: 60.00,
        description: 'Spaghetti! Spaghetti! Spaghetti!',
        seller: {
          id: 1,
          name: 'Jollibee',
          address: 'F. Ramos St., Cebu City',
          avatar: 'images/avatar.jpg'
        }
      }]
    }
  }
  render() {
    const products = this.state.products.map((product) => <Product key={product.id} product={product} />)

    return (
      <div>
        {products}
      </div>
    )
  }
}

export default Products