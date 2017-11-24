import axios from 'axios';
import uuid from 'uuid';

import * as co from '../constants/posts';

export const addPost = (post) => ({
  type: co.ADD_POST,
  post
});

export const setPosts = (posts) => ({
  type: co.SET_POSTS,
  posts
});

export const startSetPosts = () => {
  return (dispatch) => {
    axios.get(`${process.env.BASE_URL}/posts`)
      .then((res) => {
        dispatch(setPosts(res.data))
      });
  };
};
