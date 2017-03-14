
import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import EmptyPage from './components/EmptyPage';
import App from './components/App';
import Appraisals from './components/Appraisals';
import Desking from './components/Desking';
import Test from './components/Test';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/appraisals" />
    <Route path="appraisals" component={Appraisals.List}/>
    <Route path="appraisals/:appraisalId" component={Appraisals.Detail}/>
    <Route path="appraisals/:appraisalId/edit" component={Appraisals.Edit}/>
    { /* TODO */}
    { /* <Route path="appraisals/create" component={CreateAppraisal}/> */ }
    <Route path="tasks" component={Desking}>
      <IndexRoute component={EmptyPage}/>
    </Route>
    <Route path="appointments" component={Desking}>
      <IndexRoute component={EmptyPage}/>
    </Route>
    <Route path="settings" component={Desking}>
      <IndexRoute component={EmptyPage}/>
    </Route>
    <Route path="logout" component={Desking}>
      <IndexRoute component={EmptyPage}/>
    </Route>
    <Route path="test" component={Test}/>
  </Route>
);
