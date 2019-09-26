/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';

import GlobalSettings from './styles/settings';
import GlobalStyles from './styles/generic';
import GlobalBase from './styles/base/root';

import App from './App';

ReactDOM.render(
  <>
    <GlobalBase />
    <GlobalStyles />
    <GlobalSettings />
    <App />
  </>,
  document.querySelector('[data-js="app"]'),
);
