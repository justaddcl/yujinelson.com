import styled from 'styled-components';
import { colors, fonts, mq, spacing } from './theme';

const Text = styled.p`
  color: ${colors.grey[50]};
  font-family: ${fonts.family.sourceCodePro};
  line-height: ${spacing.s}rem;

  @media screen and (min-width: ${mq.mobile.large}) {
    line-height: 1.777778;
    max-width: 50rem;
  }

  @media screen and (min-width: ${mq.desktop.small}) {
    font-size: 1.125rem;
  }

  &:has(+ p) {
    margin-bottom: ${spacing.m}rem;

    @media screen and (min-width: ${mq.desktop.small}) {
      margin-bottom: ${spacing.l}rem;
    }
  }
`;

export default Text;
