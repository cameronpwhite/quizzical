import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Router} from 'react-router-dom'
import { Quizzical } from './components/Quizzical.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Quizzical />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

