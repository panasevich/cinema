import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchByAction } from '../actions/searchBy';
import SearchBy from '../components/Filter';
import SearchInput from '../components/SearchInput';
import { searchByStringAction } from '../actions/searchByString';
import HeaderWrap from '../components/HeaderWrap';

const sortBy = [{ title: 'Date' }, { title: 'Rating' }];
const searchBy = [{ title: 'Title' }, { title: 'Director' }];

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchString: '',
        };
    }

    handleChangeField = (e) => {
        this.setState({ searchString: e.target.value });
    };

    handleSearchByString =() => {
        this.props.searchByString(this.state.searchString);
    };

    handleFilter = (e) => {
        this.props.setFilterBy(`SEARCH_BY_${(e.target.innerText).replace(/\s/g, '').toUpperCase()}`);
    };

    handleSort = (e) => {
        this.props.setSortBy(`SEARCH_BY_${(e.target.innerText).replace(/\s/g, '').toUpperCase()}`);
    };

    render() {
        return (
            <Fragment>
                <HeaderWrap>
                    <div className="search-field">
                        <SearchInput
                            onChange={this.handleChangeField}
                            onClick={this.handleSearchByString}
                        />
                    </div>
                    <SearchBy
                        onClick={this.handleFilter}
                        activeFilter={this.props.filter.searchBy}
                        title="SEARCH BY"
                        searchItems={searchBy}
                    />
                </HeaderWrap>
                <div className="search-footer">
                    <div className="search-count">
                        3 movies found
                    </div>
                    <SearchBy
                        onClick={this.handleSort}
                        activeFilter={this.props.filter.sortBy}
                        alternate
                        title="Sort by"
                        searchItems={sortBy}
                    />
                </div>
            </Fragment>
        );
    }
}

Search.propTypes = {
    setFilterBy: PropTypes.func,
    setSortBy: PropTypes.func,
    searchByString: PropTypes.func,
    filter: PropTypes.object,
    sortBy: PropTypes.func,
};

const mapStateToProps = state => ({ filter: state });
const mapDispatchToProps = dispatch => ({
    setFilterBy: action => dispatch(searchByAction(action)),
    setSortBy: action => dispatch(searchByAction(action)),
    searchByString: data => dispatch(searchByStringAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
