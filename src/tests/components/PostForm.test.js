import React from 'react';
import { shallow } from 'enzyme';

import PostForm from '../../components/PostForm';
import posts from '../fixtures/posts';

describe('PostForm component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PostForm />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders the form with post data', () => {
    const wrapper = shallow(<PostForm post={posts[1]} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('shows an error message if any of the fields are empty', () => {
    const wrapper = shallow(<PostForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('sets title on input change', () => {
    const value = 'blabbety blah';
    const wrapper = shallow(<PostForm />);
    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });

    expect(wrapper.state('title')).toBe(value);
  });

  it('sets body on input change', () => {
    const value = 'i wrote a cool post check it out';
    const wrapper = shallow(<PostForm />);
    wrapper.find('textarea').simulate('change', {
      target: { value }
    });

    expect(wrapper.state('body')).toBe(value);
  });

  it('sets username on input change', () => {
    const value = 'admin';
    const wrapper = shallow(<PostForm />);
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });

    expect(wrapper.state('username')).toBe(value);
  });

  it('calls onSubmit upon valid data submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<PostForm post={posts[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      title: posts[0].title,
      body: posts[0].body,
      username: posts[0].username
    });
  });
});
