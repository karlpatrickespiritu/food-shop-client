import React, { Component } from 'react'
import Products from '../../components/products/Products'
import Header from '../partials/header/Header'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>HomePage</h1>
        <Products/>
      </div>
    )
  }
}

export default HomePage