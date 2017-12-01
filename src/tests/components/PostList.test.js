import React from 'react';
import { shallow } from 'enzyme';

import { PostList } from '../../components/PostList';
import posts from '../fixtures/posts';

test('renders the component correctly', () => {
  const wrapper = shallow(<PostList posts={posts} />);

  expect(wrapper).toMatchSnapshot();
});
