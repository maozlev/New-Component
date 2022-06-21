import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Repeater } from './components/Item/Item';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Repeater items={[{key:Math.random().toString(36).substring(2,8), title:"Maoz", price: 10, priceFor:"Lavi", description: "bla bla bla"},
                      {key:Math.random().toString(36).substring(2,8), title:"Guy", price: 20, priceFor:"Mendi", description: "bla bla bla"},
                      {key:Math.random().toString(36).substring(2,8), title:"Ori", price: 30, priceFor:"Mendi", description: "bla bla bla"}
                      ]}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
