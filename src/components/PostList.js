import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { startSetPosts } from '../actions/posts';
import Post from './Post';

class PostList extends Component {
  displayPosts = (posts) => {
    if (posts && posts.length > 0) {
      return posts.map((post) => {
        return <Post key={post.id} {...post} />
      });
    }
  };

  render() {
    return (
      <div>
        <h1>All posts</h1>
        {this.displayPosts(this.props.posts)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state
  };
};

export default connect(mapStateToProps)(PostList);
