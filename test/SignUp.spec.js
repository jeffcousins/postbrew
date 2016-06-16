/* eslint-env mocha */

import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import SignUp from '../client/components/SignUp';

describe('SignUp Component', () => {
  it('should render', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.contains(<div>SignUp Component</div>)).to.be.true;
  });
});
