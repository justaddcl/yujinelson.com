import styled from 'styled-components';
import theme, { mq, spacing } from './theme';

const ContentContainer = styled.div`
  padding-left: ${spacing.s}rem;
  padding-right: ${spacing.s}rem;

  @media screen and (min-width: ${theme.mq.desktop.small}) {
    max-width: ${theme.sizes.desktop.maxWidth};
    margin: 0 auto;
  }
`;

export default ContentContainer;
