import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardTitle from './CardTitle';

const StyledCard = styled.div`
  position: relative;
  padding: 1em;
  overflow: hidden;
  color: white;
  background: ${props => props.theme.cardBackground};
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin-bottom: 1em;
`;

const Card = ({ children, title }) => (
  <StyledCard>
    { title &&
      <CardTitle>{title}</CardTitle>
    }
    { children }
  </StyledCard>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
