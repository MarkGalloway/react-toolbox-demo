import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Button from 'react-toolbox/lib/button/Button';

import { toggleDrawer, updateAppraisal } from '../../actions';
import AppraisalForm from './AppraisalForm';

const propTypes = {
  appraisal: React.PropTypes.object.isRequired,
  updateAppraisal: React.PropTypes.func.isRequired,
  toggleDrawerActive: React.PropTypes.func.isRequired
}

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
            <AppraisalForm
              initialValues={appraisal}
              onSubmit={values => this.onSubmit(values)}
            />
        </Panel>
      </Layout>
    );
  }
}

Edit.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
  const appraisals = state.appraisals.appraisals;
  const appraisalId = parseInt(ownProps.params.appraisalId, 10);
  return {
    appraisal: appraisals.find(a => a.id === appraisalId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerActive: () => dispatch(toggleDrawer()),
    updateAppraisal: (appraisal_id, data) => dispatch(updateAppraisal(appraisal_id, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
