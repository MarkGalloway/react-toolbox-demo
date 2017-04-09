import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Button from 'react-toolbox/lib/button/Button';

import { formatPrice } from '../../utils';
import CbbBadge from './CbbBadge';


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
  }).isRequired
}

export class ListItem extends Component {

  render() {
    const {
      id, year, make, model, customer, cbb_status, appraised_value,
      estimated_recon, average_market_price, cbb_wholesale,
      created, modified, vin
    } = this.props.appraisal;

    return (
      <Card className="Appraisal-card Appraisal-card-flex">
        <div className="Appraisal-card-title">
          <CardTitle
            style={{flex: 1}}
            title={`${year} ${make} ${model}`}
            subtitle={vin}
          />
          <CbbBadge status={cbb_status}/>
        </div>
        <CardText>
          <div className="Appraisal-card-detail-item">
            <div>Customer</div>
            <div>{customer}</div>
          </div>
          <div className="Appraisal-card-detail-item">
            <div>Appraised</div>
            <div><strong>{formatPrice(appraised_value)}</strong></div>
          </div>
          <div className="Appraisal-card-detail-item">
            <div>Est Recon</div>
            <div><strong>{formatPrice(estimated_recon)}</strong></div>
          </div>
          <div className="Appraisal-card-detail-item">
            <div>Avg Market</div>
            <div><strong>{formatPrice(average_market_price)}</strong></div>
          </div>
          <div className="Appraisal-card-detail-item">
            <div>CBB Wholesale</div>
            <div><strong>{formatPrice(cbb_wholesale)}</strong></div>
          </div>
          <div className="Appraisal-card-detail-item">
            <div>Created</div>
            <div>{moment(created).format("ddd, MMM D, YYYY")}</div>
          </div>
          <div className="Appraisal-card-detail-item">
            <div>Modified</div>
            <div>{moment(modified).format("ddd, MMM D, YYYY")}</div>
          </div>
        </CardText>
        <div>
          <CardActions>
            <Button
              label="VIEW"
              primary
              onClick={() => browserHistory.push(`/appraisals/${id}`)}/>
            <Button
              label="EDIT"
              accent
              onClick={() => browserHistory.push(`/appraisals/${id}/edit`)}
            />
          </CardActions>
        </div>
      </Card>
    );
  }
}

ListItem.propTypes = propTypes;

export default ListItem;
