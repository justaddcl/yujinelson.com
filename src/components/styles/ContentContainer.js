import styled from 'styled-components';
import theme, { padding } from './theme';

const ContentContainer = styled.div`
  padding-left: ${padding.mobile.small};
  padding-right: ${padding.mobile.small};

  @media screen and (min-width: ${theme.mq.desktop.small}) {
    max-width: ${theme.sizes.desktop.maxWidth};
    margin: 0 auto;
  }
`;

export default ContentContainer;
