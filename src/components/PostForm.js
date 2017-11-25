import React, { Component } from 'react';

export default class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
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

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      title: this.state.title,
      body: this.state.body
    });

    this.clearForm();
  };

  clearForm = () => {
    this.setState(() => ({
      title: '',
      body: ''
    }));
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Post title"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <textarea
          placeholder="Post body"
          value={this.state.body}
          onChange={this.onBodyChange}
        >
        </textarea>
        <button>Submit</button>
      </form>
    );
  }
}
