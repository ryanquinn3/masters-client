import React, { Component } from 'react';
import { Table, Input, Segment, Message, List, Loader } from 'semantic-ui-react';

import { OnMobile, NotMobile } from './media';

const makeGolfersCell = (golfer, i) => (
    <span key={i} style={{ paddingRight: '3px' }}>
        {golfer.name} ({golfer.to_par})
    </span>
);

const renderPoolRow = (entrant, i) => {
    const golfersInTwos = entrant.golfers;
    return (

        <Table.Row verticalAlign='middle' key={`${entrant.position} ${entrant.name}`}>
            <Table.Cell collapsing>{entrant.position}</Table.Cell>
            <Table.Cell>{entrant.name}</Table.Cell>
            <Table.Cell collapsing>{entrant.raw_score}</Table.Cell>
            <Table.Cell collapsing>{entrant.adjusted_score}</Table.Cell>
            <Table.Cell verticalAlign='top' colSpan={5}>
                {golfersInTwos.map(makeGolfersCell)}
            </Table.Cell>
            <Table.Cell>{entrant.number_of_birdies}</Table.Cell>
        </Table.Row>


    );
}

const ErrorMessage = () => (
    <Message negative>
        <Message.Header>An error occurred</Message.Header>
        <p>Having issues connecting to the server. </p>
    </Message>
)

const makeMobileGolferText = (entrant) => (golfer, i) => (
    <span key={`${golfer.id}-${i}`} style={{ paddingRight: '10px' }}>
        {golfer.name} ({golfer.to_par})
    </span>
)
const makeMobileEntrantCard = (entrant, i) => (

    <List.Item key={entrant.id}>
        <List.Content>
            <List.Header>{entrant.position}. {entrant.name} ({entrant.adjusted_score})</List.Header>
            <br/> {entrant.golfers.map(makeMobileGolferText(entrant))}<br/>Birdies: {entrant.number_of_birdies}
        </List.Content>
    </List.Item>
)
const LargeLoader = () => (
  <Table.Row>
      <Table.Cell colSpan={10}>
       <Loader active size='large' inline='centered' />
      </Table.Cell>
  </Table.Row>
);

class PoolView extends Component {

    state = { searchTerm: '' };

    handleOnChange = (e) => this.setState({ searchTerm: e.target.value.toLowerCase() });

    render() {
        const { searchTerm } = this.state;
        const { entrants, error } = this.props;

        if (error) {
            return <ErrorMessage/>;
        }

        const displayedEntrants = entrants.filter((entrant) => {
            if (!searchTerm.length) {
                return true;
            }
            const terms = searchTerm.split(' ');
            const cleanName = (entrant.name || '').toLowerCase();

            return terms.map(
                (term) => cleanName.includes(term)
            ).some((i) => i)
        })

        const loading = searchTerm === '' && entrants.length === 0;
        return (
            <div>
                <Segment textAlign="left" style={{ backgroundColor: '#182026' }}>
                    <Input style={{
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}
                           placeholder="Search by name" fluid
                           icon='search'
                           onChange={ this.handleOnChange}/>
                </Segment>
                <NotMobile>
                    <Table striped unstackable
                           inverted compact
                           style={{ backgroundColor: '#394B59' }}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Place</Table.HeaderCell>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Raw Score</Table.HeaderCell>
                                <Table.HeaderCell>Adjusted Score</Table.HeaderCell>
                                <Table.HeaderCell colSpan={5}>Golfers</Table.HeaderCell>
                                <Table.HeaderCell>Birdies</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                           { loading ?
                                <LargeLoader/>
                                : displayedEntrants.map(renderPoolRow)}
                        </Table.Body>
                    </Table>
                </NotMobile>
                <OnMobile>
                    <Segment
                        raised
                        textAlign="left">
                        <List divided relaxed>
                            { loading ? <Loader active size='large' inline='centered' />
                                :
                                displayedEntrants.map(makeMobileEntrantCard)}
                        </List>
                    </Segment>
                </OnMobile>
            </div>
        )
    }
}

export default PoolView;
