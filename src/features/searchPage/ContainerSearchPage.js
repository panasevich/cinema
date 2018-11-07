import React, { Component } from 'react';
import SearchPage from './SearchPage';

const sortByArr = [{ title: 'Date' }, { title: 'Rating' }];
const searchByArr = [{ title: 'Title' }, { title: 'Director' }];

const MOVIES_LIMIT = 6;

class Movies extends Component {
    constructor(props) {
        super(props);
        this.infinityList = null;
        this.state = {
            items: [],
            sortBy: 'rating',
            start: 0,
            searchBy: 'title',
        };
    }

    componentDidMount() {
        fetch(`http://react-cdp-api.herokuapp.com/movies${this.getRequestParams()}`)
            .then(response => response.json())
            .then(data => {
                this.setState((prevState) =>
                    ({ start: prevState.start + MOVIES_LIMIT, items: prevState.items.concat(data.data) }));
            });
    }

    handleSearchClick = (value) => {
        this.setState({ searchBy: value.toLowerCase() });
        this.clearData();
    };

    handleSearchByString = (value) => {
        this.setState({ searchByString: value });
        this.clearData();
    };

    handleSortClick = (value) => {
        this.setState({ sortBy: value.toLowerCase() });
        this.clearData();
    };

    getRequestParams = () => {
        const { searchBy, start, sortBy, searchByString } = this.state;
        const searchParams = `?offset=${start}&limit=${MOVIES_LIMIT}&searchBy=${searchBy}&sortBy=${sortBy}`;
        return searchByString ? `${searchParams}&search=${searchByString}` : searchParams;
    };

    clearData = () => {
        this.setState({ items: [], start: 0 }, () => {
            fetch(`http://react-cdp-api.herokuapp.com/movies${this.getRequestParams()}`)
                .then(response => response.json())
                .then(data => {
                    this.setState((prevState) =>
                        ({ items: prevState.items.concat(data.data), start: MOVIES_LIMIT }));
                });
        });
    };

    render() {
        const { items } = this.state;
        return (
            <SearchPage
                sortBy={sortByArr}
                searchByString={this.handleSearchByString}
                sortByActive={this.state.sortBy}
                sortByClick={this.handleSortClick}
                searchByClick={this.handleSearchClick}
                searchByActive={this.state.searchBy}
                searchBy={searchByArr}
                result={items}
            />

        );
    }
}

export default Movies;
