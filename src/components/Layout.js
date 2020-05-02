import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import GlobalStyles from './styles/GlobalStyles';
import ColorBar from './styles/ColorBar';
import theme from './styles/theme';

const PageSections = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: calc(100vh - 4px);
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <ColorBar />
    <PageSections>
      <Header />
      <main>{children}</main>
      <Footer />
    </PageSections>
  </>
);

export default Layout;
