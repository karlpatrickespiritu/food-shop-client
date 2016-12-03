import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Header from './components/shared/Header'
import MenuDrawer from './components/shared/MenuDrawer'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <MenuDrawer/>
            <Header/>
            {this.props.children}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App