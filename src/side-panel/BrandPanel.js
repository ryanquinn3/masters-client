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
                        src="https://upload.wikimedia.org/wikipedia/en/8/81/2017_Open_Championship_logo.png"
                        alt=""
                        width="100%"/>
                </Segment>
            </NotMobile>
        </div>
    )
};

export default BrandPanel;
