(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.react-with-lifecycle = factory(global.React));
}(this, (function (React) { 'use strict';

React = 'default' in React ? React['default'] : React;

/* global ReactClass */

function cb(f) {
  /* eslint-disable indent */
  return f ? function () {
    // $FlowFixMe: "Function cannot be called on possibly undefined value"
    return f.apply(this, [this.props, this.state].concat(arguments));
  } : undefined;
  /* eslint-enable indent */
}

function WithLifecycle(lifecycle, ComponentClass) {
  var classProperties = {
    displayName: 'WithLifecycle(' + ComponentClass.displayName + ')',

    componentWillMount: cb(lifecycle.componentWillMount),
    componentDidMount: cb(lifecycle.componentDidMount),
    componentWillReceiveProps: cb(lifecycle.componentWillReceiveProps),
    shouldComponentUpdate: cb(lifecycle.shouldComponentUpdate),
    componentWillUpdate: cb(lifecycle.componentWillUpdate),
    componentDidUpdate: cb(lifecycle.componentDidUpdate),
    componentWillUnmount: cb(lifecycle.componentWillUnmount),

    render: function render() {
      return React.createElement(ComponentClass, this.props);
    }
  };
  return React.createClass(classProperties);
}

return WithLifecycle;

})));
