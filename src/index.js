/* @flow */

/* global ReactClass */

import React from 'react';

function cb(f) {
  /* eslint-disable indent */
  return f
    ? function() {
        // $FlowFixMe: "Function cannot be called on possibly undefined value"
        return f.apply(this, [this.props, this.state].concat(arguments));
      }
    : undefined;
  /* eslint-enable indent */
}

type Lifecycle = {|
  componentWillMount?: Function;
  componentDidMount?: Function;
  componentWillReceiveProps?: Function;
  shouldComponentUpdate?: Function;
  componentWillUpdate?: Function;
  componentDidUpdate?: Function;
  componentWillUnmount?: Function;
|};

export default function WithLifecycle(lifecycle: Lifecycle, ComponentClass: ReactClass<*>) {
  const classProperties = {
    displayName: `WithLifecycle(${ComponentClass.displayName})`,

    componentWillMount: cb(lifecycle.componentWillMount),
    componentDidMount: cb(lifecycle.componentDidMount),
    componentWillReceiveProps: cb(lifecycle.componentWillReceiveProps),
    shouldComponentUpdate: cb(lifecycle.shouldComponentUpdate),
    componentWillUpdate: cb(lifecycle.componentWillUpdate),
    componentDidUpdate: cb(lifecycle.componentDidUpdate),
    componentWillUnmount: cb(lifecycle.componentWillUnmount),

    render() {
      return <ComponentClass {...this.props}/>;
    }
  };
  return React.createClass(classProperties);
}
