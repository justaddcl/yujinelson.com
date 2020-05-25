import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
// import Img from 'gatsby-image';
import styled from 'styled-components';
import { colors, fonts, mq } from './styles/theme';

const StyledLogo = styled.div`
  background-color: #4a4f68;
  border-radius: 50%;
  color: ${colors.grey[100]};
  display: grid;
  font-family: ${fonts.family.japanese};
  font-size: 1rem;
  height: 36px;
  padding-bottom: 6px;
  place-content: center;
  width: 36px;
`;

const Logo = () => {
  return (
    <StyledLogo alt="Logo">
      <span>&#12518;</span>
    </StyledLogo>
  );
};

export default Logo;
