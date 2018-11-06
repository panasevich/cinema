import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class Search extends Component {
    handleChangeField = (e) => {
        this.setState({ searchString: e.target.value });
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSubmit();
        }
    };

    handleSearch = (e) => {
        this.props.searchByClick(e.target.innerHTML);
    };

    handleSort = (e) => {
        this.props.sortByClick(e.target.innerHTML);
    };

    handleSubmit =() => {
        this.props.searchByString(this.state.searchString);
    };

    render() {
        const { searchBy, sortBy, sortByActive, searchByActive, result } = this.props;
        return (
            <Fragment>
                <div className="search-holder">
                    <div className="search">
                        <div className="logo">
                            netflixroulette
                        </div>
                    </div>
                    <div className="search-field">
                        <input type="text" onChange={this.handleChangeField} onKeyPress={this.handleKeyPress} />
                        <button type="button" onClick={this.handleSubmit}>Search</button>
                    </div>
                    <div className="search-by">
                        <div className="search-by-title">SearchBy</div>
                        {searchBy.map((item, idx) =>
                            (
                                <div
                                    className={cn('search-by-item', { active: item.title.toLowerCase() === searchByActive })}
                                    key={`search-by-${idx}`}
                                    onClick={this.handleSearch}
                                >
                                    {item.title}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="search-footer">
                    <div className="search-count">
                        3 movies found
                    </div>
                    <div className="search-by alternate">
                        <div className="search-by-title">Sort by</div>
                        {sortBy.map((item, idx) =>
                            (
                                <div
                                    className={cn('search-by-item', { active: item.title.toLowerCase() === sortByActive })}
                                    key={`search-by-${idx}`}
                                    onClick={this.handleSort}
                                >
                                    {item.title}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="scroll-row">
                    {result}
                </div>
            </Fragment>
        );
    }
}

Search.propTypes = {
    searchByString: PropTypes.func,
    sortByClick: PropTypes.func,
    sortByActive: PropTypes.string,
    searchByClick: PropTypes.func,
    searchByActive: PropTypes.string,
    searchBy: PropTypes.instanceOf(Array),
    result: PropTypes.instanceOf(Array),
    sortBy: PropTypes.instanceOf(Array),
};
