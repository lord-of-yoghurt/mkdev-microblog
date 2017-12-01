import React from 'react';
import { shallow } from 'enzyme';

import CharCounter from '../../components/CharCounter';

test('renders the component correctly', () => {
  const wrapper = shallow(<CharCounter />);

  expect(wrapper).toMatchSnapshot();
});
