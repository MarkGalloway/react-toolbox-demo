import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Button from 'react-toolbox/lib/button/Button';
import Chip from 'react-toolbox/lib/chip/Chip';

import { formatPrice } from '../../utils';

const CARD_STYLE = {
  margin: '5px 0px'
}

function CbbBadge({status}) {
  switch(status) {
    case "Complete":
      return (
        <Chip style={{backgroundColor: 'green', color: 'white'}}>
          CBB Complete
        </Chip>
      )
    case "Incomplete":
      return (
        <Chip style={{backgroundColor: 'red', color: 'white'}}>
          CBB Incomplete
        </Chip>
      )
    default:
      return (
        <Chip style={{backgroundColor: 'purple', color: 'white'}}>
          Not Bookable
        </Chip>
      )
  }
}

export class ListItem extends Component {
  navigateTo(path='/') {
    browserHistory.push(path);
  }

  render() {
    const {
      id, year, make, model, customer, cbb_status, appraised_value,
      estimated_recon, average_market_price, cbb_wholesale,
      created, modified
    } = this.props.appraisal;

    return (
      <Card style={CARD_STYLE}>
        <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'baseline'}}>
          <CardTitle
            style={{flex: 1}}
            title={`${year} ${make} ${model}`}
            subtitle={`${customer}`}
          />
          <CbbBadge status={cbb_status}/>
        </div>
        <CardText>
          <div style={{display: 'flex', flexFlow: 'row wrap'}}>
            <div style={{flex: 2}}>
              <div>Appraised: <strong>{formatPrice(appraised_value)}</strong></div>
              <div>Est Recon: <strong>{formatPrice(estimated_recon)}</strong></div>
              <div>Avg Market: <strong>{formatPrice(average_market_price)}</strong></div>
              <div>CBB Wholesale: <strong>{formatPrice(cbb_wholesale)}</strong></div>
            </div>
            <div>
              <div>Created {moment(created).format("ddd, MMM D, YYYY")}</div>
              <div>Modified {moment(modified).format("ddd, MMM D, YYYY")}</div>
            </div>
          </div>
        </CardText>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <CardActions>
            <Button
              label="VIEW"
              primary
              onClick={() => this.navigateTo(`/appraisals/${id}`)}/>
            <Button
              label="EDIT"
              accent
              onClick={() => this.navigateTo(`/appraisals/${id}/edit`)}
            />
          </CardActions>
        </div>
      </Card>
    );
  }
}

export default ListItem;
