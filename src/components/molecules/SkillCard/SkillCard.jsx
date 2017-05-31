import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../atoms/Card/Card';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import TagList from '../TagList/TagList';

const SkillCard = ({ skill }) => (
  <Card title={skill.title}>
    { skill.description &&
      <Paragraph light>{ skill.description }</Paragraph>
    }
    <TagList tags={skill.skills} />
  </Card>
);

SkillCard.propTypes = {
  skill: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default SkillCard;
