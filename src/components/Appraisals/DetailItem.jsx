import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import { formatPrice, formatWithCommas } from '../../utils';
import CbbBadge from './CbbBadge';
import Button from 'react-toolbox/lib/button/Button';

const DETAIL_STYLE = {
  padding: '5%',
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'space-between'
}

export class DetailItem extends Component {
  render() {
    const {
      id, year, make, model, customer, cbb_status, appraised_value,
      estimated_recon, average_market_price, cbb_wholesale,
      created, modified, vin, appraised_by, odometer
    } = this.props.appraisal;

    return (
      <div style={DETAIL_STYLE}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div><strong>{`${year} ${make} ${model}`}</strong></div>
          <CbbBadge status={cbb_status}/>
        </div>
        <div>{vin}</div>
        <div style={{padding: '1rem 0'}}>
          Customer: {customer}
        </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>Appraised</div>
            <div><strong>{formatPrice(appraised_value)}</strong></div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>Est Recon</div>
            <div><strong>{formatPrice(estimated_recon)}</strong></div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>Avg Market</div>
            <div><strong>{formatPrice(average_market_price)}</strong></div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>CBB Wholesale</div>
            <div><strong>{formatPrice(cbb_wholesale)}</strong></div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>Odometer</div>
            <div>{formatWithCommas(odometer)} kms</div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>Appraised By</div>
            <div>{appraised_by}</div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>Created</div>
            <div>{moment(created).format("ddd, MMM D, YYYY")}</div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>Modified</div>
            <div>{moment(modified).format("ddd, MMM D, YYYY")}</div>
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '1.0rem'}}>
            <Button
              label="BACK"
              primary
              onClick={() => browserHistory.push(`/appraisals`)}
            />
            <Button
              label="EDIT"
              accent
              onClick={() => browserHistory.push(`/appraisals/${id}/edit`)}
            />
          </div>
      </div>
    );
  }
}

export default DetailItem;
