import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';


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


export class AppraisalForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting, onSubmit } = this.props;

    return (
      <section className="Appraisal-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Field
              name="vin"
              type="text"
              label="VIN"
              component={ReactToolboxInput}
            />
            <Field
              name="customer"
              type="text"
              label="Customer Name"
              component={ReactToolboxInput}
            />
            <Field
              name="phone"
              type="text"
              label="Customer Phone Number"
              component={ReactToolboxInput}
            />
            <Field
              name="year"
              type="number"
              label="Year"
              component={ReactToolboxInput}
              normalize={value => parseInt(value, 10)}
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
              name="odometer"
              type="number"
              label="Odometer (kms)"
              component={ReactToolboxInput}
              normalize={value => parseInt(value, 10)}
            />
            <Field
              name="appraised_value"
              type="number"
              label="Appraised Value"
              component={ReactToolboxInput}
              normalize={value => parseInt(value, 10)}
            />
            <Field
              name="estimated_recon"
              type="number"
              label="Estimated Recon"
              component={ReactToolboxInput}
              normalize={value => parseInt(value, 10)}
            />
            <Field
              name="average_market_price"
              type="number"
              label="Average Market Price"
              component={ReactToolboxInput}
              normalize={value => parseInt(value, 10)}
            />
            <Field
              name="cbb_wholesale"
              type="number"
              label="CBB Wholesale"
              component={ReactToolboxInput}
              normalize={value => parseInt(value, 10)}
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

export default reduxForm({form: 'appraisal'})(AppraisalForm);
