import React, { Component } from 'react';

import PostForm from './PostForm';

export default class AddPost extends Component {
  onSubmit = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>New Post</h1>
        <PostForm onSubmit={this.onSubmit} />
      </div>
    );
  }
};
