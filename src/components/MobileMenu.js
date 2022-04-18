import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors, fonts, mq, spacing } from './styles/theme';
import ResumeLink from './ResumeLink';
import Container from './styles/Container';

const StyledMobileMenu = styled.nav`
  background-color: ${colors.purple[800]};
  bottom: 0;
  opacity: 0;
  position: fixed;
  transform: translateX(125%);
  z-index: 1;
  transition: opacity 0.15s cubic-bezier(0.86, 0, 0.07, 1),
    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ul {
    display: grid;
    gap: ${spacing.l}rem;
    list-style: none;
    padding: ${spacing.xxs}rem;
    justify-self: stretch;

    li {
      &.mb-base {
        margin-bottom: ${spacing.base}rem;
      }

      a {
        color: ${colors.grey[100]};
        font-family: ${fonts.family.sourceCodePro};
        font-size: ${spacing.s}rem;
      }

      & button > a {
        font-size: 1.25rem;
      }
    }
  }

  &.is-open {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.15s cubic-bezier(0.86, 0, 0.07, 1),
      transform 0.25s cubic-bezier(0, 0, 0.2, 1);

    @media screen and (min-width: ${mq.mobile.large}) {
      display: none;
    }
  }
`;

const MobileMenuContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;

  @media screen and (min-width: ${mq.mobile.medium}) {
    justify-items: start;
    padding-left: ${spacing.xl}rem;
  }
`;

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  const handleMobileMenuClick = ({ target }) => {
    if (target.hasAttribute('href')) {
      toggleMenu();
    }
  };

  return (
    <StyledMobileMenu
      className={isMenuOpen ? 'is-open' : ''}
      onClick={handleMobileMenuClick}
    >
      <MobileMenuContainer>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <ResumeLink button />
          </li>
        </ul>
      </MobileMenuContainer>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
