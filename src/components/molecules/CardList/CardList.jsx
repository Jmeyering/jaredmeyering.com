/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../../styleUtils/media';

const StyledCardList = styled.div`
  position: relative;
  overflow: hidden;
  ${media.smAndUp`
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    justify-content: space-between;
  `}

  > * {
    width: 100%;
    ${media.smAndUp`
      width: calc(50% - 10px);
    `}
    ${media.mdAndUp`
      width: calc(33% - 10px);
    `}
  }
`;

const CardList = ({ children }) => (
  <StyledCardList>{ children }</StyledCardList>
);

CardList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardList;
