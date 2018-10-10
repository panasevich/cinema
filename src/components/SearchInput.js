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
        this.setState({startSearch: true});
    };
    render() {
        if (!this.state.searchString && this.state.startSearch) {
            throw new Error('Enter search string');
        }
        return(
            <React.Fragment>
                <input type="text" onChange={this.handleInput}/>
                <button onClick={this.handleSearch}>Search</button>
            </React.Fragment>
        );

    }
}

SearchInput.propTypes = {
    data: PropTypes.func.isRequired,
};


