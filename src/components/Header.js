import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors, fonts, mq } from './styles/theme';
import ContentContainer from './styles/ContentContainer';
import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';

const HeaderContainer = styled(ContentContainer)`
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
    display: grid;
    grid-gap: 12px;
    grid-template-columns: auto 1fr;
  }
`;

const LogoGroup = styled.div`
  & .name {
    color: ${colors.grey[200]};
    font-family: ${fonts.family.sourceCodePro};
    font-size: 24px;
    font-weight: 700;
  }
`;

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
  <header>
    <HeaderContainer>
      <LogoGroup>
        <Link to="/">
          <Logo />
          <span className="name">Yuji</span>
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
    </HeaderContainer>
    <MobileMenu />
  </header>
);

export default Header;
