// React dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// ReactRouter dependencies and custom history
import AppRouter, { history } from './routers/AppRouter';

// react-redux dependencies
import { Provider } from 'react-redux';

// redux imports
import configureStore from './store/configureStore';

// style imports
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// component imports
import LoadingPage from './components/LoadingPage';
import Dashboard from './components/Dashboard';

// const store = configureStore();

const jsx = (
  // <Provider store={store}>
    <AppRouter />
  // </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
