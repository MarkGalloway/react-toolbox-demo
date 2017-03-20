import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Button from 'react-toolbox/lib/button/Button';

import { toggleDrawer } from '../../actions';
import SortMenu from './SortMenu';
import SidebarFilters from './SidebarFilters';
import ListItem from './ListItem';

const propTypes = {
  appraisals: React.PropTypes.array.isRequired,
  toggleDrawerActive: React.PropTypes.func.isRequired
}


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
            <SortMenu />
          </Navigation>
        </AppBar>
        <Panel>
          {
            appraisals.map(appraisal =>
              <ListItem key={appraisal.id} appraisal={appraisal}/>
            )
          }
          <Button
            className="Appraisal-fab"
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

List.propTypes = propTypes;

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
