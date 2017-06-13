import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react'

import { OnMobile, NotMobile } from '../media';

const BrandPanel = () => {
    return (
        <div>
            <OnMobile>
                <Segment.Group>
                    <Segment>
                        <Header as='h2'>PGA Pick'em</Header>
                    </Segment>
                </Segment.Group>
            </OnMobile>
            <NotMobile>
                <Segment style={{
                    backgroundColor:'#182026',
                    color: 'white'
                }}>
                    <Header as='h2' style={{color: 'white'}}>PGA Pick'em</Header>
                    <img 
                        src="https://res.cloudinary.com/simpleview/image/upload/v1456248701/clients/madison/2017_USOpen_ErinHills_300x300_ffcdd30c-a2eb-4c70-9c93-3dcf5cb9ebca.jpg"
                        alt=""
                        width="100%"/>
                </Segment>
            </NotMobile>
        </div>
    )
};

export default BrandPanel;
