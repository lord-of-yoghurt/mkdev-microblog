import React, { Component } from 'react';

import CharCounter from './CharCounter';

export default class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.post ? props.post.title : '',
      body: props.post ? props.post.body : '',
      username: props.post ? props.post.username : '',
      error: ''
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onBodyChange = (e) => {
    const body = e.target.value;
    this.setState(() => ({ body }));
  };

  onNameChange = (e) => {
    const username = e.target.value;
    this.setState(() => ({ username }));
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      title: this.state.title,
      body: this.state.body,
      username: this.state.username
    });

    this.clearForm();
  };

  clearForm = () => {
    this.setState(() => ({
      title: '',
      body: '',
      username: ''
    }));
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Short title"
          maxLength="30"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <CharCounter max={30} length={this.state.title.length} />
        <br></br>
        <textarea
          placeholder="Concise body"
          maxLength="250"
          value={this.state.body}
          onChange={this.onBodyChange}
        >
        </textarea>
        <CharCounter max={250} length={this.state.body.length} />
        <br></br>
        <input
          type="text"
          placeholder="Your name"
          maxLength="20"
          value={this.state.username}
          onChange={this.onNameChange}
        />
        <br></br>
        <button>Submit</button>
      </form>
    );
  }
}
