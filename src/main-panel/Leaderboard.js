import React, { Component } from 'react';
import { Table, Message, List, Segment } from 'semantic-ui-react';

import { OnMobile, NotMobile } from '../media';

const rowHeadings = [
    'Place',
    'Name',
    'To Par',
    'R1',
    'R2',
    'R3',
    'R4',
    'Thru',
    'Tee Time',
    'Birdies',
    'Total'
];

const playerKeys = [
    'position',
    'name',
    'to_par',
    'r1',
    'r2',
    'r3',
    'r4',
    'thru',
    'tee_time',
    'birdies',
    'total'
];
const toParString = (score) => (
    score === 0 ? 'E' : score
)

const formatters = {
    'to_par': toParString
};

const format = (player, key) => {
    if(key in formatters){
        return formatters[key](player[key]);
    }
    return player[key];
}




const makeHeadingCell = (heading) => <Table.HeaderCell key={heading}>{heading}</Table.HeaderCell>;

const makeTableCell = (key) => (cellData, i) => (
    <Table.Cell
        key={`${key}-${cellData}-${i}`}>
        {cellData}
    </Table.Cell>
);
const getPlayerItem = (player) => (key) => format(player,key);

const makePlayerRow = (player) => (
    <Table.Row key={player.name}>
        {
            playerKeys.map(getPlayerItem(player))
                .map(makeTableCell(player.id))
        }
    </Table.Row>
);

const mobileGolfer = (golfer) => (
    <List.Item key={golfer.id}>
        <List.Content>
            <List.Header>{golfer.position}. {golfer.name} ({golfer.to_par})</List.Header>
            <br/>
            <p>
                Total: {golfer.total} - Thru: {golfer.thru} - R1: {golfer.r1} - R2: {golfer.r2}
            </p>
        </List.Content>
    </List.Item>
)
const ErrorMessage = () => (
    <Message negative>
        <Message.Header>An error occurred</Message.Header>
        <p>Having issues connecting to the server. </p>
    </Message>
)

class Leaderboard extends Component {
    render() {
        const { golfers, error } = this.props;
        if (error) {
            return <ErrorMessage/>
        }
        return (
            <div>
                <NotMobile>
                    <Table celled
                           unstackable
                           inverted compact style={{ backgroundColor: '#394B59' }}>
                        <Table.Header>
                            <Table.Row>
                                { rowHeadings.map(makeHeadingCell) }
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {golfers.map(makePlayerRow)}
                        </Table.Body>
                    </Table>
                </NotMobile>
                <OnMobile>
                    <Segment
                        fluid raised
                        textAlign="left"
                        centered={false}>
                        <List divided relaxed>
                            {golfers.map(mobileGolfer)}
                        </List>
                    </Segment>
                </OnMobile>
            </div>
        )
    }
}

export default Leaderboard;
