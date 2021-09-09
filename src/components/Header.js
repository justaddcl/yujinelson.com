import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors, fonts, mq, spacing } from './styles/theme';
import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';
import ResumeLink from './ResumeLink';
import Container from './styles/Container';

const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  height: 72px;
  justify-content: space-between;

  @media screen and (min-width: ${mq.desktop.small}) {
    height: 80px;
  }
`;

const LogoGroup = styled.div`
  z-index: 9;

  a {
    align-items: center;
    display: grid;
    grid-gap: 12px;
    grid-template-columns: auto 1fr;
  }

  & .name {
    color: ${colors.grey[200]};
    font-family: ${fonts.family.sourceCodePro};
    font-size: 24px;
    font-weight: 700;
  }
`;

const StyledNav = styled.nav`
  display: none;
  color: ${colors.grey[50]};
  font-family: ${fonts.family.sourceCodePro};
  font-size: ${fonts.size.base}px;

  ul {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: calc(${spacing.basePx}px * ${spacing.xl});
    list-style: none;
  }

  @media screen and (min-width: ${mq.mobile.large}) {
    display: block;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHeaderClick = () => {
    if (isMenuOpen) toggleMobileMenu();
  };

  return (
    <>
      <Helmet>
        <body className={isMenuOpen ? 'menu-is-open' : ''} />
      </Helmet>
      <header>
        <HeaderContainer onClick={handleHeaderClick}>
          <LogoGroup>
            <Link to="/">
              <Logo />
              <span className="name">Yuji</span>
            </Link>
          </LogoGroup>
          <MobileMenuButton
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMobileMenu}
          />
          <StyledNav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <ResumeLink button small />
              </li>
            </ul>
          </StyledNav>
        </HeaderContainer>
        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMobileMenu} />
      </header>
    </>
  );
};

export default Header;
