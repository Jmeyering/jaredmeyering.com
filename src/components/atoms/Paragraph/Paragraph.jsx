import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  color: ${props => props.light ? 'white' : 'black'};
  text-align: ${props => props.center ? 'center' : 'left'};
  font-weight: 100;
  a {
    color: ${props => props.theme.linkColor.normal};
    &:visited {
      color: ${props => props.theme.linkColor.visited};
    }
    &:hover {
      color: ${props => props.theme.linkColor.hover};
    }
  }
`;

/**
 * A paragraph represents a sectioned area of text content.
 */
const Paragraph = ({ children, ...rest }) => (
  <StyledParagraph {...rest}>{ children }</StyledParagraph>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,

  /**
   * If a paragraph is toggled as 'light' we will render in a lighter color,
   * assuming that we are on a dark background
   */
  light: PropTypes.bool,

  /**
   * If a paragraph is centered the text is aligned to the center
   */
  center: PropTypes.bool,
};

export default Paragraph;
