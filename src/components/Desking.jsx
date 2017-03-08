import React, { Component } from 'react';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';

import AppBarWithDrawer from './AppBarWithDrawer';

class Desking extends Component {

  render() {
    return (
      <Layout>
        <Panel>
          <AppBarWithDrawer title='Desking' />
          {this.props.children}
        </Panel>
      </Layout>
    );
  }
}

export default Desking;
