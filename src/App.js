import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import CombineReducers from './reducers/index.js';
import rootSaga from './saga'
import Search from './containers/Search';
import Movies from './containers/Movies';
import Movie from './containers/Movie';
import './App.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    CombineReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router >
                <div>
                    <Route exact={true} path={"/"} render={()=>(<Search />)}/>
                    <Route path={"/movie/:movieId"} component={Movie}/>
                    <Route path={"/"} render={()=>(<Movies />)}/>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
