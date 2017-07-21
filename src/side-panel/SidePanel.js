import React from 'react';
import { Card } from 'semantic-ui-react';

import styled from 'styled-components';
import slice from 'ramda/src/slice';

import DesktopNavigation from './DesktopNavigation';

const getTopThree = slice(0, 5);

const PanelContainer = styled.div`
    margin-top:10px;
`;

const Leader = styled.p`
    text-align: left;
`;

const renderEntrant = (entrant) => `${entrant.position || '--'}. ${entrant.name} (${entrant.adjusted_score || '--'})`
const renderGolfer = (golfer) => `${golfer.position }. ${golfer.name} (${golfer.to_par})`;

const renderLeaderRow = (renderer) => (leader) => (
    <Leader key={leader.name}>
        {renderer(leader)}
    </Leader>
);

const DarkCard = styled(Card)`
    background-color: #D8E1E8 !important;
`

const TopGolfersCard = ({ title, leaders, renderer }) => (
    <DarkCard fluid>
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            { leaders.map(renderLeaderRow(renderer)) }
        </Card.Content>
    </DarkCard>
);


const Panel = ({ match, entrants = [], golfers = [] }) => {
    const [topEntrants, topGolfers] = [entrants, golfers].map(getTopThree);
    return (
        <PanelContainer>
            <DesktopNavigation match={match}/>
            <TopGolfersCard
                title="Tournament Leaders"
                renderer={renderGolfer}
                leaders={topGolfers}/>
            <TopGolfersCard
                title="Pool Leaders"
                renderer={renderEntrant}
                leaders={topEntrants}/>
        </PanelContainer>
    );
};

export default Panel;
