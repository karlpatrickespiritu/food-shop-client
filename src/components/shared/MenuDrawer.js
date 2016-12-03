import React from 'react'
import { connect } from 'react-redux'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

import { openMenu, closeMenu } from '../../actions/menuDrawerActions'

class MenuDrawer extends React.Component {

  componentWillMount() {
    console.log(this.props)
    // this.props.dispatch(openMenu())
  }

  handleToggle() {
    this.setIsOpen(this.props.menu.is_open)
  }

  handleClose() {
    this.props.dispatch('CLOSE_MENU')
  }

  setIsOpen(open = true) {
    if (open) return this.props.dispatch(openMenu())
    return this.props.dispatch(closeMenu())
  }

  render() {
    return (
      <div>
        <p>{this.props.menu.is_open}</p>
        <RaisedButton
          label="Open Drawer"
          onTouchTap={this.handleToggle.bind(this)}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.props.menu.is_open}
          onRequestChange={(open) => this.setIsOpen(open)}
        >
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    menu: store.menu
  }
})(MenuDrawer)