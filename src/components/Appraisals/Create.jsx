import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Button from 'react-toolbox/lib/button/Button';

import { toggleDrawer, addAppraisal } from '../../actions';
import AppraisalForm from './AppraisalForm';

const propTypes = {
  addAppraisal: React.PropTypes.func.isRequired,
  toggleDrawerActive: React.PropTypes.func.isRequired
}

export class Create extends Component {

  onSubmit(values) {
    const { addAppraisal } = this.props;
    addAppraisal(values);
    browserHistory.push('/appraisals')
  }

  render() {
    const { toggleDrawerActive } = this.props;

    return (
      <Layout>
        <AppBar
          fixed
          title={`New Appraisal`}
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
            onSubmit={values => this.onSubmit(values)}
          />
        </Panel>
      </Layout>
    );
  }
}

Create.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerActive: () => dispatch(toggleDrawer()),
    addAppraisal: data => dispatch(addAppraisal(data))
  }
}

export default connect(null, mapDispatchToProps)(Create);
