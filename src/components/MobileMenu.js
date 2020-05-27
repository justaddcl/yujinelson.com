import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors, fonts, mq, spacing } from './styles/theme';
import ContentContainer from './styles/ContentContainer';

const StyledMobileMenu = styled.nav`
  background-color: ${colors.purple[800]};
  bottom: 0;
  height: calc(100vh - 76px);
  opacity: 0;
  position: fixed;
  transform: translateX(100%);
  width: 100vw;
  z-index: 1;
  transition: opacity 0.15s cubic-bezier(0.86, 0, 0.07, 1),
    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    li {
      &.nav-item {
        margin-bottom: ${spacing.l}rem;

        &:last-child {
          margin-bottom: 0;
        }
      }

      &.mb-xl {
        margin-bottom: ${spacing.xl}rem;
      }

      a {
        color: ${colors.grey[100]};
        font-family: ${fonts.family.sourceCodePro};
        font-size: 1.5rem;
        text-decoration: none;

        &.button--primary {
          background-color: ${colors.purple[500]};
          color: ${colors.grey[100]};
          display: grid;
          column-gap: ${spacing.base}rem;
          grid-template-columns: repeat(2, auto);
          font-family: ${fonts.family.proximaNova};
          font-size: 20px;
          padding: ${spacing.base}rem ${spacing.s}rem;

          @media screen and (min-width: 375px) {
            padding: ${spacing.base}rem ${spacing.m}rem;
          }

          & .icon {
            font-size: 0.875rem;
          }
        }
      }
    }
  }

  &.is-open {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.15s cubic-bezier(0.86, 0, 0.07, 1),
      transform 0.25s cubic-bezier(0, 0, 0.2, 1);

    @media screen and (min-width: ${mq.desktop.small}) {
      display: none;
    }
  }
`;

const MobileMenuContainer = styled(ContentContainer)`
  padding: ${spacing.xl}rem ${spacing.m}rem;
`;

const MobileMenu = () => (
  <StyledMobileMenu>
    <MobileMenuContainer>
      <ul>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item mb-xl">
          <Link to="/">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="button--primary">
            <span>Download resume</span>
            <FontAwesomeIcon icon="download" className="icon" />
          </Link>
        </li>
      </ul>
    </MobileMenuContainer>
  </StyledMobileMenu>
);

export default MobileMenu;
