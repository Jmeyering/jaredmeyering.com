import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTag = styled.a`
  padding: .25em .3em;
  color: white;
  cursor: pointer;
  font-weight: 100;
  border-radius: 5%;
  text-decoration: none;
  background: ${props => props.theme.tagBackground.normal};
  display: inline-block;
  &:hover {
    background: ${props => props.theme.tagBackground.hover};
  }
`;

const Tag = ({ children, ...rest }) => (
  <StyledTag {...rest}>{ children }</StyledTag>
);

Tag.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tag;
