import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Button from 'react-toolbox/lib/button/Button';

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
          <Button
            icon='arrow_back'
            label='Back'
            flat
            primary
            onClick={browserHistory.goBack}
          />
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
