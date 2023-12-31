import React from 'react';
import { createRoot } from 'react-dom/client'

import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'



createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>
  
)
