import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCardTitle = styled.h3`
  font-size: 1.2em;
  text-align: center;
  margin-top: 0;
  font-weight: 300;
`;

const CardTitle = ({ children }) => (
  <StyledCardTitle>{children}</StyledCardTitle>
);

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardTitle;
