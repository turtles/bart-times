import React, { Component } from 'react';
import { List, Grid, Icon, Header, Button } from 'semantic-ui-react';

const TrainTimeList = ({etd}) => {
  if (!etd) return null;
  return (
    <List>
      {
        etd.map((item, i)=>{
          const estimate = item.estimate[0];
          return (
            <List.Item key={i}>
              Destination: {item.destination} -
              Estimated Minutes: {estimate.minutes} -
              Platform: {estimate.platform} -
              Cars: {estimate.length}
            </List.Item>
          )
        }
      )
      }
    </List>
  )
}

const TrainTime = ({abbr, train, etd, onRemoveTrain}) => (
    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header>{train}</Header>
        </Grid.Column>
        <Grid.Column floated='right' width={1}>
          <Button basic color='red' onClick={()=>onRemoveTrain(abbr)}>
            <Icon name='remove' />
          </Button>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <TrainTimeList etd={etd} />
      </Grid.Row>
    </Grid>
)

export default TrainTime;
