import React from 'react';
import styled from 'styled-components';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from './styles/GlobalStyles';
import ColorBar from './styles/ColorBar';

const PageSections = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const Layout = ({ children }) => (
  <>
    <Head />
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
