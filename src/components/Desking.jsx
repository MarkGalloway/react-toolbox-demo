import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';

import { toggleDrawer } from '../actions';

class Desking extends Component {

  render() {
    return (
      <Layout>
        <AppBar
          fixed
          title='Desking'
          leftIcon='menu'
          onLeftIconClick={ this.props.toggleDrawerActive }
        />
        <Panel>
          {this.props.children}
        </Panel>
      </Layout>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerActive: () => dispatch(toggleDrawer())
  }
}

export default connect(null, mapDispatchToProps)(Desking);
