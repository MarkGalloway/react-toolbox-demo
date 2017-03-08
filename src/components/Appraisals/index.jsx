import React, { Component } from 'react';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import IconButton from 'react-toolbox/lib/button/IconButton';
import Button from 'react-toolbox/lib/button/Button';

import AppBarWithDrawer from '../AppBarWithDrawer';

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
    return (
      <Layout>
        <Panel>
          <AppBarWithDrawer
            title='Appraisals'
            rightIcon='filter_list'
            onRightIconClick={this.toggleSidebar}
          >
            <Navigation type='horizontal'>
              { /* TODO: Must be an easier way to get a visible icon... */}
              <Button style={{color: 'rgba(255, 255, 255, 1)'}} icon='sort'/>
            </Navigation>
          </AppBarWithDrawer>
          {this.props.children}
        </Panel>
        <Sidebar pinned={this.state.sidebarPinned}>
          <div>
            <IconButton icon='close' onClick={this.toggleSidebar}/>
          </div>
          <p>Filters go here</p>
        </Sidebar>
      </Layout>
    );
  }
}

export default Appraisals;
