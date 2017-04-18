import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react'

import { OnMobile, NotMobile } from './media';



class SegmentExampleHorizontalSegments extends Component {

    render() {
        return (
            <div>
                <OnMobile>
                    <Segment.Group>
                        <Segment>
                            <Header as='h2'>The Masters</Header> A Tradition Unlike Any Other
                        </Segment>
                    </Segment.Group>
                </OnMobile>
                <NotMobile>
                    <Segment style={{
                        backgroundColor:'#182026',
                        color: 'white'
                    }}>
                        <Header as='h2' style={{color: 'white'}}>The Masters</Header> A Tradition Unlike Any Other
                    </Segment>
                </NotMobile>
            </div>
        )
    }
}
export default SegmentExampleHorizontalSegments;
