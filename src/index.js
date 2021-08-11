import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import storeConfig from './storeConfig';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { 
  MuiThemeProvider,
  responsiveFontSizes
 } from '@material-ui/core';
 import { createTheme } from '@material-ui/core/styles';

const store = storeConfig({});
let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
