import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import PageNotFound from './pages/PageNotFound'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="products" component={ProductsPage}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>,
  document.getElementById('root')
);