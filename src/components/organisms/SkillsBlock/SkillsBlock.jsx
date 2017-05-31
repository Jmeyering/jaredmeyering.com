import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../layout/Container';
import ContentWithTitle from '../../molecules/ContentWithTitle/ContentWithTitle';
import SkillCard from '../../molecules/SkillCard/SkillCard';
import CardList from '../../molecules/CardList/CardList';

const SkillsBlock = ({ skills }) => {
  const items = skills.map(skill => (
    <SkillCard skill={skill} />
  ));
  return (
    <Container>
      <ContentWithTitle header="Skills">
        <CardList>
          { items }
        </CardList>
      </ContentWithTitle>
    </Container>
  );
};

SkillsBlock.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};

export default SkillsBlock;
