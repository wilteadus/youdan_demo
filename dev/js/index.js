import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import {
  HashRouter,
  Route,
  hashHistory,
} from 'react-router-dom';
import allReducers from './reducers';
import App from './components/app';
import FeedDetail from './components/feed-detail';
require('../css/reset.css');
require('../css/index.css');

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger),
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter history={hashHistory}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/detail/:id" component={FeedDetail} />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
