import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Header from './components/shared/Header'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <Header/>
            {this.props.children}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App