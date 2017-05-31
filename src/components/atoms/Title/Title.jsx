import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../../styleUtils/media';

const StyledTitle = styled.h1`
  text-align: center;
  font-weight: 300;
  font-size: 1.5em;
  margin-bottom: 1.5em;
  ${media.smAndUp`
    font-size: 2.5em;
  `}
`;

const Title = ({ children, ...rest }) => (
  <StyledTitle {...rest}>{ children }</StyledTitle>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Title;
