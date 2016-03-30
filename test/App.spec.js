/* eslint-env mocha */

import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import App from '../src/components/App';

describe('App Component', () => {
  it('should render default header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<h1>reddux</h1>)).to.be.true;
  });
});
