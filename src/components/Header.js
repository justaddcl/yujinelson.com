import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors, mq } from './styles/theme';
import ContentContainer from './styles/ContentContainer';
import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';

const StyledHeader = styled(ContentContainer)`
  align-items: center;
  display: flex;
  height: 72px;
  justify-content: space-between;

  @media screen and (min-width: ${mq.desktop.small}) {
    height: 80px;
    margin: inherit;
  }

  a {
    align-items: center;
    color: ${colors.grey[300]};
    display: grid;
    font-size: 24px;
    font-weight: 700;
    grid-gap: 12px;
    grid-template-columns: auto 1fr;
  }
`;

const LogoGroup = styled.div``;

const StyledNav = styled.nav`
  display: none;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;

    li {
      &:not(:last-child) {
        margin-right: 48px;
      }

      a {
        color: ${colors.grey[300]};
        text-decoration: none;
      }
    }
  }

  @media screen and (min-width: ${mq.desktop.small}) {
    display: block;
  }
`;

const Header = () => (
  <StyledHeader as="header">
    <LogoGroup>
      <Link to="/">
        <Logo />
        Yuji
      </Link>
    </LogoGroup>
    <MobileMenuButton />
    <StyledNav>
      <ul>
        <li>
          <Link to="/about">/about</Link>
        </li>
        <li>
          <Link to="/uses">/uses</Link>
        </li>
      </ul>
    </StyledNav>
  </StyledHeader>
);

export default Header;
