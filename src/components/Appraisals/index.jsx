import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import IconButton from 'react-toolbox/lib/button/IconButton';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';

import { toggleDrawer } from '../../actions';
import SidebarFilters from './SidebarFilters';

class Appraisals extends Component {

  state = {
    sidebarPinned: false
  };

  toggleSidebar() {
    this.setState(prevState => (
      { sidebarPinned: !prevState.sidebarPinned }
    ));
  }

  render() {
    const { toggleDrawerActive, appraisals } = this.props;
    const { sidebarPinned } = this.state;

    return (
      <Layout>
        <AppBar
          fixed
          title='Appraisals'
          leftIcon='menu'
          onLeftIconClick={ toggleDrawerActive }
          rightIcon='filter_list'
          onRightIconClick={() => this.toggleSidebar()}
        >
          <Navigation type='horizontal'>
            {/* TODO: Add style for visible icon... */}
            <IconMenu icon='sort' position='topRight' menuRipple>
              {/* TODO: can track selected item and select here */}
              <MenuItem value='id' caption='ID'/>
              <MenuItem value='appraised' caption='Appraised Value'/>
              <MenuItem value='created' caption='Created Date'/>
              <MenuItem value='modified' caption='Modified Date'/>
            </IconMenu>
          </Navigation>
        </AppBar>
        <Panel>
            {children}
        </Panel>
        <Sidebar pinned={sidebarPinned} width={6}>
          <SidebarFilters onClose={() => this.toggleSidebar()}/>
        </Sidebar>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerActive: () => dispatch(toggleDrawer())
  }
}

export default connect(null, mapDispatchToProps)(Appraisals);
