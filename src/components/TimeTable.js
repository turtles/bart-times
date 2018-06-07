import React, { Component } from 'react';
import { Label, Item, Button, Icon } from 'semantic-ui-react';

import TrainTime from './TrainTime';
import AddTrain from './AddTrain';

import { trainAbbrToName } from '../data/stations';

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trains: []
    }

    this.addTrain = this.addTrain.bind(this);
    this.removeTrain = this.removeTrain.bind(this);
    this.updateTimes = this.updateTimes.bind(this);
  }
  updateTimes() {
    console.log('Updating times...');
    fetch(`http://api.bart.gov/api/etd.aspx?cmd=etd&orig=all&key=MW9S-E7SL-26DU-VV8V&json=y`)
      .then(results => results.json())
      .then(response => {
        let trainsCopy = Object.assign(this.state.trains);
        trainsCopy.forEach(
          train => {
            let trainInfo = response.root.station.find((item) => item.abbr.toUpperCase() === train.abbr.toUpperCase());
            console.log(trainInfo.etd);
            train.etd = Object.assign(trainInfo.etd);
          }
        );
        console.log(response.root.time);
        this.setState({
          lastUpdated: response.root.time,
          trains: trainsCopy
        });
      });
  }
  removeTrain(abbr) {
    console.log(abbr);
    console.log(this.state.trains);

    const trains = this.state.trains.filter(item => (item.abbr.toUpperCase() !== abbr.toUpperCase()));
    this.setState({
      trains
    });
  }
  addTrain(train) {
    if (!train) return;

    this.setState({
      trains: [
        ...this.state.trains, {
          abbr: train,
          train: trainAbbrToName(train)
        }
      ]
    }, this.updateTimes);
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.updateTimes} circular><Icon name='refresh' /></Button><Label>{`Last Updated ${this.state.lastUpdated}`}</Label>
        <Item.Group>
          {
            this.state.trains.map((train) => (
              <TrainTime key={train.abbr}
                abbr={train.abbr}
                train={train.train}
                etd={train.etd}
                onRemoveTrain = {this.removeTrain}
                />
            ))
          }
        </Item.Group>
        <AddTrain onAddTrain={this.addTrain} />
      </React.Fragment>
    );
  }
}

export default TimeTable;
