import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import {
  BrowserRouter as Router,
  Route,
  hashHistory,
} from 'react-router-dom';
import allReducers from './reducers';
import App from './components/app';
import UserDetail from './containers/user-detail';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger),
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/123" component={UserDetail} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
