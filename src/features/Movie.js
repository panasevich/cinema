import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { movie } from '../actions/getData';
import { searchByAction } from '../actions/searchBy';
import HeaderWrap from '../components/HeaderWrap';
import MovieView from '../components/MovieView';

class Movie extends Component {
    componentWillMount() {
        this.props.getMovie(this.props.match.params.movieId);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { movie: { data } } = this.props;
        return (
            <HeaderWrap>
                {data && <MovieView data={data} />}
            </HeaderWrap>
        );
    }
}

Movie.propTypes = {
    getMovie: PropTypes.func,
    match: PropTypes.object,
    movie: PropTypes.object,
};
const mapStateToProps = state => (state);
const mapDispatchToProps = (dispatch) => ({
    getMovie: data => dispatch(movie(data)),
    setSortBy: action => dispatch(searchByAction(action)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
