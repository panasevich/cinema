import React from 'react';
import PropTypes from 'prop-types';


export default function HeaderWrap(props) {
    return (
        <div className="search-holder">
            <div className="search">
                <div className="logo">
                    netflixroulette
                </div>
            </div>
            {props.children}
        </div>
    );
}

HeaderWrap.propTypes = {
    children: PropTypes.node,
};
