import React from 'react';
import ReactDOM from 'react-dom/client';
import { App} from './App'
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "./state/State";
import { Provider } from 'react-redux';
import './index.css'

const store = configureStore({
  reducer: {
    global: globalReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
