import React, { Component } from 'react';
import moment from 'moment';
import IconButton from 'react-toolbox/lib/button/IconButton';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';
import Slider from 'react-toolbox/lib/slider/Slider';
import Switch from 'react-toolbox/lib/switch/Switch';
import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete';

const STATUSES = {
  inProcess: 'In Process',
  needsNumbers: 'Needs Numbers',
  completed: 'Completed',
  verified: 'Verified',
  bought: 'Bought',
  lost: 'Lost',
}

class SidebarFilters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createdBefore: moment(),
      createdAfter: moment().startOf('month'),
      checkbox: true,
      switch1: true,
      slider: 5,
      statuses: ['inProcess', 'needsNumbers']
    }
  }

  setDate(key, date) {
    this.setState({[key]: moment(date)})
  }

  render() {
    const {
      props: { onClose },
      state: { createdBefore, createdAfter, checkbox, switch1, slider, statuses }
    } = this;

    return (
      <div>
        <IconButton icon='close' onClick={onClose}/>
        <div style={{padding: '0 5%'}}>
          <h2>Filters</h2>
          <Checkbox
            checked={checkbox}
            label="Checkbox filter"
            onChange={() => this.setState(prevState => ({checkbox: !prevState.checkbox}))}
          />
          <Switch
            checked={switch1}
            label="Switch filter"
            onChange={() => this.setState(prevState => ({switch1: !prevState.switch1}))}
          />
          <div>Slider filter</div>
          <Slider
            value={slider}
            editable
            pinned
            snaps
            max={10}
            step={1}
            onChange={value => this.setState({slider: value})}
          />
          <DatePicker
            label='Created After'
            autoOk
            onChange={date => this.setDate('createdAfter', date)}
            value={createdAfter.toDate()}
          />
          <DatePicker
            label='Created Before'
            autoOk
            onChange={date => this.setDate('createdBefore', date)}
            value={createdBefore.toDate()}
          />
          <Autocomplete
            direction="up"
            selectedPosition="below"
            label="Status"
            onChange={values => this.setState({statuses: values})}
            source={STATUSES}
            value={statuses}
          />
        </div>
      </div>
    );
  }
}

export default SidebarFilters;
