import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Button from 'react-toolbox/lib/button/Button';

import { toggleDrawer } from '../../actions';
import SidebarFilters from './SidebarFilters';
import ListItem from './ListItem';

class List extends Component {

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
          {
            appraisals.map(appraisal =>
              <ListItem key={appraisal.id} appraisal={appraisal}/>
            )
          }
          <Button
            style={{position: 'fixed', right: '0.5rem', 'bottom': '0.5rem'}}
            icon='add'
            accent
            floating
            onClick={() => browserHistory.push('/appraisals/create')}
          />
        </Panel>
        <Sidebar pinned={sidebarPinned} width={6}>
          <SidebarFilters onClose={() => this.toggleSidebar()}/>
        </Sidebar>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appraisals: state.appraisals.appraisals
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerActive: () => dispatch(toggleDrawer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
