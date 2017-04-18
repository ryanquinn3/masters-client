import React from 'react';
import map from 'ramda/src/map';
import {DarkSegment} from './theme'
import { Dropdown, Grid } from 'semantic-ui-react';

const transformGolfer = ({ name, id }) => ({
    key: id,
    value: name,
    text: name
});

const transformGolfers = map(transformGolfer);

const Profile = ({ golfers, entrants }) => {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={8}>
                    <DarkSegment>
                        <Dropdown
                            placeholder={'Golfers'}
                            fluid multiple search selection
                            options={transformGolfers(golfers)}
                        />
                    </DarkSegment>
                </Grid.Column>
                <Grid.Column width={8}>
                    <DarkSegment>
                        <Dropdown
                            placeholder={'Entrants'}
                            fluid multiple
                            search selection
                            options={transformGolfers(entrants)}
                        />
                    </DarkSegment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );


}


export default Profile;
