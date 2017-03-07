
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import EmptyPage from './components/EmptyPage';
import Test from './components/Test';

export default (
  <Route path="/" component={App} title='Appraisals'>
    <IndexRoute component={EmptyPage}/>
    <Route path="test" component={Test}/>
    { /* <Route path="list" component={ListAppraisals}/> */ }
    { /* <Route path="create" component={CreateAppraisals}/> */ }
  </Route>
);
