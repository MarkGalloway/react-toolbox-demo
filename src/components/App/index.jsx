import React from 'react';
import { connect } from 'react-redux';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Layout from 'react-toolbox/lib/layout/Layout';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';

import { toggleDrawer, closeDrawer } from '../../actions';
import DrawerNavigation from './DrawerNavigation';

// ThemeProvider and theme imports are needed to avoid
// ejecting from create-react-app for this demo
import '../../../assets/react-toolbox/theme.css';
import theme from '../../../assets/react-toolbox/theme';


const propTypes = {
  drawerActive: React.PropTypes.bool.isRequired,
  toggleDrawerActive: React.PropTypes.func.isRequired,
  closeDrawer: React.PropTypes.func.isRequired,
  children: React.PropTypes.any
}


function App({ drawerActive, toggleDrawerActive, closeDrawer, children }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <NavDrawer
          active={drawerActive}
          onOverlayClick={toggleDrawerActive}
          permanentAt='md'
        >
          <DrawerNavigation closeDrawer={closeDrawer}/>
        </NavDrawer>
          {children}
      </Layout>
    </ThemeProvider>
  );
}

App.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    drawerActive: state.app.drawerActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerActive: () => dispatch(toggleDrawer()),
    closeDrawer: () => dispatch(closeDrawer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
