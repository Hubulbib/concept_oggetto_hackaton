import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth from './stores/AuthStore';
import Survey from './stores/SurveyStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AuthStore = new Auth()
const SurveyStore = new Survey()

export const Context = React.createContext({
    AuthStore, SurveyStore
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
