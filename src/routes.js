import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app.jsx'; 

const routes = (
  <Route path="/">
    <IndexRoute component={App}/>
    <Route path="home" component={App}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;