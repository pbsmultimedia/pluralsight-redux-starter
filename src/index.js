import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; // HOC - wraps the other components
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; // webpack imports css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(); // DB stuff can be passed here..

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
