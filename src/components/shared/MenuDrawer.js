import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

import { openMenuDrawer, closeMenuDrawer } from '../../actions/menuDrawerActions'

class MenuDrawer extends React.Component {

  closeMenuDrawer() {
    this.props.dispatch(closeMenuDrawer())
  }

  openMenuDrawer() {
    this.props.dispatch(openMenuDrawer())
  }

  setMenuIsOpen(open = true) {
    if (open) return this.openMenuDrawer()
    return this.closeMenuDrawer()
  }

  goToLink(link) {
    browserHistory.push(link)
    this.closeMenuDrawer()
  }

  render() {
    const { menu } = this.props
    const menuList = menu.options.map((option) => {
      return <MenuItem key={option.id} onTouchTap={this.goToLink.bind(this, option.link)}>{option.title}</MenuItem>
    })

    return (
      <Drawer docked={false} width={200} open={menu.is_opened} onRequestChange={(open) => this.setMenuIsOpen(open)}>
        {menuList}
      </Drawer>
    );
  }
}

export default connect((store) => {
  return {
    menu: store.menu
  }
})(MenuDrawer)