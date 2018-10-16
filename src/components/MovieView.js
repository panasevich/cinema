import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function MovieView(props) {
    const { data } = props;
    return(
        <div className="movie-wrap clearfix">
            <img src={data.poster_path} className="movie-img" alt=""/>
            <div className="movie-data">
                <h1 className="movie-title">{data.title}</h1>
                <Button style={{position: 'absolute', right: 0, top: 0, backgroundColor: 'indianred'}}><Link to={'/'}>Search</Link></Button>
                <h5>{data.tagline}</h5>
                <h6>{data.release_date}</h6>
                <div>{data.overview}</div>
            </div>
        </div>
    )
}

MovieView.propTypes = {
    data: PropTypes.object.isRequired,
};


