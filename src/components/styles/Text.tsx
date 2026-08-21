import React from 'react';
import styled from 'styled-components';
import { colors, fonts, mq, spacing } from './theme';

const StyledText = styled.p<{
  textStyle?: 'paragraph';
  marginBottomDesktop?: string;
}>`
  color: ${colors.grey[50]};
  font-family: ${fonts.family.sourceCodePro};
  line-height: ${spacing.s}rem;

  @media screen and (min-width: ${mq.mobile.large}) {
    line-height: ${(props) => (props.textStyle === 'paragraph' ? 1.7778 : 1.5)};
    max-width: 50rem;
  }

  @media screen and (min-width: ${mq.desktop.small}) {
    font-size: 1.125rem;
  }

  &:has(+ p) {
    margin-bottom: ${spacing.m}rem;

    @media screen and (min-width: ${mq.desktop.small}) {
      margin-bottom: ${(props) =>
        props.marginBottomDesktop
          ? props.marginBottomDesktop
          : `${spacing.l}rem`};
    }
  }
`;

type TextProps = React.PropsWithChildren & {
  textStyle?: 'paragraph';
  marginBottomDesktop?: string;
};

const Text: React.FC<TextProps> = ({
  textStyle,
  marginBottomDesktop,
  children,
}) => (
  <StyledText textStyle={textStyle} marginBottomDesktop={marginBottomDesktop}>
    {children}
  </StyledText>
);

export default Text;
