import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../../styleUtils/media';

/**
 * SecondaryTitle Description
 */
const StyledSecondaryTitle = styled.h2`
  font-weight: 300;
  text-align: center;
  font-size: 1.2em;
  ${media.smAndUp`
    font-size: 2em;
  `}
`;


// Wrapper component so the component works with styleguidist.
const SecondaryTitle = ({ children, ...rest }) => (
  <StyledSecondaryTitle {...rest}>{ children }</StyledSecondaryTitle>
);

SecondaryTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SecondaryTitle;
