import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const MobileMenu = ({ onClick }) => (
    <Menu secondary>
        <Menu.Item onClick={ onClick } >
             <Icon name="content"
                    style={{color:'white'}}
                   size="large"
                   />
        </Menu.Item>
        <Menu.Menu style={{color:'white'}}
                       position="right">
            <Menu.Header style={{
                paddingTop: '10px',
                paddingRight: '10px'
            }} as="h3"> The Open </Menu.Header>
        </Menu.Menu>
    </Menu>
);

export default MobileMenu;
