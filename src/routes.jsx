
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import EmptyPage from './components/EmptyPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={EmptyPage}/>
  </Route>
);
