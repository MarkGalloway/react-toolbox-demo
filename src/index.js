import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import rootReducer from './reducers';
import routes from './routes';

import './index.css';

const store = createStore(rootReducer);

ReactDOM.render((
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>
  ), document.getElementById('root')
);
