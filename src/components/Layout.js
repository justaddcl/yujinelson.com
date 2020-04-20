import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import GlobalStyles from './styles/GlobalStyles';
import 'normalize.css';
import ContentContainer from './styles/ContentContainer';
import theme from './styles/theme';

const LayoutContainer = styled(ContentContainer)`
  display: grid;
  grid-template-rows: 48px 1fr 32px;

  @media screen and (min-width: ${theme.mq.desktop.small}) {
    grid-template-rows: 80px 1fr 64px;
  }
`;

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
