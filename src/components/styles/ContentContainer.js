import styled from 'styled-components';
import { mq, spacing } from './theme';
import Container from './Container';

const ContentContainer = styled(Container)`
  padding-top: ${spacing.xxxl}rem;
  padding-bottom: ${spacing.xxxl}rem;
  display: grid;
  row-gap: ${(props) =>
    props.gap ? `${spacing[props.gap]}rem` : `${spacing.xxl}rem`};

  @media screen and (min-width: ${mq.mobile.large}) {
    padding-left: ${spacing.l}rem;
    padding-right: ${spacing.l}rem;
  }

  @media screen and (min-width: ${mq.desktop.small}) {
    padding-top: ${spacing.huge}rem;
    padding-bottom: ${spacing.huge}rem;
    row-gap: ${spacing.xxxl}rem;
    max-width: ${mq.desktop.small};
  }
`;

export default ContentContainer;
