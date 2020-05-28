import styled from 'styled-components';
import theme, { mq, spacing } from './theme';
import Container from './Container';

const ContentContainer = styled(Container)`
  padding-top: ${spacing.xxxl}rem;
  padding-bottom: ${spacing.xxxl}rem;

  @media screen and (min-width: ${mq.desktop.small}) {
    padding-top: ${spacing.huge}rem;
    padding-bottom: ${spacing.huge}rem;
  }
`;

export default ContentContainer;
