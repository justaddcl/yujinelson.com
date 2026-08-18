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
  pointer-events: none;
  position: fixed;
  transform: translateX(125%);
  visibility: hidden;
  z-index: 1;
  transition: opacity 0.15s cubic-bezier(0.86, 0, 0.07, 1),
    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s linear 0.2s;

  @media screen and (min-width: ${mq.mobile.large}) {
    display: none;
  }

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

        &[aria-current='page'],
        &.is-active {
          color: ${colors.blue[400]};
        }
      }

      & button > a {
        font-size: 1.25rem;
      }
    }
  }

  &.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0);
    visibility: visible;
    transition: opacity 0.15s cubic-bezier(0.86, 0, 0.07, 1),
      transform 0.25s cubic-bezier(0, 0, 0.2, 1), visibility 0s;
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

type MobileMenuProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const MobileMenu = ({ isMenuOpen, toggleMenu }: MobileMenuProps) => {
  const handleMobileMenuClick = ({ target }: React.MouseEvent<HTMLElement>) => {
    if ((target as HTMLElement).hasAttribute('href')) {
      toggleMenu();
    }
  };

  return (
    <StyledMobileMenu
      id="mobile-navigation"
      aria-label="Mobile navigation"
      aria-hidden={!isMenuOpen}
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
            <Link to="/projects" activeClassName="is-active" partiallyActive>
              Projects
            </Link>
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
