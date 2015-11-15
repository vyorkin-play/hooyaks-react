import { Component } from 'react';

import { bindActionCreators } from 'hooyaks';

import shallowEqual from '../utils/shallowEqual';
import { storeShape } from './shapes/store';

export default (mapState, mapDispatch, options = {}) => {
  const { pure = true } = options;

  return (Component) => {
    const name = Component.displayName || Component.name || 'Component';

    class Connect extends Component {
      static displayName = `Connect${name}`

      static contextTypes = { store: storeShape }
      static propTypes = { store: storeShape }

      constructor(props, context) {
        super(props, context);
        this.store = props.store || context.store;
      }

      shouldComponentUpdate(nextProps, nextState) {
        if (!pure) {
        }
      }

      render() {
        return <Component {this.nextState} />
      }
    }
  };
};
