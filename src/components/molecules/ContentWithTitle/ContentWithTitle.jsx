import React from 'react';
import PropTypes from 'prop-types';
import SecondaryTitle from '../../atoms/SecondaryTitle/SecondaryTitle';

const ContentWithTitle = ({ header, children }) => (
  <div>
    <SecondaryTitle>{ header }</SecondaryTitle>
    { children }
  </div>
);

// Wrapper component so the component works with styleguidist.
ContentWithTitle.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ContentWithTitle;
