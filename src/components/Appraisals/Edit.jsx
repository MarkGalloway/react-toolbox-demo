import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Button from 'react-toolbox/lib/button/Button';

import { toggleDrawer, updateAppraisal } from '../../actions';
import EditForm from './EditForm';

export class Edit extends Component {

  onSubmit(values) {
    const { appraisal, updateAppraisal } = this.props;
    updateAppraisal(appraisal.id, values);
    browserHistory.push(`/appraisals/${appraisal.id}`)
  }

  render() {
    const { appraisal, toggleDrawerActive } = this.props;

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
              onClick={browserHistory.goBack}
            />
          <EditForm
            initialValues={appraisal}
            onSubmit={values => this.onSubmit(values)}
          />
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleDrawerActive: () => dispatch(toggleDrawer()),
    updateAppraisal: (appraisal_id, data) => dispatch(updateAppraisal(appraisal_id, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
