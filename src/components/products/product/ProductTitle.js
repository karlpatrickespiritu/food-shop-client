import React from 'react'
import { CardTitle } from 'material-ui/Card';

class ProductTitle extends React.Component {
  render() {
    return (
      <CardTitle title={this.props.title} subtitle={this.props.subtitle} />
    )
  }
}

export default ProductTitle