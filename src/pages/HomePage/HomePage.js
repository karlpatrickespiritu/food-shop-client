import  React, { Component } from 'react'
import Products from '../../components/Products/Products'
import Header from '../partials/Header/Header'

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