import React, { Component } from 'react';
import SearchBy from "../components/Filter";
import ErrorBoundary from "../components/ErrorBoundary";
import SearchInput from "../components/SearchInput";

const searchBy = [{title: 'Title', active: true}, {title: 'Director', active: false}];
const sortBy = [{title: 'Release date', active: false}, {title: 'rating', active: true}];

export default class Search extends Component {
    constructor(){
        super();
        this.state= {
            searchString: '',
        }
    }
    getSearchByParam = (value) => {
          console.log(value, 'Search component');
    };
    handleInput = (e) => {
        this.setState({searchString: e.target.value});
    };
    handleSearch = () => {
        if (!this.state.searchString) {
            throw new Error('Enter search string');
        }
    };
    render() {
        return (
            <div className="search-holder">
                <div className="search">
                    <div className="logo">
                        netflixroulette
                    </div>
                    <div className="search-label">
                        Find your movie
                    </div>

                    <div className="search-field">
                        <ErrorBoundary>
                            <SearchInput />
                        </ErrorBoundary>
                    </div>
                    <SearchBy
                        title="SEARCH BY"
                        searchItems={searchBy}
                        data={this.getSearchByParam}
                    />
                </div>
                <div className="search-footer">
                    <div className="search-count">
                        3 movies found
                    </div>
                    <SearchBy
                        alternate
                        title="Sort by"
                        searchItems={sortBy}
                        data={this.getSearchByParam}
                    />
                </div>
            </div>
        )
    }
}