/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ThemeProvider } from 'styled-components';

import theme from '../themes/main';

const history = createHistory();

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter history={history}>
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Oswald:400,700,300|Roboto:400,700,500,400italic,500italic,700italic"
          rel="stylesheet"
          type="text/css"
        />
        { children }
      </div>
    </BrowserRouter>
  </ThemeProvider>
);

export default Wrapper;
