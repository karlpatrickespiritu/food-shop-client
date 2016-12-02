import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage'
import PageNotFound from '../pages/PageNotFound'

class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={HomePage}>
          <IndexRoute component={HomePage}/>
          <Route path="products" component={ProductsPage}/>
          <Route path="*" component={PageNotFound}/>
        </Route>
      </Router>
    )
  }
}

export default AppRoutes