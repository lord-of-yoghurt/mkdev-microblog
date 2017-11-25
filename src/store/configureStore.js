import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import root from '../reducers/index';
import postsReducer from '../reducers/reducer_posts';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    postsReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
