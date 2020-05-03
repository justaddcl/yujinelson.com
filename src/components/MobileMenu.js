import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors, mq } from './styles/theme';
import ContentContainer from './styles/ContentContainer';
import SocialMediaIcons from './SocialMediaIcons';

const StyledMobileMenu = styled.nav`
  background-color: ${colors.purple[900]};
  bottom: 0;
  height: calc(100vh - 76px);
  padding: 48px 0;
  position: fixed;
  transform: translateX(100%);
  width: 100vw;
  z-index: 1;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    li {
      margin-bottom: 48px;

      a {
        color: ${colors.grey[300]};
        text-decoration: none;
      }
    }
  }

  &.open {
    transform: translateX(0);
    transition: transform 0.25s cubic-bezier(0, 0, 0.2, 1);
  }
`;

const MobileMenu = () => (
  <StyledMobileMenu>
    <ContentContainer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">/about</Link>
        </li>
        <li>
          <Link to="/uses">/uses</Link>
        </li>
      </ul>
      <SocialMediaIcons />
    </ContentContainer>
  </StyledMobileMenu>
);

export default MobileMenu;
