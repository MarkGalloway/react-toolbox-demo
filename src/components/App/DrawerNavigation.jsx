import React from 'react';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Button from 'react-toolbox/lib/button/Button';
import withReactRouterLink from '../withReactRouterLink';

const ReactRouterLink = withReactRouterLink(Button);

function DrawerNavigation({closeDrawer}) {
  return (
    <div>
      <Navigation type='vertical'>
          <ReactRouterLink to='/appraisals' label='Appraisals' flat closeDrawer={closeDrawer}/>
          <ReactRouterLink to='/tasks' label='Tasks' flat closeDrawer={closeDrawer}/>
          <ReactRouterLink to='/appointments' label='Appointments' flat closeDrawer={closeDrawer}/>
          <ReactRouterLink to='/settings' label='settings' flat closeDrawer={closeDrawer}/>
          <ReactRouterLink to='/logout' label='logout' flat closeDrawer={closeDrawer}/>
      </Navigation>
    </div>
  );
}

export default DrawerNavigation;
