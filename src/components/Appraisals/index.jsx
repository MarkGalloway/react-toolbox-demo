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

class Appraisals extends Component {

  state = {
    sidebarPinned: false
  };

  toggleSidebar = () => {
    this.setState(prevState => (
      { sidebarPinned: !prevState.sidebarPinned }
    ));
  };

  render() {
    const { toggleDrawerActive, children} = this.props;

    return (
      <Layout>
        <AppBar
          fixed
          title='Appraisals'
          leftIcon='menu'
          onLeftIconClick={ toggleDrawerActive }
          rightIcon='filter_list'
          onRightIconClick={this.toggleSidebar}
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
        <Sidebar pinned={this.state.sidebarPinned} width={6}>
          <div>
            <IconButton icon='close' onClick={this.toggleSidebar}/>
          </div>
          <p>Filters go here</p>
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
