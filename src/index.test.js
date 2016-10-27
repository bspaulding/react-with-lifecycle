/* @flow */

import assert from 'assert';
import React from 'react';
import WithLifecycle from './index';
import { mount } from 'enzyme';

describe('WithLifecycle', function() {
  [
    'componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount'
  ].forEach(function(lifecycle) {
    it(`calls ${lifecycle}`, function() {
      let called = false;
      const Component = WithLifecycle({
        [lifecycle]() {
          called = true;
          return true;
        }
      }, () => <div/>);

      const wrapper = mount(<Component/>);
      wrapper.setProps({ foo: 'bar' });
      wrapper.unmount();

      assert(called);
    });
  });
});
