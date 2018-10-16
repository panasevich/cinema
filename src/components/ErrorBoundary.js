import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null, hasError: false };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
            hasError: true
        })
    }

    render() {
        const { error, hasError } = this.state;
        if (hasError) {
            return (
                <div className={hasError && 'error'}>
                    {this.props.children}
                    <div className="error-text">{hasError && error.toString().split(":").pop()}</div>
                </div>
            );
        }
        return this.props.children;
    }
}
ErrorBoundary.propTypes = {
    children: PropTypes.node,
};