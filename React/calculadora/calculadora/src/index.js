import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<div>
    <h1>Calculadora</h1>
    <Calculator />
</div>
,document.getElementById('root'));
registeServiceWorker();