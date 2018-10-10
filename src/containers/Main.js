import React, { Component } from 'react';
import Search from "./Search";
import Movies from "./Movies";

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Search />
                <Movies />
            </React.Fragment>
        )
    }
}