import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SocialIcon from '../../atoms/SocialIcon/SocialIcon';

const StyledSocialIconList = styled.div`
  display: flex;
  justify-content: center;

  > * {
    margin-right: 2em;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const SocialIconList = ({ icons, ...rest }) => {
  const items = icons.map(icon => (
    <SocialIcon key={icon.type} {...icon} />
  ));

  return (
    <StyledSocialIconList {...rest}>
      { items }
    </StyledSocialIconList>
  );
};

SocialIconList.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })).isRequired,
};

export default SocialIconList;
