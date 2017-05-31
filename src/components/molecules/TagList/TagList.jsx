import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tag from '../../atoms/Tag/Tag';

const StyledTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  list-style: none;
  li {
    display: block;
    margin-right: .25em;
    margin-bottom: .25em;
    flex-shrink: 0;
  }
`;

/**
 * A grouping of tags that are displayed inline block.
 */
const TagList = ({ tags }) => {
  const items = tags.map(tag => (
    <li key={tag.href}>
      <Tag href={tag.href}>{tag.text}</Tag>
    </li>
  ));

  return (
    <StyledTagList>{ items }</StyledTagList>
  );
};

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default TagList;
