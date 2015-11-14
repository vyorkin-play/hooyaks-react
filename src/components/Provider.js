import { Component, PropTypes, Children } from 'react';

const storeShape = PropTypes.shape({
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
});

export default class Provider extends Component {
  static propTypes = {
    store: storeShape.isRequired,
    children: PropTypes.element.isRequired
  }

  static childContextTypes = {
    store: storeShape.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.store = props.store;
  }

  getChildContext() {
    return { store: this.store };
  }

  render() {
    let { children } = this.props;
    return Children.only(children);
  }
}
