import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from './PostForm';
import { startAddPost } from '../actions/posts';

export class AddPost extends Component {
  onSubmit = (data) => {
    this.props.startAddPost(data)
      .then(() => {
        this.props.history.push('/');
      });
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

const mapDispatchToProps = (dispatch) => ({
  startAddPost: (post) => dispatch(startAddPost(post))
});

export default connect(null, mapDispatchToProps)(AddPost);
