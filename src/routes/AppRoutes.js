import React from 'react'
import { 
  Router, 
  Route, 
  browserHistory, 
  IndexRoute 
} from 'react-router'

import {
  HomePage,
  ProductsPage,
  PageNotFound
} from '../pages/'
import App from '../App'

let AppRoutes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="products" component={ProductsPage}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
)

export default AppRoutes