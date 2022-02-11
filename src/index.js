import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/base.scss'
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

ReactDom.render(
<React.StrictMode>
 <BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>
,document.getElementById("root"));