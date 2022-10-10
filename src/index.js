import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter } from "react-router-dom";



// import bootstrap from './bootstrap/js/dist/bootstrap.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);


