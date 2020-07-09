import React from 'react';
import styled from 'styled-components';
import { colors, fonts, mq, spacing } from './styles/theme';

const StyledGreeting = styled.div`
  display: grid;
  grid-gap: ${spacing.base}rem;
  margin-bottom: ${spacing.m}rem;

  @media screen and (min-width: ${mq.mobile.small}) {
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  @media screen and (min-width: ${mq.mobile.large}) {
    grid-gap: ${spacing.m}rem;
    margin-bottom: ${spacing.l}rem;
  }

  ruby {
    color: ${colors.grey[200]};
    font-family: ${fonts.family.japanese};
    font-size: 1.5rem;

    @media screen and (min-width: ${mq.mobile.large}) {
      font-size: ${spacing.l}rem;
    }

    @media screen and (min-width: ${mq.desktop.small}) {
      font-size: ${spacing.xl}rem;
    }

    & > rt {
      color: ${colors.purple[500]};
      font-family: ${fonts.family.proximaNova};
      font-size: ${spacing.xs}rem;

      @media screen and (min-width: ${mq.desktop.small}) {
        font-size: ${spacing.base}rem;
      }
    }
  }

  .translation {
    color: ${colors.grey[400]};
    font-family: ${fonts.family.sourceCodePro};
  }
`;

const Greeting = () => {
  return (
    <StyledGreeting>
      <ruby>
        こ<rp>(</rp>
        <rt>ko</rt>
        <rp>)</rp>ん<rp>(</rp>
        <rt>n</rt>
        <rp>)</rp>に<rp>(</rp>
        <rt>ni</rt>
        <rp>)</rp>ち<rp>(</rp>
        <rt>chi</rt>
        <rp>)</rp>は<rp>(</rp>
        <rt>wa</rt>
        <rp>)</rp>!
      </ruby>
      <span className="translation">// means hello!</span>
    </StyledGreeting>
  );
};

export default Greeting;
