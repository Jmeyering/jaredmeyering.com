/* eslint-disable no-unused-expressions */
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

injectGlobal`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    font-family: 'Open Sans';
    margin-top: 5em;
    margin-bottom: 2em;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const colors = {
  charcoal: '#414042',
  grayBlue: '#607d8b',
  blue: '#00bcd4',
  darkBlue: '#0097a7',
  darkestBlue: '#303e45',
  altBlue: '#4d646f',
};

const theme = {
  selectionColor: 'white',
  selectionBackground: colors.charcoal,
  linkColor: {
    normal: colors.blue,
    visited: colors.blue,
    hover: colors.darkBlue,
  },
  tagBackground: {
    normal: colors.altBlue,
    hover: colors.darkestBlue,
  },
  cardBackground: colors.grayBlue,
};

export default theme;
