import React, { Component } from 'react'
import { connect} from 'react-redux'
import AppBar from 'material-ui/AppBar'
import muiThemeable from 'material-ui/styles/muiThemeable'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { openMenuDrawer } from '../../actions/menuDrawerActions'

class Header extends Component {
  openMenuDrawer() {
    this.props.dispatch(openMenuDrawer())
  }

  render() {
    return (
      <AppBar 
        title="React Shop" 
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementLeft={
          <IconButton onTouchTap={this.openMenuDrawer.bind(this)}>
            <NavigationClose/>
          </IconButton>
        }
      />
    )
  }
}

export default connect((store) => {
  return {
    menu: store.menu
  }
})(muiThemeable()(Header))