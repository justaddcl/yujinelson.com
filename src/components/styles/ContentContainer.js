import styled from 'styled-components';
import theme, { mq, spacing } from './theme';
import Container from './Container';

const ContentContainer = styled(Container)`
  padding-top: ${spacing.xxxl}rem;
  padding-bottom: ${spacing.xxxl}rem;

  @media screen and (min-width: ${mq.desktop.small}) {
    max-width: ${theme.sizes.desktop.maxWidth};
    margin: 0 auto;
  }
`;

export default ContentContainer;
