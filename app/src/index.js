import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css';
import App from './components/App';
import reportWebVitals from './components/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const linkToView= () => {
  // window.open('route')
}

root.render(
  <React.StrictMode>
    <button id="viewButton" onClick={linkToView()}>Change view</button>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
