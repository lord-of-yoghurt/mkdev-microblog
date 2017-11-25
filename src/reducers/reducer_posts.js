import * as co from '../constants/posts';

const postsReducerDefaultState = [];

export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case co.ADD_POST:
      return [...state, action.post];
    case co.SET_POSTS:
      return action.posts;
    default:
      return state;
  }
};
