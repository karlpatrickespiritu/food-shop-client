import React, { Component } from 'react'
import { Link } from 'react-router'
// import Products from '../components/products/Products'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <Link to="/products">products</Link>
        {this.props.children}
      </div>
    )
  }
}

export default HomePage