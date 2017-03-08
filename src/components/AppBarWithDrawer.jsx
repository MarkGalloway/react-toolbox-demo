import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';

import { toggleDrawer } from '../actions';

function AppBarWithDrawer(props) {
  const { toggleDrawerActive, children, ...rest } = props;

  return (
      <AppBar
        leftIcon='menu'
        onLeftIconClick={ toggleDrawerActive }
        {...rest}
      >
        {children}
      </AppBar>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerActive: () => dispatch(toggleDrawer())
  }
}

export default connect(null, mapDispatchToProps)(AppBarWithDrawer);
