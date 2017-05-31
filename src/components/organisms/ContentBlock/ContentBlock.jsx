import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../layout/Container';
import ContentWithTitle from '../../molecules/ContentWithTitle/ContentWithTitle';

/**
 * A Content block is a fully formed section of content.
 */
const ContentBlock = ({ header, children }) => (
  <Container small>
    <ContentWithTitle header={header}>
      { children }
    </ContentWithTitle>
  </Container>
);

// Wrapper component so the component works with styleguidist.
ContentBlock.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ContentBlock;
