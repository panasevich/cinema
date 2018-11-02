import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = (props) => {
    const { onChange, onClick } = props;
    return (
        <React.Fragment>
            <input type="text" onChange={onChange} />
            <button type="button" onClick={onClick}>Search</button>
        </React.Fragment>
    );
};

SearchInput.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func,
};

export default SearchInput;
