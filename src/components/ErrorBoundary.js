import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        const { error } = this.state;
        if (this.state.errorInfo) {
            console.log(this.state, 'errorBoundary');
            return (
                <div className="error">
                    {this.props.children}
                    <div className="error-text">{error && error.toString().split(":").pop()}</div>
                </div>
            );
        }
        return this.props.children;
    }
}