import React from 'react';
import ReactDOM from 'react-dom';
import 'material-design-icons/iconfont/material-icons.css';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
