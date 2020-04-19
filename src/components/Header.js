import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header>
    <span>
      <Link to="/">Yuji Nelson</Link>
    </span>
    <ul>
      <li>
        <Link to="/about">Aboot Me</Link>
      </li>
    </ul>
  </header>
);

export default Header;
