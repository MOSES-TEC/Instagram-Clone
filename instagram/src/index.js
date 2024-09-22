import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";

import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
        <App />
    </FirebaseContext.Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

