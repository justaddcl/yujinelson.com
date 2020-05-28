import React from 'react';
import styled from 'styled-components';
import { colors, mq } from './styles/theme';

const StyledMobileMenuButton = styled.button`
  background: none;
  border: none;
  height: 48px;
  justify-self: end;
  padding: 12px;
  width: 48px;

  @media screen and (min-width: ${mq.desktop.small}) {
    display: none;
  }

  &:focus {
    outline: 1px solid ${colors.blue[600]};
  }

  .bars {
    align-items: center;
    display: grid;
    height: 24px;
    overflow: hidden;
    position: relative;
    width: 24px;
    transform: rotate(0);
    transition: transform 0.1s ease-in-out;

    .bar {
      background-color: ${colors.grey[300]};
      height: 2px;
      width: 100%;
      transform: translateX(0%);
      transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

      &--x {
        height: 100%;
        width: 2px;
        position: absolute;
        left: calc(50% - 2px);
        transform: scale(0);
        transition: transform 0.1s ease-in;
      }
    }
  }

  &.is-open {
    .bars {
      transform: rotate(45deg);
      transition: transform 0.1s ease-in-out;

      .bar {
        &:nth-child(1),
        &:nth-child(3) {
          background-color: ${colors.blue[600]};
          transition: all 0.1s ease-out;
        }

        &:nth-child(1) {
          transform: translateX(-150%);
        }

        &:nth-child(3) {
          transform: translateX(150%);
        }

        &--x {
          transform: scale(1);
          transform-origin: top;
          transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s;
        }
      }
    }
  }
`;

const clickHandler = ({ currentTarget }) => {
  currentTarget.classList.toggle('is-open');
  document
    .querySelector('nav[class*=StyledMobileMenu')
    .classList.toggle('is-open');
  document.querySelector('body').classList.toggle('menu-is-open');
};

const MobileMenuButton = () => (
  <StyledMobileMenuButton type="button" onClick={clickHandler}>
    <div className="bars">
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
      <div className="bar bar--x" />
    </div>
  </StyledMobileMenuButton>
);

export default MobileMenuButton;
