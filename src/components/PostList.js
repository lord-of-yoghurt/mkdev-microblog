import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startSetPosts } from '../actions/posts';
import PostListItem from './PostListItem';

class PostList extends Component {
  displayPosts = (posts) => {
    if (posts.length > 0) {
      return posts.map((post) => {
        return <PostListItem key={post.id} {...post} />
      });
    }
  };

  render() {
    return (
      <div>
        <h1>All posts</h1>
        <Link to="/create">New post</Link>
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
