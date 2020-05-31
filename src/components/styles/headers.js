import styled from 'styled-components';
import { colors, mq, spacing } from './theme';

const H1 = styled.h1`
  color: ${colors.grey[50]};
  font-weight: 700;
  font-size: 2.25rem;
  margin-bottom: ${spacing.s}rem;

  &::after {
    background-color: ${colors.purple[500]};
    content: '';
    display: block;
    margin-top: ${spacing.xs}rem;
    height: 2px;
    width: ${spacing.m}rem;

    @media screen and (min-width: ${mq.desktop.small}) {
      width: ${spacing.xl}rem;
    }
  }
`;

const H2 = styled.h2`
  color: ${colors.grey[50]};
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: ${spacing.m}rem;

  &::after {
    background-color: ${colors.purple[500]};
    content: '';
    display: block;
    margin-top: ${spacing.xxs}rem;
    height: 2px;
    width: ${spacing.m}rem;

    @media screen and (min-width: ${mq.desktop.small}) {
      width: ${spacing.xl}rem;
    }
  }
`;

export { H1, H2 };
