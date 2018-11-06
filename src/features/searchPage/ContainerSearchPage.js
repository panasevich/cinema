import React, { Component } from 'react';
import MovieItem from '../../components/MovieItem';
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
            loading: false,
            sortBy: 'rating',
            start: 0,
            searchBy: 'title',
            searchByString: '',
        };
    }

    componentDidMount() {
        fetch(`http://react-cdp-api.herokuapp.com/movies${this.getRequestParams()}`)
            .then(response => response.json())
            .then(data => {
                this.setState((prevState) =>
                    ({ start: prevState.start + MOVIES_LIMIT, items: prevState.items.concat(data.data) }));
            });
        this.infinityList = window;
        this.infinityList.addEventListener('scroll', this.onScroll, false);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.items.length !== this.state.items.length) {
            /*eslint-disable */
            this.setState({ loading: false });
            /* eslint-enable */
        }
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

    onScroll = () => {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
            if (!this.state.loading) {
                this.setState({ loading: true });
                fetch(`http://react-cdp-api.herokuapp.com/movies${this.getRequestParams()}`)
                    .then(response => response.json())
                    .then(data => this.setState((prevState) =>
                        ({ start: prevState.start + MOVIES_LIMIT, items: prevState.items.concat(data.data) })));
            }
        }
    };

    renderItems = () => {
        const { items } = this.state;
        return items ? items.map(item => (
            <MovieItem
                key={item.id}
                title={item.title}
                imgPath={item.poster_path}
                genre={item.genres}
                year={item.release_date}
                movieId={item.id}
            />)) : <h1 className="text-center w-100 p-4">No films found</h1>;
    };

    render() {
        return (
            <SearchPage
                sortBy={sortByArr}
                searchByString={this.handleSearchByString}
                sortByActive={this.state.sortBy}
                sortByClick={this.handleSortClick}
                searchByClick={this.handleSearchClick}
                searchByActive={this.state.searchBy}
                searchBy={searchByArr}
                result={this.renderItems()}
            />

        );
    }
}

export default Movies;
