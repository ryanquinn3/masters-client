import React, { Component } from 'react';
import { Form, Grid, Dropdown, Message } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import Countdown, { getTimeDifference } from 'react-countdown-now';

import { isLoggedIn } from './auth';
import { WhiteText } from './theme'

const options = [
  { key: 'tim', text: 'boy', value: 'boy' },
  { key: 'asdf', text: 'boyer', value: 'lot' },
  { key: 'as', text: 'tester', value: 'test' },
  { key: 'a', text: 'asdf', value: 'asdf' },
]

const tournamentStartTime = new Date(Date.UTC(2017, 5, 15, 10, 45, 0, 0));


const MessageRenderer = ({ days, hours, minutes }) => (
  <Message
    icon='hourglass end'
    header='Time Left To Submit Picks'
    content={`${days} days, ${hours} hours, ${minutes} minutes`}
  />
)

export default class EntryForm extends Component {

  state = {
    topGolfers: {
      options,
      selected: [],
      open: false,
    },
    fieldGolfers: {
      options: [],
      selected: [],
      open: false
    },
    birdies: ''
  }

  setOpen = (key, open) => {
    const { state } = this;
    const newState = {
      ...state,
      [key]: {
        ...state[key],
        open
      }
    };
    return this.setState(newState);
  }

  onChange = (key, e, { value }) => {
    return this.setState({ [key]: { selected: value, options }});
  }

  render(){
    const { topGolfers, fieldGolfers, birdies } = this.state;
    if(!isLoggedIn()){
      return (<Redirect to="/login"/>);
    }
    return (
        <Grid>
          <Grid.Row>
            <Grid.Column>
             <Countdown date={tournamentStartTime} renderer={MessageRenderer}></Countdown>
              <WhiteText>Pick 3 golfers from the top 20:</WhiteText>
              <Dropdown
                placeholder="Top 20 Golfers"
                options={topGolfers.options}
                fluid
                compact
                selection
                onOpen={this.setOpen.bind(this, 'topGolfers', true)}
                onClose={this.setOpen.bind(this, 'topGolfers', false)}
                open={topGolfers.open && topGolfers.selected.length <= 2}
                value={topGolfers.selected}
                onChange={this.onChange.bind(this, 'topGolfers')}
                multiple/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <WhiteText>Pick 3 golfers from the rest of the field:</WhiteText>
              <Dropdown
                placeholder="Rest of the Field"
                options={fieldGolfers.options}
                fluid
                compact
                selection
                onOpen={this.setOpen.bind(this, 'fieldGolfers', true)}
                onClose={this.setOpen.bind(this, 'fieldGolfers', false)}
                open={fieldGolfers.open && fieldGolfers.selected.length <= 2}
                value={fieldGolfers.selected}
                onChange={this.onChange.bind(this, 'fieldGolfers')}
                multiple/>
            </Grid.Column>
          </Grid.Row> 
          <Grid.Row>
            <Grid.Column>
              <WhiteText>Amount of birdies the winner of the tournament will make:</WhiteText>
              <Form.Input   
                type="number"
                value={birdies}/>
            </Grid.Column>
          </Grid.Row>
           <Grid.Row>
            <Grid.Column>
              <Form.Button>
                Save
              </Form.Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }
}