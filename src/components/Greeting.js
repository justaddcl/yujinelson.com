import React from 'react';
import styled from 'styled-components';
import { colors, fonts, spacing } from './styles/theme';

const StyledGreeting = styled.div`
  margin-bottom: ${spacing.m}rem;
  ruby {
    color: ${colors.grey[100]};
    font-family: ${fonts.family.japanese};
    font-size: 1.5rem;

    & > rt {
      color: ${colors.purple[500]};
      font-family: ${fonts.family.proximaNova};
    }
  }

  .translation {
    color: ${colors.grey[400]};
    font-family: ${fonts.family.sourceCodePro};
    margin-left: ${spacing.xxs}rem;
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
