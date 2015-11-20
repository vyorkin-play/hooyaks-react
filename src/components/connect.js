import isPlain from 'is-plain-obj';

import { Component } from 'react';

import { bindActionCreators } from 'hooyaks';

import shallowEqual from '../utils/shallowEqual';
import { storeShape } from './shapes/store';

// simplified, naive implementation:
// - no custom props merging func
// - no versioning

const stateIdentity = () => ({});
const dispatchIdentity = (dispatch) => ({ dispatch });

const wrapActions = (actions) =>
  (dispatch) => bindActionCreators(mapDispatch, dispatch);

export default (mapState, mapDispatch, options = {}) => {
  const { pure = true } = options;

  //  app state to component props
  const finalMapState = mapState || stateIdentity;
  const finalMapDispatch = isPlain(mapDispatch) ?
    wrapActions(mapDispatch) :
    mapDispatch || dispatchIdentity;

  // wrapper/decorator component
  return (Component) => {
    const name = Component.displayName || Component.name || 'Component';

    class Connect extends Component {
      static displayName = `Connect${name}`

      static contextTypes = { store: storeShape }
      static propTypes = { store: storeShape }

      state = { store: null }

      constructor(props, context) {
        super(props, context);
        this.store = props.store || context.store;
        this.updateState();
      }

      updateState() {
        this.nextState = this.computeState();
      }

      computeState = () => ({
        ...finalMapState(this.store),
        ...finalMapDispatch(this.store),
        ...this.props
      });

      shouldComponentUpdate(nextProps, nextState) {
        // always update for now
        return true;
      }

      render() {
        return <Component {...this.nextState} />
      }
    }
  };
};
