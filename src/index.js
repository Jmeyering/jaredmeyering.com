/**
 * REACT COMPONENTS
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import { ThemeProvider } from 'styled-components';

import theme from './themes/main';
import Router from './router';

const history = createHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Router history={history} />
    </AppContainer>
  </ThemeProvider>,
  document.getElementById('root'),
);


// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router', () => {
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Router history={history} />
        </AppContainer>
      </ThemeProvider>,
      document.getElementById('root'),
    );
  });
}
