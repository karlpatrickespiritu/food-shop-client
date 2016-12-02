import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Food Shop</h1>
        <MuiThemeProvider>
          {this.props.children}
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App