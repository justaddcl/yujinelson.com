import styled from 'styled-components';
import { colors, fonts, mq, spacing } from './theme';

/**
 * TODO: create <Text> component that would include the style for paragraph
 * Currently, this violates the id-length eslint rule of < 2 characters
 */
const P = styled.p`
  color: ${colors.grey[50]};
  font-family: ${fonts.family.sourceCodePro};
  line-height: ${spacing.m}rem;

  @media screen and (min-width: ${mq.mobile.large}) {
    line-height: 32px;
    max-width: 50rem;
  }

  @media screen and (min-width: ${mq.desktop.small}) {
    font-size: 1.125rem;
  }

  &:not(:last-child) {
    margin-bottom: ${spacing.l}rem;
  }
`;

export default P;
