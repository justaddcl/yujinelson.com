import React from 'react';
import styled from 'styled-components';
import { colors, mq, spacing } from './styles/theme';
import { H1 } from './styles/headers';

const StyledHero = styled.section`
  ${(props) =>
    props.responsiveSplit &&
    `
    @media screen and (min-width: ${mq.mobile.large}) {
      display: grid;
      align-items: end;
      grid-template-columns: repeat(2, 1fr);
      column-gap: ${spacing.l}rem;
    }
  `}
  ${H1} {
    &::after {
      background-color: ${colors.purple[500]};
      content: '';
      display: block;
      margin-top: ${spacing.xs}rem;
      height: 2px;
      width: ${spacing.m}rem;

      @media screen and (min-width: ${mq.desktop.small}) {
        margin-top: ${spacing.m}rem;
        width: ${spacing.xl}rem;
      }
    }
  }

  .hero-image {
    margin-top: ${spacing.xl}rem;
  }
`;

const Hero = ({ children, responsiveSplit }) => (
  <StyledHero responsiveSplit={responsiveSplit}>{children}</StyledHero>
);

export default Hero;
