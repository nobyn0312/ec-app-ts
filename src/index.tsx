import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import createStore from './reducks/store/store';
import {ConnectedRouter} from  'connected-react-router'
import * as History from 'history'
import { createBrowserHistory } from 'history'; // 正しいモジュールをインポート

const history=History.createBrowserHistory();

export const store = createStore(history);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <App />
    </ConnectedRouter>
  </Provider>
);
