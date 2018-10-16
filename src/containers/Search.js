import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import {searchByAction} from "../actions/searchBy";
import SearchBy from "../components/Filter";
import ErrorBoundary from "../components/ErrorBoundary";
import SearchInput from "../components/SearchInput";
import {searchByStringAction} from "../actions/searchByString";
import HeaderWrap from "../components/HeaderWrap";

const sortBy = [{title: 'Date'}, {title: 'Rating'}];
const searchBy = [{title: 'Title'}, {title: 'Director'}];

class Search extends Component {
    constructor(){
        super();
        this.state= {
            searchString: '',
        }
    }
    getSearchByParam = (value) => {
          this.props.setFilterBy(value);
    };
    getSortByParam = (value) => {
          this.props.setSortBy(value);
    };

    handleSearch = (value) => {
        if(value){
            this.props.searchByString(value);
        }
    };
    render() {
        return (
            <Fragment>
                <HeaderWrap>
                    <div className="search-field">
                        <ErrorBoundary>
                            <SearchInput data={this.handleSearch}/>
                        </ErrorBoundary>
                    </div>
                    <SearchBy
                        activeFilter={this.props.filter.searchBy}
                        title="SEARCH BY"
                        searchItems={searchBy}
                        data={this.getSearchByParam}
                    />
                </HeaderWrap>
                <div className="search-footer">
                    <div className="search-count">
                        3 movies found
                    </div>
                    <SearchBy
                        activeFilter={this.props.sortBy}
                        alternate
                        title="Sort by"
                        searchItems={sortBy}
                        data={this.getSortByParam}
                    />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({ filter: state });
const mapDispatchToProps = (dispatch) => ({
    setFilterBy: action => dispatch(searchByAction(action)),
    setSortBy: action => dispatch(searchByAction(action)),
    searchByString: (data) => dispatch(searchByStringAction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);