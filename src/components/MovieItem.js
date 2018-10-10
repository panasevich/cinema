import React from 'react';
import PropTypes from 'prop-types';

export default function MovieItem(props) {
    const {imgPath, title, year, type} = props;
    return(
        <div className="movie-wrap">
            <img src={imgPath} alt=""/>
            <div className="movie-title">
                {title} <div className="movie-year">{year}</div>
            </div>
            <div className="movie-type">{type}</div>
        </div>
    )
}

MovieItem.propTypes = {
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
};

