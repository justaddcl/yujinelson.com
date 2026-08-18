import styled from 'styled-components';
import { mq, spacing } from './theme';
import Container from './Container';

export type ContentContainerProps = {
  gap?: Exclude<keyof typeof spacing, 'basePx'>;
};

const ContentContainer = styled(Container)<ContentContainerProps>`
  padding-top: ${spacing.m}rem;
  padding-bottom: ${spacing.xxxl}rem;
  display: grid;
  row-gap: ${({ gap }) => (gap ? `${spacing[gap]}rem` : `${spacing.xxl}rem`)};

  @media screen and (min-width: ${mq.mobile.large}) {
    padding-left: ${spacing.l}rem;
    padding-right: ${spacing.l}rem;
  }

  @media screen and (min-width: ${mq.desktop.small}) {
    padding-top: ${spacing.huge}rem;
    padding-bottom: ${spacing.huge}rem;
    row-gap: ${({ gap }) =>
      gap ? `${spacing[gap]}rem` : `${spacing.xxxl}rem`};
    max-width: ${mq.desktop.small};
  }
`;

export default ContentContainer;
