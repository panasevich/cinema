import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class Filter extends PureComponent {
    render() {
        const { searchItems, title, alternate, activeFilter, onClick } = this.props;
        return (
            <div className={cn('search-by', { alternate })}>
                <div className="search-by-title">{title}</div>
                {searchItems.map((item, idx) =>
                    (
                        <div
                            className={cn('search-by-item', { active: item.title.toLowerCase() === activeFilter })}
                            key={`search-by-${idx}`}
                            onClick={onClick}
                        >
                            {item.title}
                        </div>
                    ))
                }
            </div>
        );
    }
}
Filter.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    searchItems: PropTypes.instanceOf(Array),
    alternate: PropTypes.bool,
    activeFilter: PropTypes.string,
};
