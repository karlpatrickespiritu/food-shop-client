import React, { Component } from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Header from './components/shared/Header'
import MenuDrawer from './components/shared/MenuDrawer'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <MenuDrawer/>
            <Header/>
            {this.props.children}
          </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App