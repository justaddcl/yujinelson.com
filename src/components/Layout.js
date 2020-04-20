import React from 'react';

import Header from './Header';
import Footer from './Footer';
import 'normalize.css';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
