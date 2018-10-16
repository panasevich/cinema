import React, { Component} from 'react';
import MovieItem from '../components/MovieItem'
import { connect } from 'react-redux';
import {getData, stopFetch} from "../actions/getData";

const MOVIES_LIMIT = 6;

class Movies extends Component {
    constructor(props) {
        super(props);
        this.infinityList = null;
        this.state = {
            items: [],
            start: 0,
            sortBy: props.sortBy,
            searchBy: props.searchBy,
            searchByString: props.searchByString,
            loading: false,
            hasMore: true,
        }
    }

    componentDidMount() {
        this.props.getMovies(this.getRequestParams());
        this.setState({ start: this.state.start + MOVIES_LIMIT});
        this.infinityList = window;
        this.infinityList.addEventListener('scroll', this.onScroll, false);
    }
    onScroll = () => {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
            if (!this.props.movies.loading) {
                this.props.getMovies(this.getRequestParams());
                this.setState({start: this.state.start + MOVIES_LIMIT});
            }
        }
    };

    componentWillReceiveProps(nextProps) {
        let items = this.state.items;

        if (nextProps.movies.success) {
            items = items.concat(nextProps.movies.data.data);
            nextProps.movies.success && this.setState({items: items});
            this.props.stopFetch();
        }
        if (nextProps.searchBy !== this.state.searchBy) {
            this.setState(
                {items: [], start: 0, searchBy: nextProps.searchBy},
                ()=>{
                    this.props.getMovies(this.getRequestParams());
                    this.setState({start: this.state.start + MOVIES_LIMIT});
                });
        }
        if (nextProps.sortBy !== this.state.sortBy) {
            this.setState(
                {items: [], start: 0, sortBy: nextProps.sortBy},
                ()=>{
                    this.props.getMovies(this.getRequestParams());
                    this.setState({start: this.state.start + MOVIES_LIMIT});
                });
        }
        if (nextProps.searchByString !== this.state.searchByString) {
            this.setState(
                {items: [], start: 0, searchByString: nextProps.searchByString},
                ()=>{
                    this.props.getMovies(this.getRequestParams());
                    this.setState({start: this.state.start + MOVIES_LIMIT});
                });
        }
    }
    getRequestParams = () => {
        const { searchBy, start, sortBy, searchByString} = this.state;
        const searchParams = `?offset=${start}&limit=${MOVIES_LIMIT}&searchBy=${searchBy}&sortBy=${sortBy}`;
        return searchByString ? `${searchParams}&search=${searchByString}` : searchParams;
    };

    render(){
        const {items} = this.state;
        const result = items.length ? items.map(item => (
            <MovieItem
                key={item.id}
                title={item.title}
                imgPath={item.poster_path}
                genre={item.genres}
                year={item.release_date}
                movieId={item.id}
            />)): <h1 className="text-center w-100 p-4">No films found</h1>;
        return (
            <div className="scroll-row">
                {result}
            </div>

        )
    }
}

const mapStateToProps =(state)=>(state);
const mapDispatchToProps = (dispatch) => ({
    getMovies: (data) => dispatch(getData(data)),
    stopFetch: ()=> dispatch(stopFetch())
});
export default connect(mapStateToProps, mapDispatchToProps)(Movies)