import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import reducer from './storage/reducers/reducer';
import axios from "axios";

const store = configureStore({ reducer }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
axios.defaults.headers.common['Accept'] = 'application/json'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
