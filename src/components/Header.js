import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from './styles/theme';

const StyledHeader = styled.header`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 48px;

  @media screen and (min-width: ${theme.mq.desktop.small}) {
    height: 80px;
  }
`;

const StyledNav = styled.nav`
  justify-self: end;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;

    li {
      margin-left: 16px;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div>
      <Link to="/">Yuji Nelson</Link>
    </div>
    <StyledNav>
      <ul>
        <li>
          <Link to="/about">/about</Link>
        </li>
        <li>
          <Link to="/uses">/uses</Link>
        </li>
      </ul>
    </StyledNav>
  </StyledHeader>
);

export default Header;
