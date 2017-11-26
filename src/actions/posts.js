import axios from 'axios';
import uuid from 'uuid';

import * as co from '../constants/posts';

// actions for adding a post

export const addPost = (post) => ({
  type: co.ADD_POST,
  post
});

export const startAddPost = (post) => {
  return (dispatch) => {
    return axios.post(`${process.env.BASE_URL}/posts`, {
      id: uuid(),
      ...post
    })
      .then((res) => {
        dispatch(addPost(res.data))
      });
  };
};

// actions for editing a post

export const editPost = (id, updates) => ({
  type: co.EDIT_POST,
  id,
  updates
});

export const startEditPost = (id, updates) => {
  return (dispatch) => {
    return axios.patch(`${process.env.BASE_URL}/posts/${id}`, updates)
      .then((res) => {
        dispatch(editPost(id, res.data))
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

// actions for fetching all posts

export const setPosts = (posts) => ({
  type: co.SET_POSTS,
  posts
});

export const startSetPosts = () => {
  return (dispatch) => {
    return axios.get(`${process.env.BASE_URL}/posts`)
      .then((res) => {
        dispatch(setPosts(res.data))
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
