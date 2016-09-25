// @flow

import { compose, createStore } from 'redux';
import reducer from '../reducers/reducer';

export default function () {
  const createStoreDevTools = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  return createStoreDevTools(reducer);
};