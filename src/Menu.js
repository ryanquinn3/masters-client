import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react'

const showWatchlist = false;

export default class AppMenu extends Component {
    state = {}


    render() {
        const { match } = this.props;
        return (
            <Menu vertical fluid
                  inverted style={{backgroundColor: '#394B59'}}>
                <Menu.Item
                    as={Link}
                    to="/"
                    active={match.url ===  '/'}>
                        Pool
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/leaderboard"
                    active={match.url === '/leaderboard'}>
                        Leaderboard
                </Menu.Item>
               <Menu.Item
                    as={Link}
                    to="/entry"
                    active={match.url === '/entry'}>
                        Your Entry
                </Menu.Item>
            </Menu>
        )
    }
}
