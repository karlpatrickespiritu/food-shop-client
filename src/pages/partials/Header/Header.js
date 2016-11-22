import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Header extends Component {
  render() {
    return (
      <AppBar title="React Shop" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
    )
  }
}

export default muiThemeable()(Header);