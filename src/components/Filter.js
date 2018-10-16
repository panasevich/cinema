import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class Filter extends PureComponent {
    handleFilter = (e) => {
        this.props.data(`SEARCH_BY_${(e.target.innerText).replace( /\s/g, '').toUpperCase()}`)
    };
    render() {
        const {searchItems, title, alternate, activeFilter} = this.props;
        return (
            <div className={cn('search-by', {alternate})}>
                <div className="search-by-title">{title}</div>
                {searchItems.map((item, idx) =>
                    <div
                        className={cn('search-by-item', {active: item.title.toLowerCase() === activeFilter})}
                        key={`search-by-${idx}`}
                        onClick={this.handleFilter}
                    >
                        {item.title}
                    </div>
                )}
            </div>
        )
    }
}
Filter.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.func.isRequired,
    searchItems: PropTypes.array.isRequired,
    alternate: PropTypes.bool,
};