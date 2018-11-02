import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import CombineReducers from './reducers/index';
import rootSaga from './saga';
import Search from './containers/Search';
import Movies from './containers/Movies';
import Movie from './containers/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.scss';

/* eslint no-underscore-dangle: 0 */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    CombineReducers,
    composeEnhancer(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" render={() => (<Search />)} />
                        <Route path="/movie/:movieId" component={Movie} />
                        <Route path="/" render={() => (<Movies />)} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
