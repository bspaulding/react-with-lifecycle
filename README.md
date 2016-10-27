# react-with-lifecycle

HOC to add lifecycle hooks to any component, even stateless ones.

## Usage

Install via `npm`:

```bash
npm install react-with-lifecycle
```
import and wrap your components with a lifecycle object:

```javascript
import WithLifecycle from 'react-with-lifecycle';

const WidgetList = ({ widgets, loading }) => (
  <div>
    {loading && 'Loading widgets...'}
    {!loading && widgets.map(widget =>
      <span key={widget.id}>{widget.name}</span>)}
  </div>
);

export default WithLifecycle({
  componentDidMount({ loadWidgets }) {
    loadWidgets();
  }
}, WidgetList)
```
In a redux app, this is a useful pattern for building containers:

```javascript
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadWidgets } from 'actions/WidgetsActions';
import WidgetList from 'components/WidgetList';
import WithLifecycle from 'react-with-lifecycle';

// ...

connect(
  mapStateToProps,
  dispatch => bindActionCreators({ loadWidgets }, dispatch)
)(WithLifecycle({
  componentDidMount({ loadWidgets }) {
    loadWidgets();
  }
}, WidgetList));
```

## Lifecycle methods

Lifecycle methods are called with arguments of `props`, `state`, and `...arguments`, where `arguments` are the original parameters passed into the lifecycle method by react. This allows access to the standard arguments called by each lifecycle method:

```javascript
WithLifecycle({
  componentDidUpdate(props, state, prevProps, prevState) {
    // ...
  }
}, WidgetList));
```
