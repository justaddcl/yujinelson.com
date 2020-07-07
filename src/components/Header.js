import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors, fonts, mq, spacing } from './styles/theme';
import Container from './styles/Container';
import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';

const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  height: 72px;
  justify-content: space-between;

  @media screen and (min-width: ${mq.desktop.small}) {
    height: 80px;
  }

  a {
    align-items: center;
    display: grid;
    grid-gap: 12px;
    grid-template-columns: auto 1fr;
  }
`;

const LogoGroup = styled.div`
  z-index: 9;

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
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: calc(${spacing.basePx}px * ${spacing.xl});
    list-style: none;

    li {
      a {
        color: ${colors.grey[50]};
        font-family: ${fonts.family.sourceCodePro};
        font-size: ${fonts.size.base}px;
        text-decoration: none;

        &.button--primary {
          background-color: ${colors.purple[500]};
          border-radius: 2px;
          color: ${colors.grey[100]};
          display: grid;
          column-gap: ${spacing.base}rem;
          grid-template-columns: repeat(2, auto);
          font-family: ${fonts.family.proximaNova};
          font-size: 20px;
          padding: ${spacing.xs}rem ${spacing.m}rem;

          @media screen and (min-width: 375px) {
            padding: ${spacing.base}rem ${spacing.m}rem;
          }
          .icon {
            font-size: 0.875rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: ${mq.mobile.large}) {
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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/" className="button--primary">
              Download resume{' '}
              <FontAwesomeIcon icon="download" className="icon" />
            </Link>
          </li>
        </ul>
      </StyledNav>
    </HeaderContainer>
    <MobileMenu />
  </header>
);

export default Header;
