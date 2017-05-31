import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../layout/Container';
import ContentWithTitle from '../../molecules/ContentWithTitle/ContentWithTitle';
import SocialIconList from '../../molecules/SocialIconList/SocialIconList';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const socialIcons = [
  { type: 'github', href: 'https://github.com/jmeyering' },
  { type: 'twitter', href: 'https://twitter.com/jmeyering' },
  { type: 'facebook', href: 'https://facebook.com/jared.meyering' },
];

const ContactBlock = () => (
  <Container small>
    <ContentWithTitle header="Contact">
      <Paragraph center>
        <a href="mailto:me@jaredmeyering.com">me@jaredmeyering.com</a>
      </Paragraph>
      <SocialIconList icons={socialIcons} />
    </ContentWithTitle>
  </Container>
);

ContactBlock.propTypes = {
};

export default ContactBlock;
