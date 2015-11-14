import { Component, PropTypes, Children } from 'react';
import { storeShape } from './shapes/store';

export default class Provider extends Component {
  static childContextTypes = {
    store: storeShape.isRequired
  }

  static propTypes = {
    store: storeShape.isRequired,
    children: PropTypes.element.isRequired
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
