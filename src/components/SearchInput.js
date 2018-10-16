import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class SearchInput extends Component {
    constructor(){
        super();
        this.state= {
            searchString: '',
            startSearch: false,
        }
    }
    handleInput = (e) => {
        this.setState({searchString: e.target.value});
    };
    handleSearch = () => {
        const {searchString} = this.state;
        this.setState({startSearch: true}, ()=>this.props.data(searchString));
        this.setState({error: this.state.searchString});
    };

    render() {
        // if (!this.state.error && this.state.startSearch) {
        //     throw new Error('Enter search string');
        // }
        return(
            <React.Fragment>
                <input type="text" onChange={this.handleInput}/>
                <button onClick={this.handleSearch}>Search</button>
            </React.Fragment>
        );

    }
}




