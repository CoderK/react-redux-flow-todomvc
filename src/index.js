// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store/create-store';
import App from './containers/App';
import 'todomvc-app-css/index.css';

import type { Store } from './types/type-def';

const store: Store = createStore();

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
