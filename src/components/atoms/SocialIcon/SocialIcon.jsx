import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import githubLogo from '../../../assets/icons/github.svg';
import twitterLogo from '../../../assets/icons/twitter.svg';
import facebookLogo from '../../../assets/icons/facebook.svg';

const getIconImage = (type) => {
  switch (type) {
    case 'github': {
      return githubLogo;
    }
    case 'twitter': {
      return twitterLogo;
    }
    case 'facebook': {
      return facebookLogo;
    }
    default: {
      break;
    }
  }
  return null;
};

const StyledSocialIcon = styled.a`
  width: 2em;
  height: 2em;
  display: block;
  background-size: cover;
  background-image: url(${({ type }) => getIconImage(type)});
`;

const SocialIcon = props => (
  <StyledSocialIcon {...props} />
);

SocialIcon.propTypes = {
  type: PropTypes.oneOf(['github', 'facebook', 'twitter']),
};

export default SocialIcon;
