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

const CARD_STYLE = {
  margin: '5px 0px'
}

export class ListItem extends Component {

  render() {
    const {
      id, year, make, model, customer, cbb_status, appraised_value,
      estimated_recon, average_market_price, cbb_wholesale,
      created, modified, vin
    } = this.props.appraisal;

    return (
      <Card style={CARD_STYLE}>
        <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'baseline'}}>
          <CardTitle
            style={{flex: 1}}
            title={`${year} ${make} ${model}`}
            subtitle={vin}
          />
          <CbbBadge status={cbb_status}/>
        </div>
        <CardText>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>Customer</div>
            <div>{customer}</div>
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
            <div>Created</div>
            <div>{moment(created).format("ddd, MMM D, YYYY")}</div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
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

export default ListItem;
