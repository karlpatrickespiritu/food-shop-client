import React from 'react'

class ProductPrice extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.price}</h3>
      </div>
    )
  }
}

export default ProductPrice