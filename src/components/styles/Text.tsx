import styled from 'styled-components';
import { colors, fonts, mq, spacing } from './theme';

/**
 * TODO: create <Text> component that would include the style for paragraph
 * Currently, this violates the id-length eslint rule of < 2 characters
 */
const P = styled.p`
  color: ${colors.grey[50]};
  font-family: ${fonts.family.sourceCodePro};
  line-height: ${spacing.s}rem;

  @media screen and (min-width: ${mq.mobile.large}) {
    line-height: 1.5;
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

export default P;
