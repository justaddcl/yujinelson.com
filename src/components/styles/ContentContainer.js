import styled from 'styled-components';
import theme, { mq, spacing } from './theme';
import Container from './Container';

const ContentContainer = styled(Container)`
  padding-top: ${spacing.xxxl}rem;
  padding-bottom: ${spacing.xxxl}rem;
  display: grid;
  row-gap: ${spacing.xxl}rem;

  @media screen and (min-width: ${mq.desktop.small}) {
    padding-top: ${spacing.huge}rem;
    padding-bottom: ${spacing.huge}rem;
    row-gap: ${spacing.xxxl}rem;
  }
`;

export default ContentContainer;
