import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';

import { toggleDrawer } from '../../actions';
import DetailItem from './DetailItem';

export class Detail extends Component {
  render() {
    const { toggleDrawerActive, appraisal } = this.props;
    return (
      <Layout>
        <AppBar
          fixed
          title={`Appraisal #${appraisal.id}`}
          leftIcon='menu'
          onLeftIconClick={ toggleDrawerActive }
        />
        <Panel>
          <DetailItem appraisal={appraisal}/>
        </Panel>
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const appraisals = state.appraisals.appraisals;
  return {
    appraisal: appraisals.find(a => a.id == ownProps.params.appraisalId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerActive: () => dispatch(toggleDrawer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
