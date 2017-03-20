import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import { formatPrice, formatWithCommas } from '../../utils';
import CbbBadge from './CbbBadge';
import Button from 'react-toolbox/lib/button/Button';

const propTypes = {
  appraisal: React.PropTypes.shape({
    id: React.PropTypes.node.isRequired,
    year: React.PropTypes.node.isRequired,
    make: React.PropTypes.string.isRequired,
    model: React.PropTypes.string.isRequired,
    customer: React.PropTypes.string.isRequired,
    cbb_status: React.PropTypes.string.isRequired,
    appraised_value: React.PropTypes.number.isRequired,
    estimated_recon: React.PropTypes.number.isRequired,
    average_market_price: React.PropTypes.number.isRequired,
    cbb_wholesale: React.PropTypes.number.isRequired,
    created: React.PropTypes.number.isRequired,
    modified: React.PropTypes.number.isRequired,
    vin: React.PropTypes.string.isRequired,
    appraised_by: React.PropTypes.string.isRequired,
    odometer: React.PropTypes.number.isRequired
  }).isRequired
}

export class DetailItem extends Component {
  render() {
    const {
      id, year, make, model, customer, cbb_status, appraised_value,
      estimated_recon, average_market_price, cbb_wholesale,
      created, modified, vin, appraised_by, odometer
    } = this.props.appraisal;

    return (
      <div className="Appraisal-detail">
        <div className="Appraisal-item-header">
          <div>
            <div className="Appraisal-item-vehicle">
              {`${year} ${make} ${model}`}
            </div>
            <div className="Appraisal-item-vin">
              {vin}
            </div>
          </div>
          <CbbBadge status={cbb_status}/>
        </div>
        <div className="Appraisal-item-customer">
          Customer: {customer}
        </div>
          <div className="Appraisal-item-detail">
            <div>Appraised</div>
            <div className="Appraisal-item-price">
              {formatPrice(appraised_value)}
            </div>
          </div>
          <div className="Appraisal-item-detail">
            <div>Est Recon</div>
            <div className="Appraisal-item-price">
              {formatPrice(estimated_recon)}
            </div>
          </div>
          <div className="Appraisal-item-detail">
            <div>Avg Market</div>
            <div className="Appraisal-item-price">
              {formatPrice(average_market_price)}
            </div>
          </div>
          <div className="Appraisal-item-detail">
            <div>CBB Wholesale</div>
            <div className="Appraisal-item-price">
              {formatPrice(cbb_wholesale)}
            </div>
          </div>
          <div className="Appraisal-item-detail">
            <div>Odometer</div>
            <div>{formatWithCommas(odometer)} kms</div>
          </div>
          <div className="Appraisal-item-detail">
            <div>Appraised By</div>
            <div>{appraised_by}</div>
          </div>
          <div className="Appraisal-item-detail">
            <div>Created</div>
            <div>{moment(created).format("ddd, MMM D, YYYY")}</div>
          </div>
          <div className="Appraisal-item-detail">
            <div>Modified</div>
            <div>{moment(modified).format("ddd, MMM D, YYYY")}</div>
          </div>
          <div className="Appraisal-item-actions">
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

DetailItem.propTypes = propTypes;

export default DetailItem;
