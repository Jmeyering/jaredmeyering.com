import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * A Content Container
 */
const StyledContainer = styled.div`
  max-width: ${props => props.small ? '700px' : '1000px'};
  padding: 0 1em;
  margin: 0 auto;
`;

// Wrapper component so the component works with styleguidist.
const Container = ({ children, ...rest }) => (
  <StyledContainer {...rest}>{ children }</StyledContainer>
);

Container.defaultProps = {
  small: false,
};

Container.propTypes = {
  /**
   * If utilized the container will be smaller than if it were not utilized.
   */
  small: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Container;
