import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./Bll/Store/Store";
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Router>
       <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>
        </Router>
   ,
  document.getElementById('root')
);

reportWebVitals();
