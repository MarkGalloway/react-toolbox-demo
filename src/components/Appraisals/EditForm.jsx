import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';

const EDIT_STYLE = {
  paddingLeft: '5%',
  paddingRight: '5%',
}


function ReactToolboxInput({input, label, type, meta: { touched, error }, ...rest}) {
  return (
    <Input
      label={label}
      type={type}
      {...input}
      onChange={(name, value) => input.onChange(value)}
      {...rest}
    />
  )
}


export class EditForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting, onSubmit } = this.props;

    return (
      <section style={EDIT_STYLE}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Field
              name="vin"
              type="text"
              label="VIN"
              component={ReactToolboxInput}
            />
            <Field
              name="year"
              type="number"
              label="Year"
              component={ReactToolboxInput}
              normalize={value => parseInt(value)}
            />
            <Field
              name="make"
              type="text"
              label="Make"
              component={ReactToolboxInput}
            />
            <Field
              name="model"
              type="text"
              label="Model"
              component={ReactToolboxInput}
            />
            <Field
              name="appraised_value"
              type="number"
              label="Appraised Value"
              component={ReactToolboxInput}
              normalize={value => parseInt(value)}
            />
            <Field
              name="estimated_recon"
              type="number"
              label="Estimated Recon"
              component={ReactToolboxInput}
              normalize={value => parseInt(value)}
            />
            <Field
              name="average_market_price"
              type="number"
              label="Average Market Price"
              component={ReactToolboxInput}
              normalize={value => parseInt(value)}
            />
            <Field
              name="cbb_wholesale"
              type="number"
              label="CBB Wholesale"
              component={ReactToolboxInput}
              normalize={value => parseInt(value)}
            />
          </div>
          <Button
            type="submit"
            primary
            disabled={pristine || submitting}
          >
            Submit
          </Button>
          <Button
            type="button"
            accent
            disabled={pristine || submitting}
            onClick={reset}
          >
            Reset
          </Button>
        </form>
      </section>
    );
  }
}

export default reduxForm({form: 'editAppraisal'})(EditForm);
