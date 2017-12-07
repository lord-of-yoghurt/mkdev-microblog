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
});
