import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import catreducer from './reducers/index';
// import catReducer from './reducers/catreducer';
import { Provider } from 'react-redux'
import {legacy_createStore as createStore, legacy_createStore} from 'redux';


const store = createStore(catreducer);
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
