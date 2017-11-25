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

// action imports
import { startSetPosts } from './actions/posts';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

store.dispatch(startSetPosts())
  .then(() => {
    renderApp();
  });
