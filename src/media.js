import React from 'react';
import MediaQuery from 'react-responsive';


const OnMobile = ({ children }) => (
    <MediaQuery maxWidth={768}>
        {children}
    </MediaQuery>
);

const NotMobile = ({ children }) => (
    <MediaQuery minWidth={768}>
        {children}
    </MediaQuery>
);

export {
    OnMobile,
    NotMobile
}
