import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './Services/reducers';
import { BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';




const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
  <Router>
  <App/>
  </Router>
  </Provider>
  , document.getElementById('root'));
