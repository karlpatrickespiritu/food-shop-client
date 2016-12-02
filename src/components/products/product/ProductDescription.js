import React from 'react'
import { CardText } from 'material-ui/Card'

class ProductDescription extends React.Component {
  render() {
    return (
      <CardText>{this.props.description}</CardText>
    )
  }
}

export default ProductDescription