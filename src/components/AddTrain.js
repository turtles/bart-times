import React, { Component } from 'react';
import { Dropdown, Icon, Input, Label, Button } from 'semantic-ui-react';

import { stations } from '../data/stations';

const stationOptions = stations.map((item) => ({
  key: item.abbr,
  value: item.abbr,
  text: item.name
}));

class AddTrain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      station: ''
    }
    this.onStationChanged = this.onStationChanged.bind(this);
  }
  onStationChanged(e, props) {
    this.setState({
      station: props.value
    });
  }
  render() {
    const {onAddTrain} = this.props;

    return (
      <div>
        <Dropdown value={this.state.station} onChange={this.onStationChanged}
          placeholder='Enter Station...' search options={stationOptions}>

        </Dropdown>
        <Button color='blue'
          onClick={() => onAddTrain(this.state.station)}
          >
          <Icon name='add' />
        </Button>
      </div>
    );
  }
}

export default AddTrain;
