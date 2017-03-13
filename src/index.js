import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import routes from './routes';
import { loadInitialData } from './actions';

import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(loadInitialData())

ReactDOM.render((
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>
  ), document.getElementById('root')
);
