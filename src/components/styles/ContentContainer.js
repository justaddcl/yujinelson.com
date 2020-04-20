import styled from 'styled-components';
import theme from './theme';

const ContentContainer = styled.div`
  padding-left: ${theme.padding.mobile.medium};
  padding-right: ${theme.padding.mobile.medium};

  @media screen and (min-width: ${theme.mq.desktop.small}) {
    max-width: ${theme.sizes.desktop.maxWidth};
    margin: 0 auto;
  }
`;

export default ContentContainer;
